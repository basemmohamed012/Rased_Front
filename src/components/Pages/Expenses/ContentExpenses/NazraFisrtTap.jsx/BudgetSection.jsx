import React from "react";
import img1 from "../../../../../assets/images/garase.svg";
import img2 from "../../../../../assets/images/alarm.svg";

const BudgetCard = ({
  title,
  icon,
  category,
  used,
  limit,
  message,
  barColor,
  borderColor,
  className,
}) => {
  const percentage = Math.min((used / limit) * 100, 100);

  return (
    <div className={`rounded-xl shadow-md p-5 border-r-8 ${borderColor} bg-white w-[496px] ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold text-lg flex items-center gap-2">
          {icon}
          {title}
        </h2>
      </div>

      <div className="flex justify-between text-sm font-semibold mb-2">
        <span>{category}</span>
        <span>{`${used}$ / ${limit}$`}</span>
      </div>

      <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden mb-2">
        <div className={`h-full ${barColor}`} style={{ width: `${percentage}%` }} />
      </div>

      <p className="text-xs text-gray-600 mb-4">{message}</p>

      {/* <button className="w-full py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-100 transition">
        تعديل الميزانية
      </button> */}
    </div>
  );
};

export default function BudgetSection() {
  return (
    <div className="w-full mx-auto flex flex-wrap justify-center gap-8" dir="rtl">
      <BudgetCard
        title="الميزانية المتخطاه"
        icon={<img src={img2} alt="أيقونة تحذير" className="w-5 h-5" />}
        category="التسوق"
        used={660}
        limit={500}
        message="لقد تجاوزت ميزانية التسوق"
        barColor="bg-red-600"
        borderColor="border-[#E00A00]"
      />
      <BudgetCard
        title="الميزانية المسموحه"
        icon={<img src={img1} alt="أيقونة تنبيه" className="w-5 h-5" />}
        category="الغداء"
        used={400}
        limit={550}
        message="لقد استخدمت أكثر من 70% من ميزانية الغداء"
        barColor="bg-orange-500"
        borderColor="border-[#EB7D04]"
      />
    </div>
  );
}
