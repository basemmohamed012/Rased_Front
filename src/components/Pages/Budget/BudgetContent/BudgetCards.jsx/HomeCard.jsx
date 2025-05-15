import React, { useState } from 'react';

const HomeCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const transactions = [
    { name: 'تسوق السوبر ماركت', amount: 134, date: '5 مارس 2025' },
    { name: 'عشاء عمل', amount: 134, date: '5 مارس 2025' },
    { name: 'كافيه', amount: 134, date: '5 مارس 2025' },
  ];

  return (
    <div className="bg-white w-[496px]  shadow-md rounded-lg p-4  rtl text-right">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">المنزل</h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className={`w-5 h-5 text-gray-600 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>ما تم إضافته: <strong>$1100</strong></span>
        <span>الميزانية: <strong>$4000</strong></span>
      </div>

      <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden my-2">
        <div className="bg-red-600 h-full" style={{ width: '56%' }} />
      </div>

      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>56%</span>
        <span>المتبقي: <strong>$2900</strong></span>
      </div>

      <div className="text-red-600 text-sm font-semibold mt-1">زيادة $500</div>

      {isOpen && (
        <div className="mt-4 border-t pt-3">
          <div className="flex justify-between">
            <p className="text-sm font-semibold mb-2">العمليات الحالية :</p>
            <button className="bg-[#16423C] w-[24px] h-[24px] text-white rounded">
              <p className="relative bottom-1">+</p>
            </button>
          </div>
          {transactions.map((t, index) => (
            <div key={index} className="flex justify-between items-center text-sm text-gray-700 mb-1">
              <div className="flex flex-col mb-2">
                <span>{t.name}</span>
                <span className="text-gray-500 text-xs">{t.date}</span>
              </div>
              <span className="text-red-600">-{t.amount}$</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeCard;
