import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'س', 'استرداد النقود': 40, 'التجديد': 24, amt: 24 },
  { name: 'ص', 'استرداد النقود': 30, 'التجديد': 13, amt: 22 },
  { name: 'ع', 'استرداد النقود': 20, 'التجديد': 98, amt: 22 },
  { name: 'ا', 'استرداد النقود': 27, 'التجديد': 39, amt: 20 },
  { name: 'ك', 'استرداد النقود': 18, 'التجديد': 48, amt: 21 },
  { name: 'و', 'استرداد النقود': 23, 'التجديد': 38, amt: 25 },
  { name: 'ح', 'استرداد النقود': 34, 'التجديد': 43, amt: 21 },
];

const weeks = ['هذا الأسبوع', 'الأسبوع الماضي', 'قبل أسبوعين', 'قبل 3 أسابيع'];

const CustomBarShape = (props) => {
  const { x, y, width, height, fill, dataKey, payload } = props;
  const value = payload[dataKey];

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} rx="10" ry="10" />
      <circle cx={x + width / 2} cy={y} r={10} fill="white" stroke={fill} strokeWidth="2" />
      <text x={x + width / 2} y={y} dy="5" textAnchor="middle" fill={fill} fontSize={12} fontWeight="bold">
        {value}
      </text>
    </g>
  );
};

// Custom Legend Component
const CustomLegend = (props) => {
  const { payload } = props;
  
  return (
    <div className="flex justify-center gap-4  ">
      {payload.map((entry, index) => (
        <div
        key={`legend-${index}`}
        className="flex items-center gap-2 "
      >
      
          <span>{entry.value}</span>
          <div 
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: entry.color,
              borderRadius: '3px',
              margin_top:'19px',
              position: 'relative',
              top: '2px'
              
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default class BarChartComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataKey1: 'استرداد النقود',
      dataKey2: 'التجديد',
      isDropdownOpen: false,
      selectedWeek: 'هذا الأسبوع'
    };
  }

  handleChange = (event, column) => {
    this.setState({ [column]: event.target.value });
  };

  toggleDropdown = () => {
    this.setState(prevState => ({
      isDropdownOpen: !prevState.isDropdownOpen
    }));
  };

  selectWeek = (week) => {
    this.setState({
      selectedWeek: week,
      isDropdownOpen: false
    });
  };

  render() {
    const { dataKey1, dataKey2, isDropdownOpen, selectedWeek } = this.state;

    return (
      <div style={{ width: '100%', height: 300   }}>
        <div className='flex justify-around  '>
          <div>
            <p className='text-right font-semibold whitespace-nowrap ml-44'>
              احصائيات الدخل
            </p>
          </div>
          <div className='flex relative left-14'>
            <div className="relative">
              <button
                onClick={this.toggleDropdown}
                className="flex items-center gap-1 focus:outline-none"
              >
                <span className='whitespace-nowrap'>{selectedWeek}</span>
                <svg
                  className={`w-4 h-4 whitespace-nowrap transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-32 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                  {weeks.map((week) => (
                    <button
                      key={week}
                      onClick={() => this.selectWeek(week)}
                      className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {week}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <ResponsiveContainer  >
          <BarChart  className='w-[460px] h-[300px]  dark:bg-[#575757] '  data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} barSize={15}>
            <CartesianGrid   strokeDasharray="2 2" className='dark:bg-[#575757] ' />
            <XAxis 
              dataKey="name"
              stroke="rgba(0, 0, 0, 0.5)" />
            <YAxis
              stroke="rgba(0, 0, 0, 0.5)"
              strokeDasharray="3 3"
              dx={-20}
              ticks={[0, 25, 50, 75, 100]}
              domain={[0, 100]}
              allowDecimals={false}
            />
            <Tooltip />
            <Legend className='dark:bg-black' content={<CustomLegend />} />
            <Bar className='relative top-8'
              dataKey={dataKey1}
              fill="#2E5077"
              shape={(props) => <CustomBarShape
                 {...props} dataKey={dataKey1}
                 
                  />}
              name={dataKey1}
              
            />
            <Bar 
            
              dataKey={dataKey2}
              fill="#79D7BE"
              shape={(props) => <CustomBarShape {...props } dataKey={dataKey2} />}
              name={dataKey2 }
              
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}