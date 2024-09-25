import React from 'react'
import Layout from '../components/layout/layout'
import { BtnGo, BtnPlaying, BtnProfile, Person } from '../assets/images-icon'
import GameCard from '../components/cards/game-cards'

const Tournaments = () => {
  return (
    <Layout>
 <div>
  <div className='w-[95.4%] bg-[#1C1C1C]'>
    <div className='flex gap-[21.5%]'>
    <div className='pl-[2%]'>
    <p className='text-3xl font-bold text-[#ffffff] pt-[3%]'>Setup your profile</p>
    <p className='text-[#7E7F7F] pt-[0.3%]'>Complete your information to get access to tournaments and other premium features</p>
    <img src={BtnProfile} alt='profile' className='pt-[2%] pb-[3%] hover:scale-110 transition-transform duration-300 cursor-pointer'/>
    </div>
   <div className='pt-[1.5%]'>
    <img src={Person} alt='person' className='h-[80%] hover:scale-110 transition-transform duration-300'/> 
   </div>
   </div>
  </div>

{/*Game Cards  */}
    <div className='flex gap-[5.5%]'>
       <GameCard header='Continue Playing'text1='start or resume tournaments you'text2='have registered for'smIcon={BtnPlaying}bgIcon={Person} />
       <GameCard header='Quick match' text1='Create a tournament and ivite' text2='friends to play' smIcon={BtnGo}bgIcon={Person} />
      </div>

       
     </div>
    </Layout>
    
  )
}

export default Tournaments
