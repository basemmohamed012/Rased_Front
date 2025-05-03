import React, { useState } from 'react';
import StatsSectionWalletShared from '../ContentSharedWalletDetails/StatsSectionWalletShared.jsx'
import  LineChart  from '../LineChart/LineChart.jsx';
import  PieChart from '../PieChart/PieChart.jsx';
import DataTableWalletDetailsDate from '../../WalletDetails/ContentWalletDetails/DataTableWalletDetailsDate.jsx'
import MembersTable from '../Members/MemberTable.jsx';
import AreaChart from '../AreaChart/AreaChart.jsx';
import  BarChart  from '../BaChart/BarChart.jsx';
import PerformanceTable from '../PerformanceTable/PerformanceTable.jsx';
const Buttons = () => {
  

  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return   <div className='w-[1020px] space-y-10'>
          <StatsSectionWalletShared  />
          <LineChart />
        <div className='relative bottom-20'>
        <PieChart />
        </div>
        
         
        </div>;
      case "members":
        return <div> 
        
        <MembersTable />
        </div>;
      case "transactions":
        return <div> 
          <DataTableWalletDetailsDate />
        </div>;
      case "analysis":
        return <div>
          <AreaChart />
         <div className='w-[1020px] flex gap-4 mt-10'>
         <PerformanceTable />
         <BarChart />
         
         </div>
           </div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex bg-[rgba(38,80,58,0.1)] gap-4 w-[1020px] h-[52px] justify-between rounded-[15px] pt-2 pr-6 pb-2 pl-6 mb-6 flex-wrap">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-2 rounded-full text-sm ${activeTab === "overview" ? "bg-[#16423C] text-white" : ""}`}
        >
          نظرة عامة
        </button>
        <button
          onClick={() => setActiveTab("members")}
          className={`px-4 py-2 rounded-full text-sm ${activeTab === "members" ? "bg-[#16423C] text-white" : ""}`}
        >
          الأعضاء
        </button>
        <button
          onClick={() => setActiveTab("transactions")}
          className={`px-4 py-2 rounded-full text-sm ${activeTab === "transactions" ? "bg-[#16423C] text-white" : ""}`}
        >
          المعاملات
        </button>
        <button
          onClick={() => setActiveTab("analysis")}
          className={`px-4 py-2 rounded-full text-sm ${activeTab === "analysis" ? "bg-[#16423C] text-white" : ""}`}
        >
          التحليل
        </button>
      </div>

      {/* المحتوى المتغير حسب التاب */}
      <div >
        {renderContent()}
      </div>
    </div>
  );
};

export default Buttons;
