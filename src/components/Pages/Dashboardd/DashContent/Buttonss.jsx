import React, { useState } from 'react';
import ss from '../../../../assets/images/Subtract.svg';
import DropdownDash from '../DashContent/DropdownDash.jsx';
import date from '../../../../assets/images/date-b.svg';
import StackedAreaChart from "../../Dashboardd/StackedAreaChart/StackedAreaChart.jsx";
import Nazra from '../../Dashboardd/DashContent/Nazra.jsx';
import DataTable from '../DataTable.jsx';
import Total from './Total.jsx';
// import TransactionsTableEx from '../../Expenses/ContentExpenses/NazraFisrtTap.jsx/TransactionsTableEx.jsx'


const tabs = ['إجمالي الدخل', 'عدد العمليات'];

export default function TabsWithTable() {
  const [activeTab, setActiveTab] = useState('إجمالي الدخل');

  return (
    <div className="relative min-h-[1849px] w-[1011px] rounded-xl overflow-hidden">

      {/* الخلفية */}
      <img src={ss} alt="" className="absolute inset-0 object-cover" />

      {/* الشريط العلوي */}
      <div className="relative right-10 w-[1011px] inset-0 flex gap-28 items-center justify-around px-6 py-4">

        {/* Dropdown */}
        <div className='relative left-5 top-14'>
          <DropdownDash />
        </div>

        {/* التابات */}
        <div className="flex space-x-2 relative left-5 top-5 backdrop-blur-md p-1 rounded-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1 rounded-full text-sm transition-all duration-200 ${
                activeTab === tab ? 'bg-[#16423C] text-white shadow' : 'text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* التاريخ */}
        <div className="flex items-center gap-2 relative left-10 top-14 text-black space-x-2">
          <span className="text-[14px] font-bold">التاريخ</span>
          <img src={date} alt="" />
        </div>
      </div>

      {/* محتوى كل تاب */}
      <div className="relative top-28 right-10">
        {activeTab === 'إجمالي الدخل' && (
         <div>
           <div className="flex gap-4">
            <Nazra />
            <StackedAreaChart />
          </div>
          <DataTable />
         </div>
        )}

        {activeTab === 'إجمالي المصروفات' && (
           <div>
           <div className="flex gap-4">
            <Nazra />
            <StackedAreaChart />
          </div>
          <DataTable />
         </div>
          
        )}

        {activeTab === 'عدد العمليات' && (
          <div className="flex flex-col gap-6">
          <Total />
           <DataTable />
         </div>
        )}
      </div>

    </div>
  );
}
