import React from "react";

function Footer() {
  return (
    <div className="sticky bottom-0 w-full">

    <footer className="bg-[#d3d3d3]  px-8 border-t-2 border-[#323232] mt-auto">
      <div className="max-w-[1200px] ">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#323232] mb-4">SketchTalk</h3>
          <p className="text-[#666]">
            Creative conversations start here. Share, sketch, and connect with
            people around the world.
          </p>
        </div>

        {/* ... footer sections ... */}
      </div>

      <div className="border-t border-[#323232] mt-8 py-6 px-1  text-center d">
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

export default Footer;
