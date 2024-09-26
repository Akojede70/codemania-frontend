import React from 'react'
import Layout from '../components/layout/layout'
import { Back, BigImg, BtnTournament, Calender, FixturesLeaderboard, FixturesBigImage, FixturesImg, Golden} from '../assets/images-icon'
import DetailsCard from '../components/game-information/game-details'
import { useNavigate } from 'react-router-dom'

const Fixtures = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/details")
    window.scrollTo(0,0)
  }
  return (
 <Layout>
    <div className='mb-[12%] '>
    <div onClick={handleClick} >
            <img src={Back} alt='back' className='mb-4 cursor-pointer hover:scale-110 transition-transform duration-300'/>
            </div>
            <DetailsCard  vee4={"4v4"} play={"Free-to-play"} amount={"₦10,000"} header={"Call of duty"}
             BigImg={BigImg} Golden={Golden}
            Calender={Calender} BtnTournament={BtnTournament} DetailsLeaderboard={FixturesLeaderboard} DetailsFitures={FixturesImg}
            description={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione alias dolorum, blanditiis minima dignissimos quisquam itaque quidem ut reprehenderit, nesciunt culpa id quibusdam saepe? Recusandae ipsa eius perspiciatis quidem distinctio quasi atque quibusdam unde ea accusantium vel, expedita maiores provident facere rem libero ex consectetur minima nulla sit quis inventore dolores! Explicabo, aliquid facere. Placeat, ea? Doloremque fugit, perspiciatis corporis"}
            date={"10 Feb 2023"} months={"10/48"} tournamentInformation={"Tournament informtion"}/>

            <div className='mt-[3%] w-[94.4%] mb-[32%] md:mb-[22%] lg:mb-0'>
                <img src={FixturesBigImage} alt='fix-img'/>
            </div>
          </div>
 </Layout>
  )
}

export default Fixtures
