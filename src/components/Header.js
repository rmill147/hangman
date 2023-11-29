import React from 'react'
import Popup from './Popup'



const Header = ({setPlayable, playAgain, setShowModal}) => {
  return (
    <div class="mx-auto grid grid-cols-3 h-12 bg-[#E1EEC7] p-3 border-t-0 border-l-0 border-r-0 border-b border-[#161616] drop-shadow-sm">
        <div class="w-full">
          <h1 class="pl-5 text-[#161616]">Hangman Game!</h1>
        </div>
        <div class="w-full">

        </div>
        
        <div class="w-full flex justify-end space-x-9 pr-5">  
            <a onClick={function(event){ playAgain(); setShowModal(true);}} class="px-5 py-1 relative rounded group overflow-hidden font-small bg-none text-[#161616] inline-block">
              <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#61B136] group-hover:h-full opacity-90"></span>
              <span class="relative group-hover:text-[#FCFCFC] cursor-pointer">Play Again</span>
            </a>
            <a onClick={function(event){ playAgain(); setShowModal(true);}} class="px-5 py-1 relative rounded group overflow-hidden font-small bg-none text-[#161616] inline-block">
              <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#61B136] group-hover:h-full opacity-90"></span>
              <span class="relative group-hover:text-[#FCFCFC] cursor-pointer w-full">Exit</span>
            </a>
        </div>

        
    
    </div>
  )
}

export default Header

