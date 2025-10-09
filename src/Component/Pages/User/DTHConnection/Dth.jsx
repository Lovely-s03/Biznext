import React from 'react'
import DTHConnection from './DTHConnection'
import DTHPlansSection from './DTHPlansSection'
import TransactionSection from './TransactionSection'


const Dth = () => {
  return (
    <div>
    <DTHConnection/>
     <DTHPlansSection/>
     <TransactionSection/>
    </div>
  )
}

export default Dth