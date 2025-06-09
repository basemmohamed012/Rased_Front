import React from 'react'
import { useNavigate } from 'react-router-dom'
const MangeBudget = () => {
  const navigate = useNavigate();
 const handleClick = () => {
  navigate('/budget-wallets', { state: { from: 'budget' } });
}

  return (
    <div>
      <div className='w-[1020px] h-[54px] flex justify-between '>
        <div className='space-y-4'>
            <h1 className="font-bold text-[26px] leading-[100%] tracking-[0%] font-[Tajawal]">
                إدارة الميزانية
                </h1>
            <p className="text-[#8D8A8A] font-normal text-[16px] leading-[100%] tracking-[0%] font-[Tajawal]"
>
                تتبع وتحكم في ميزانيتك بكفاءة فائقة
            </p>
        </div>
        <div>
            <button
            onClick={handleClick}
            className='bg-maincolor rounded-md px-6 py-2 hover:bg-secondcolor transition-colors duration-300' 
            >
               <p className='text-white text-md font-semibold'>
                 + إضافة ميزانية
               </p>
            </button>
        </div>
      </div>
    </div>
  )
}

export default MangeBudget
