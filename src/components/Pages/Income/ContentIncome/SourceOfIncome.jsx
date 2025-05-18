import React from 'react'
import IncomeOverview from './IncomeOverview'
import Piecharts from './Piecharts'
import IncomeOverviewCards from './IncomeOverviewCards'
import { useNavigate } from 'react-router-dom'

const SourceOfIncome = () => {
  const navigate =useNavigate();
  const  AddIncome =() =>{
  navigate('/addIncome')
  }
  return (
   
      <div>
       <div className='flex justify-between mb-4'>
         <h1 className='text-right font-bold text-[22px]  '>
            مصادر الدخل
        </h1>
        <button
        onClick={AddIncome}
         className='bg-[#16423C] w-[217px] h-[44px] gap-[10px] rounded-[10px] pt-[10px] pr-8 pb-[10px] pl-8'>
          <p className='text-white font-bold text-[18px] '>
                + إضافة مصدر دخل
          </p>
        </button>
       </div>
        <div className='flex gap-3 '>
            <IncomeOverviewCards />
            <Piecharts />
        </div>
      </div>
    
  )
}

export default SourceOfIncome
