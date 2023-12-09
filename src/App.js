import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import InitialPopup from './components/InitialPopup';
import ReactDOM from 'react-dom/client'

import './App.css';


//variables
var id;
var topic;
var selectedWord;
var wordFormat;

var usedLetters;
var numMisses;
var gameStatus;



function App() {
  let [playable, setPlayable] = useState(true);
  let [correctLetters, setCorrectLetters] = useState([]);
  let [wrongLetters, setWrongLetters] = useState([]);

  //TEST
  let [showModal, setShowModal] = useState(true);

  //....
  var gameIdDisp;
  var a;
  var topicDisp;
  var b = "";
  var wordContainer;
  var d;
  var wrongLettersContainer;
  var e;
  var figureContainer;
  var f;
  var finalPopupContainer; 
  var g;
  var notificationContainer;
  var h;
  var showNotification = false;  
  var usedLettersPrev = "";

 
  function startGame() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://ec2-3-145-183-150.us-east-2.compute.amazonaws.com:8080/startGame', true);
    xhr.send('Rachel');
    const data = xhr.responseText

    xhr.onload = function() {
      let test = JSON.parse(xhr.responseText);
      console.log(test);
      console.log("id" + test.gameId);
      console.log("length" + test.wordFormat);
      console.log("topic" + test.topic);

      selectedWord = test.wordFormat.length;

      wordFormat = test.wordFormat;
    
      id = test.gameId;
  
      topic = test.topic;

      console.log("word length:" + selectedWord);

      gameIdDisp = ReactDOM.createRoot(document.getElementById('gameIdDisp'));
      a = <p>Game ID: {id}</p>;
      gameIdDisp.render(a);
    
      topicDisp = ReactDOM.createRoot(document.getElementById('topicDisp'));
      b = <p>Topic: {topic}</p>;
      topicDisp.render(b);

      wordContainer = ReactDOM.createRoot(document.getElementById('wordContainer'));
      d = <Word selectedWord={selectedWord} correctLetters={correctLetters} wordFormat={wordFormat} usedLetters={usedLetters} />;
      wordContainer.render(d);

      wrongLettersContainer = ReactDOM.createRoot(document.getElementById('wrongLettersContainer'));
      e = <WrongLetters wrongLetters={usedLetters} />;
      wrongLettersContainer.render(e);

      figureContainer = ReactDOM.createRoot(document.getElementById('figureContainer'));
      f = <Figure wrongLetters={wrongLetters} numMisses={0} />;
      figureContainer.render(f);

      notificationContainer = ReactDOM.createRoot(document.getElementById('notificationContainer'));
      h = <Notification showNotification={false}/>;
      notificationContainer.render(h);

      finalPopupContainer = ReactDOM.createRoot(document.getElementById('finalPopupContainer'));
      g = <Popup setPlayable={setPlayable} playAgain={playAgain} numMisses={numMisses} gameStatus={gameStatus}/>;
      finalPopupContainer.render(g);

      

    
    };
   
    xhr.onerror = function() { // only triggers if the request couldn't be made at all
      alert(`Network Error`);
    };



  }

  //TODO: Handles guess letter and updates variables as needed
  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        const xhr2 = new XMLHttpRequest();
        const body = {"gameId": id, "letter": key};
        
        xhr2.open('POST', 'http://ec2-3-145-183-150.us-east-2.compute.amazonaws.com:8080/guessLetter');

        xhr2.setRequestHeader('Content-Type', 'application/json');
        
      
        xhr2.send(JSON.stringify(body));
        xhr2.onload = function() {
          console.log("onload works")
          let response2 = JSON.parse(xhr2.responseText);
          console.log("response2:");
          console.log(response2);
          wordFormat = response2.wordFormat;
          console.log("Word format" + wordFormat);
          usedLetters = response2.usedLetters;
          console.log("Used letters" + usedLetters);
          numMisses = response2.numMisses;
          console.log("Num misses" + numMisses);
          gameStatus = response2.gameStatus;
          console.log("Game status" + gameStatus);

          wordContainer = ReactDOM.createRoot(document.getElementById('wordContainer'));
          d = <Word selectedWord={selectedWord} correctLetters={correctLetters} wordFormat={wordFormat} usedLetters={usedLetters} />;
          wordContainer.render(d);

          wrongLettersContainer = ReactDOM.createRoot(document.getElementById('wrongLettersContainer'));
          e = <WrongLetters wrongLetters={usedLetters} />;
          wrongLettersContainer.render(e);

          figureContainer = ReactDOM.createRoot(document.getElementById('figureContainer'));
          f = <Figure wrongLetters={wrongLetters} numMisses={numMisses} />;
          figureContainer.render(f);

          //if letter was already pressed, show notification
          if(usedLettersPrev.includes(key.toUpperCase())){
            showNotification = true
            console.log("letter already used!")
            notificationContainer = ReactDOM.createRoot(document.getElementById('notificationContainer'));
            h = <Notification showNotification={showNotification}/>;
            notificationContainer.render(h);
          } else {
            showNotification = false; 
            notificationContainer = ReactDOM.createRoot(document.getElementById('notificationContainer'));
            h = <Notification showNotification={showNotification}/>;
            notificationContainer.render(h);

          }


          usedLettersPrev = usedLetters;


          //finishing conditions
          if(gameStatus != "IN_PROGRESS") {
            console.log("game finished!")
            finalPopupContainer = ReactDOM.createRoot(document.getElementById('finalPopupContainer'));
            g = <Popup setPlayable={setPlayable} playAgain={playAgain} numMisses={numMisses} gameStatus={gameStatus}/>;
            finalPopupContainer.render(g);

          }
      

         }
      }
    }
    window.addEventListener('keydown', handleKeydown);


    return () => window.removeEventListener('keydown', handleKeydown);
  }, [wordFormat,usedLetters,numMisses,gameStatus]);

  //TODO 
  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    window.location.reload();
  }


  return (
    <>
      <div class="h-screen bg-[#4D9078] overflow-hidden">  

        <div id="finalPopupContainer"></div>    
        
        <InitialPopup showModal={showModal}  setShowModal={setShowModal} startGame={startGame} />
        <Header setPlayable={setPlayable} playAgain={playAgain} setShowModal={setShowModal}/>
        
        <div class="flex flex-col h-full justify-center items-center">
          
          <div id="gameIdDisp"></div>
          <div id="topicDisp"></div>


          <div id="figureContainer"></div>
      
          <div id="wordContainer"></div> 

          <div class>
            <div id="wrongLettersContainer"></div>
            
          </div>
          <div id="notificationContainer" class="flex justify-center p-4"></div>
        </div>
        
        
        
      </div>
    </>
  );
}

export default App;
