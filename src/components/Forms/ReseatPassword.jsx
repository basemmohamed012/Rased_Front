import React from 'react';
import backImg from '../../assets/images/G.svg';
import { useNavigate } from "react-router-dom";

const ReseatPass = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        className="hidden lg:block absolute lg:right-[120px] inset-0 w-full h-full object-cover z-0"
        src={backImg}
        alt="background"
      />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
        <form className="bg-white border-2 rounded-tr-[100px] rounded-bl-[100px] shadow-lg px-6 py-8 w-full max-w-md h-[400px] flex flex-col gap-6">
          <h2 className="text-[22px] mt-10 font-bold text-black text-center">إعادة تعيين كلمة المرور</h2>

          <div className="flex flex-col gap-2 text-right">
            <label htmlFor="email" className="font-bold text-sm">البريد الإلكتروني</label>
            <input
              id="email"
              type="email"
              className="border-2 p-2 rounded focus:outline-none"
            />
          </div>

          <button className="w-full h-[48px] rounded-[5px] bg-[#16423C] hover:bg-white hover:text-[#16423C] hover:border-2 hover:border-[#16423C] text-white text-sm font-semibold tracking-wide transition-colors duration-200">
            إعادة تعيين
          </button>

          <h4 className="font-bold text-sm text-center mt-5 whitespace-nowrap">
            أو قم بالعودة إلى؟{' '}
            <span
              className="text-[#9A9898] cursor-pointer"
              onClick={() => navigate('/login')}
            >
              تسجيل الدخول
            </span>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default ReseatPass;
