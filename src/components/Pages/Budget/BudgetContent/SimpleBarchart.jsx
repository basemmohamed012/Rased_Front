import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import TimeTabs from './TimeTabs';

const data = [
  { name: 'يناير', income: 70, expense: 30 },
  { name: 'فبراير', income: 60, expense: 20 },
  { name: 'مارس', income: 90, expense: 85 },
  { name: 'إبريل', income: 95, expense: 70 },
  { name: 'مايو', income: 65, expense: 60 },
  { name: 'يونيو', income: 90, expense: 100 },
];

export default function IncomeVsExpenseChart() {
  return (
    <div className="bg-white w-[502px] h-[467px] rounded-[10px] p-[24px]   shadow-md  ">
      {/* العنوان + Tabs */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-right font-bold text-[20px] text-gray-900">الدخل مقابل المصروفات</h2>
        <TimeTabs />
      </div>

      {/* الرسم البياني */}
      <ResponsiveContainer width={422} height={360}>
        <BarChart
        
          data={data}
          margin={{ top: 10 , right:50 , left: -10, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            wrapperStyle={{ direction: 'rtl' }}
            formatter={(value) => {
              if (value === "income") return "الدخل";
              if (value === "expense") return "المصروف";
              return value;
            }}
          />
          <Bar dataKey="income" fill="#8979FF" name="الدخل" barSize={14} />
          <Bar dataKey="expense" fill="#FF928A" name="المصروف" barSize={14} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
