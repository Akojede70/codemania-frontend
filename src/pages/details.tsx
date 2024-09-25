import React from 'react'
import Layout from '../components/layout/layout'
import {
    DetailsFitures,
    DetailsLeaderboard,
    Golden,
    Back, BigImg,
    Calender, BtnTournament,
    } from '../assets/images-icon'
import Fixtures from './fixtures'
import DetailsCard from '../components/game-information/game-details'
import StickyHeadTable from '../components/leaderboard-table/table'
const Details = () => {
  return (
    <Layout>
          <div className='mb-[3%]'>
            <DetailsCard  vee4={"4v4"} play={"Free-to-play"} amount={"₦10,000"} header={"Call of duty"}
            Back={Back} BigImg={BigImg} Golden={Golden}
            Calender={Calender} BtnTournament={BtnTournament} DetailsLeaderboard={DetailsLeaderboard} DetailsFitures={DetailsFitures}
            description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione alias dolorum, blanditiis minima dignissimos quisquam itaque quidem ut reprehenderit, nesciunt culpa id quibusdam saepe? Recusandae ipsa eius perspiciatis quidem distinctio quasi atque quibusdam unde ea accusantium vel, expedita maiores provident facere rem libero ex consectetur minima nulla sit quis inventore dolores! Explicabo, aliquid facere. Placeat, ea? Doloremque fugit, perspiciatis corporis"}
            date={"10 Feb 2023"} months={"10/48"} tournamentInformation={"Tournament informtion"}/>
          </div>

          <div className='w-[95.5%] mb-[10%]'>
          <StickyHeadTable/>
          </div>
    
    </Layout>
  )
}

export default Details
