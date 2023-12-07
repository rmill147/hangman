import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <div class="h-10 w-1/3 bg-[#D8D2D6] rounded p-2 m-1 drop-shadow-md justify-items-center overflow-hidden">
        <p class="m-0 text-[#161616] text-center">You already tried this letter. Try a new letter instead!</p>
      </div>
      
    </div>

  )
}

export default Notification