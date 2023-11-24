import React from 'react'

const Word = ({ selectedWord, correctLetters }) => {

    return (
      <div class="flex justify-center bg-[#E1EEC7] h-48 p-6">

        {selectedWord.split('').map((letter, i) => {
          return (
            <span className="letter" key={i} class=" flex-none border-solid border-2 border-sky-500 w-5 h-5 p-5 m-5 ">
              {correctLetters.includes(letter) ? letter : ''}
            </span>
          )
        })}
      </div>
    )
  }
  
  export default Word