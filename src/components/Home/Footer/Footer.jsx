import React from 'react';
import logo from '../../../assets/images/logoy.svg';
import githubIcon from '../../../assets/images/logo-github.svg';
import internetIcon from '../../../assets/images/internet.svg';
import facebookIcon from '../../../assets/images/facebook.svg';
import twitterIcon from '../../../assets/images/logo-twitter.svg';

const Footer = () => {
  return (
    <footer className='w-screen overflow-hidden'>
      <div className="w-full bg-gradient-to-r from-[#16423C] to-[#566319] px-6 text-white pb-10 pt-5 dark:bg-[#282828]">
        <div>

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
              <p className="text-sm lg:relative lg:right-16 ">© 2025 راصـــــد، كل الحقوق محفوظة</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;