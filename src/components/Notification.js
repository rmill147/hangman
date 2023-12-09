import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    <div class={(showNotification == true)? 'visible flex h-10 w-full bg-[#D8D2D6] rounded p-2 m-1 drop-shadow-md justify-items-center' : 'hidden'}>

        <p class="m-0 text-[#161616] text-center">You already tried this letter. Try a new letter instead!</p>
      </div>
      

  )
}

export default Notification