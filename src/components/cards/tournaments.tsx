import React from 'react'

interface TournamentsCards {
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

const TournamentsCards: React.FC<TournamentsCards> = ({ WarImage, title, Calender, date, vee4, Trophy, BtnTournament, BtnDetails, amount, months, play,  }) => {
  return (
    <div className="w-[30%] bg-[#1C1C1C] mt-[2%]">
    <img src={WarImage} alt="war-image" />
    <div className="w-full flex flex-col gap-[2%] p-[3%]">
      <p className="text-2xl text-white">{title}</p>
      <div className="text-[#7E7F7F] flex gap-11 pt-[3%]">
        <div className="flex flex-col gap-2">
          <div className="flex gap-[2px]">
            <img src={Calender} alt="calendar" />
            <p>{date}</p>
          </div>
          <div className="flex items-center gap-[1%]">
            <img src={Calender} alt="4v4 mode" />
            <p>{vee4}</p>
          </div>
          
          <div className="w-[75%] flex bg-[#242424] pl-[4%] py-1 rounded-[30px]">
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
          alt="Tournament button"
          className="cursor-pointer"
        />
        <img
          src={BtnDetails}
          alt="Details button"
          className="cursor-pointer"
        />
      </div>
    </div>
  </div>
  
  )
}

export default TournamentsCards
