import { div, h1 } from 'framer-motion/client';
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-has-no-padding-2hlnt8';

  render() {
    return (
      
    <div className="w-[502px] h-[514px] border-1 shadow-lg rounded-[20px] p-6 ">
      <div>
        <h1 className=" font-bold text-[22px] mb-2 leading-[100%] tracking-normal text-right">
          المصروفات الشهرية
        </h1>
        <p className="text-[#A6A6A6] font-bold text-[12px] leading-[100%] tracking-normal text-right">
          اداء المحفظة بالنسبة لشهر محدد
        </p>
      </div>
      <div className='mt-5'>
      <ResponsiveContainer width={474} height={418}>
      
      <BarChart
        width={500}
        height={300}
        
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 30 }}
        barSize={20}
      
      >
       <XAxis 
  dataKey="name"
  tick={{ angle: -30, dy: 10, fontSize: 10 }}
  scale="band"
  padding={{ left: 5, right: 5 }}
/>
        <YAxis />
        <Tooltip />
        <Legend
          wrapperStyle={{ marginTop: '40px' }}
          formatter={(value) => (value === 'pv' ? '2025' : value)}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="pv" fill="#4D6218" background={{ fill: '#D6DBED66' }} />
      </BarChart>
    </ResponsiveContainer>
      </div>
    </div>

    );
  }
}
