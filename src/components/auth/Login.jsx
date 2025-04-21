import React from 'react';
import backImg from '../../assets/images/G.svg';
import cradImg from '../../assets/images/CardForm.svg';
import vectorss from '../../assets/images/Go.svg';
import XMLID_834 from '../../assets/images/F.svg';
import { useNavigate } from "react-router-dom";

const Login = () => {
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
      <div className="relative z-10 flex flex-col  lg:gap-48 lg:flex-row items-center justify-center min-h-screen px-4 py-8">
        {/* Form */}
        <form className="bg-white border-2 rounded-tr-[100px] rounded-bl-[100px] shadow-lg px-6 py-8 w-full max-w-[378px] ">
          
          <div className='flex flex-col items-center gap-4 mb-6'>
            <h2 className="text-2xl font-bold text-black text-right">تسجيل الدخول</h2>
            <p className="text-md font-tagwal text-gray-500 tracking-tighter">
            أهلا وسهلا من جديد
            </p>
          </div>

          <div className="mb-4 mr-7 w-[274px] text-right">
            <label htmlFor="email" className="font-bold text-sm block mb-1">البريد الإلكتروني</label>
            <input
              id="email"
              type="email"
              className="w-full p-2 rounded border-2 border-graycolor focus:border-maincolor"
            />
          </div>

          <div className="mb-4 w-[274px] mr-7 text-right">
            <label htmlFor="password" className="font-bold text-sm block mb-1">كلمة المرور</label>
            <input
              id="password"
              type="password"
              className="w-full p-2 rounded border-2 border-graycolor focus:border-maincolor"
            />
            <p
              onClick={() => navigate('/pass')}
              className="text-sm font-bold text-right mt-1 cursor-pointer"
            >
              هل نسيت كلمة السر ؟
            </p>
          </div>

          <button className="mt-4 w-[274px] mr-7 h-12 bg-[#16423C] text-white font-semibold rounded hover:bg-white hover:text-[#16423C] hover:border-[#16423C] hover:border-2 transition-colors duration-200">
            تسجيل
          </button>

          {/* Divider */}
          {/* <div className="w-full relative mt-4 flex items-center justify-center">
              <hr className="w-[60px] border-t border-[#9A9898]" />
              <span className="px-4 text-[#9A9898]">أو المتابعة باستخدام</span>
              <hr className="w-[60px] border-t border-[#9A9898]" />
            </div> */}

          {/* Social */}
          {/* <div className="flex w-[274px] mr-7 justify-center gap-4 mb-4">
            <button className="flex items-center justify-center border-2 border-[#16423C] rounded-lg w-full py-2">
              <img src={vectorss} alt="Google" className="h-6" />
            </button>
            <button className="flex items-center justify-center border-2 border-[#16423C] rounded-lg w-full py-2">
              <img src={XMLID_834} alt="Facebook" className="h-6" />
            </button>
          </div> */}

          {/* Signup link */}
          <p className="mt-6 text-center text-sm font-bold">
            ليس لديك حساب؟
            <span
              onClick={() => navigate('/signup')}
              className="text-[#9A9898] font-semibold cursor-pointer underline ml-1"
            >
              انشاء حساب
            </span>
          </p>
        </form>

        {/* Side Image - تظهر فقط في lg وما فوق */}
        <div className="hidden  lg:flex flex-col items-center justify-center ml-12">
          <img src={cradImg} alt="card" className="w-[456px] h-[253px] " />
          <p className="text-white font-bold text-center mt-4">
            تحليلات موثوقة تقودك لاتخاذ القرار المالي الصحيح.
          </p>
        </div>
      </div>

      {/* Footer note */}
      <div className="absolute bottom-4 w-full text-center px-4 z-20">
        {/* <p className="text-[10px] font-extrabold leading-snug text-[#878383]">
          من خلال التسجيل بالخدمات المذكورة أعلاه فإنك توافق على
          <a className="text-[#000] font-bold underline mx-1" href="#">شروط الخدمة</a>
          الخاصة بنا وتقر بـ
          <a className="text-[#000] font-bold underline mx-1" href="#">سياسة الخصوصية</a>
          الخاصة بنا التي تصف كيفية تعاملنا مع بياناتك الشخصية
        </p> */}

        <p className=''>كل الحقوق محفوظة لدي راصــــد &copy; 2025</p>
      </div>
      </div>
       
  );
};

export default Login;
