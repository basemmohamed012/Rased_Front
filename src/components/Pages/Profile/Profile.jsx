import React, { useState } from 'react';
import person from '../../../assets/images/person.png';
import pen from '../../../assets/images/pen.svg';
const Profile = () => {
  const [openMenus, setOpenMenus] = useState(new Set());

  const toggleMenu = (menu) => {
    setOpenMenus(prev => {
      const newSet = new Set(prev);
      if (newSet.has(menu)) {
        newSet.delete(menu);
      } else {
        newSet.add(menu);
      }
      return newSet;
    });
  };

  return (
    

        <main className="flex-1 p-6 relative w-auto ">
          <div className="bg-[#E1FCF4] relative bottom-40  right-[75px] h-[1000px] w-[1227px] mt-[150px]  p-6 rounded-lg">
            <h1 className="text-[40px] font-semibold relative right-[20px] text-gray-700 mb-6">الحساب الشخصي</h1>
          </div>

          <div className="absolute top-[110px]  right-[140px]  bg-white h-[915px] p-6 rounded-lg shadow-lg z-10 w-[1188px] dark:bg-black">
            <div className="mb-6">
              <h2 className="text-[25px] font-bold mb-7 mr-6 dark:text-white">ملف الشخصي</h2>
              <div className="flex items-center justify-between space-x-4 border-2 border-[#F8F3F3] rounded-[15px] p-5 mb-[8px] mr-[24px] ml-[24px] mt-[8px]">
                <div className="flex">
                  <img src={person} className="rounded-full" alt="الصورة الشخصية" />
                  <div className="relative right-6">
                    <p className="text-gray-800 font-semibold dark:text-white">محمد السيد عبد اللطيف</p>
                    <p className="text-[#BEB7B7] text-[16px]">مهندس مدني</p>
                    <p className="text-[#BEB7B7] text-[16px]">القاهرة، مصر</p>
                  </div>
                </div>
                <div className="w-[98px] h-[42px] rounded-[20px] border-[1px]">
                  <button>
                    <div className="flex gap-2 relative right-6 top-2">
                      <p className="font-bold text-[12px] text-[rgb(190,183,183)]">تعديل</p>
                      <img src={pen} alt="" />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-[25px] font-bold mb-7 mr-6 dark:text-white">المعلومات الشخصية</h2>
              <div className="border-2 border-[#F8F3F3] rounded-[15px] p-5 mb-[8px] mr-[24px] ml-[24px] mt-[8px]">
                <div className="flex justify-between text-[14px] font-bold">
                  <div className="space-y-5 dark:text-white">
                    <p><span className="text-[#CDC8C8]">الاسم الأول</span> <br />محمد</p>
                    <p><span className="text-[#CDC8C8]">البريد الإلكتروني</span><br /> example@email.com</p>
                    <p><span className="text-[#CDC8C8]">نبذة</span> <br />example@email.com</p>
                  </div>
                  <div className="ml-20 dark:text-white">
                    <p><span className="text-[#CDC8C8]">الاسم الأوسط</span> <br />السيد</p>
                  </div>
                  <div className="space-y-5 ml-[320px] dark:text-white">
                    <p><span className="text-[#CDC8C8]">اسم الاخير</span><br /> عبد اللطيف</p>
                    <p><span className="text-[#CDC8C8]">الرقم</span><br /> 01201298559</p>
                  </div>
                  <div className="relative top-16 left-5 w-[98px] h-[42px] rounded-[20px] border-[1px]">
                    <button>
                      <div className="flex gap-2 relative right-6 top-2">
                        <p className="font-bold text-[12px] text-[#BEB7B7]">تعديل</p>
                        <img src={pen} alt="" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
     
  );
};

export default Profile;