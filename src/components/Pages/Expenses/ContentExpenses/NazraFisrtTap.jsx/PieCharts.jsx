import React from 'react'
import Piechart from './PieChart.jsx'
const Piecharts = () => {
  return (
    <div className='w-[411px] h-[496px] rounded-[20px] border-2 shadow-xl '>
      <div class="text-right mr-10 mt-10">
  <h2 class="text-2xl font-bold mb-1"> فئات المصروفات </h2>
  <p class="text-[#A6A6A6] text-sm">
    تحليل المصروفات بناء علي فئتها
    
  </p>
</div>
<Piechart />
    </div>
  )
}

export default Piecharts
