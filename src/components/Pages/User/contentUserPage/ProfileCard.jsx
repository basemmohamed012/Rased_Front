import React from 'react'
import Abdoimg from '../../../../assets/images/Abdo.svg'
import loca from '../../../../assets/images/location.svg'
import email from '../../../../assets/images/e-mail.svg'
import phone from '../../../../assets/images/phone.svg'
import date from '../../../../assets/images/date.svg'
const ProfileCard = () => {
  return (
    <div>
       <div className=" mx-auto mt-10 rounded-xl overflow-hidden shadow-md border">
        {/* الغلاف */}
        <div className="h-44 bg-[#6DA8A0] relative rounded-t-xl " />
  
        {/* المعلومات الأساسية */}
        <div className="bg-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between">
          {/* الصورة + الاسم */}
          <div className="flex items-center gap-4 -mt-16">
            <img
              src={Abdoimg}
              alt="avatar"
              className="w-20 h-20 rounded-full  z-10 border-white shadow-md"
            />
            <div>
              <div className="flex items-center gap-6 mt-10">
                <h2 className="font-[cairo] font-bold text-[20px] ">عبدالله محمود</h2>
                <span className="text-xs bg-[#3D984A] bg-opacity-20 text-[#3D984A] font-bold px-2 py-0.5 rounded-[20px]">عضو نشط</span>
              </div>
              <p className="text-sm text-gray-500">UX Designer</p>
            </div>
          </div>
  
          {/* الأزرار */}
          <div className="flex gap-3 mt-4 sm:mt-0">
            <button className="w-[216px] h-[44px] px-4 py-2 border border-gray-500 text-gray-700 rounded-[10px] pt-[10px] pr-[32px] pb-[10px] pl-[32px] hover:bg-gray-100">
              تعديل المعلومات
            </button>
            <button className=" w-[216px] h-[44px] px-4 py-2 bg-[#16423C] text-white rounded-[10px] pt-[10px] pr-[32px] pb-[10px] pl-[32px]  hover:bg-green-800">
              حجز استشارة مالية
            </button>
          </div>
        </div>
  
        {/* معلومات التواصل */}
        <div className="bg-white h-[60px] px-6 pb-6  flex flex-row-reverse flex-wrap gap-4 text-sm text-gray-600 justify-between">
          <div className="flex items-center gap-1">
            <span>🕒</span>
            <span>انضم منذ 5 سنوات | يناير 2020</span>
          </div>
          <div className="flex items-center gap-1">
            <span>
                <img src={loca} alt="" />
            </span>
            <span>
            <img src={email} alt="" />
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span>
            <img src={phone} alt="" />
            </span>
            <span>example@gmail.com</span>
          </div>
          <div className="flex items-center gap-1">
            <span>
            <img src={date} alt="" />
            </span>
            <span>القاهرة، مصر</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
