import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { name: 'س', '2022': 77, '2023': 0 , '2024': 98 },
  { name: 'ص', '2022': 70, '2023': 0, '2024': 20 },
  { name: 'ع', '2022': 23, '2023': 0, '2024': 30 },
  { name: 'ف', '2022': 66, '2023': 0, '2024': 45 },
  { name: 'ق', '2022': 44, '2023': 0, '2024': 10 },
  { name: 'ك', '2022': 52, '2023': 0, '2024': 28 },
  { name: 'ل', '2022': 68, '2023': 0, '2024': 32 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#059669', padding: '5px 10px', borderRadius: '5px', color: 'white' }}>
        {payload[0].value}$
      </div>
    );
  }
  return null;
};

export default function ExampleChart() {
  return (
    <ResponsiveContainer width={591} height={544}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 30, bottom: 30 }}
      >
        <defs>
          <linearGradient id="color2022" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3CC3DF4D" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#3CC3DF4D" stopOpacity={0.5} />
          </linearGradient>
          <linearGradient id="color2023" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="color2024" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" />
       <XAxis
  dataKey="name"
  tickLine={false}
  padding={{ left: 30, right: 30 }} // دي اللي بتزود المسافة
  tick={({ x, y, payload }) => (
    <text x={x + 25} y={y + 15} textAnchor="middle" fill="#666">
      {payload.value}
    </text>
  )}
/>

        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend verticalAlign="bottom" iconType="circle" />
        <Area
  type="monotone"
  dataKey="2022"
  stroke="#8979FF"
  fill="url(#color2022)"
  dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
  animationBegin={500}
  animationDuration={2000}
/>
<Area
  type="monotone"
  dataKey="2023"
  stroke="#FFAE4C"
  fill="url(#FFAE4C)"
  dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
  animationBegin={500}
  animationDuration={2000}
/>
<Area
  type="monotone"  
  dataKey="2024"
  stroke="#06b6d4"
  fill="url(#color2024)"
  dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
  animationBegin={500}
  animationDuration={2000}
/>


      </AreaChart>
    </ResponsiveContainer>
  );
}
