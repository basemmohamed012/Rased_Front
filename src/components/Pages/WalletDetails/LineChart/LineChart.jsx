import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import updated from '../../../../assets/images/updated.svg'
import deleted from '../../../../assets/images/deleted.svg'
const data = [
  { category: "", series1: null, series2: null }, 
  { category: "", series1: 2, series2: 2 },
  { category: 'الدخل قديماً', series1: 4.2, series2: 2.4 },

  // نقطة فراغ لزيادة المسافة
  { category: ' ', series1: null, series2: null }, 

  { category: 'الدخل حديثاً', series1: 0, series2: 0 },
  { category: '', series1: 0, series2: 0 },         
  { category: '', series1: 0, series2: 0 },
];


<XAxis dataKey="category" interval={0} />


// 5 قيم متساوية المسافة
const yTicks = [0, 1.25, 2.5, 3.75, 5];

// تنسيق التكسيت على محور Y
const formatTick = (value) => {
  if (value === 0) return '0 يوم';
  if (value <= 1.5) return 'يوم';
  if (value <= 2.7) return 'يومين';
  return `${Math.round(value)} أيام`;
};

export default function PerformanceChart() {
  return (
   <div className='w-[1020px] h-[590px]'>
     <div className='w-[1020px] h-[514px] rounded-[20px] bg-white shadow-none border-2 p-6' style={{ direction: 'rtl' }}>
      <div className='mb-10'>
        <h3 className="font-bold text-[22px] leading-[100%] mb-4 tracking-[0%] text-right">
        الأداء العام للمحفظة
        </h3>
        <p className="font-bold text-[#A6A6A6] text-[12px] leading-[100%] tracking-[0%] text-right">
        الاداء بالنسبة للوقت المحدد
        </p>
      </div>
      <div>
      <LineChart width={940} height={349} data={data} className='mx-auto'>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis
          domain={[0, 5]}
          ticks={yTicks}
          tickMargin={32}
          tickFormatter={formatTick}
          offset={10}  // تحريك القيم على محور Y قليلاً
        />
        <Tooltip formatter={(value) => `${value} أيام`} />
        <Line
          type="linear"
          dataKey="series1"
          stroke="#ef4444"
          dot={{ r: 4 }}
          connectNulls={true}
        />
        <Line
          type="linear"
          dataKey="series2"
          stroke="#3b82f6"
          dot={{ r: 4 }}
          connectNulls={true}
        />
      </LineChart>
      </div>
      <div className="flex gap-4 justify-end mt-16">
          {/* زر حذف المحفظة */}
  <button className="flex items-center w-[213px] h-[56px] gap-[10px] rounded-[15px] pt-4 pr-8 pb-4 pl-8 bg-[#E00A00] text-white ">
  <img src={deleted} alt="" />
    <span className="font-bold text-[18px] leading-[100%] tracking-[0%]">حذف المحفظة</span>
   
  </button>
  

  {/* زر تعديل معلومات المحفظة */}
  <button className="flex items-center w-[301px] h-[56px] gap-[10px] rounded-[15px] pt-4 pr-8 pb-4 pl-8 border-[1.5px]  border-[#16423C] text-[#16423C] ">\
    <img src={updated} alt="" />
    <span className="font-bold text-[18px] leading-[100%] tracking-[0%] whitespace-nowrap">تعديل معلومات المحفظة</span>
    
  </button>

{/* زر إضافة معاملة جديدة */}
<button className="flex items-center w-[246px] h-[56px] gap-[10px] rounded-[15px] pt-4 pr-8 pb-4 pl-8  bg-green-900 text-white font-bold text-sm">
<span className="text-xl">＋</span>
    <span className="font-bold text-[18px] leading-[100%] tracking-[0%] whitespace-nowrap">إضافة معاملة جديدة</span>
   
  </button>

</div>

    </div>
   </div>
  );
}
