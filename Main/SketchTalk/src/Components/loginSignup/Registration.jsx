import React from 'react'
import { Link } from 'react-router-dom';

function Registration() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#a4a4a4]">
        <form className="p-5 bg-[#d3d3d3] flex flex-col items-start justify-center gap-5 
          border-2 border-[#323232] rounded-md shadow-[4px_4px_#323232] w-[350px]">
        <p className="font-bold text-xl text-[#323232] mb-[15px] flex flex-col">
            Create Account,
            <span className="font-bold text-[#666] font-semibold text-[17px]">
              register to continue
            </span>
          </p>
          
          <input 
            type="text" 
            placeholder="Username" 
            name="username" 
            className="w-[305px] h-10 rounded-md border-2 border-[#323232] 
              bg-white shadow-[4px_4px_#323232] text-[15px] font-semibold 
              text-[#323232] p-[5px_10px] outline-none transition-all 
              focus:border-[#2d8cf0] focus:shadow-[4px_4px_#2d8cf0]"
          />
          
          
          
          <input 
            type="email" 
            placeholder="Email" 
            name="email" 
            className="w-[305px] h-10 rounded-md border-2 border-[#323232] 
              bg-white shadow-[4px_4px_#323232] text-[15px] font-semibold 
              text-[#323232] p-[5px_10px] outline-none transition-all 
              focus:border-[#2d8cf0] focus:shadow-[4px_4px_#2d8cf0]"
          />
          
          <input 
            type="password" 
            placeholder="Password" 
            name="password" 
            className="w-[305px] h-10 rounded-md border-2 border-[#323232] 
              bg-white shadow-[4px_4px_#323232] text-[15px] font-semibold 
              text-[#323232] p-[5px_10px] outline-none transition-all 
              focus:border-[#2d8cf0] focus:shadow-[4px_4px_#2d8cf0] 
              tracking-[0.125em] placeholder:tracking-normal"
          />
          
          <input 
            type="password" 
            placeholder="Confirm Password" 
            name="confirmPassword" 
            className="w-[305px] h-10 rounded-md border-2 border-[#323232] 
              bg-white shadow-[4px_4px_#323232] text-[15px] font-semibold 
              text-[#323232] p-[5px_10px] outline-none transition-all 
              focus:border-[#2d8cf0] focus:shadow-[4px_4px_#2d8cf0] 
              tracking-[0.125em] placeholder:tracking-normal"
          />
          
          <button 
            className="flex justify-center items-center gap-[5px] 
              w-[305px] h-10 rounded-md border-2 border-[#323232] 
              bg-white shadow-[4px_4px_#323232] text-[16px] font-semibold 
              text-[#323232] cursor-pointer relative overflow-hidden z-[1] 
              transition-all duration-250 
              hover:text-[#e8e8e8] 
              before:content-[''] before:absolute before:top-0 before:left-0 
              before:h-full before:w-0 before:bg-[#212121] before:z-[-1] 
              before:shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)] 
              before:transition-all before:duration-250 
              hover:before:w-full"
          >
            Register
            <svg 
                className="w-6 h-6" 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m6 17 5-5-5-5"></path>
              <path d="m13 17 5-5-5-5"></path>
            </svg>
          </button>
          
          <div className="flex justify-between w-full px-[10px]">
            <div className="w-140px] text-left">
              <Link 
                to="/login" 
                className="text-[#666] no-underline text-[14px] 
                  font-bold transition-colors duration-250 
                  hover:text-[#2d8cf0]"
              >
                Already Registered?
              </Link>
            </div>
            <div className="w-[115px] text-right">
              <Link 
                to="#" 
                className="text-[#666] no-underline text-[14px] font-bold 
                   transition-colors duration-250 
                  hover:text-[#2d8cf0]"
              >
                Need Help?
              </Link>
            </div>
          </div>
        </form>
      </div>
    )
}

export default Registration
