import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoals } from "./GoalContext";
import pix from "../../../../assets/images/pix.svg";
import AddAmountPopup from "./AddAmountPopup";

const FinancialGoals = () => {
  const { goals } = useGoals();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleViewDetails = (id) => {
    navigate(`#`);
  };

  const handleAddAmount = () => {
    setShowPopup(true);
  };

  const handleConfirmAmount = (amount) => {
    console.log("تم إضافة المبلغ:", amount); // هنا يمكنك تحديث الـ context
    setShowPopup(false);
  };

  return (
    <div className="p-6 bg-white border rounded-[10px] shadow-xl min-h-screen font-sans">
      <h1 className="text-xl font-bold mb-6">أهدافك الحالية</h1>
      <div className="space-y-4">
        {goals.map((goal) => {
          const percent = Math.round((goal.saved / goal.target) * 100);
          return (
            <div
              key={goal.id}
              className="bg-white p-4 space-y-10 shadow-sm w-full rounded-[10px] border pt-8 pr-6 pb-8 pl-6"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex gap-8">
                  <img src={pix} alt="" />
                  <h2 className="text-[18px] font-bold">{goal.title}</h2>
                  <div className="bg-[#FF8804] text-center bg-opacity-10 w-[107px] h-[27px] rounded-[20px]">
                    <span className="text-xs text-[#FF8804] font-semibold">قيد التنفيذ</span>
                  </div>
                </div>
                <div className="text-xs text-end mb-1">
                  <div>{goal.target}$ / <span className="font-bold">{goal.saved}$</span></div>
                  <div><span>حتى {goal.date}</span></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <div>{goal.target}$ / <span className="font-bold">{goal.saved}$</span></div>
                  <p>{percent}%</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded mb-3 overflow-hidden">
                  <div className="bg-blue-900 h-full rounded" style={{ width: `${percent}%` }}></div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-2">
                <button 
                  onClick={handleAddAmount}
                  className="bg-[#16423C] w-full md:w-1/2 text-white text-[18px] font-bold py-2 rounded-[10px]"
                >
                  إضافة مبلغ
                </button>
                <button
                  onClick={() => handleViewDetails(goal.id)}
                  className="border w-full md:w-1/2 border-gray-300 text-[#16423C] text-[18px] font-bold py-2 rounded-[10px]"
                >
                  عرض التفاصيل
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {showPopup && (
        <AddAmountPopup
          onClose={() => setShowPopup(false)}
          onConfirm={handleConfirmAmount}
        />
      )}
    </div>
  );
};

export default FinancialGoals;
