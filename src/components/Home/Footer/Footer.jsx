import React from 'react';
import logo from '../../../assets/images/logoy.svg';
import githubIcon from '../../../assets/images/logo-github.svg';
import internetIcon from '../../../assets/images/internet.svg';
import facebookIcon from '../../../assets/images/facebook.svg';
import twitterIcon from '../../../assets/images/logo-twitter.svg';

const Footer = () => {
  return (
    <footer className='w-screen overflow-hidden'>
      <div className="w-full bg-gradient-to-r from-[#16423C] to-[#566319] px-6 text-white py-10 dark:bg-[#282828]">
        <div>
          {/* Main content section */}
          <div className="flex justify-center lg:justify-end lg:relative lg:top-12 mb-8 lg:mb-0">
              <img className="w-[130px] h-[65px] lg:ml-20" src={logo} alt="شعار راصد" />
            </div>
          <div className="flex flex-col lg:flex-row justify-between">
            {/* Links section - Stacks on mobile, side by side on tablet */}
            <div className="flex flex-col sm:flex-row text-center sm:text-right gap-8 sm:gap-16 lg:gap-24 md:mr-36 lg:mr-32 mb-8 lg:mb-0">
              <div>
                <h2 className="text-lg font-bold mb-5">المصادر</h2>
                <ul className="space-y-2 font-medium text-[16px]">
                  <li className="dark:hover:text-[#79D7BE]"><a href="#">الوصول للخدمة</a></li>
                  <li className="dark:hover:text-[#79D7BE]"><a href="#">مسؤولية الاستخدام</a></li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold mb-5">ابدأ</h2>
                <ul className="space-y-2">
                  <li className="dark:hover:text-[#79D7BE]"><a href="#">الخدمات</a></li>
                  <li className="dark:hover:text-[#79D7BE]"><a href="#">كيفية الاستخدام</a></li>
                  <li className="dark:hover:text-[#79D7BE]"><a href="#">المساعدة</a></li>
                  <li className="dark:hover:text-[#79D7BE]"><a href="#">الدعم الفني</a></li>
                  <li className="dark:hover:text-[#79D7BE]"><a href="#">الآراء</a></li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold mb-5">المجتمع</h2>
                <ul className="space-y-2">
                  <li className="dark:hover:text-[#79D7BE]"><a href="#">عنا</a></li>
                  <li className="dark:hover:text-[#79D7BE]"><a href="#">إرشادات</a></li>
                  <li className="dark:hover:text-[#79D7BE]"><a href="#">كيف تبدأ</a></li>
                </ul>
              </div>
            </div>

            {/* Logo section */}
            
          </div>

          {/* Bottom section */}
          <div className="mt-8 pt-4 flex flex-col lg:flex-row items-center justify-around gap-6 lg:gap-0">
            {/* Social icons */}
            <div className="flex gap-5">
              <a href="#"><img src={githubIcon} alt="GitHub" /></a>
              <a href="#"><img src={internetIcon} alt="Website" /></a>
              <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
              <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
            </div>

            {/* Links */}
            <div>
              <ul className="flex flex-wrap justify-center gap-3 sm:gap-5 text-sm sm:text-base">
                <li className="dark:hover:text-[#79D7BE]"><a href="#" className="text-gray-300">الموقع</a></li>
                <li className="dark:hover:text-[#79D7BE]"><a href="#" className="text-gray-300">الأمن والامتثال</a></li>
                <li className="dark:hover:text-[#79D7BE]"><a href="#" className="text-gray-300">سياسة الخصوصية</a></li>
                <li className="dark:hover:text-[#79D7BE]"><a href="#" className="text-gray-300">شروط الخدمة</a></li>
              </ul>
            </div>

            {/* Copyright */}
            <div>
              <p className="text-sm lg:relative lg:right-16 hover:text-[#2E5077] dark:hover:text-[#79D7BE]">© 2025 راصد، كل الحقوق محفوظة</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;