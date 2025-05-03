import { div } from 'framer-motion/client';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Cash', value: 400 },
  { name: 'visa', value: 300 },
  { name: 'Doan', value: 300 },
  { name: 'Transfer', value: 200 },
  { name: 'Real State', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042' ,'#FF8080'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, value }) => {
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);

  const sx = cx + outerRadius * cos;
  const sy = cy + outerRadius * sin;
  const mx = cx + (outerRadius + 20) * cos; // خليه أطول شوية هنا
  const my = cy + (outerRadius + 20) * sin;
  const ex = mx + (cos >= 0 ? 250 : -250); // طول الخط الأفقي كمان
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      {/* الخط الخارج من القطاع مع الكسر */}
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={COLORS[index % COLORS.length]}
        fill="none"
        strokeWidth={2}
      />
      {/* الدائرة الصغيرة عند نهاية الخط */}
      <circle cx={ex} cy={ey} r={3} fill={COLORS[index % COLORS.length]} />
      
      {/* اسم المجموعة فوق الخط */}
      <text
        x={ex + (cos >= 0 ? 5 : -5)}
        y={ey - 8} // فوق الخط
        textAnchor={textAnchor}
        fill={COLORS[index % COLORS.length]}
        dominantBaseline="central"
        fontSize={13}
        fontWeight="bold"
      >
        {data[index].name}
      </text>

      {/* النسبة المئوية تحت الخط */}
      <text
        x={ex + (cos >= 0 ? 5 : -5)}
        y={ey + 10} // تحت الخط
        textAnchor={textAnchor}
        fill={COLORS[index % COLORS.length]}
        dominantBaseline="central"
        fontSize={12}
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};


export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

  render() {
    return (
      <div className='w-[1020px] h-[514px] border-2 shadow-xl rounded-[20px]'>
       <div className='mt-10 mr-10'>
        <h3 className="font-bold text-[22px] leading-[100%] mb-4 tracking-[0%] text-right">
        الأداء العام للمحفظة
        </h3>
        <p className="font-bold text-[#A6A6A6] text-[12px] leading-[100%] tracking-[0%] text-right">
        الاداء بالنسبة للوقت المحدد
        </p>
      </div >
        <div className='flex'>
        <ResponsiveContainer width={803} height={338}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-col gap-2 ml-10 mt-24">
  {data.map((entry, index) => (
    <div key={index} className="flex items-center gap-2">
      <span
        className="inline-block w-3 h-3 rounded-full"
        style={{ backgroundColor: COLORS[index % COLORS.length] }}
      ></span>
      <span className="text-sm font-medium text-gray-700">{entry.name}</span>
    </div>
  ))}
</div>

        </div>
      </div>

      
    );
  }
}
