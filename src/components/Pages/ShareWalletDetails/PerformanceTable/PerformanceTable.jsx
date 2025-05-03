import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const performanceData = [
  {
    asset: "النقدية",
    data: ["2.5%", "3.25%", "2.5%"],
    trend: [true, true, true],
  },
  {
    asset: "العقارات",
    data: ["2.5%", "4.10%", "1.25%"],
    trend: [true, true, true],
  },
  {
    asset: "الذهب",
    data: ["2.5%", "8.1%", "7%"],
    trend: [true, false, true],
  },
  {
    asset: "مدخرات",
    data: ["7.25%", "9.00%", "5.4%"],
    trend: [true, true, true],
  },
  {
    asset: "الجمعية",
    data: ["7.25%", "7.3%", "8.5%"],
    trend: [true, false, true],
  },
  {
    asset: "العمل",
    data: ["2.5%", "2.5%", "9.5%"],
    trend: [true, true, false],
  },
  {
    asset: "النقدية",
    data: ["5.8%", "3.7%", "3.8%"],
    trend: [true, false, true],
  },
  {
    asset: "العقارات",
    data: ["3.5%", "7.3%", "6.5%"],
    trend: [true, false, true],
  },
];

const PerformanceTable = () => {
  return (
    <div dir="rtl" className="w-[502px] h-[514px] mx-auto bg-white p-4 border-1 rounded-lg shadow-xl">
      <h2 className="text-lg font-bold text-right mb-1">الأداء العام للمدخرات</h2>
      <p className="text-sm text-right text-gray-500 mb-4">
        أداء المحفظة بالنسبة لفترة زمنية معينة
      </p>
      <div className="grid grid-cols-4 text-sm font-medium text-gray-700  pb-2 text-center">
        
        
       
        <div className="text-right">الممتلكات</div>
        <div>شهر واحد</div>
        <div>شهـران</div>
        <div>3 أشهر</div>
      </div>
      {performanceData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-4 text-center py-3  last:border-none text-sm"
        >
            <div className="text-right font-medium">{item.asset}</div>
          {item.data.map((val, idx) => (
            <div key={idx} className="flex items-center justify-center space-x-1 rtl:space-x-reverse">
              {item.trend[idx] ? (
                <ArrowUp size={14} className="text-green-500" />
              ) : (
                <ArrowDown size={14} className="text-red-500" />
              )}
              <span className={item.trend[idx] ? "text-green-600" : "text-red-600"}>{val}</span>
            </div>
          ))}
          
        </div>
      ))}
    </div>
  );
};

export default PerformanceTable;
