
import React, { useState } from "react";

const InitialPopup = ({showModal,setShowModal}) => {

 
    
    return (
      <>
        {showModal ? (
          <>
            <div class="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none bg-[#FCFCFC]/50 w-full">
              <div class="relative  h-1/3 w-1/3 my-6 mx-auto max-w-3xl">
                <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div class="flex-col items-start justify-between p-5 mx-2 border-b border-[#161616] rounded-t text-[#161616]">
                    <h3 class="text-3xl text-center font=semibold">Hello! Ready to Guess a Word or Phrase?</h3>
                  </div>
                  <div class="relative p-6 flex-auto">
                  <form class="max-w-sm mx-auto">
                    <label for="countries" class="block mb-2 text-sm font-medium text-[#161616] ">Select a topic</label>
                    <select id="countries" class="bg-[#FCFCFC] border text-[#161616] text-sm rounded focus:border-[#61B136] block w-full p-2.5">
                      <option>US States</option>
                      <option>Opt 2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </form>
                  </div>
                  <div class="flex justify-center items-center  justify-end p-6 border-t border-solid border-[#161616] mx-2 rounded-b">
                  <a onClick={() => setShowModal(false)} class=" px-5 py-1 border relative rounded group overflow-hidden font-small bg-none text-[#161616] inline-block">
                    <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#61B136] group-hover:h-full opacity-90"></span>
                    <span class="relative group-hover:text-[#FCFCFC] cursor-pointer">Start Game</span>
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
