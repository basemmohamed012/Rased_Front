import React from 'react'
import CustomActiveShapePieChart from './CustomActiveShapePieChart.jsx'
const Piechart = () => {
  return (
    <div className='w-[496px] h-[467px] rounded-[10px] border-1 shadow-lg '>
      <div class="text-center mt-10">
  <h2 class="text-2xl font-bold mb-1">المحافظ المشتركة</h2>
  <p class="text-gray-600 text-sm">
    القيمة الإجمالية: 
    <span class="text-black font-semibold">$70,000</span>
    <span class="text-green-600 font-bold">(25.000+, ¥4.75+)</span>
  </p>
</div>
<CustomActiveShapePieChart />
    </div>
  )
}

export default Piechart
