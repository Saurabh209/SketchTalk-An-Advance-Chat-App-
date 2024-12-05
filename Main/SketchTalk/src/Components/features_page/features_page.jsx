import React from "react";

function Features_page() {
  return (
    <div className="flex-1 h-full px-[50px]">
      <div className="flex-1 h-full">
        <section className="flex flex-col justify-center items-center w-full h-[100px] bg-[#f2f2f2] rounded-lg border-2 border-[#323232] gap-1">
          <h2 className="text-2xl font-bold text-[#323232]">
            Welcome to <b className="text-[#0a0a0a] text-5xl">SketchTalk</b>
          </h2>
          <h5 className="text-[#666]">
            | Where conversations meets creativity |
          </h5>
        </section>

        <section className="flex w-full h-[300px] bg-[#f2f2f2] rounded-lg border-2 border-[#323232]">
          <div className="flex flex-col justify-center items-center w-1/2 h-full border-2 border-[#ff2b2b]">
            <h2 className="text-2xl font-bold text-[#323232]">Text Chat</h2>
          </div>
          <div className="w-1/2 h-full border-2 border-[#ff2b2b]">
            <img className="w-full h-full" src="./src/assets/images/TextChat.svg" alt="TextChat" />
          </div>
        </section>

        <section className="flex flex-col w-full h-[200px] bg-[#f2f2f2] rounded-lg border-2 border-[#323232]">
          <div className="w-[350px] h-full flex justify-center items-center border-2 border-[#323232]">
            <img src="./src/assets/images/line_left.png" alt="left_line" />
          </div>
        </section>

        <section className="flex flex-col w-full h-[200px] bg-[#f2f2f2] rounded-lg border-2 border-[#323232]"></section>
        <section className="flex flex-col w-full h-[200px] bg-[#f2f2f2] rounded-lg border-2 border-[#323232]"></section>
        <section className="flex flex-col w-full h-[200px] bg-[#f2f2f2] rounded-lg border-2 border-[#323232]"></section>
        <section className="w-full h-[200px] bg-[#f2f2f2] rounded-lg border-2 border-[#323232]"></section>
        <section className="w-full h-[200px] bg-[#f2f2f2] rounded-lg border-2 border-[#323232]"></section>
        <section className="w-full h-[200px] bg-[#f2f2f2] rounded-lg border-2 border-[#323232]"></section>
      </div>
    </div>
  );
}

export default Features_page;
