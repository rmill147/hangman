import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show, checkWin } from './helpers/helpers';
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
  let [showNotification, setShowNotification] = useState(false);

  //TEST
  let [showModal, setShowModal] = useState(true);

  //....

 
  function startGame() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://ec2-3-145-183-150.us-east-2.compute.amazonaws.com:8080/startGame', true);
    xhr.send('Rachel');
    const data = xhr.responseText

    xhr.onload = function() {
      alert(`Loaded: ${xhr.status} ${xhr.response}`);
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

      const gameIdDisp = ReactDOM.createRoot(document.getElementById('gameIdDisp'));
      const a = <p>Game ID: {id}</p>;
      gameIdDisp.render(a);
    
      const topicDisp = ReactDOM.createRoot(document.getElementById('topicDisp'));
      const b = <p>Topic: {topic}</p>;
      topicDisp.render(b);

      const wordContainer = ReactDOM.createRoot(document.getElementById('wordContainer'));
      const d = <Word selectedWord={selectedWord} correctLetters={correctLetters} wordFormat={wordFormat} />;
      wordContainer.render(d);

      

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
        const body = {"gameId": 86, "letter": "c"};
        
        xhr2.open('POST', 'http://ec2-3-145-183-150.us-east-2.compute.amazonaws.com:8080/guessLetter');

        xhr2.setRequestHeader('Content-Type', 'application/json');
        
      
        xhr2.send(JSON.stringify(body));
        xhr2.onload = function() {
          console.log("onload works")
          alert(`Loaded: ${xhr2.status} ${xhr2.response}`);
          let response2 = xhr2.response;
          console.log("response2:");
          console.log(response2);
          // wordFormat = response2.wordFormat;
          // usedLetters = response2.usedLetters;
          // numMisses = response2.numMisses;
          // gameStatus = response2.gameStatus;

         }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters=0, wrongLetters=0, playable=true]);

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
        
        <InitialPopup showModal={showModal}  setShowModal={setShowModal} startGame={startGame} />
        <Header setPlayable={setPlayable} playAgain={playAgain} setShowModal={setShowModal}/>
        
        <div class="flex flex-col h-full justify-center items-center">
          
          <div id="gameIdDisp"></div>
          <div id="topicDisp"></div>


          <div>
            <Figure wrongLetters={wrongLetters} />
          </div>
          
          <div id="wordContainer">
            
          </div> 
          <div>
            <div>
              <WrongLetters wrongLetters={wrongLetters} />
            </div>
          </div>
        </div>
        
        <Notification showNotification={showNotification} />
      </div>
    </>
  );
}

export default App;
