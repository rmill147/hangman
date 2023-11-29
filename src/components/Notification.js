import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <div class="bg-[#61B136] rounded p-2 m-1">
        <p class="m-0 text-[#161616]">You already tried this letter. Try a new letter instead!</p>
      </div>
      
    </div>
  )
}

export default Notification