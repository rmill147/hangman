
import React, { useState } from "react";

const InitialPopup = ({showModal,setShowModal,startGame}) => {


  
    
    return (
      <>
        {showModal ? (
          <>
            <div class="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none bg-[#FCFCFC]/50 w-full">
              <div class="relative  h-1/3 w-1/3 my-6 mx-auto max-w-3xl">
                <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#FCFCFC] outline-none focus:outline-none">
                  <div class="flex-col items-start justify-between p-5 mx-2 border-[#161616] rounded-t text-[#161616]">
                    <h3 class="text-3xl text-center font=semibold">Hello! Ready to Guess a Word or Phrase?</h3>
                  </div>
                  <div class="flex justify-center items-center  justify-end p-6 mx-2 rounded-b">

                  <a onClick={function(event){ startGame(); setShowModal(false);}} class="rounded-md px-3.5 py-0 m-1 overflow-hidden relative group cursor-pointer border font-medium border-[#161616] text-[#161616] text-white">
                    <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#161616] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span class="relative text-[#161616] transition duration-300 group-hover:text-white ease">Play</span>
                  </a>

                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
    );
}

export default InitialPopup
