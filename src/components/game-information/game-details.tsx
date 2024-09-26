import React from 'react'
import { useNavigate } from 'react-router-dom';
interface DetailsCardProps {
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

const DetailsCard: React.FC<DetailsCardProps> = ({ header, amount, description, BigImg, date, months, play, Golden, tournamentInformation,  vee4, Calender, BtnTournament, DetailsLeaderboard, DetailsFitures }) => {
  const navigate = useNavigate()
  const handleClick = (path:string) => {
    navigate(path)
  }
  return (
    <div>
    
    <img src={BigImg} alt='big-img' className='w-[275px] md:w-[570px] lg:w-[95.5%]'/>
    <p className='pt-[2%] text-[#ffffff] text-xl md:text-2xl font-bold'> {header}</p>
    <div className="w-[90px] lg:w-[9%] mt-3 flex gap-1 text-[#7E7F7F] bg-[#242424] pl-[1%] py-1 rounded-[30px]">
    <img src={Golden} alt="trophy" className='h-[20px] pt-[5px]'/>
    <p>{amount}</p>
    </div>
    <p className='text-[#7E7F7F] pt-[4%] md:pt-[1%] w-[275px] md:w-[570px] lg:w-[95.5%] text-[16px]'> {description}  </p>

    {/* icon and text */}
    <div className='space-y-[5px] md:space-y-0  md:flex gap-16 mt-[5%] lg:mt-[5%] text-[#7E7F7F]'>
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

    <div className='mt-[6%] lg:mt-[1.5%]' >
        <img src={BtnTournament} alt='tournament' className='w-52'/>
    </div>
    <div>
    <p className='text-[#ffffff] text-sm md:text-2xl font-bold py-[4%] lg:py-[2%]'> {tournamentInformation}</p>
  <div className='flex gap-3 mb-6 lg:mb-0'>
      <img src={DetailsLeaderboard} alt="leaderboard" onClick={() => handleClick("/details")} className='md:w-[190px] lg:w-auto md:h-[55px] lg:h-auto cursor-pointer hover:scale-110 transition-transform duration-300'/>
      <img src={DetailsFitures} alt="fixtures" onClick={() => handleClick("/fixtures")} className=' md:w-[190px] lg:w-auto md:h-[55px] lg:h-auto cursor-pointer hover:scale-110 transition-transform duration-300'/>
  </div>
    </div>
  </div>
  )
}

export default DetailsCard
