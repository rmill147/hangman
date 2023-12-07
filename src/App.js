import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show, checkWin } from './helpers/helpers';
import InitialPopup from './components/InitialPopup';

import './App.css';

const words = ['test'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  //TEST
  const [showModal, setShowModal] = useState(true);
 
  

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <div class="h-screen bg-[#4D9078] overflow-hidden">      
        
        <InitialPopup showModal={showModal}  setShowModal={setShowModal} />
        <Header setPlayable={setPlayable} playAgain={playAgain} setShowModal={setShowModal}/>
        
        <div class="flex flex-col h-full justify-center items-center">
          
          <div>
            
          </div>
          <div>
            <Figure wrongLetters={wrongLetters} />
          </div>
          
          <div>
            <Word selectedWord={selectedWord} correctLetters={correctLetters} />
          </div> 
          <div>
            <div>
              <WrongLetters wrongLetters={wrongLetters} />
            </div>
          </div>
        </div>
        <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
        <Notification showNotification={showNotification} />
      </div>
    </>
  );
}

export default App;
