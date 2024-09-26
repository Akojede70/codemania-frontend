import React, { useState } from 'react';
import Layout from '../components/layout/layout';
import {
  BtnGo,
  BtnPlaying,
  BtnProfile,
  Person,
  BtnDetails,
  BtnTournament,
  Calender,
  Filter,
  Sort,
  Trophy,
  WarImage,
} from '../assets/images-icon';
import GameCard from '../components/cards/game-cards';
import TournamentsCards from '../components/cards/tournaments';
import { TitleText } from '../components/helment';

const tournamentData = [
  { date: "10 Feb 2023", title: "Call of Duty", amount: "₦10,000" },
  { date: "10 Feb 2023", title: "Call of Duty", amount: "₦20,000" },
  { date: "10 Feb 2023", title: "Call of Duty", amount: "₦30,000" },
  { date: "10 Feb 2023", title: "Call of Duty", amount: "₦40,000" },
  { date: "10 Feb 2023", title: "Call of Duty", amount: "₦50,000" },
  { date: "10 Feb 2023", title: "Call of Duty", amount: "₦60,000" },
];

const Tournaments = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleToggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleFilterSelection = (filter:any) => {
    setSelectedFilter(filter);
    setIsDropdownVisible(false); // Close dropdown after selection
  };

  const isTournamentVisible = (amount:any) => {
    const numericAmount = parseInt(amount.replace(/[₦,]/g, ''));
    if (selectedFilter === "All") return true;
    if (selectedFilter === "₦10,000 - ₦20,000") {
      return numericAmount >= 10000 && numericAmount <= 20000;
    }
    if (selectedFilter === "₦21,000 - ₦60,000") {
      return numericAmount >= 21000 && numericAmount <= 60000;
    }
    return false;
  };

  return (
    <Layout>
      <div>
      <TitleText title="Gamer" />
        {/* Profile Setup Section */}
        <div className='w-[95.4%] bg-[#1C1C1C] mt-2 md:mt-0'>
          <div className='flex gap-[21.5%]'>
            <div className='pl-[2%] '>
              <p className='text-sm md:text-3xl font-bold text-[#ffffff] pt-[3%]'>Setup your profile</p>
              <p className='text-[#7E7F7F] pt-[0.3%]'>Complete your information to get access to tournaments and other premium features</p>
              <img src={BtnProfile} alt='profile' className='w-[60%] md:w-auto pt-[2%] pb-[3%] hover:scale-110 transition-transform duration-300 cursor-pointer'/>
            </div>
            <div className='pt-[1.5%]'>
              <img src={Person} alt='person' className='h-[80%] hover:scale-110 transition-transform duration-300 hidden md:block'/> 
            </div>
          </div>
        </div>

        {/* Game Cards Section */}
        <div className='flex gap-[5.5%]'>
          <GameCard header='Continue Playing' text1='start or resume tournaments you' text2='have registered for' smIcon={BtnPlaying} bgIcon={Person} />
          <GameCard header='Quick match' text1='Create a tournament and invite' text2='friends to play' smIcon={BtnGo} bgIcon={Person} />
        </div>

        {/* Tournament Text Content */}
        <div className='py-3 md:py-0 w-[95.8%] flex justify-between lg:gap-[55%] mt-[2%] md:mt-[4%] lg:mt-[2%]'>
          <div>
            <p className='text-xs md:text-2xl font-bold text-[#ffffff] pt-[10%]'>Tournaments</p>
          </div>
          <div className='flex gap-[4%] pt-[1.4%]'>
            <img src={Sort} alt='sort' className='w-[90px] h-[27px] ml-3 md:ml-0 md:w-[165px] md:h-full'/>
            <div className="relative">
              <img 
                src={Filter} 
                alt="filter" 
                className="w-[100px] h-[27px] md:w-[165px] md:h-full cursor-pointer hover:scale-110 transition-transform duration-300" 
                onClick={handleToggleDropdown} 
              />
              {isDropdownVisible && (
                <div className="absolute bg-[#1C1C1C] text-xs md:text-[18.5px] lg:text-xl text-[#ffffff] shadow-md rounded mt-2 w-24 md:w-40">
                  <ul className="list-none p-2">
                    <li 
                      className="py-1 md:py-2 px-1 md:px-4 hover:bg-gray-500 cursor-pointer" 
                      onClick={() => handleFilterSelection("All")}
                    >
                      All
                    </li>
                    <li 
                      className="py-1 md:py-2 px-1 md:px-4 hover:bg-gray-500 cursor-pointer" 
                      onClick={() => handleFilterSelection("₦10,000 - ₦20,000")}
                    >
                      ₦10,000 - ₦20,000
                    </li>
                    <li 
                      className="py-1 md:py-2 px-1 md:px-4 hover:bg-gray-500 cursor-pointer" 
                      onClick={() => handleFilterSelection("₦21,000 - ₦60,000")}
                    >
                      ₦21,000 - ₦60,000
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tournament Cards */}
        <div className='w-[95.5%]  mb-[22%] lg:mb-[8%] flex flex-wrap gap-[5%]'>
          {tournamentData.filter(tournament => isTournamentVisible(tournament.amount)).map((tournament, index) => (
            <TournamentsCards 
              key={index}
              date={tournament.date} 
              title={tournament.title} 
              amount={tournament.amount} 
              vee4='4v4' 
              months="10/48" 
              play="Free-to-play" 
              BtnTournament={BtnTournament} 
              Calender={Calender} 
              Trophy={Trophy} 
              WarImage={WarImage} 
              BtnDetails={BtnDetails} 
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Tournaments;
