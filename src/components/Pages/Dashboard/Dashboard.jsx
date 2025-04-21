import React from 'react'
import  { useState } from 'react';  
import SimpleLineChart from './SimpleLine/SimpleLineChart'
import BarChartComponent from './BarChart/BarChartComponent'
import Ssss from './Ssss/Ssss'
import {ThreeDPieChart} from './ThreeDpie/ThreeDPieChart'
import  Sidebar  from '../../../Layout/SideBar/sideBar.jsx'
const Dashboard = () => {
  
    const [openMenus, setOpenMenus] = useState(new Set());
    const [timeDropdowns, setTimeDropdowns] = useState({});
  
    const toggleMenu = (menu) => {
      setOpenMenus(prev => {
        const newSet = new Set(prev);
        if (newSet.has(menu)) {
          newSet.delete(menu);
        } else {
          newSet.add(menu);
        }
        return newSet;
      });
    };
  
  return (
    <>
    <Sidebar />
    <main className="flex-1 p-6  min-h-full absolute top-[70px] right-[200px] w-[1295px] z-10">
          <div className="bg-[#E1FCF4] relative bottom-40 right-12 h-[1100px] mt-[150px] p-6 rounded-lg">
            <h1 className="text-[40px] font-bold relative right-20   text-gray-700">التقارير و التحليلات</h1>
          </div>

          <div className="absolute top-[110px] right-[140px] bg-white h-[1005px] p-6 rounded-lg shadow-lg z-10 w-[1180px] dark:bg-black">
            <div className="mb-10">
              <h2 className="text-[25px] font-bold mb-8 mr-6 dark:text-white">لوحة التحكم</h2>
              <div className='absolute left-[360px]'>
     
      <div className='flex justify-between w-[1086px] h-[379px] relative right-[380px] dark:gap-4'>
           <SimpleLineChart />
           <BarChartComponent />
           </div>
           <div className='relative right-[350px] bottom-5'> 
            <Ssss className="" />
            
           </div>
           <div className='relative right-[350px] top-5'>
           <ThreeDPieChart/>
           </div>
           
    </div>
           
            </div>
            
          </div>
        </main>
   

    </>
  )
}

export default Dashboard
