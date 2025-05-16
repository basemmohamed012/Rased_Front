import React, { useState } from 'react';

export default function BudgetForm() {
  const [form, setForm] = useState({
    name: '',
    monthlyLimit: '',
    description: '',
    startDate: '',
    endDate: '',
    recurrenceDate: '',
    category: '',
    startDay: '',
    carryOver: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <div>
      <h2 className="text-[20px] font-bold  mb-2 ">إنشاء ميزانية جديدة</h2>
       <p className='text-[#666262] text-[14px] font-semibold ' >
        املأ البيانات التالية لإضافة ميزانية جديدة إلي حسابك
       </p>
    <div className="w-[1020px] h-auto mx-auto bg-white p-8 rounded-lg shadow mt-8">
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-bold text-right ">الاسم</label>
            <input
              type="text"
              name="name"
              className="w-full text-[#D3CACA] border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
              placeholder="أدخل الاسم هنا"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 font-bold text-right">الحد الشهري</label>
            <input
              type="number"
              name="monthlyLimit"
              className="w-full text-[#D3CACA] border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
              placeholder="0.0"
              value={form.monthlyLimit}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-bold text-right">الوصف</label>
          <input
            type="text"
            name="description"
            className="w-full text-[#D3CACA] border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
            placeholder="أدخل تفاصيل عن الميزانية"
            value={form.description}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-bold text-right">تاريخ البدء</label>
            <input
              type="date"
              name="startDate"
              className="w-full text-[#D3CACA] border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
              value={form.startDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 font-bold text-right">تاريخ الانتهاء</label>
            <input
              type="date"
              name="endDate"
              className="w-full text-[#D3CACA] border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
              value={form.endDate}
              onChange={handleChange}
            />
          </div>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div>
          <label className="block mb-1 font-bold text-right">الفئة</label>
          <input
            type="text"
            name="category"
            className="w-full text-[#D3CACA] border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
            placeholder="اختر فئة موجودة أو أنشئ فئة جديدة"
            value={form.category}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1 font-bold text-right">يوم البدء</label>
          <input
            type="date"
            name="startDay"
            className="w-full text-[#D3CACA] border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
            value={form.startDay}
            onChange={handleChange}
          />
        </div>
        </div>

       

        

        <div className=''>
          <div className="flex items-center  gap-2 justify-start">
          <input
            type="checkbox"
            name="carryOver"
            checked={form.carryOver}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <label className="text-right font-bold">ترحيل فائض الميزانية للشهر القادم</label>
        </div>

        <div className="flex justify-start gap-8 mt-10">

           <button
            type="submit"
            className="px-6 py-2 w-[206px] h-[48px] bg-[#16423C] text-white rounded-[10px] "
          >
            إنشاء ميزانية
          </button>

          <button
            type="button"
            onClick={() => console.log('Canceled')}
            className="px-6 py-2 border-2 w-[112px] h-[48px] text-[#16423C] border-[#16423C] rounded-[10px]  "
          >
            إلغاء
          </button>
         
        </div>
        </div>
      </form>
    </div>
    </div>
  );
}
