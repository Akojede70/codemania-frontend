import React from 'react'

interface DetailsCardProps {
  Back: string;
  BigImg: string;
  Golden: string;
  Calender: string;
  BtnTournament: string;
  DetailsLeaderboard: string;
  DetailsFitures: string;
  amount: string;
  header: string;
  description: string;
  date: string;
  play: string;
  vee4: string;
  months: string;
  tournamentInformation: string;
  }

const DetailsCard: React.FC<DetailsCardProps> = ({ header, amount, Back, description, BigImg, date, months, play, Golden, tournamentInformation,  vee4, Calender, BtnTournament, DetailsLeaderboard, DetailsFitures }) => {
  return (
    <div>
    <img src={Back} alt='back' className='mb-4'/>
    <img src={BigImg} alt='big-img' className='w-[95.5%]'/>
    <p className='pt-[2%] text-[#ffffff] text-2xl font-bold'> {header}</p>
    <div className="w-[9%] mt-3 flex gap-1 text-[#7E7F7F] bg-[#242424] pl-[1%] py-1 rounded-[30px]">
    <img src={Golden} alt="trophy" className='h-[20px] pt-[5px]'/>
    <p>{amount}</p>
    </div>
    <p className='text-[#7E7F7F] pt-[1%] w-[95.5%]'> {description}  </p>

    {/* icon and text */}
    <div className='flex gap-16 mt-[1%] text-[#7E7F7F]'>
    <div className="flex gap-[2px]">
    <img src={Calender} alt="free-to-play" />
    <p>{date}</p>
  </div>
  <div className="flex gap-[2px]">
    <img src={Calender} alt="free-to-play" />
    <p>{play}</p>
  </div>
  <div className="flex gap-[2px]">
    <img src={Calender} alt="free-to-play" />
    <p>{vee4}</p>
  </div>
  <div className="flex gap-[2px]">
    <img src={Calender} alt="free-to-play" />
    <p>{months}</p>
  </div>
    </div>

    <div className='mt-[1.5%]' >
        <img src={BtnTournament} alt='tournament' className='w-52'/>
    </div>
    <div>
    <p className='text-[#ffffff] text-2xl font-bold py-[2%]'> {tournamentInformation}</p>
  <div className='flex gap-3'>
      <img src={DetailsLeaderboard} alt="leaderboard"/>
      <img src={DetailsFitures} alt="fixtures"/>
  </div>
    </div>
  </div>
  )
}

export default DetailsCard
