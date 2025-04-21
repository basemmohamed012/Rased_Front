import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import arowgreen from '../../../../assets/images/arowgreendesign.svg'
import arowred from '../../../../assets/images/arowreddesign.png'
// Updated data to create a higher peak in the middle
const data = [
  { name: '1', value: 90 },
  { name: '2', value: 79 },
  { name: '3', value: 50},
  { name: '4', value: 15 },
  { name: '5', value: 1 },
  { name: '6', value: 0 },
  { name: '8', value: 0 },
  { name: '9', value: 0 },
  { name: '10', value: 0 },
  
];

const timeOptions = [
  'هذا اليوم',
  'هذا الأسبوع',
  'هذا الشهر',
  'هذه السنة'
];

const StatCard = ({ title, amount, percentage, color, isPositive = true }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState('هذا الأسبوع');

  return (
    <div className=" rounded-xl p-4 relative overflow-hidden w-[350px] h-[180px]">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-black dark:text-white  text-[25px] ">{title}</h3>
          
         <div>
        <div>
        <p className="text-right font-bold text-[25px] mt-10 ">
          
          <span className="text-sm text-gray-400 text-right">70.</span>
            {amount}
           
          </p>
        </div>
         </div>
        </div>
        <div className="relative">
          <button 
            className="text-[#A6A6A6] text-[14px] font-semibold ml-4 mt-2 hover:text-gray-600 flex items-center gap-1"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{selectedTime}</span>
            <svg 
              className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-1 w-32 bg-white rounded-md shadow-lg z-10 border border-gray-200">
              {timeOptions.map((option) => (
                <button
                  key={option}
                  className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setSelectedTime(option);
                    setIsDropdownOpen(false);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? <img className='relative right-10 top-3' src={arowgreen}  alt="" />  : <img className='relative right-10 top-3' src={arowred} alt="" />  } {Math.abs( percentage)}%
      </div>
      <div className="absolute bottom-0 top-10 left-0 right-4 w-[317px] h-32">
        <ResponsiveContainer width="90%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={1} />
                <stop offset="50%" stopColor={color} stopOpacity={1} />
                <stop offset="100%" stopColor={color} stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              fill={`url(#gradient-${color})`}
              strokeWidth={1.5}
              dot={false}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="flex gap-6 p-6">
      <StatCard
      
        title="الرصيد الاجمالي"
        amount="10,000 ج.م"
        percentage={-1.8}
        color="#79D7BE80"
        isPositive={false}
      />
      <StatCard
        title="الدخل"
        amount=" ج.م 10,000"
        percentage={ "+" + 5.7}
        color="#2E507780"
        isPositive={true}
      />
      <StatCard
        title=" المصاريف"
        amount="10,000 ج.م"
        percentage={ 3.5}
        color="#1E84F980"
        isPositive={true}
      />
    </div>
  );
}