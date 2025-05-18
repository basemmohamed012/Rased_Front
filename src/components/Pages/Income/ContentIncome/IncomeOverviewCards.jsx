import React from "react";

const IncomeCard = ({ title, amount, percentage, progress, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 space-y-3 w-[499.5px] h-[170px] ">
      <div className="flex justify-between items-start">
         <div className="text-right">
          <h3 className=" text-[14px] font-bold ">{title}</h3>
          <p className="text-xl font-bold text-gray-800">${amount.toLocaleString()}</p>
        </div>
        <span className="text-green-600 font-bold text-sm flex items-center gap-1">
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 4l-6 6h4v6h4v-6h4z" />
          </svg>
          {percentage}%
        </span>
       
      </div>
      <div className="text-right text-sm text-gray-400">{progress}% من إجمالي الدخل</div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${progress}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

const IncomeOverviewCards = () => {
  return (
    <div className="flex flex-col  gap-2">
      <IncomeCard
        title="الاستثمارات"
        amount={15000}
        percentage={1.2}
        progress={25}
        color="#1CA8C3"
      />
      <IncomeCard
        title="الراتب"
        amount={40000}
        percentage={1.2}
        progress={60}
        color="#3A8DFF"
      />
      <IncomeCard
        title="العمل الحر"
        amount={20000}
        percentage={1.2}
        progress={30}
        color="#7D3F3F"
      />
    </div>
  );
};

export default IncomeOverviewCards;
