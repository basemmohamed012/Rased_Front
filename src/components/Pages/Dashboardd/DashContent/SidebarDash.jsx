import React, { useState } from "react";
import nazra from '../../../../assets/images/nazra.svg'
import wallet from '../../../../assets/images/wallet.svg'
import arow from '../../../../assets/images/arowblack.svg'
import penwa from '../../../../assets/images/penWa.svg'
import sharewa from '../../../../assets/images/sharewa.svg'

const SidebarWallet = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // 'personal' | 'shared' | null

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <div className="w-[270px] h-[1450px] relative top-[10px] right-[40px] bg-gradient-to-b from-[#415C36] to-[#506F66] text-white rounded-2xl p-4 flex flex-col gap-4">

      {/* نظرة عامة */}
      <div className="flex w-[139px] h-[52px] border-2 bg-white rounded-[30px] items-center gap-2 mr-5 mt-10">
        <button className='flex gap-2 mr-5'>
          <img src={nazra} alt="" />
          <span className='text-black text-[16px] font-bold'>نظرة عامة</span>
        </button>
      </div>

      {/* زر المحافظ الفردية */}
      <div className="relative right-4 z-10">
        <button
          onClick={() => toggleDropdown("personal")}
          className="w-[196px] h-[36px] rounded-[15px] flex items-center justify-between bg-white text-black px-3 py-2 shadow"
        >
          <div className="flex gap-2">
            <img src={wallet} alt="wallet" />
            <span className="font-bold text-[14px]">محافظي</span>
          </div>
          <img src={arow} alt="arrow" />
        </button>

        {openDropdown === "personal" && (
          <div className="w-[180px] rounded-[10px] mt-2 shadow-lg z-20 text-right text-white">
            <ul className="flex flex-col text-right text-sm">
              <li className="px-4 py-2 cursor-pointer">محفظة شخصية</li>
              <li className="px-4 py-2 cursor-pointer">محفظة عمل</li>
              <li className="px-4 py-2 cursor-pointer">محفظة سفر</li>
            </ul>
          </div>
        )}
      </div>

      {/* زر المحافظ الجماعية */}
      <div className="relative right-4 z-10">
        <button
          onClick={() => toggleDropdown("shared")}
          className="w-[196px] h-[36px] rounded-[15px] flex items-center justify-between bg-white text-black px-3 py-2 shadow mt-3"
        >
          <div className="flex gap-2">
            <img src={wallet} alt="wallet" />
            <span className="font-bold text-[14px]">المحافظ الجماعية</span>
          </div>
          <img src={arow} alt="arrow" />
        </button>

        {openDropdown === "shared" && (
          <div className="w-[180px] rounded-[10px] mt-2 shadow-lg z-20   text-right text-white">
            <ul className="flex flex-col text-right text-sm">
              <li className="px-4 py-2 cursor-pointer">محفظة العائلة</li>
              <li className="px-4 py-2 cursor-pointer">محفظة عمل</li>
              <li className="px-4 py-2 cursor-pointer">محفظة زملاء العمل</li>
            </ul>
          </div>
        )}
      </div>

      {/* المعاملات */}
      <div className="flex items-center gap-2 mt-8 mr-4">
        <div className='flex gap-2'>
          <img src={nazra} alt="" />
          <span className='font-bold text-[14px]'>المعاملات</span>
        </div>
      </div>

      {/* إنشاء محفظة جديدة */}
      <div className="flex items-center justify-between text-sm cursor-pointer mt-4 mr-4">
        <button>
          <div className='flex gap-2'>
            <img src={penwa} alt="" />
            <span className='font-bold text-[14px]'>إنشاء محفظة جديدة</span>
          </div>
        </button>
      </div>

      {/* إنشاء محفظة مشتركة */}
      <div className="flex items-center justify-between text-sm cursor-pointer mt-2 mr-4">
        <button>
          <div className='flex gap-2'>
            <img src={sharewa} alt="" />
            <span className='font-bold text-[14px]'>إنشاء محفظة مشتركة</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SidebarWallet;
