import React from 'react'
import Layout from '../components/layout/layout'
import {
    DetailsFitures,
    DetailsLeaderboard,
    Golden,
    Back, BigImg,
    Calender, BtnTournament,
    } from '../assets/images-icon'
import DetailsCard from '../components/game-information/game-details'
import StickyHeadTable from '../components/leaderboard-table/table'
import { useNavigate } from 'react-router-dom'
const Details = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/")
    window.scrollTo(0,0)
  }
  return (
    <Layout>
          <div className='mb-[3%]'>
            <div onClick={handleClick} >
            <img src={Back} alt='back' className='mb-4 cursor-pointer hover:scale-110 transition-transform duration-300'/>
            </div>
            <DetailsCard  vee4={"4v4"} play={"Free-to-play"} amount={"₦10,000"} header={"Call of duty"}
             BigImg={BigImg} Golden={Golden}
            Calender={Calender} BtnTournament={BtnTournament} DetailsLeaderboard={DetailsLeaderboard} DetailsFitures={DetailsFitures}
            description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione alias dolorum, blanditiis minima dignissimos quisquam itaque quidem ut reprehenderit, nesciunt culpa id quibusdam saepe? Recusandae ipsa eius perspiciatis quidem distinctio quasi atque quibusdam unde ea accusantium vel, expedita maiores provident facere rem libero ex consectetur minima nulla sit quis inventore dolores! Explicabo, aliquid facere. Placeat, ea? Doloremque fugit, perspiciatis corporis"}
            date={"10 Feb 2023"} months={"10/48"} tournamentInformation={"Tournament informtion"}/>
          </div>

          <div className='w-[275px] md:w-[570px] lg:w-[95.5%] mb-[50%] md:mb-[20%] lg:mb-[10%]'>
          <StickyHeadTable/>
          </div>
    
    </Layout>
  )
}

export default Details
