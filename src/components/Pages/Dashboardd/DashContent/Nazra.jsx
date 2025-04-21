import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react'; // أيقونات قابلة للتبديل
import done from "../../../../assets/images/done.svg"
export default function IncomeOverview() {
  const sources = [
    { name: 'الراتب الشهري', amount: 800, percent: 70.4, confirmed: true },
    { name: 'الجمعية', amount: 800, percent: 70.4, confirmed: true },
    { name: 'مشروع فريلانس', amount: 800, percent: 70.4, confirmed: true },
  ];

  return (
    <div className="bg-white rounded-xl p-4 w-[369px] h-[585px] max-w-md mx-auto">
      {/* العنوان والمبلغ */}
      <div className="text-start">
        <p className="text-[#9F9F9F] text-[18px] font-bold">نظرة عامة</p>
        <h2 className="text-[45px] font-bold text-black"> $ 45,000</h2>
        <div className="text-sm text-gray-400 mt-1 flex justify-start items-center gap-2">
    
          <span className="bg-[#79CA321A] bg-opacity-10 w-[62px] h-[33px] text-green-600 px-2 py-0.5 rounded-full text-[14px] font-medium">
            <p className='mt-1'>
            +14.2%
            </p>
          </span>
          <span className='text-[#9F9F9F] text-[14px]'>+ 1.000$ آخر 7 أيام</span>
        </div>
      </div>

      {/* البروجريس بار */}
      <div className="w-full bg-gray-200 h-4 rounded-full mt-4 mb-2 overflow-hidden">
  <div className="h-4 bg-[#76938F] rounded-full" style={{ width: '70%' }} />
</div>


      {/* المصادر */}
      <div className="space-y-4 mt-4">
        {sources.map((src, idx) => (
          <div key={idx} className="flex justify-between items-center border-b pb-2">
            <div className="text-end flex gap-2">
                <div className='mt-4'>
                <img src={done} alt="" />
                </div>
             <div>
             <p className="font-bold text-[18px] text-right text-gray-800">{src.name}</p>
             <p className="text-[16px] text-gray-400">مضاف إلى المحفظة</p>
             </div>
            </div>
            <div className="text-left mr-20">
              <p className="text-[20px] font-bold text-black">{src.amount} $</p>
              <p className="text-[18px] text-[#A6A6A6]">{src.percent}%</p>
            </div>
            <hr />
           
          </div>
        ))}
      </div>

      {/* زر تعديل */}
      <div className="mt-14 text-center">
        <button className="bg-[#16423C] text-white w-[311px] h-[49px] rounded-full px-6 py-2 text-sm hover:bg-green-800 transition">
          تعديل
        </button>
      </div>
    </div>
  );
}
