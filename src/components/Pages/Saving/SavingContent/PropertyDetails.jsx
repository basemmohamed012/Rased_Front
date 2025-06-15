// src/components/Pages/Saving/SavingContent/PropertyDetails.jsx

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Edit3 } from 'lucide-react';

export default function PropertyDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const property = state?.property;

  if (!property) {
    return (
      <div className="text-center text-red-500 mt-10 text-lg font-semibold">
        ⚠️ لا توجد بيانات لعرضها
      </div>
    );
  }

  return (
    <div className="min-h-screen  px-6 py-10" dir="rtl">
     <div className='flex mx-auto items-center justify-center gap-x-96'>
         {/* العنوان */}
      <h1 className="text-xl font-bold text-right mb-6">مدخرات {property.category}</h1>
         {/* زر الرجوع */}
      <div className="mb-4 text-sm text-gray-700 cursor-pointer flex items-center" onClick={() => navigate(-1)}>
        <span className="ml-2">&larr;</span> العودة إلى المدخرات
      </div>

     
     </div>

      {/* كارد التفاصيل */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-3xl mx-auto">
        {/* العنوان الأعلى */}
        <div className="bg-[#9BB8A6] text-white text-center py-6">
          <p className="text-sm mb-1">إجمالي المبلغ</p>
          <h2 className="text-3xl font-bold">{property.price}</h2>
        </div>

        {/* التفاصيل */}
        <div className="grid grid-cols-2 gap-6 px-8 py-6 text-sm text-gray-700">
          <div>
            <p className="font-medium mb-1">ID</p>
            <p className="text-gray-800 font-semibold">SDV-12400</p>
          </div>

          <div>
            <p className="font-medium mb-1">المبلغ الإجمالي</p>
            <p>{property.price}</p>
          </div>

          <div>
            <p className="font-medium mb-1">المحفظة المشتركة</p>
            <span className="bg-gray-100 px-2 py-1 rounded-md">الإيجار (2 عضو)</span>
          </div>

          <div>
            <p className="font-medium mb-1">الفئة</p>
            <span className="bg-gray-200 px-2 py-1 rounded-md">{property.category}</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <p className="font-medium">تاريخ الإنشاء</p>
          </div>
          <p>{property.dateAdded}</p>

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <p className="font-medium">آخر تحديث</p>
          </div>
          <p>{property.expiryDate}</p>

          {/* الحالة */}
          <div className="col-span-2 mt-4 flex items-center gap-3">
            <Edit3 className="w-4 h-4 text-gray-500" />
            <span
              className={`px-3 py-1 rounded-full text-white text-sm ${
                property.status === 'active'
                  ? 'bg-green-500'
                  : property.status === 'pending'
                  ? 'bg-orange-500'
                  : 'bg-red-500'
              }`}
            >
              {property.status === 'active'
                ? 'نشط'
                : property.status === 'pending'
                ? 'قيد المراجعة'
                : 'منتهي الصلاحية'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
