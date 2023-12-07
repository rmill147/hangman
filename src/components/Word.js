import React from 'react'

const Word = ({ selectedWord, correctLetters }) => {

    return (
      <div class="flex justify-center h-48 p-6">

        {selectedWord.split('').map((letter, i) => {
          return (
            <span className="letter" key={i} class=" flex-none rounded-l border-4 border-[#4D9078] border-b-[#161616]  w-5 h-5 px-5 mx-5 py-7 text-xl">
              {correctLetters.includes(letter) ? letter : ''}
            </span>
          )
        })}
      </div>
    )
  }
  
  export default Word