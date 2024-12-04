import React from 'react'

function Main_Button() {
    return (
        <button className="p-[0.1em] w-[13em] h-[4.2em] bg-[#212121] border-[0.08em] border-white rounded-[0.3em] text-xs cursor-pointer">
        <span className="relative flex justify-center items-center -bottom-[0.4em] w-[8.25em] h-[2.5em] bg-[#212121] rounded-[0.2em] text-2xl text-white border-[0.08em] border-white shadow-[0_0.4em_0.1em_0.019em_#fff] 
        hover:transition-all hover:translate-y-[0.4em] hover:shadow-[0_0_0_0_#fff]
        transition-all duration-1000">
          Hover Me
        </span>
      </button>
    )
}

export default Main_Button
