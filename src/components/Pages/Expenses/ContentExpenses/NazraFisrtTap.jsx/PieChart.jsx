import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'الصحة', value: 200 },
  { name: 'السفر', value: 150 },
  { name: 'التعليم', value: 300 },
  { name: 'المنزل', value: 100 },
  { name: 'التسوق', value: 180 },
  { name: 'الأكل', value: 220 },
];

const COLORS = ['#8979FF', '#FF928A', '#3CC3DF', '#FFAE4C', '#537FF1', '#6FD195'];

const total = data.reduce((acc, item) => acc + item.value, 0);

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  index,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) / 2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      <text
        x={x}
        y={y - 8}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={13}
        fontWeight="bold"
      >
        {data[index].name}
      </text>
      <text
        x={x}
        y={y + 10}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
      >
        {data[index].value}
      </text>
    </g>
  );
};

export default function Example() {
  return (
    <div
      style={{
        width: 448,
        height: 371,
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={110}
          dataKey="value"
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <text
          x={150}
          y={150}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={18}
          fontWeight="bold"
          fill="#333"
        >
          {` ${total}`}
        </text>
      </PieChart>

      {/* الأسامي + نقاط اللون */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px 15px',
          justifyContent: 'center',
          marginLeft: '35px'
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              fontSize: 12,
              color: '#333',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: COLORS[index % COLORS.length],
              }}
            />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
