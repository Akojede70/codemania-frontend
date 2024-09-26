import React from 'react'
import { useNavigate } from 'react-router-dom';
interface TournamentsCard {
    WarImage: string;
    title: string;
    Calender: string;
    Trophy: string;
    BtnTournament: string;
    BtnDetails: string;
    date: string;
    vee4: string;
    amount: string;
    months: string;
    play: string;
  }

const TournamentsCards: React.FC<TournamentsCard> = ({ WarImage, title, Calender, date, vee4, Trophy, BtnTournament, BtnDetails, amount, months, play,  }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/details")
    window.scrollTo(0,0)
  }
  return (
    <div className="w-full md:w-[47.5%] lg:w-[30%] bg-[#1C1C1C] mb-[6%] md:mb-0 md:mt-[4%] lg:mt-[3%]">
    <img src={WarImage} alt="war-image" />
    <div className="w-full flex flex-col gap-[2%] p-[3%]">
      <p className="text-2xl text-white">{title}</p>
      <div className="text-[#7E7F7F] text-sm flex gap-11 pt-[3%]">
        <div className="flex flex-col gap-2">
          <div className="flex gap-[2px]">
            <img src={Calender} alt="calendar" />
            <p>{date}</p>
          </div>
          <div className="flex items-center gap-[1%]">
            <img src={Calender} alt="4v4-mode" />
            <p>{vee4}</p>
          </div>
          
          <div className="w-[85%] flex bg-[#242424] pl-[4%] py-1 rounded-[30px]">
            <img src={Trophy} alt="trophy" />
            <p>{amount}</p>
          </div>
        </div>
  
      
        <div className="flex flex-col gap-3 pl-">
          
          <div className="flex gap-[2px]">
            <img src={Calender} alt="free-to-play" />
            <p>{play}</p>
          </div>
          
          <div className="flex gap-[2px]">
            <img src={Calender} alt="participants" />
            <p>{months}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 pt-[4%]">
        <img
          src={BtnTournament}
          alt="Tournament-button"
        />
        <img
          src={BtnDetails}
          alt="Details-button"
          className="cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={handleClick}
        />
      </div>
    </div>
  </div>
  
  )
}

export default TournamentsCards
