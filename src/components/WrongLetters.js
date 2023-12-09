import React from 'react'

const WrongLetters = ({ wrongLetters }) => {

  return (
    <div className="wrong-letters-container">
      <div class=" rounded bg-[#D8D2D6]/25 bg-blend-saturation p-3 text-center">
        <p class="text-[#161616]">Used Letters:</p>
        <div class="tracking-widest text-2xl">{wrongLetters}</div>
      </div>
    </div>
  )
}

export default WrongLetters