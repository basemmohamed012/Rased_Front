import React from 'react'
import { FaLock, FaWallet, FaPen, FaUsers } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import nazra from '../../assets/images/nazra.svg'
import wallet from '../../assets/images/wallet.svg'
import arow from '../../assets/images/arowblack.svg'
import penwa from '../../assets/images/penWa.svg'
import sharewa from '../../assets/images/sharewa.svg'

const SidebarWallet = () => {
  return (
    <div className="w-[259px]  h-[870px] relative top-[10px] right-[40px] bg-gradient-to-b from-[#415C36] to-[#506F66] text-white rounded-2xl p-4 flex flex-col gap-4">
      
      {/* نظرة عامة */}
      <div className="flex items-center gap-2 mr-5 mt-10">
      <img src={nazra} alt="" />
        <span className='text-white text-[16px] font-bold'>نظرة عامة</span>
       
      </div>

      {/* زر المحافظ */}
      <div className="relative right-4">
        <button className="w-[196px] h-[36px] rounded-[15px] flex items-center justify-between bg-white text-black px-3 py-2">
          <div className='flex gap-2'>
            <img src={wallet} alt="" />
          <span className='font-bold text-[14px]'>محافظي</span>
          </div>
          <img src={arow} alt="" />
          
        </button>
      </div>

      {/* المعاملات */}
      <div className="flex items-center gap-2 mt-8 mr-4">
        <div className='flex gap-2'>
            <img src={nazra} alt="" />
        <span className='font-bold text-[14px]'>المعاملات</span>
        
        </div>
      </div>

      {/* إنشاء محفظة جديدة */}
      <div className="flex items-center justify-between text-sm cursor-pointer mt-4 mr-4">
      <button>
      <div className='flex gap-2'>
        <img src={penwa} alt="" />
      <span className='font-bold text-[14px]'>إنشاء محفظة جديدة</span>
      
      </div>
      </button>
      </div>

      {/* إنشاء محفظة مشتركة */}
      <div className="flex items-center justify-between text-sm cursor-pointer mt-2 mr-4">
        <button>
        <div className='flex gap-2'>
            <img src={sharewa} alt="" />
        <span className='font-bold text-[14px]'>إنشاء محفظة مشتركة</span>
        
        </div>
        </button>
      </div>
    </div>
  )
}

export default SidebarWallet
