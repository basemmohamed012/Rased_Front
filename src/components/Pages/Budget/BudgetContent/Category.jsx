import React, { useState } from 'react';

const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [amount, setAmount] = useState('');

  const handleCreateCategory = () => {
    // هنا تقدر تبعت الداتا للسيرفر أو تعالجها
    console.log('اسم الفئة:', categoryName);
    console.log('المبلغ:', amount);
    setIsModalOpen(false); // يقفل المودال بعد الإنشاء
  };

  return (
    <div>
      {/* العنوان والزر */}
      <div className='w-[1020px] h-[54px] flex justify-between'>
        <div className='space-y-4'>
          <h1 className="font-bold text-[26px] font-[Tajawal]">فئات الميزانية</h1>
        </div>
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className='w-[180px] h-[44px] bg-[#16423C] gap-[10px] rounded-[10px] pt-[10px] pr-[32px] pb-[10px] pl-[32px]'
          >
            <p className='text-white text-[16px] font-bold'>+ إضافة فئة</p>
          </button>
        </div>
      </div>

      {/* المودال */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-[400px] shadow-lg">
            <h2 className="text-xl font-bold text-right mb-2">إضافة فئة ميزانية جديدة</h2>
            <p className="text-sm text-gray-500 text-right mb-4">
              يمكنك إضافة فئة ميزانية جديدة للتحكم في مصروفاتك بسهولة!
            </p>

            <div className="mb-4 text-right">
              <label className="block mb-1 font-semibold">اسم الفئة</label>
              <input
                type="text"
                className="w-full border border-graycolor focus:border-maincolor focus:text-black rounded px-3 py-2 text-right"
                placeholder="اكتب اسم الميزانية هنا"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>

            <div className="mb-4 text-right">
              <label className="block mb-1 font-semibold">المبلغ</label>
              <input
                type="number"
                className="w-full border border-graycolor focus:border-maincolor focus:text-black rounded px-3 py-2 text-right"
                placeholder="0.0$"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                className="w-[48%] py-2 border border-gray-400 rounded text-gray-800"
                onClick={() => setIsModalOpen(false)}
              >
                إلغاء
              </button>
              <button
                className="w-[48%] py-2 bg-[#16423C] text-white rounded"
                onClick={handleCreateCategory}
              >
                إنشاء فئة
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
