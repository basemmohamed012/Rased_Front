import React from 'react';
import increse from '../../../../../assets/images/increase.svg'
import dec from '../../../../../assets/images/_40.svg'
import inc from '../../../../../assets/images/Inc.svg'

const Card = ({ title, category, description, percentage, icon, percentageColor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg px-6 py-4 flex gap-16  items-center text-center w-[325px] h-[179px]">
     <div className='space-y-2 text-right'>
       <p className="text-[22px] text-black font-bold ">{title}</p>
      <div className="text-[45px] font-bold my-2">{category}</div>
      <div className=''>
        <span className={percentageColor}>{percentage}</span>
      <span className='text-[#A6A6A6] text-[8px] font-bold mr-2'>{description}</span>
      </div>
          
     </div>
      
        {icon}
        
      
    </div>
  );
};

export default function StatsCards() {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10 rtl">
      <Card
        title="أعلي مصاريف"
        category="المنزل"
        description="من كل المصاريف"
        percentage="+32.4%"
        icon={<img src={increse} />}
        percentageColor="text-green-500"
      />
      <Card
        title="الأعلي نموا"
        category="التسوق"
        description="أعلي من الشهر الماضي"
        percentage="+10%"
        icon={<img src={inc} />}
        percentageColor="text-red-500"
      />
      <Card
        title="الأقل نموا"
        category="الترفيه"
        description="أقل من الشهر الماضي"
        percentage="-11%"
        icon={<img src={dec} />}
        percentageColor="text-green-500"
      />
    </div>
  );
}
