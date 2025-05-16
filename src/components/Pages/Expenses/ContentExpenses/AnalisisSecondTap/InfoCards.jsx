// InfoCards.jsx
import { Wallet, PiggyBank } from "lucide-react";
import profit_71075101 from '../../../../../assets/images/profit_7107510 1.svg'
import expenses_5501400 from '../../../../../assets/images/expenses_5501400.svg'
export default function InfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rtl text-right">
      {/* Card 1 */}
      <div className="relative flex justify-between bg-white rounded-2xl p-6 shadow border border-gray-100 min-h-[120px] overflow-hidden">
        {/* Faded Icon */}
       

        <div>
            {/* Content */}
        <h2 className="text-black font-bold text-[22px]">إجمالي العمليات</h2>
        <p className="text-3xl font-bold text-black mt-1">12</p>
        <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
          <span className="text-green-500">⬆️</span>
          تمت 4 عمليات هذا الشهر
        </p>
        </div>
         <img src={profit_71075101} alt="" />
      </div>

      {/* Card 2 */}
      <div className="relative flex justify-between bg-white rounded-2xl p-6 shadow border border-gray-100 min-h-[120px] overflow-hidden">
        {/* Faded Icon */}
      
        <div>
            {/* Content */}
        <h2 className="text-black font-bold text-[22px]">فئات المصروفات</h2>
        <p className="text-3xl font-bold text-black mt-1">12</p>
        <p className="text-sm text-gray-400 mt-2">إجمالي الفئات المصنفة</p>
        </div>
         <img src={expenses_5501400} alt="" />

      </div>
    </div>
  );
}
