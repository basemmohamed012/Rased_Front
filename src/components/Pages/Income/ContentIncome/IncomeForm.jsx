// src/components/IncomeForm.jsx

import React, { useState } from "react";

const IncomeForm = () => {
  const [form, setForm] = useState({
    name: "",
    amount: "",
    description: "",
    category: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    // هنا ممكن ترسل البيانات لسيرفر أو API
  };

  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-md w-[1020px] rounded-xl p-8 ">
        <h2 className="text-2xl font-bold text-right mb-1">إنشاء مصدر دخل جديد</h2>
        <p className="text-sm text-gray-600 text-right mb-6">
          املأ البيانات التالية لإضافة مصدر دخل جديد إلى حسابك
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* الاسم والمبلغ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div>
              <label className="block mb-1 font-medium">الاسم</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="ادخل الاسم هنا"
                className="w-full px-4 py-2 border rounded-md border-graycolor focus:border-maincolor focus:text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">المبلغ</label>
              <input
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                placeholder="0.0 $"
                className="w-full px-4 py-2 border rounded-md border-graycolor focus:border-maincolor focus:text-black text-left"
              />
            </div>
          </div>

          {/* الوصف */}
          <div>
            <label className="block mb-1 font-medium">الوصف</label>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="ادخل تفاصيل عن الميزانية"
              className="w-full px-4 py-2 border rounded-md border-graycolor focus:border-maincolor focus:text-black"
            />
          </div>

          {/* الفئة */}
          <div>
            <label className="block mb-1 font-medium">الفئة</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="اختر فئة هنا"
              className="w-full px-4 py-2 border rounded-md border-graycolor focus:border-maincolor focus:text-black"
            />
            <p className="text-sm text-gray-500 mt-1">اختر فئة موجودة أو أضف فئة جديدة</p>
          </div>

          {/* الأزرار */}
          <div className="flex justify-start gap-4 pt-4">
            <button
              type="button"
              onClick={() => setForm({ name: "", amount: "", description: "", category: "" })}
              className="px-6 py-2 border border-[#16423C] text-[#16423C] rounded-md hover:bg-gray-100"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#16423C] text-white rounded-md"
            >
              إنشاء مصدر دخل
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IncomeForm;
