import { ArrowUp, ArrowDown } from "lucide-react";
import profit_71075101 from '../../../../assets/images/profit_7107510 1.svg'
import expenses_5501400 from '../../../../assets/images/expenses_5501400.svg'
import group from '../../../../assets/images/GroupOperation.svg'
const statsData = [
  {
    title: "إجمالي الدخل",
    value: 5000,
    change: 4.75,
    isIncrease: true,
    since: "أعلى من الأسبوع الماضي",
    time: "منذ ساعتين",
    updated:"بواسطة محمد عبدالله",
    image: profit_71075101,
    icon: "💰",
    user: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  
  {
    title: "إجمالي المصروفات",
    value: 800,
    change: 1.2,
    isIncrease: false,
    since: "أعلى من الأسبوع الماضي",
    time: "منذ يومين",
    updated:"بواسطة محمد عبدالله",
    image: expenses_5501400,
    icon: "💼",
    user: "https://randomuser.me/api/portraits/men/2.jpg",
  },
 
  {
    title: "جميع المعاملات",
    value: 15,
    change: 1.2,
    isIncrease: true,
    since: "أعلى من الشهر الماضي",
    time: " ",
    updated:"بواسطة محمد عبدالله",
    image: group,
    icon: "⚙️",
    user: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

const StatCard = ({ title, value, change, isIncrease, since, time, updated, image, user }) => {
  return (
    <div className="flex flex-col w-[324px] h-[184px] border-2  rounded-[20px] p-6 items-right justify-center  bg-white shadow-md  text-center ">
    
      <h2 className="font-bold text-[22px] leading-none tracking-normal text-right mt-4 mb-6">{title}</h2>
      <div className=" font-bold text-[45px] leading-none tracking-normal text-right">{typeof value === "number" ? value.toLocaleString() : value}
      <span className="font-bold text-[12px] leading-none tracking-normal text-[#A6A6A6]">{time}</span>
      </div>
     
      <div className="flex gap-1">
      <div className={`flex items-center gap-1 font-bold text-sm ${isIncrease ? "text-green-500" : "text-red-500"}`}>
        {isIncrease ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
        {change}%
      </div>
     
       <div className=" text-[#A6A6A6] font-bold text-[8px] leading-none tracking-normal mt-2">
       {since}
       </div>
        </div>

     <div className="flex gap-12">
     <div className="flex items-center gap-2 mt-2">
        <img src={user} alt="User" className="w-6 h-6 rounded-full" />
        <span className="font-bold text-[12px] leading-none tracking-normal whitespace-nowrap text-[#A6A6A6]">{updated}</span>
      </div>
  <div>
  <img src={image} alt="Stat" className="relative bottom-10" />
  </div>
     </div>
    </div>
  );
};

export default function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {statsData.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}
