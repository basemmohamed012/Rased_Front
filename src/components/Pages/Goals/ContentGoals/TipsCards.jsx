import React from 'react';

export default function TipsCards() {
  return (
    <div className="grid grid-cols-2 gap-6 w-[1020px] mx-auto" dir="rtl">
      {/* كارت 1 */}
      <div className="bg-[#FFF] rounded-2xl shadow-md p-6 border border-gray-100">
        <h3 className="text-[22px] font-bold text-right text-[#16423C] mb-4">نصائح للنجاح</h3>
        <ul className="list-disc pr-5 text-sm text-gray-700 space-y-2 leading-loose">
          <li>كن دقيقًا بشأن ما تدخر من أجله</li>
          <li>خذ إطارًا زمنيًا واقعيًا لتجنب الشعور بالإحباط</li>
          <li>قسّم الأهداف الكبيرة إلى مراحل صغيرة</li>
          <li>راجع أهدافك وقم بتحديثها بانتظام</li>
        </ul>
      </div>

      {/* كارت 2 */}
      <div className="bg-[#FFF] rounded-2xl shadow-md p-6 border border-gray-100">
        <h3 className="text-[22px] font-bold text-right text-[#0e1413] mb-4">لماذا نحدد الأهداف؟</h3>
        <ul className="list-disc pr-5 text-sm text-gray-700 space-y-2 leading-loose">
          <li>توفر الأهداف المالية اتجاها واضحًا لاستخدام أموالك، مما يساعدك على اتخاذ قرارات مالية أفضل.</li>
          <li>أظهرت الدراسات أن الأشخاص الذين يضعون أهدافًا مالية محددة هم أكثر قدرة على الادخار وتحقيق الأمان المالي.</li>
        </ul>
      </div>
    </div>
  );
}
