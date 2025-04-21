




import React from "react";
import imgGoogle from '../../../assets/images/store.svg'
import imgApp from '../../../assets/images/app.svg'

const GoogleAppStore = () => {
  return (
    <section data-aos="fade-up" className="w-screen h-auto bg-gradient-to-l from-[rgba(22,66,60,0.73)] to-[rgba(62,87,38,1)] 
     m-auto flex flex-col lg:flex-row justify-center
     relative bottom-40 md:bottom-0
     items-center gap-20 px-4 py-10 dark:bg-[#575757]">
  {/* النصوص على اليمين */}
  <div className="flex flex-col gap-y-6 relative  lg:bottom-12 text-center lg:text-right lg:mt-20 lg:mr-10 ">
    <p className="text-[#E4F4F0] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold leading-relaxed">
      نقرة واحدة تفصلك<br /> عن تجربة مالية أكثر<br /> سهولة
    </p>
    <p className="text-white text-[16px] md:text-[18px]">أكثر من 5 آلاف يستخدمونه الآن</p>
  </div>

  {/* الزرار والإحصائيات */}
  <div className="flex flex-col items-center gap-6">
    {/* أزرار التحميل */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <div className="border-2 border-[#FFEB00] w-[250px] sm:w-[280px] h-[64px] rounded-[30px] flex items-center">
        <a className="flex justify-around w-full p-2" href="#">
          <p className="text-white text-[16px] sm:text-[18px] font-bold whitespace-nowrap">ابدأ الآن على App Store</p>
          <img src={imgApp} alt="App Store" className="w-6 sm:w-8" />
        </a>
      </div>

      <div className="border-2 border-[#FFEB00] w-[250px] sm:w-[280px] h-[64px] rounded-[30px] flex items-center">
        <a className="flex justify-around w-full p-2" href="#">
          <p className="text-white text-[16px] sm:text-[18px] font-bold whitespace-nowrap">ابدأ الآن على Google Play</p>
          <img src={imgGoogle} alt="Google Play" className="w-6 sm:w-8" />
        </a>
      </div>
    </div>

    <hr className="w-full border-white opacity-30" />

    {/* الإحصائيات */}
    <div className="flex flex-col sm:flex-row justify-around items-center gap-6">
      <div className="text-center">
        <h1 className="text-white font-bold text-[40px] sm:text-[60px]">5 آلاف</h1>
        <p className="text-white font-bold text-[20px] sm:text-[25px]">مستخدمين راضين عن الخدمة</p>
      </div>

      <div className="text-center">
        <h1 className="text-white font-bold text-[40px] sm:text-[60px]">90%</h1>
        <p className="text-white font-bold text-[20px] sm:text-[25px]">مستخدمين نشيطين</p>
      </div>
    </div>
  </div>
</section>

  );
};

export default GoogleAppStore;
