import React from 'react'
import { useNavigate } from 'react-router-dom'
const MangeFriends = () => {
  const navigate = useNavigate();
 const handleClick = () => {
  navigate('/addgoal');
}

  return (
    <div>
      <div className='w-[1020px] h-[54px] flex justify-between '>
        <div className='space-y-4'>
            <h1 className="font-bold text-[26px] leading-[100%] tracking-[0%] font-[Tajawal]">
                 الاصدقاء
                </h1>
            <p className="text-[#8D8A8A] font-normal text-[16px] leading-[100%] tracking-[0%] font-[Tajawal]"
>
               تحكم في شبكات التواصل الخاصة بك و جميع طلبات الصداقة
            </p>
        </div>
        <div>
            <button
            onClick={handleClick}
            className='w-[180px] h-[44px] bg-[#16423C]  gap-[10px] rounded-[10px] pt-[10px] pr-[32px] pb-[10px] pl-[32px]' 
            >
               <p className='text-white text-[16px] font-bold'>
                  +  اضافة صديق 
               </p>
            </button>
        </div>
      </div>
    </div>
  )
}

export default MangeFriends
