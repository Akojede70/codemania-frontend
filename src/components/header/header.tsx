import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { Avatart,
    Badge,
    Bell,
    Logo,
    Search,
    Coins, } from '../../assets/images-icon/';

function Header(): JSX.Element {
    return (
        <div className="flex items-center py-2 px-6 w-[125%] right-[25%] h-[9%] bg-[#121212] relative">
            <div className="flex-shrink-0 ml-[5.6%]">
                <img src={Logo} alt="logo" />
            </div>

            <div className="relative w-[29.7%] ml-[10%] ">
  {/* Input field */}
  <input 
    type="text" 
    placeholder="Search tournament, player name, or player tag" 
    className="pl-10 pr-4 py-2 w-full bg-[#1C1C1C] focus:outline-[#1C1C1C] focus:border-[#242424] text-[11px] text-[#7E7F7F]"
  />

  {/* Search icon */}
  <span className="absolute top-[50%] left-3 transform -translate-y-1/2">
    <img src={Search} alt="logo" className='w-[24px]'/>
  </span>
</div>


            <div className="absolute flex left-[76%] w-[30%] items-center">
            <div className="flex items-center justify-center bg-[#1C1C1C] rounded-full h-10 w-10">
  <img src={Bell} alt="notification" className="h-5 w-5" />
</div>

<div className="px-2 flex gap-1">
                    <img src={Coins} alt="coin" />
                    <p className='text-[#E5E4E4]'>20,000</p>
                </div>

                <div className="px-1 h-[14%] w-[14%]">
                    <img src={Avatart} alt="dp" />
                </div>

               <div className='flex flex-col'>

               <div className="w-full px-2 text-[#ffffff]">
                    <span className="font-medium text-[12px] ">Akoiola Olalekan</span>
                </div>

                <div className="px-2">
                    <img src={Badge} alt="dropdown" />
                </div>

               </div>
               
            </div>
        </div>
    );
}

export default Header;
