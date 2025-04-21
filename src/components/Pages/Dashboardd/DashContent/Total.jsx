import React from "react";
import sales_12470362 from '../../../../assets/images/sales_12470362.svg'
import accounting_5656078 from '../../../../assets/images/accounting_5656078.svg'
import clipboard_3138927 from '../../../../assets/images/clipboard_3138927 1.svg'
import bxs from '../../../../assets/images/bxs_up-arrow.svg'

const Total = () => {
  const income = 45000;
  const expenses = 15000;
  const balance = income - expenses;

  return (
    <div className="flex justify-between items-start bg-white p-6 rounded-lg ml-[100px] border-2 shadow-md w-[894px] h-[124px]  mx-auto mt-10">
      
     

      {/* الدخل والمصروفات */}
      <div className=" rounded-md w-2/3">
        <div className="flex justify-betwee  text-right gap-16">
          <div className="flex flex-col ">
            <img className="w-[24px] h-[24px] mr-8" src={sales_12470362} />
            <p className="text-[#9F9F9F] text-[18px] mr-6 font-bold ">الدخل</p>
            <p className="text-black font-bold text-[25px]"> $ {income.toLocaleString()} </p>
          </div>
          <div className="flex flex-col">
          <img className="w-[24px] h-[24px] mr-8"  src={accounting_5656078} />
            <p className="text-[#9F9F9F] text-[18px] font-bold ">المصروفات</p>
            <p className="text-black font-bold text-[25px]"> $ {expenses.toLocaleString()} </p>
          </div>
        </div>
      </div>

       {/* الوضع المالي */}
       <div className="  flex flex-col text-center w-1/3 items-center">
  {/* الصورة */}
  <img className="w-[24px] h-[24px] mb-2" src={clipboard_3138927} alt="" />

  {/* الوصف */}
  <p className="text-gray-500 mb-1">الوضع المالي</p>

  {/* الرقم */}
  <div className="flex gap-1 items-center">
   
    <p className="text-green-600 text-xl font-bold">
      { balance.toLocaleString()}$
    </p>
    <img src={bxs} alt="" className="w-5 h-5 mb-1" />
  </div>
</div>


    </div>
  );
};

export default Total;
