import React from 'react'
import Popup from './Popup'



const Header = ({setPlayable, playAgain}) => {
  return (
    <div class="mx-auto grid grid-cols-3 h-12 bg-[#E1EEC7] p-3 border-t-0 border-l-0 border-r-0 border-b border-[#161616] drop-shadow-sm">
        <div class="w-full">
          <h1 class="pl-5">Hangman Game!</h1>
        </div>
        <div class="w-full">

        </div>
        
        <div class="w-full flex justify-end space-x-9 pr-5">
            <button onClick={playAgain} class="flex-1 hover:bg-[#FCFCFC] duration-300 ease-in-out m-0 p-0">Play Again</button>
            <button class="bg-blue-500 duration-300 ease-in-out hover:bg-blue-700 text-white px-4 rounded-full">Exit</button>
        </div>

        
    
    </div>
  )
}

export default Header
