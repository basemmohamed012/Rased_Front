import React, { useState } from 'react';
import exportImg from '../../../../assets/images/export.svg'
export default function ExpenseForm() {
  const [form, setForm] = useState({
    name: '',
    amount: '',
    description: '',
    paymentMethod: '',
    date: '',
    category: '',
    budget: '',
    linkedBudget: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm({
      ...form,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <div>
      <h2 className="text-[20px] font-bold mb-2">إنشاء مصروف جديد</h2>
      <p className="text-[#666262] text-[14px] font-semibold">
        املأ البيانات التالية لإضافة مصروف جديد
      </p>
      <div className="w-[1020px] h-auto mx-auto bg-white p-8 rounded-lg shadow mt-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-bold text-right">الاسم</label>
              <input
                type="text"
                name="name"
                className="w-full text-[#D3CACA] border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
                placeholder="ادخل الاسم هنا"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-right">المبلغ</label>
              <input
                type="number"
                name="amount"
                className="w-full text-[#D3CACA] border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
                placeholder="0.0 $"
                value={form.amount}
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
              placeholder="أدخل تفاصيل عن المصروف"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-bold text-right">طريقة الدفع</label>
              <select
                name="paymentMethod"
                className="w-full text-[#D3CACA] border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
                value={form.paymentMethod}
                onChange={handleChange}
              >
                <option value="">اختر طريقة الدفع المناسبة</option>
                <option value="cash">نقداً</option>
                <option value="card">بطاقة</option>
                <option value="bank">تحويل بنكي</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-bold text-right">التاريخ</label>
              <input
                type="date"
                name="date"
                className="w-full text-[#D3CACA] border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
                value={form.date}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-bold text-right">الفئة</label>
              <select
                name="category"
                className="w-full text-[#D3CACA] border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
                value={form.category}
                onChange={handleChange}
              >
                <option value="">اختر فئة مناسبة</option>
                <option value="food">طعام</option>
                <option value="transport">مواصلات</option>
                <option value="rent">إيجار</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-bold text-right">الميزانية (اختياري)</label>
              <select
                name="budget"
                className="w-full text-[#D3CACA] border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
                value={form.budget}
                onChange={handleChange}
              >
                <option value="">اختر ميزانية مناسبة</option>
                <option value="monthly">شهرية</option>
                <option value="project">مشروع</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-1 font-bold text-right">ربط هذا المصروف بميزانية معينة</label>
            <input
              type="text"
              name="linkedBudget"
              className="w-full text-[#D3CACA] border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
              placeholder="ربط هذا المصروف بميزانية معينة"
              value={form.linkedBudget}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1 font-bold text-right">فاتورة / ملف إضافي</label>
            <div className="border-dashed border-2 border-[#A9A6A6] p-10 text-center rounded-lg">
              <input
                type="file"
                name="file"
                className="hidden"
                id="fileUpload"
                onChange={handleChange}
              />
              <label htmlFor="fileUpload" className="cursor-pointer text-[#16423C] font-bold">
                <img 
                className='mx-auto mb-4'
                 src={exportImg} alt="" />
              </label>
              <p className="text-sm text-gray-500 mt-2">(إضافة ملفات لا تتجاوز 5 ميغابايت على الأكثر)</p>
            </div>
          </div>

          <div className="flex justify-start gap-8 mt-10">
            <button
              type="submit"
              className="px-6 py-2 w-[206px] h-[48px] bg-[#16423C] text-white rounded-[10px]"
            >
              مصروف جديد
            </button>
            <button
              type="button"
              onClick={() => console.log('Canceled')}
              className="px-6 py-2 border-2 w-[112px] h-[48px] text-[#16423C] border-[#16423C] rounded-[10px]"
            >
              إلغاء
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
