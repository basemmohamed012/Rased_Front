import React from 'react'
import StateData from './StateData.jsx'
import BudgetSection from './BudgetSection.jsx'
import  AreaChart  from './AreaChart.jsx'

import Piecharts from './PieCharts.jsx'
import TransactionsTableEx from './TransactionsTableEx.jsx'
const FisrtTap = () => {
  return (
    <div className='space-y-10 '>
      <StateData />
      <BudgetSection />
      <div className='flex gap-6'>
        <AreaChart />
        <Piecharts />
      </div>
      <TransactionsTableEx />
    </div>
  )
}

export default FisrtTap
