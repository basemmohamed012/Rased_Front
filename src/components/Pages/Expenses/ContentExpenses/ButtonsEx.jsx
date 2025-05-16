import React, { useState } from 'react';
import FisrtTap from './NazraFisrtTap.jsx/FirstTap';
import SecondTap from './AnalisisSecondTap/SecondTap.jsx'
import ThirdTap from './ThirdTap/ThirdTap.jsx';
const tabs = [
  { id: "overview", label: "نظرة عامة" },
  { id: "members", label: "العمليات" },
  { id: "transactions", label: "التحليلات" },
];

const ButtonEx = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <div
        >  
        <FisrtTap />
        </div>;
      case "members":
        return <div> 
          <SecondTap />
        </div>;
      case "transactions":
        return <div> 
          <ThirdTap />
        </div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex justify-between bg-[rgba(38,80,58,0.05)] gap-4 w-full max-w-[1020px] h-[52px]  rounded-[15px] px-4 mb-6 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm transition-all duration-200 border-b-[3px] ${
              activeTab === tab.id
                ? "text-[#16423C] border-[#16423C] font-semibold"
                : "text-black font-bold border-transparent hover:text-[#16423C]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>{renderContent()}</div>
    </div>
  );
};

export default ButtonEx;
