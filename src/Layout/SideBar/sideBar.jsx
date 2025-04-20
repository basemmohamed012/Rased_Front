import React, { useState } from 'react';
import persons from '../../assets/images/person.png';
import arrows from "../../assets/images/arowheader.svg";
import search from '../../assets/images/search.svg';
import logolight from '../../assets/images/logo.png';
import logodark from '../../assets/images/logo1.png';
import prof from '../../assets/images/personprofile.svg';
import profdark from '../../assets/images/iconamoon_profile-fill.svg';
import arrowvector from '../../assets/images/arowvector.svg';
import arrowgreen from '../../assets/images/arow_green.svg';
import material from '../../assets/images/material-symbols_money-bag.svg';
import monny from '../../assets/images/money-bag.svg';
import man from '../../assets/images/man.svg';
import add_friend from '../../assets/images/add-friends-filled.svg';
import icon_par from '../../assets/images/icon-park-solid_market-analysis.svg';
import iconn_par from '../../assets/images/iconn-park-solid_market-analysis.svg';
import fluent from '../../assets/images/fluent_premium-person-16-filled.svg';
import fluentt from '../../assets/images/fluent_premium-person-17-filled.svg';
import arrowwhite from '../../assets/images/arrowwhite.svg'
import DarkModeToggle from '../Navbar/DarkModeToggle';



