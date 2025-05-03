import React from "react";
import { useLocation } from 'react-router-dom';
import CustomPieChart  from '../PieChart/CustomPieChart.jsx'
// لو عندك مكون PieChart import هنا
// import PieChart from './PieChart';  (لو كنت عامله)

export default function WalletDetailsSection() {
  const location = useLocation();
  const { wallet } = location.state || {}; // لو مفيش بيانات

  if (!wallet) {
    return <div>لا توجد بيانات محفظة لعرضها</div>;
  }

  return (
    <div className="w-[1020px] h-[247px] justify-between  border-2 rounded-[25px] pt-4 pr-6 pb-4 pl-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* العمود الأول: الاسم - تاريخ الانشاء - الرصيد */}
        <div className="flex-1 text-right">
          <h2 className="text-[35px] font-bold mb-2">{wallet.name}</h2>
          <p className="text-[#A6A6A6] tex-[16px] font-medium mb-4">تم إنشاؤها في {wallet.creationDate}</p>
          <div className="mt-10">
            <span className="text-[#A6A6A6]  text-[16px] font-medium ">الرصيد الحالي</span>
            <h3 className="text-[45px] font-bold ">$ {wallet.amount.toLocaleString()}  </h3>
          </div>
        </div>

        {/* العمود الثاني: النوع - العملة - النشاط الإجمالي */}
        <div className="flex-1 text-right ">
         
        <div className="mb-20 mt-5 mr-10">
  <select
    className="w-[121px] h-[38px] gap-[6px] rounded-[40px] px-4 py-2 border"
    defaultValue={wallet.currency}
  >
    <option value="جنيه مصري">جنيه مصري</option>
    <option value="دولار أمريكي">دولار أمريكي</option>
    <option value="يورو">يورو</option>
    <option value="ريال سعودي">ريال سعودي</option>
    {/* تضيف أو تعدل باقي العملات حسب اللي تحبه */}
  </select>
</div>


          <div className="flex flex-col items-center gap-2 text-[#3D984A] font-bold text-[25px] ml-24">
          <span className="text-[#A6A6A6] font-medium text-[16px] leading-[100%] tracking-[0%]">النشاط الإجمالي</span>
            <span> {wallet.totalActivity}% ▲</span>
           
          </div>
        </div>

        {/* العمود الثالث: الرسم البياني PieChart */}
        <div className="flex-1 flex justify-center items-center h-[230px] w-[286px]">
        <CustomPieChart data={wallet.pieData} />
</div>

      </div>
    </div>
  );
}
