import React, { useState } from 'react';

const Login_2 = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className="max-w-[700px] m-[30px] bg-[#001925] p-[30px] border-l-[5px] border-l-[#caf438]" 
         style={{
           clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)'
         }}>
      <div className="form">
        <span className="block text-white text-2xl font-extrabold mb-5">Campus Ambassador Program</span>
        <span className="block text-[#d3f35f] text-base font-semibold mb-5">Become a Campus Ambassador</span>
        
        <input 
          type="text" 
          placeholder="Phone Number" 
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full bg-[#002733] border-none outline-none p-[10px] mb-5 text-[#87a4b6] font-bold 
                     transition-all duration-200 ease-in-out border-l border-l-transparent 
                     focus:border-l-[5px] focus:border-l-[#caf438]"
        />
        
        <span className="block text-white text-base font-semibold mb-5">
          Join our ambassador program and get exclusive perks!
        </span>
        
        <div className="flex gap-[10px]">
          <div 
            className="flex-[0_0_70%] bg-[#caf438] p-[10px] text-[#001925] text-center font-bold 
                       border border-transparent transition-all duration-200 ease-in-out 
                       hover:bg-transparent hover:border-[#ff7a01] hover:text-[#caf438] cursor-pointer"
          >
            Become an Ambassador
          </div>
          
          <div 
            className="flex-[0_0_30%] drop-shadow-[1px_1px_0px_#ff7a01] cursor-pointer"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)'
            }}
          >
            <div 
              className="relative text-center p-[10px] text-[#caf438] font-bold bg-[#001925] 
                         transition-all duration-200 ease-in-out 
                         hover:bg-[#caf438] hover:text-[#001925]"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)'
              }}
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login_2;