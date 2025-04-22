import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 266.47 },
  { name: 'Group B', value: 73.94 },
  { name: 'Group C', value: 109.62 },
];

const COLORS = ['#8979FF', '#FF928A', '#3CC3DF'];

const RADIAN = Math.PI / 180;

// تخصيص النص داخل الرسم البياني لعرض القيم الفعلية بدلاً من النسبة المئوية
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, index, name }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN) + 2;
  const y = cy + radius * Math.sin(-midAngle * RADIAN) +4;

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {/* عرض القيمة الفعلية فقط */}
      {` ${value}`}
    </text>
  );
};

const Example = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Example;
