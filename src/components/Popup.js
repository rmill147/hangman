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
        <div className="popup" class="flex-col bg-[#D8D2D6] text-center p-6 rounded text-[#161616] h-1/3 w-1/3 text-2xl drop-shadow-md overflow-hidden" >
        <div class="mt-12">
          <div class="p-4">
            <h2 class="text-[#161616] m-auto ">{finalMessage}</h2>
            <h3 class="text-[#161616] m-auto ">{finalMessageRevealWord}</h3>
          </div>
          <div class="flex p-4 overflow-hidden justify-center">
            <a onClick={playAgain} class="rounded-md px-3.5 py-0 m-1 relative group cursor-pointer border font-medium border-[#161616] text-[#161616] text-white overflow-hidden">
              <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#161616] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span class="relative text-[#161616] transition duration-300 group-hover:text-white ease">Play Again</span>
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