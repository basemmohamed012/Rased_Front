import React from 'react'
import Piechart from './Piechart.jsx'
const Piecharts = () => {
  return (
    <div className='w-[496px] h-[467px] rounded-[10px] border-1 shadow-lg '>
      <div class="text-right mr-10 mt-10">
  <h2 class="text-2xl font-bold mb-1"> توزيع المحفظة الاستثمارية</h2>
  <p class="text-gray-600 text-sm">
    القيمة الإجمالية: 
    <span class="text-black font-semibold">$70,000</span>
    <span class="text-green-600 font-bold">(25.000+, ¥4.75+)</span>
  </p>
</div>
<Piechart />
    </div>
  )
}

export default Piecharts
