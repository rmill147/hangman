import React from 'react'
import WrongLetters from './WrongLetters'

const Figure = ({wrongLetters}) => {
  const errors = wrongLetters.length;

  return (
    <div class="flex justify-center py-4">
        
      <svg height="250" width="200" class="bg-[#FCFCFC]/50">
        
        {/* <!-- Rod --> */}
        <line x1="58" y1="20" x2="152" y2="20" style={{'stroke':'black','stroke-width': '4'}}/>
        <line x1="150" y1="20" x2="150" y2="50" style={{'stroke':'black','stroke-width': '4'}} />
        <line x1="60" y1="20" x2="60" y2="230" style={{'stroke':'black','stroke-width': '4'}}/>
        <line x1="20" y1="230" x2="100" y2="230" style={{'stroke':'black','stroke-width': '4'}}/>

        {/* <!-- Head --> */}
        {errors > 0 && <circle cx="150" cy="70" r="20" class="figure-part" />}
        {/* <!-- Body --> */}`````````````````````````````````tg`54w```````2aq5612; mkj`
        {errors > 1 && <line x1="150" y1="90" x2="150" y2="150" class="figure-part" style={{'stroke':'black','stroke-width': '4'}}/>}
        {/* <!-- Arms --> */}
        {errors > 2 && < line x1="150" y1="120" x2="130" y2="100" class="figure-part" style={{'stroke':'black','stroke-width': '4'}}/>}
        {errors > 3 && <line x1="150" y1="120" x2="170" y2="100" class="figure-part" style={{'stroke':'black','stroke-width': '4'}}/>}
        {/* <!-- Legs --> */}
        {errors > 4 && <line x1="150" y1="150" x2="130" y2="180" class="figure-part" style={{'stroke':'black','stroke-width': '4'}}/>}
        {errors > 5 && <line x1="150" y1="150" x2="170" y2="180" class="figure-part" style={{'stroke':'black','stroke-width': '4'}}/>}
      </svg>
    </div>
  )
}

export default Figure