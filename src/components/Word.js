import React from 'react'

const Word = ({ selectedWord, correctLetters, wordFormat }) => {
    console.log("passed to word function:" + wordFormat + " " + selectedWord);
    return (
      <div class="flex justify-center h-48 p-6">
        {wordFormat.split('').map((i,letter) => {
      
          return (
            <span className="letter" key={i} class={(i===" ") ? 'flex-none rounded-l border-2 border-[#4D9078] w-5 h-5 px-1 mx-1 py-7 text-xl' : 'flex-none rounded-l border-2 border-[#4D9078] border-b-[#161616]  w-5 h-5 px-1 mx-1 py-7 text-xl'}>
              
            </span>
          )
        })}
      </div>
    )
  }
  
  export default Word

