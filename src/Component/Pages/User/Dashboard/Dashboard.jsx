import React from 'react'
import GreetingCard from './GreetingCard'
import ServicesSection from './ServicesSection'
import DashboardStats from './DashboardStats'
import RewardsSection from './RewardsSection'
import PromoLeaderboardSection from './PromoLeaderboardSection'
import GrowthAnalysis from './GrowthAnalysis'

const Dashboard = () => {
  return (
    <div className='overflow-x-hidden'>
        <GreetingCard/>
        <ServicesSection/>
        <DashboardStats/>
        <RewardsSection/>
        <PromoLeaderboardSection/>
        <GrowthAnalysis/>
    </div>
  )
}

export default Dashboard