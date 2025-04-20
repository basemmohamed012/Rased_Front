



import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import mm from '../../../../assets/images/14.svg'
import mmm from '../../../../assets/images/15.svg'
import mmmm from '../../../../assets/images/16.svg'
const data = [
  { name: 'س', value2022: 10, value2024: 90 },
  { name: 'ص', value2022: 75, value2024: 25 },
  { name: 'ع', value2022: 65, value2024: 35 },
  { name: 'ف', value2022: 60, value2024: 80 },
  { name: 'ق', value2022: 45, value2024: 15 },
  { name: 'ر', value2022: 45, value2024: 30 },
  { name: 'ت', value2022: 60, value2024: 35 },
];

const years = ['2024', '2023', '2022', '2021'];

export default class ChartComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      selectedYear: '2024'
    };
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      isDropdownOpen: !prevState.isDropdownOpen
    }));
  };

  selectYear = (year) => {
    this.setState({
      selectedYear: year,
      isDropdownOpen: false
    });
  };

  render() {
    const { isDropdownOpen, selectedYear, isDarkMode } = this.state;

    return (
      <div style={{ width: '100%', height: 280 }}>
        <div className='flex justify-around '>
          <div>
            <p className='text-right font-semibold  ml-52 whitespace-nowrap'>
              التحليلات المالية
            </p>
          </div>
          <div className='flex relative left-16 gap-5 items-center'>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#8B5CF6]"></div>
              <span>الدخل</span>

            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
              <span>المصاريف</span>

            </div>
            <div className="relative">
              <button
                onClick={this.toggleDropdown}
                className="flex items-center gap-1 focus:outline-none"
              >
                <span className=' whitespace-nowrap'>هذا الأسبوع</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
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
                <div className="absolute top-full right-0 mt-1 w-24 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => this.selectYear(year)}
                      className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {year}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <ResponsiveContainer >
          <LineChart className='dark:bg-[#575757] dark:relative left-6 w-[580px] h-[280px]' data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis
              dataKey="name"
              stroke="rgba(0, 0, 0, 0.5)"
              strokeDasharray=" 2 2 "
              tick={{
                className: 'text-black dark:text-white', // تغيير لون النص بناءً على الوضع
              }}
              tickLine={{ stroke: isDarkMode ? '#000' : '#FFF' }} // تغيير لون الخطوط الصغيرة بناءً على الوضع
            />
            <YAxis
              stroke="rgba(0, 0, 0, 0.5)"
              strokeDasharray="2 2"
              dx={-20}
              ticks={[0, 25, 50, 75, 100]}
              tick={{
                className: 'text-black dark:text-white', // تغيير لون النص بناءً على الوضع
              }}
              tickLine={{ stroke: isDarkMode ? '#000' : '#FFF' }} // تغيير لون الخطوط الصغيرة بناءً على الوضع
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value2022"
              name="2022"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              strokeWidth={2}
              dot={{ r: 4, fill: '#8B5CF6' }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="value2023"
              name="2023"
              stroke="#EC4899"
              fill="#EC4899"
              strokeWidth={2}
              dot={{ r: 4, fill: '#EC4899/5' }}
              activeDot={{ r: 8 }}

            />
            <Line
              type="monotone"
              dataKey="value2024"
              name="2024"
              stroke="#10B981"
              fill="#10B981"
              strokeWidth={2}
              dot={{ r: 4, fill: '#10B981' }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
          <div className='flex justify-center gap-10 dark:bg-[#575757] relative bottom-1 left-6 dark:w-[596px] '>
            <div className='flex'>
              <p>2024 </p>
              <img src={mm} alt="eerker" />
            </div>
            <div className='flex'>
              <p>2023 </p>
              <img src={mmm} alt="eerker" />
            </div>
            <div className='flex'>
              <p>2022 </p>
              <img src={mmmm} alt="eerker" />
            </div>
          </div>
        </ResponsiveContainer>
      </div>
    );
  }
}
