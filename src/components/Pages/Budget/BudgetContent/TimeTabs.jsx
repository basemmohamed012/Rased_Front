import React, { useState } from 'react';

export default function TimeTabs() {
  const [activeTab, setActiveTab] = useState('شهري');

  const tabs = ['ربعي', 'سنوي', 'شهري'];

  return (
    <div className="flex justify-between items-center mb-4">
     

      {/* الأزرار داخل إطار واحد */}
      <div className="flex rounded-md border border-gray-200 overflow-hidden text-sm font-medium">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 transition-colors duration-200 ${
              activeTab === tab
                ? 'bg-[#16423C] text-white'
                : 'text-black hover:bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
