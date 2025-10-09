import React from 'react'
import { FaBus } from 'react-icons/fa'
import BusBookingSection from './BusBookingSection'
import TransactionSection from '../DTHConnection/TransactionSection'
const Travel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto  mt-[55px] ">
         <div className="flex items-center gap-3 p-4 bg-white border-gray-300 ">
           <FaBus className="text-2xl text-gray-700" />
           <h2 className="text-lg md:text-xl font-semibold text-gray-800">
             Travel
           </h2>
           <div className="w-10 border-b-2 border-[#000080] ml-2"></div>
         </div>
             <BusBookingSection/>
              <TransactionSection/>
       </div>
  )
}

export default Travel