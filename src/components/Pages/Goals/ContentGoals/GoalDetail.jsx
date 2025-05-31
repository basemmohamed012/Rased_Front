import {React,useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGoals } from "./GoalContext";
import pix from "../../../../assets/images/pix.svg";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import AddAmountPopup from "./AddAmountPopup"; // عدّل المسار حسب مكان الملف
 
const dummyCoupons = [
  { date: "2 مارس 2025", amount: 80 },
  { date: "2 مارس 2025", amount: 80 },
  { date: "2 مارس 2025", amount: 80 },
  { date: "2 مارس 2025", amount: 80 },
];

 
const GoalDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { goals } = useGoals();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddAmount = () => {
    setShowPopup(true);
  };

  const handleConfirmAmount = (amount) => {
    console.log("تم إضافة المبلغ:", amount); // هنا يمكنك تحديث الـ context
    setShowPopup(false);
  };

  
  const goal = goals.find((g) => g.id === parseInt(id));
  if (!goal)
    return (
      <div className="p-6 text-red-600 font-bold">لم يتم العثور على الهدف</div>
    );

  const percent = Math.round((goal.saved / goal.target) * 100);

  return (
    <div className="p-6 bg-white border-2 w-[1020px] rounded-[10px] shadow-xl min-h-screen font-sans space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="text-[#16423C] font-semibold mb-4"
      >
        العودة
      </button>

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

      

      <div className="overflow-x-auto border rounded-[20px] mt-6">
        <table className="w-full  rounded-[20px] text-center">
          <thead className="border-b text-sm">
            <tr>
              <th className="py-6 px-4 ">التاريخ</th>
              <th className="py-6 px-4 ">القيمة</th>
              <th className="py-6 px-4 ">الإجراء</th>
            </tr>
          </thead>
          <tbody>
            {dummyCoupons.map((coupon, index) => (
              <tr key={index} className="">
                <td className="py-2 px-4 ">{coupon.date}</td>
                <td className="py-2 px-4 ">{coupon.amount.toFixed(2)} $</td>
                <td className="py-2 px-4  flex justify-center gap-3">
                  <button className="text-red-600 hover:text-red-800">
                    <FaTrashAlt />
                  </button>
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-6">
        <button
         onClick={handleAddAmount}
        className="px-6 py-2 border-2 w-full border-[#16423C] rounded text-[#16423C] hover:bg-[#16423C] hover:text-white">
          إضافة مبلغ
        </button>
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

export default GoalDetailsPage;
