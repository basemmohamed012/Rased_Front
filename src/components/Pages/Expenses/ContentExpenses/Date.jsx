import { useState } from "react";
import { CalendarDays } from "lucide-react";

export default function DateInput() {
  const [date, setDate] = useState("2025-03-08");

  const formatArabicDate = (dateStr) => {
    const dateObj = new Date(dateStr);
    return dateObj.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="relative w-fit">
      {/* الواجهة اللي بتعرض التاريخ */}
      <div className="flex w-[156px] h-[44px] items-center gap-4 px-4 py-2 rounded-[10px] border-2 border-[#A6A6A6] text-[#A6A6A6] text-sm cursor-pointer rtl" dir="ltl">
         <CalendarDays className="w-5 h-5 text-gray-400" />
        <span>{formatArabicDate(date)}</span>
       
      </div>

      {/* ال input الفعلي */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="absolute inset-0 opacity-0 cursor-pointer"
      />
    </div>
  );
}
