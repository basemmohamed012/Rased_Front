import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

export default function GoalForm() {
 const [form, setForm] = useState({
  name: '',
  initialAmount: '',
  financialGoal: '',
  description: '',
  startDate: '',
  endDate: '',
  category: '',
  portfolio: '', // << أضف دي
  status: 'نشطة'
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
    <div className="w-[1020px]  mx-auto px-4 py-10 " dir="rtl">
      <h2 className="text-3xl font-bold mb-2 text-center"> حدد هدفك المالي</h2>
      <p className="text-[#8D8A8A] text-base font-medium mb-6 text-center">
      ضع أهدافًا مالية واضحة وتتبع تقدمك نحو تحقيق الحرية المالية.
      </p>

      <h2 className="text-3xl font-bold mb-2 text-right">أنشئ هدفًا</h2>
      <p className="text-[#8D8A8A] text-base font-medium mb-6 text-right">
        انت تحدد ما تريد تحقيقه ماليا، ونحن نساعدك في الوصول الى اهدافك
      </p>

      <div className="bg-white p-8 rounded-[10px] shadow-xl border">
        <form onSubmit={handleSubmit} className="space-y-6 ">

          {/* الاسم والحالة */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div>
              <label className="block mb-1 font-semibold text-right">الاسم</label>
              <input
                type="text"
                name="name"
                className="w-full text-black border  rounded px-4 py-2 border-graycolor focus:border-maincolor focus:text-black"
                placeholder="أدخل الاسم هنا"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-right">الحالة</label>
              <select
                name="status"
                className="w-full  border text-[#3D984A] font-bold rounded px-4 py-2 border-graycolor focus:border-maincolor focus:text-black"
                value={form.status}
                onChange={handleChange}
              >
                <option className='text-[#3D984A] font-bold' value="نشطة">نشطة</option>
                <option value="غير نشطة">غير نشطة</option>
              </select>
            </div>
          </div>

          {/* المبلغ والهدف */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-semibold text-right">المبلغ الابتدائي</label>
              <input
                type="number"
                name="initialAmount"
                className="w-full text-black border  rounded px-4 py-2 border-graycolor focus:border-maincolor focus:text-black"
                placeholder="0.0"
                value={form.initialAmount}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-right">الهدف المالي</label>
              <input
                type="number"
                name="financialGoal"
                className="w-full text-black border  rounded px-4 py-2 border-graycolor focus:border-maincolor focus:text-black"
                placeholder="0.0"
                value={form.financialGoal}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* الوصف */}
          <div>
            <label className="block mb-1 font-semibold text-right">الوصف</label>
            <input
              type="text"
              name="description"
              className="w-full text-black border  rounded px-4 py-2 border-graycolor focus:border-maincolor focus:text-black"
              placeholder="أدخل تفاصيل عن الهدف"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          {/* التواريخ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-semibold text-right">تاريخ البداية</label>
              <div className="relative">
                <input
                  type="date"
                  name="startDate"
                  className="w-full text-black border  rounded px-4 py-2 pr-10 border-graycolor focus:border-maincolor focus:text-black"
                  value={form.startDate}
                  onChange={handleChange}
                />
                {/* <Calendar className="absolute left-3 top-2.5 text-gray-500 w-5 h-5 pointer-events-none" /> */}
              </div>
            </div>
            <div>
              <label className="block mb-1 font-semibold text-right">تاريخ الانتهاء</label>
              <div className="relative">
                <input
                  type="date"
                  name="endDate"
                  className="w-full text-black border  rounded px-4 py-2 pr-10 border-graycolor focus:border-maincolor focus:text-black"
                  value={form.endDate}
                  onChange={handleChange}
                />
                {/* <Calendar className="absolute left-3 top-2.5 text-gray-500 w-5 h-5 pointer-events-none" /> */}
              </div>
            </div>
          </div>

          {/* الفئة */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* حقل الفئة */}
  <div>
    <label className="block mb-1 font-semibold text-right">الفئة</label>
    <select
      name="category"
      className="w-full text-black border  rounded px-4 py-2 border-graycolor focus:border-maincolor focus:text-black"
      value={form.category}
      onChange={handleChange}
    >
      <option value="" disabled>اختر فئة موجودة أو أنشئ فئة جديدة</option>
      <option value="شخصية">شخصية</option>
      <option value="مالية">مالية</option>
    </select>
    {/* الجملة التوضيحية */}
    <p className="text-sm text-gray-500 mt-1">اختر فئة موجودة أو أنشئ فئة جديدة</p>
  </div>

  {/* حقل المحفظة */}
  <div>
    <label className="block mb-1 font-semibold text-right">المحفظة</label>
    <select
      name="portfolio"
      className="w-full text-black border  rounded px-4 py-2 border-graycolor focus:border-maincolor focus:text-black"
      value={form.portfolio}
      onChange={handleChange}
    >
      <option value="" disabled>اختر المحفظة</option>
      <option value="محفظة فردية">محفظة فردية</option>
      <option value="محفظة مشتركة">محفظة مشتركة</option>
    </select>
  </div>
</div>


          {/* الأزرار */}
          <div className="flex justify-start gap-4 mt-8">
            <button
              type="submit"
              className="px-6 py-2  bg-[#16423C] w-[206px] h-[48px] text-white rounded-md hover:bg-[#0f2e2a] transition-colors"
            >
              هدف جديد
            </button>
            <button
              type="button"
              onClick={() => console.log('Canceled')}
              className="px-6 py-2 w-[112px] h-[48px] border border-[#16423C] text-[#16423C] rounded-md hover:bg-gray-50 transition-colors"
            >
              إلغاء
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
