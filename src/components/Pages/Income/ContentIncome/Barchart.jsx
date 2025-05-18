import React from 'react'
import StackedBarChart from './StackedBarChart'

const Barchart = () => {
  return (
    <div>
      <div className='w-[1019px] h-[451px] pt-8 pr-4 pb-4 pl-4 top-[471px] left-[105px] rounded-[10px] shadow-lg border-1 border-[#A6A6A6] ' >
        <h1 className='font-bold text-[22px] text-right '>
            مصادر الدخل
        </h1>
        <p className='text-[12px] font-bold text-right text-[#A6A6A6] ' >
            القيمة الإجمالية : 70.000$
        </p>
          <StackedBarChart />
      </div>
    
    </div>
  )
}

export default Barchart
