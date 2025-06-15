import React, { useState, useEffect, useRef } from 'react';
import nazra from '../../assets/images/nazra.svg';
import wallet from '../../assets/images/wallet.svg';
import arow from '../../assets/images/arowblack.svg';
import arowwhite from '../../assets/images/arrowwhite.svg';
import wallet1 from '../../assets/images/wallet1.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { Target, Rocket, StarsIcon, DollarSignIcon, Goal, Save, TransgenderIcon } from 'lucide-react';


const SidebarWallet = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navigated, setNavigated] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isWalletPage = location.pathname === '/wallets' || location.pathname === '/details' || location.pathname === '/detailsSharedWallet'  || location.pathname ==='/showWalletIndividual';


  const handleExpenses = () => {
    navigate('/expenses');
  }

  const handleBudgetWallets = () => {
    navigate('/budget');
  }

  const handleIncomeWallets = () => {
    navigate('/income');
  }

  const handleProfileClick = () => {
    navigate('/dashboard');
  };

  const ShowWalletIndividual = () => {
    navigate('/personal-wallets');
  };

  const ShowSharedWallet = () => {
    navigate('/shared-wallets');
  };

  const handleAIExpenses = () => {
    navigate('/expense-cv');
  }

  const handleGoals = () => {
    navigate('/goals');
  }

  const handleSavings = () => {
    navigate('/savings');
  }

  const handleTransactions = () => {
    navigate('/transactions');
  }


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/wallets' &&
        location.pathname !== '/showWalletIndividual' &&
        location.pathname !== '/ShowSharedWallet') {
      setDropdownOpen(false);
    }
  }, [location.pathname]);
  

  return (
    <div>
      <div className="w-[259px] h-[2000px] relative top-[10px] right-[40px] bg-gradient-to-b from-[#415C36] to-[#506F66] text-white rounded-2xl p-4 flex flex-col gap-4">

      {/* نظرة عامة */}
      <button onClick={handleProfileClick}>
        <div className={`flex items-center gap-2 mr-2 mt-10 px-2 py-2 rounded-[15px] transition-all duration-200 ${
          location.pathname === '/dashboard' ? 'w-[139px] h-[52px] border-2 rounded-[30px] bg-white text-black' : ''
        }`}>
          <img src={nazra} alt="نظرة عامة" />
          <span className="text-[16px] font-bold">نظرة عامة</span>
        </div>
      </button>

      {/* المحافظ */}
      <div
        className={`relative right-1 transition-all duration-300 ${dropdownOpen ? 'mb-28' : ''}`}
        ref={dropdownRef}
      >
        <button
          onClick={() => {
            if (location.pathname !== '/wallets' && !navigated) {
            
              setNavigated(true);
            }
            setDropdownOpen(!dropdownOpen);
          }}
          className={`w-[196px] h-[36px] rounded-[15px] flex items-center justify-between px-3 py-2 transition-all duration-300 ${
            (location.pathname === '/wallets' || 
              location.pathname === '/details' || 
              location.pathname === '/detailsSharedWallet'
              || location.pathname ==='/showWalletIndividual'      
            )
      ? 'bg-white text-black' : 'text-white'
          }`}
        >
          <div className="flex gap-2 items-center">
            <img src={isWalletPage  ? wallet : wallet1  } alt="محافظي" />
            <span className="font-bold text-[14px]">محافظي</span>
          </div>
          <img
            src={isWalletPage ? arow : arowwhite}
            alt="سهم"
            className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {dropdownOpen && (
          <div className="absolute top-full mt-1 w-[196px] bg-white rounded-[10px] shadow-lg py-2 z-10">
              
              {/* <button
              onClick={() => {
                Wallets(); 
                setDropdownOpen(true);
              }}
              className={`w-full text-right text-[16px] px-4 py-2 hover:bg-gray-100 ${
                location.pathname === '/wallets'
                  ? 'bg-white text-black font-bold'
                  : 'text-black'
              }`}
            >
              كل محافظي
            </button> */}

            <button
              onClick={() => {
                ShowWalletIndividual();
                dropdownOpen(true);
              }}
              className={`w-full text-right text-[16px] px-4 py-2 hover:bg-gray-100 ${
                location.pathname === '/showWalletIndividual'
                  ? 'bg-white text-black font-bold'
                  : 'text-black'
              }`}
            >
              محافظي الشخصية
            </button>

            <button
              onClick={() => {
                ShowSharedWallet();
                dropdownOpen(true);
              }}
              className={`w-full text-right text-[16px] px-4 py-2 hover:bg-gray-100 ${
                location.pathname === '/ShowSharedWallet'
                  ? 'bg-white text-black font-bold'
                  : 'text-black'
              }`}
            >
              محافظي المشتركة
            </button>
          </div>
        )}
      </div>

      {/* المعاملات */}
      {/* <div className="flex items-center gap-2 mt-4 mr-4">
        <div className="flex gap-2">
          <img src={nazra} alt="المعاملات" />
          <span className="font-bold text-[14px]">المعاملات</span>
        </div>
      </div> */}

      <div className="flex items-center gap-2 mt-4 mr-4">
        <div onClick={handleBudgetWallets} className="flex gap-2 cursor-pointer">
          <Target size={18} className='text-yellow-300' />
          <span className="font-bold text-[14px]">الميزانيـــــات</span>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4 mr-4">
        <div onClick={handleIncomeWallets} className="flex gap-2 cursor-pointer">
          <Rocket size={18} className='text-yellow-300' />
          <span className="font-bold text-[14px]">مصــــادر الدخـــــــــل</span>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4 mr-4">
        <div onClick={handleExpenses} className="flex gap-2 cursor-pointer">
          <DollarSignIcon size={18} className='text-yellow-300' />
          <span className="font-bold text-[14px]">المصروفــــــات</span>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4 mr-4">
        <div onClick={handleGoals} className="flex gap-2 cursor-pointer">
          <Goal size={18} className='text-yellow-300' />
          <div className='flex justify-between gap-3 items-center'>
            <span className="font-bold text-[14px]">الأهــــــــداف</span>
            {/* <span className='text-error text-[9px] rounded-md bg-gradient-to-r from-gray-100 to-gray-300 border-2 border-maincolor py-1 px-2 font-semibold'>
              قريبـًـــــــــا
            </span> */}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4 mr-4">
        <div onClick={handleSavings} className="flex gap-2 cursor-pointer">
          <Save size={18} className='text-yellow-300' />
          <div className='flex justify-between gap-3 items-center'>
            <span className="font-bold text-[14px]">المدّخـــــــرات</span>
            {/* <span className='text-error text-[9px] rounded-md bg-gradient-to-r from-gray-100 to-gray-300 border-2 border-maincolor py-1 px-2 font-semibold'>
              قريبـًـــــــــا
            </span> */}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4 mr-4">
        <div onClick={handleTransactions} className="flex gap-2 cursor-pointer">
          <TransgenderIcon size={18} className='text-yellow-300' />
          <div className='flex justify-between gap-3 items-center'>
            <span className="font-bold text-[14px]">التحويـــــلات المــــالية</span>
            {/* <span className='text-error text-[9px] rounded-md bg-gradient-to-r from-gray-100 to-gray-300 border-2 border-maincolor py-1 px-2 font-semibold'>
              قريبـًـــــــــا
            </span> */}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4 mr-4">
        <div
          onClick={handleAIExpenses}
          className="relative flex items-center gap-2 px-4 py-2 cursor-pointer rounded-lg 
                    border-2 border-white
                    bg-gradient-to-r from-maincolor to-teal-500 
                    shadow-lg shadow-green-500/50 transition-all duration-300 
                    hover:scale-105 hover:shadow-xl hover:shadow-teal-400/60"
        >
          {/* Magic Glow Animation */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400 to-green-500 opacity-20 blur-md"></div>

          {/* Icon & Text */}
          <StarsIcon size={22} className="text-yellow-300 drop-shadow-md animate-pulse" />
          <span className="font-bold text-[14px] text-white tracking-wide">
             مصروف جديد بنقرة واحدة
          </span>
        </div>
      </div>

      {/* إنشاء محفظة جديدة */}
      {/* <div className="flex items-center justify-between text-sm cursor-pointer mt-4 mr-4">
        <button>
          <div className="flex gap-2">
            <img src={penwa} alt="إنشاء محفظة جديدة" />
            <span className="font-bold text-[14px]">إنشاء محفظة جديدة</span>
          </div>
        </button>
      </div> */}

      {/* إنشاء محفظة مشتركة */}
      {/* <div className="flex items-center justify-between text-sm cursor-pointer mt-2 mr-4">
        <button>
          <div className="flex gap-2">
            <img src={sharewa} alt="إنشاء محفظة مشتركة" />
            <span className="font-bold text-[14px]">إنشاء محفظة مشتركة</span>
          </div>
        </button>
      </div> */}

      </div>
    </div>
  );
};

export default SidebarWallet;
