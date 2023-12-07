import React from 'react'
import Popup from './Popup'



const Header = ({setPlayable, playAgain, setShowModal}) => {
  return (
    <div class="mx-auto grid grid-cols-3 h-12 p-3 border-t-0 border-l-0 border-r-0 border-b-0 border-[#161616] drop-shadow-md">
        <div class="w-full">
          <h1 class="pl-5 text-[#161616]">Hangman Game!</h1>
        </div>
        <div class="w-full">

        </div>
        
        <div class="w-full flex justify-end space-x-9 pr-5">  
          

            <a onClick={function(event){ playAgain(); setShowModal(true);}} class="rounded-md px-3.5 py-0 m-1 overflow-hidden relative group cursor-pointer border font-medium border-[#161616] text-[#161616] text-white">
              <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#161616] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span class="relative text-[#161616] transition duration-300 group-hover:text-white ease">Play Again</span>
            </a>

            <a onClick={function(event){ playAgain(); setShowModal(true);}} class="rounded-md px-3.5 py-0 m-1 overflow-hidden relative group cursor-pointer border font-medium border-[#161616] text-[#161616] text-white">
              <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#161616] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span class="relative text-[#161616] transition duration-300 group-hover:text-white ease">Exit</span>
            </a>
        </div>

        
    
    </div>
  )
}

export default Header

