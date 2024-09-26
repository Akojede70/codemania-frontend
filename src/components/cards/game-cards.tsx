import React from 'react';

interface GameCardProps {
  header: string;
  text1: string;
  text2: string;
  smIcon: string;
  bgIcon: string;
}

const GameCard: React.FC<GameCardProps> = ({ header, text1, text2, smIcon, bgIcon }) => {
  return (
    <div className='w-[45%] bg-[#1C1C1C] mt-[5%] md:mt-[2%]'>
      <div className='w-full flex gap-[16%] pl-[2%]'>
        <div className='pl-[2%]'>
          <p className='text-xs md:text-2xl font-bold text-[#ffffff] pt-[4%]'>{header}</p>
          <div className='text-[#7E7F7F] py-[0.3%]'>
            <p>{text1}</p>
            <p>{text2}</p>
          </div>
          <img
            src={smIcon}
            alt='profile'
            className='pt-[2%] pb-[3%] cursor-pointer hover:scale-110 transition-transform duration-300'
          />
        </div>
        <div className='pt-[1.5%]'>
          <img
            src={bgIcon}
            alt='person'
            className='h-[80%] hover:scale-110 transition-transform duration-300 hidden md:block'
          />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
