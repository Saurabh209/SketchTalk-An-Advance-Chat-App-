import React from "react";


function Features_page() {
  return (
    <div className="flex flex-col">
      <div className="flex-1  px-[130px]">
        <section className="flex flex-col justify-center items-center w-full h-[140px] bg-[#ffffff]">
          <h2 className="text-2xl font-bold text-[#323232]">
            Welcome to <b className="text-[#0a0a0a] text-5xl">SketchTalk</b>
          </h2>
          <h5 className="text-[#666]">
            | Where conversations meets creativity |
          </h5>
        </section>

        <section className="flex justify-center items-center w-full h-[100px] bg-[#ffffff]]">
          <h1 className="text-3xl font-semibold font-mono text-[#323232]">
            We Offer
          </h1>
        </section>

        <hr className="w-full h-[1px] bg-[#323232] mb-5"></hr>

        <section className="flex w-full h-[330px] bg-[#eeeeee] border-2 border-[#ffffff] rounded-lg">
          <div className="flex flex-col  justify-center items-center w-1/2 h-full border-2 border-[#ffffff] overflow-hidden">
            <p className="text-3xl font-semibold font-mono text-[#323232]">
              Deliver thoughts with
              <b className="text-3xl font-semibold font-mono text-[#45dd3a]">
                {" "}
                Text Chat
              </b>
            </p>

            <p className="text-[#666] text-center mt-4 px-6">
              Connect instantly with friends through our seamless text chat
              feature. Share messages, emojis, and stay connected in real-time.
            </p>
          </div>
          <div className="w-1/2 h-full border-2 border-[#ffffff]">
            <img
              className="w-full h-full"
              src="./src/assets/images/TextChat.svg"
              alt="TextChat"
            />
          </div>
        </section>

        <section className="flex flex-col justify-center items-center w-full h-[200px] bg-[#ffffff]">
          <div className="w-full h-full flex justify-center items-center ">
            <img
              className="h-full"
              src="./src/assets/images/line_left.png"
              alt="left_line"
            />
          </div>
        </section>

        <section className="flex w-full h-[330px] bg-[#ffffff]">
          <div className="w-1/2 h-full border-2 border-[#ffffff]">
            <video
              className="w-full h-full "
              autoPlay="true"
              loop
              playsInline
              muted
            >
              <source
                src="./src/assets/videos/VideoChatAnimated.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2 h-full border-2 border-[#ffffff]">
            <p className="text-3xl font-semibold font-mono text-[#323232]">
              Connect with
              <b className="text-3xl font-semibold font-mono text-[#BA68C8]">
                {" "}
                Video Chat
              </b>
            </p>

            <p className="text-[#666] text-center mt-4 px-6">
              Experience face-to-face conversations. Perfect for team
              discussions, virtual meetings, and staying connected with Team
              members. Share screens, collaborate in real-time, and make your
              remote interactions more professional and engaging.
            </p>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center w-full h-[200px] bg-[#ffffff]">
          <div className="w-[500px] h-full flex justify-center items-center ">
            <img
              className="h-full"
              src="./src/assets/images/line_right.png"
              alt="right_line"
            />
          </div>
        </section>

        <section className="flex w-full h-[330px] bg-[#ffffff]]">
          <div className="flex flex-col justify-center items-center w-1/2 h-full border-2 border-[#ffffff]">
            <p className="text-3xl font-semibold font-mono text-[#323232]">
              Make Plans with
              <b className="text-3xl font-semibold font-mono text-[#407BFF]">
                {" "}
                Audio Chat
              </b>
            </p>

            <p className="text-[#666] text-center mt-4 px-6">
              Stay connected through crystal-clear audio conversations. Perfect
              for quick discussions, brainstorming sessions, and collaborative
              planning. Experience seamless voice quality that makes remote
              conversations feel natural and productive.
            </p>
          </div>
          <div className="w-1/2 h-full border-2 border-[#ffffff]">
            <video
              className="w-full h-full "
              autoPlay="true"
              loop
              playsInline
              muted
            >
              <source
                src="./src/assets/videos/AudioChatAnimated.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center w-full h-[200px] bg-[#ffffff]">
          <div className="w-[500px] h-full flex justify-center items-center ">
            <img
              className="h-full"
              src="./src/assets/images/line_left.png"
              alt="left_line"
            />
          </div>
        </section>

        <section className="flex w-full h-[330px] bg-[#ffffff]]">
          <div className="w-1/2 h-full border-2 border-[#ffffff]">
            <video
              className="w-full h-full "
              autoPlay="true"
              loop
              playsInline
              muted
            >
              <source
                src="./src/assets/videos/VisualData.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2 h-full border-2 border-[#ffffff]">
            <p className="text-3xl font-semibold font-mono text-[#323232]">
              User Stats based
              <b className="text-3xl font-semibold font-mono text-[#BA68C8]">
                {" "}
                Achivements
              </b>
            </p>

            <p className="text-[#666] text-center mt-4 px-6">
              Earn exclusive achievements and titles as you engage with the
              platform. Track your progress, unlock rewards, and showcase your
              dedication through personalized badges and recognition based on
              your activity and contributions.
            </p>
          </div>
        </section>

        <section className="flex  justify-center items-center w-full h-[200px] bg-[#ffffff]">
          <div className="w-[500px] h-full flex justify-center items-center ">
            <img
              className="h-full"
              src="./src/assets/images/line_right.png"
              alt="middle_line"
            />
          </div>
        </section>

        <section className="flex flex-col  items-center w-full h-[610px] bg-[#ffffff]]">
          <div className="flex flex-col justify-center items-center w-full h-[300px] border-2 border-[#ffffff] rounded-lg bg-[#ffffff]">
            <p className="text-3xl font-semibold font-mono text-[#323232]">
              And best of all
              <b className="text-3xl font-semibold font-mono text-[#d35598]">
                {" "}
                Collaborative Whiteboard
              </b>
            </p>

            <p className="text-[#666] text-center mt-4 px-6">
              Experience seamless collaboration with our interactive whiteboard
              feature. Sketch ideas, brainstorm concepts, and communicate
              visually in real-time. Perfect for project discussions, design
              reviews, and creative sessions. Draw, annotate, and iterate
              together while video chatting for an immersive collaborative
              experience. The whiteboard makes complex ideas simple to explain
              and helps teams stay aligned through visual communication.
            </p>
          </div>
          <div className="w-[500px] h-[500px] border-2 border-[#ffffff]">
            <video
              className="w-full h-full "
              autoPlay="true"
              loop
              playsInline
              muted
            >
              <source src="./src/assets/videos/collab.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
      </div>
      <navbar className="flex justify-center items-center w-full h-[600px] bg-[#adadad] px-[70px]">
        <h3 className="text-3xl font-semibold font-mono text-[#323232]">
          Footer
        </h3>
      </navbar>
    </div>
  );
}

export default Features_page;