const SideBar = () => {
  const [openMenus, setOpenMenus] = useState(new Set());
  const [timeDropdowns, setTimeDropdowns] = useState({});

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
    
    <div>
      {/* Header */}
      <div className="flex mr-[1050px] items-center justify-between p-3 rounded-lg w-full max-w-md">
        <div className="flex items-center space-x-3 mr-3">
          <div className="relative">
            <div>
              <img src={persons} alt="الصورة الشخصية" className="w-10 h-10 rounded-full ml-4" />
            </div>
            <div className="relative bottom-5 left-6 block dark:hidden">
              <img src={arrows} alt="" />
            </div>
            <div className="relative bottom-5 left-6 hidden dark:block">
              <img src={arrowwhite} alt="" />
            </div>
          </div>
          <DarkModeToggle />
          <div className="flex items-center bg-gray-200 relative right-7 px-3 py-2 rounded-[20px] w-[183px] h-[42px]">
            <img className="ml-4" src={search} alt="" />
            <input type="search" placeholder="ابحث هنا" className="bg-transparent outline-none w-full text-gray-600 placeholder-gray-500 text-right" />
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-[193px] bg-white p-4 dark:bg-black">
          <aside>
            <div className="relative right-20 bottom-2 mb-7">
                      <img className="w-[100px] h-[50px] block dark:hidden" src={logolight} alt="" />
                      <img className="w-[100px] h-[50px] hidden dark:block" src={logodark} alt="" />
                    </div>
            
                    <div className={`relative inline-block text-right ${openMenus.has('profile') ? 'mb-32' : 'mb-4'}`}>
                      <div>
                        <a onClick={() => toggleMenu("profile")} aria-expanded={openMenus.has("profile")} aria-haspopup="true">
                          <div className="flex cursor-pointer">
                            <div className="relative right-4">
                              <img className="block dark:hidden" src={prof} alt="" />
                              <img className="hidden dark:block" src={profdark} alt="" />
                            </div>
                            <div className="relative right-10">
                              <p className="text-[#2E5077] font-bold text-[15px] dark:text-[#79D7BE]">الحساب الشخصي</p>
                            </div>
                            <div>
                              <img className={`block dark:hidden relative right-[75px] top-2 transition-transform ${openMenus.has('profile') ? 'rotate-180' : ''}`} src={arrowvector} alt="" />
                              <img className={`hidden dark:block relative right-[70px] top-1 transition-transform ${openMenus.has('profile') ? 'rotate-180' : ''}`} src={arrowgreen} alt="" />
                            </div>
                          </div>
                        </a>
                      </div>
            
                      <div className={`origin-top-right absolute right-10 mt-2 w-56 ${openMenus.has("profile") ? "block" : "hidden"} z-10`} role="menu" aria-orientation="vertical">
                        <div className="py-1 text-[14px] font-medium text-black dark:text-white" role="none">
                          <a href="../pages/profile.html" className="block px-4 py-2 hover:text-[#2E5077] dark:hover:text-[#79D7BE]">ملفي الشخصي</a>
                          <a href="#" className="block px-4 py-2 hover:text-[#2E5077] dark:hover:text-[#79D7BE]">اعدادات الحساب</a>
                          <a href="#" className="block px-4 py-2 hover:text-[#2E5077] dark:hover:text-[#79D7BE]">الامان و الخصوصية</a>
                        </div>
                      </div>
                    </div>
            
                    <div className={`relative inline-block text-right ${openMenus.has('finance') ? 'mb-52' : 'mb-4'}`}>
                      <div>
                        <a onClick={() => toggleMenu("finance")} aria-expanded={openMenus.has("finance")} aria-haspopup="true">
                          <div className="flex justify-around cursor-pointer">
                            <img className="relative left-1 right-3 block dark:hidden" src={material} alt="" />
                            <img className="relative left-1 right-3 hidden dark:block" src={monny} alt="" />
                            <p className="text-[#2E5077] relative right-7 font-bold text-[15px] whitespace-nowrap dark:text-[#79D7BE]">المالية وادارة الاموال</p>
                            <img className={`relative right-[55px] block dark:hidden transition-transform ${openMenus.has('finance') ? 'rotate-180' : ''}`} src={arrowvector} alt="" />
                            <img className={`relative right-[55px] hidden dark:block transition-transform ${openMenus.has('finance') ? 'rotate-180' : ''}`} src={arrowgreen} alt="" />
                          </div>
                        </a>
                      </div>
            
                      <div className={`origin-top-right absolute right-10 mt-2 w-56 ${openMenus.has("finance") ? "block" : "hidden"} z-10`} role="menu" aria-orientation="vertical">
                        <div className="py-1 text-[14px] font-medium text-black dark:text-white" role="none">
                          <a href="#" className="block px-4 py-2 hover:text-[#2E5077] dark:hover:text-[#79D7BE]">محافظتي المالية</a>
                          <a href="#" className="block px-4 py-2 hover:text-[#2E5077] dark:hover:text-[#79D7BE]">الميزانيات</a>
                          <a href="#" className="block px-4 py-2 hover:text-[#2E5077] dark:hover:text-[#79D7BE]">النفقات</a>
                          <a href="#" className="block px-4 py-2 hover:text-[#2E5077] dark:hover:text-[#79D7BE]">التحويلات المالية</a>
                          <a href="#" className="block px-4 py-2 hover:text-[#2E5077] dark:hover:text-[#79D7BE]">المدخرات و الديون</a>
                        </div>
                      </div>
                    </div>
            
                    <div className={`relative inline-block text-right ${openMenus.has('friends') ? 'mb-32' : 'mb-4'}`}>
                      <div>
                        <a onClick={() => toggleMenu("friends")} aria-expanded={openMenus.has("friends")} aria-haspopup="true">
                          <div className="flex cursor-pointer">
                            <div className="relative top-1 right-3 w-5">
                              <img className="block dark:hidden" src={man} alt="" />
                            </div>
                            <div className="relative top-1 left-2 w-5">
                              <img className="hidden dark:block" src={add_friend} alt="" />
                            </div>
                            <div className="relative right-4">
                              <p className="text-[#2E5077] font-bold text-[15px] whitespace-nowrap dark:text-[#79D7BE]">الاصدقاء و المجتمع</p>
                            </div>
                            <div className="relative right-[60px] w-10 top-2">
                              <img className={`block dark:hidden relative left-4 transition-transform ${openMenus.has('friends') ? 'rotate-180' : ''}`} src={arrowvector} alt="" />
                              <img className={`hidden dark:block relative left-4 transition-transform ${openMenus.has('friends') ? 'rotate-180' : ''}`} src={arrowgreen} alt="" />
                            </div>
                          </div>
                        </a>
                      </div>
            
                      <div className={`origin-top-right absolute right-10 mt-2 w-56 ${openMenus.has("friends") ? "block" : "hidden"} z-10`} role="menu" aria-orientation="vertical">
                        <div className="py-1 text-[14px] font-medium text-black dark:text-white" role="none">
                          <a href="#" className="block px-4 py-2 hover:text-[#2E5077] dark:hover:text-[#79D7BE]">قائمة الاصدقاء</a>
                          <a href="#" className="block px-4 py-2 hover:text-[#2E5077] dark:hover:text-[#79D7BE]">طلبات الصداقة</a>
                          <a href="#" className="block px-4 py-2 hover:text-[#2E5077] dark:hover:text-[#79D7BE]">المجتمع و القصص الناجحة</a>
                        </div>
                      </div>
                    </div>
            
                    <div className={`relative inline-block text-right ${openMenus.has('reports') ? 'mb-32' : 'mb-4'}`}>
                      <div>
                        <a onClick={() => toggleMenu("reports")} aria-expanded={openMenus.has("reports")} aria-haspopup="true">
                          <div className="flex cursor-pointer">
                            <div className="relative top-1 right-3">
                              <img className="block dark:hidden" src={icon_par} alt="" />
                              <img className="hidden dark:block" src={iconn_par} alt="" />
                            </div>
                            <div className="relative right-8">
                              <p className="text-[#2E5077] font-bold text-[15px] whitespace-nowrap dark:text-[#79D7BE]">التقارير و التحليلات</p>
                            </div>
                            <div className="relative right-[84px] top-2">
                              <img className={`block dark:hidden relative left-4 transition-transform ${openMenus.has('reports') ? 'rotate-180' : ''}`} src={arrowvector} alt="" />
                              <img className={`hidden dark:block relative left-4 transition-transform ${openMenus.has('reports') ? 'rotate-180' : ''}`} src={arrowgreen} alt="" />
                            </div>
                          </div>
                        </a>
                      </div>
            
                      <div className={`origin-top-right absolute right-10 mt-2 w-56 ${openMenus.has("reports") ? "block" : "hidden"} z-10`} role="menu" aria-orientation="vertical">
                        <div className="py-1 text-[14px] font-medium text-black dark:text-white" role="none">
                          <a href="#" className="block px-4 py-2 hover:text-[#2E5077] dark:hover:text-[#79D7BE]">تقارير النفقات</a>
                          <a href="#" className="block px-4 py-2 hover:text-[#2E5077] dark:hover:text-[#79D7BE]">تحليل الميزانية</a>
                          <a href="#" className="block px-4 py-2 hover:text-[#2E5077] dark:hover:text-[#79D7BE]">لوحة التحكم</a>
                        </div>
                      </div>
                    </div>
            
                    <div className={`relative inline-block text-right ${openMenus.has('premium') ? 'mb-32' : 'mb-4'}`}>
                      <div>
                        <a onClick={() => toggleMenu("premium")} aria-expanded={openMenus.has("premium")} aria-haspopup="true">
                          <div className="flex cursor-pointer">
                            <div className="relative top-1 right-3">
                              <img className="block dark:hidden" src={fluent} alt="" />
                              <img className="hidden dark:block" src={fluentt} alt="" />
                            </div>
                            <div className="relative right-8">
                              <p className="text-[#2E5077] font-bold text-[15px] whitespace-nowrap dark:text-[#79D7BE]">مميزات اضافية</p>
                            </div>
                            <div className="relative right-[105px] top-2">
                              <img className={`block dark:hidden relative left-4 transition-transform ${openMenus.has('premium') ? 'rotate-180' : ''}`} src={arrowvector} alt="" />
                              <img className={`hidden dark:block relative left-4 transition-transform ${openMenus.has('premium') ? 'rotate-180' : ''}`} src={arrowgreen} alt="" />
                            </div>
                          </div>
                        </a>
                      </div>
            
                      <div className={`origin-top-right absolute right-10 mt-2 w-56 ${openMenus.has("premium") ? "block" : "hidden"} z-10`} role="menu" aria-orientation="vertical">
                        <div className="py-1 text-[14px] font-medium text-black dark:text-white" role="none">
                          <a href="#" className="block px-4 py-2 hover:text-[#2E5077] dark:hover:text-[#79D7BE]">الاشتراك في الخطط المدفوعة</a>
                          <a href="#" className="block px-4 py-2 hover:text-[#2E5077] dark:hover:text-[#79D7BE]">الاشعارات</a>
                          <a href="#" className="block px-4 py-2 hover:text-[#2E5077] dark:hover:text-[#79D7BE]">المساعد الذكي</a>
                          <a href="#" className="block px-4 py-2 hover:text-[#2E5077] dark:hover:text-[#79D7BE]">دعم العملاء</a>
                        </div>
                      </div>
                    </div>
          </aside>
        </div>

        {/* Main Content */}
        
      </div>
    </div>
  );
};

export default SideBar;