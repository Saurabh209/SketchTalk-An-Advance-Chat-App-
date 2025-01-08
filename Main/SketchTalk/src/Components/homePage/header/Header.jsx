import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link ,NavLink } from 'react-router-dom';
function Header() {

  const navigate = useNavigate();
  const Navigator = ()=>{
    navigate("/login");
  }

    return (
        <nav className=" py-4 px-8 flex justify-between items-center border-b-2 border-[#323232] shadow-md sticky top-0 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <svg
            className="w-8 h-8 text-[#323232]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
            <path d="M2 2l7.586 7.586"></path>
            <circle cx="11" cy="11" r="2"></circle>
          </svg>
          <span className="text-2xl font-bold text-[#323232]">SketchTalk</span>
        </div>

        <div className="flex space-x-8">
          <NavLink
                to="/"
            className={({isActive})=>isActive?"text-[#2d8cf0] font-semibold py-2 px-4 rounded-md hover:bg-[#2d8cf0]/10  duration-250  decoration-blue-500  bg-[#2d8cf0]/10 transition-all duration-250":"text-[#323232] font-semibold py-2 px-4 rounded-md hover:text-[#2d8cf0]"}
          >
            Home 
          </NavLink>
          <NavLink
            to="/features"
            className={({isActive})=>isActive?"text-[#2d8cf0] font-semibold py-2 px-4 rounded-md  hover:bg-[#2d8cf0]/10 duration-250  decoration-blue-500  bg-[#2d8cf0]/10 transition-all duration-250":"text-[#323232] font-semibold py-2 px-4 rounded-md hover:text-[#2d8cf0]"}
          >
            Features
          </NavLink>
          <NavLink
            to="/explore"
            className={({isActive})=>isActive?"text-[#2d8cf0] font-semibold py-2 px-4 rounded-md  hover:bg-[#2d8cf0]/10  duration-250  decoration-blue-500  bg-[#2d8cf0]/10 transition-all duration-250":"text-[#323232] font-semibold py-2 px-4 rounded-md hover:text-[#2d8cf0]"}
          >
            Explore
          </NavLink>
          <NavLink
            to="/about"
            className={({isActive})=>isActive?"text-[#2d8cf0] font-semibold py-2 px-4 rounded-md hover:bg-[#2d8cf0]/10  duration-250  decoration-blue-500  bg-[#2d8cf0]/10 transition-all duration-250":"text-[#323232] font-semibold py-2 px-4 rounded-md hover:text-[#2d8cf0]"}
          >
            About
          </NavLink>
        </div>

        <div className="flex space-x-4">
          <button onClick={()=>{Navigator()}}
            className="flex items-center space-x-2 px-4 py-2 border-2 border-[#323232] rounded-md text-[#323232] font-semibold 
              hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform duration-250 
              shadow-[4px_4px_#323232] hover:shadow-[6px_6px_#323232]"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Login
          </button>
          
        </div>
      </nav>
    )
}

export default Header
