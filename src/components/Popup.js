import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'Congratulations, You won!';
    playable = false;
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'Unfortunately, you lost....';
    finalMessageRevealWord = `Answer: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div>
      <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
        <div class="h-screen w-screen bg-[#FCFCFC]/75 flex items-center justify-center">
        <div className="popup" class="flex-col bg-[#61B136] text-center p-6 rounded text-[#FCFCFC] h-1/3 w-1/3 text-2xl drop-shadow-md" >
        <div class="mt-12">
          <div class="p-4 border-b">
            <h2 class="text-[#FCFCFC] m-auto ">{finalMessage}</h2>
            <h3 class="text-[#FCFCFC] m-auto ">{finalMessageRevealWord}</h3>
          </div>
          <div class="p-4">
            <a onClick={playAgain} class="px-5 py-1 relative border rounded group overflow-hidden font-small bg-none text-[#FCFCFC] inline-block">
              <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#FCFCFC] group-hover:h-full opacity-90"></span>
              <span class="relative group-hover:text-[#161616] border-[#161616] cursor-pointer">Play Again</span>
            </a>
          </div>
        </div>
        
        
      </div>
    </div>
    </div>

        </div>
      
    
  )
}

export default Popup