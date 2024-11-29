import React from "react";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
    
      {/* Navbar */}
      <nav className="bg-white py-4 px-8 flex justify-between items-center border-b-2 border-[#323232] shadow-md">
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
          <a
            href="#"
            className="text-[#323232] font-semibold py-2 px-4 rounded-md hover:text-[#2d8cf0] hover:bg-[#2d8cf0]/10 transition-all duration-250"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#323232] font-semibold py-2 px-4 rounded-md hover:text-[#2d8cf0] hover:bg-[#2d8cf0]/10 transition-all duration-250"
          >
            Features
          </a>
          <a
            href="#"
            className="text-[#323232] font-semibold py-2 px-4 rounded-md hover:text-[#2d8cf0] hover:bg-[#2d8cf0]/10 transition-all duration-250"
          >
            Explore
          </a>
          <a
            href="#"
            className="text-[#323232] font-semibold py-2 px-4 rounded-md hover:text-[#2d8cf0] hover:bg-[#2d8cf0]/10 transition-all duration-250"
          >
            About
          </a>
        </div>

        <div className="flex space-x-4">
          <button
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

      {/* Main Content Area */}
      <main className="flex-1 p-8">
     
     
      
      
      </main>

      {/* Footer */}
      <footer className="bg-[#d3d3d3]  px-8 border-t-2 border-[#323232] mt-auto">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#323232] mb-4">
              SketchTalk
            </h3>
            <p className="text-[#666]">
              Creative conversations start here. Share, sketch, and connect with
              people around the world.
            </p>
            <div className="flex space-x-4 pt-2">
              {/* Social Icons */}
              <a href="#" className="text-[#323232] hover:text-blue-600">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* ... other social icons ... */}
            </div>
          </div>

          {/* ... footer sections ... */}
        </div>

        <div className="border-t border-[#323232] mt-8 py-6 text-center d">
          <p className="text-sm text-[#323232]">
            &copy; 2024 SketchTalk. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-xs text-[#323232] hover:text-[#2d8cf0]">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-[#323232] hover:text-[#2d8cf0]">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-[#323232] hover:text-[#2d8cf0]">
              Cookie Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
