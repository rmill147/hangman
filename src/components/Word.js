import React from 'react'
//className="letter" key={i} class={(i===" ") ? 'flex-none rounded-l border-2 border-[#4D9078] w-5 h-5 px-1 mx-1 py-7 text-xl' : 'flex-none rounded-l border-2 border-[#4D9078] border-b-[#161616]  w-5 h-5 px-1 mx-1 py-7 text-xl'}
const Word = ({ selectedWord, correctLetters, wordFormat,usedLetters }) => {
    console.log("passed to word function:" + wordFormat + " " + selectedWord);
    return (
      <div class="flex justify-center h-48 p-6">
          <div class="tracking-widest text-2xl">{wordFormat}</div>
      </div>
    )
  }
  
  export default Word

