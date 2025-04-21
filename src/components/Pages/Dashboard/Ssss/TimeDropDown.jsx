import { useState } from 'react';

const timeOptions = [
  'هذا اليوم',
  'هذا الأسبوع',
  'هذا الشهر',
  'هذه السنة'
];

const TimeDropdown = ({ selectedTime, onChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-right">
      <button
        className="text-[#A6A6A6] text-[14px] font-semibold ml-4 mt-2 hover:text-gray-600 flex items-center gap-1"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span>{selectedTime}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isDropdownOpen && (
        <ul className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {timeOptions.map((option) => (
            <li
              key={option}
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                option === selectedTime ? 'bg-gray-100 text-black font-bold' : ''
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TimeDropdown;
