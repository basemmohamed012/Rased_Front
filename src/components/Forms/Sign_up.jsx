import React from 'react';
import backImg from '../../assets/images/G.svg';
import cradImg from '../../assets/images/CardForm.svg';
import vectorss from '../../assets/images/Go.svg';
import XMLID_834 from '../../assets/images/F.svg';
import { useNavigate } from "react-router-dom";

const Sign_up = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        className="hidden lg:block absolute lg:right-[100px] lg:bottom-10 inset-0 w-full h-full object-cover z-0"
        src={backImg}
        alt="background"
      />

      {/* Overlay content */}
      <div className="relative z-10 flex items-center justify-center lg:gap-28 lg:justify-between flex-wrap w-full h-full px-4 md:px-10 py-10">
        {/* Right: Form */}
        <form
          className="
            flex flex-col gap-4 
            w-full max-w-[398px] 
            border-2
            bg-white relative sm:top-40 lg:top-10 
            rounded-tr-[40px] md:rounded-tr-[100px] 
            rounded-bl-[40px] md:rounded-bl-[100px]
            p-6 
            mx-auto
            lg:ml-[120px]
          "
        >
          <div className="flex flex-col gap-4 items-center">
          <div>
                <h2 className="text-[22px] font-bold text-[rgba(0,0,0,1)] ">تسجيل الدخول</h2>
                <p className="text-[14px] text-[rgba(154, 152, 152, 1)] tracking-tighter ml-6">
                  قم بالتسجيل الان أو العودة الي 
                  <a onClick={() => navigate("/")} className="font-bold cursor-pointer">
                    <span className="font-bold"> الصفحة الرئسية</span>
                  </a>
                </p>
              </div>

            <div className="flex flex-col w-[274px] gap-1">
              <label className="font-bold text-[14px]" htmlFor="text">الاسم بالكامل</label>
              <input type="text" className="p-2 rounded border-2 border-[#FFD70E] focus:outline-none" />
            </div>

            <div className="flex flex-col w-[274px] gap-1">
              <label className="font-bold text-[14px]" htmlFor="email">البريد الإلكتروني</label>
              <input type="email" className="p-2 rounded border-2 focus:outline-none" />
            </div>

            <div className="flex flex-col w-[274px] gap-1">
              <label className="font-bold text-[14px]" htmlFor="password">كلمة المرور</label>
              <input type="password" className="p-2 rounded border-2 focus:outline-none" />
            </div>

            <button className="w-[274px] h-[48px] rounded-[5px] bg-[#16423C] hover:text-[#16423C] hover:border-2 hover:border-[#16423C] hover:bg-white text-white text-sm font-semibold transition duration-200">
              تسجيل
            </button>

            <div className="w-full relative mt-4 flex items-center justify-center">
              <hr className="w-[60px] border-t border-[#9A9898]" />
              <span className="px-4 text-[#9A9898]">أو المتابعة باستخدام</span>
              <hr className="w-[60px] border-t border-[#9A9898]" />
            </div>

            <div className="flex justify-center w-[274px] gap-4">
              <button className="border-2 border-[#16423C] w-[215px] h-12 py-2 px-4 rounded-lg flex items-center justify-center">
                <img src={vectorss} alt="Vector" />
              </button>
              <button className="border-2 border-[#16423C] w-[215px] h-12 py-2 px-4 rounded-lg flex items-center justify-center">
                <img src={XMLID_834} alt="Vector" />
              </button>
            </div>

            <div className="text-center mt-2">
              <p className="text-black text-[14px] font-bold">
                لديك حساب بالفعل؟{' '}
                <span onClick={() => navigate('/login')} className="text-[#9A9898] font-semibold cursor-pointer">
                  تسجيل دخول
                </span>
              </p>
            </div>
          </div>
        </form>

        {/* Left: Image (hidden on small screens) */}
        <div className="hidden lg:flex flex-col justify-center items-center w-[526px] mt-[130px] ml-[100px] h-[300px]">
          <img src={cradImg} alt="card" className="w-[456px] h-[253px]" />
          <p className="text-white font-bold text-center mt-4">تحليلات موثوقة تقودك لاتخاذ القرار المالي الصحيح.</p>
        </div>
      </div>

      {/* Footer note */}
      <div className="absolute bottom-4 w-full text-center px-4 z-20">
        <p className="text-[10px] font-extrabold leading-snug text-[#878383]">
          من خلال التسجيل بالخدمات المذكورة أعلاه فإنك توافق على
          <a className="text-[#000] font-bold underline mx-1" href="#">شروط الخدمة</a>
          الخاصة بنا وتقر بـ
          <a className="text-[#000] font-bold underline mx-1" href="#">سياسة الخصوصية</a>
          الخاصة بنا التي تصف كيفية تعاملنا مع بياناتك الشخصية
        </p>
      </div>
    </div>
  );
};

export default Sign_up;
