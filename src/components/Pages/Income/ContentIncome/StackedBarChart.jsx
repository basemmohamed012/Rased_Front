import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Aug', uv: 3000, pv: 3200, amt: 2400 },
  { name: 'Sep', uv: 2500, pv: 2800, amt: 2300 },
  { name: 'Oct', uv: 3200, pv: 3400, amt: 2200 },
  { name: 'Nov', uv: 2800, pv: 3100, amt: 2100 },
  { name: 'Dec', uv: 3500, pv: 4000, amt: 2600 },
];

const StackedBarChart = () => {
  return (
    <ResponsiveContainer width={987} height={331}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={0} />
        <YAxis />
        <Tooltip />
        <Legend />
   
        <Bar dataKey="uv" stackId="a" fill="#FF928A" barSize={48} name="العمل الحر" />
        
             <Bar dataKey="pv" stackId="a" fill="#3CC3DF" barSize={48} name="الاستثمارات" />
             <Bar dataKey="amt" stackId="a" fill="#8979FF" barSize={48} name="الراتب" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChart;
