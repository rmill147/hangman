import React from 'react'

const WrongLetters = ({ wrongLetters }) => {

  return (
    <div className="wrong-letters-container">
      <div class=" rounded bg-[#D8D2D6]/25 bg-blend-saturation p-3 w-40 text-center">
        <p class="text-[#161616]">Wrong Letters:</p>
        {wrongLetters.length > 0 && 
          <p class="text-[#161616]"></p>
        }
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
      </div>
    </div>
  )
}

export default WrongLetters