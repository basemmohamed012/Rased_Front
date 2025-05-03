import React, { useState } from "react";
export default function AddWalletModal({ onClose, onSave }) {
  const [walletName, setWalletName] = useState("");
  const [walletType, setWalletType] = useState("العائلة");
  const [currency, setCurrency] = useState("دولار أمريكي");
  const [balance, setBalance] = useState("");
  const [startDate, setStartDate] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40  flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-[15px] w-[432px] h-[567px] shadow-xl text-right">
      <h3 className="text-[18px] mt-8 font-bold leading-[100%] tracking-[0%] text-right mb-10 font-[Tajawal]">
  إنشاء محفظة جديدة
</h3>


<label className="block mb-1 text-[14px] font-bold leading-[100%] tracking-[0%] text-right font-[Tajawal]">
  اسم المحفظة
</label>

<input
  type="text"
  value={walletName}
  onChange={(e) => setWalletName(e.target.value)}
  placeholder="اكتب اسم هنا"
  className="w-[384px] h-[37px] mb-6 px-4 py-2 border-[1px] rounded-[5px] gap-[10px] focus:outline-none focus:ring font-[Tajawal]"
/>


        <div className="flex gap-2 mb-8">
          <div className="w-1/2">
            <label className="block mb-1 text-[14px] font-bold leading-[100%] tracking-[0%] text-right font-[Tajawal]">نوع المحفظة</label>
            <select
              value={walletType}
              onChange={(e) => setWalletType(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option>العائلة</option>
              <option>شخصية</option>
              <option>عمل</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="block mb-1 text-[14px] font-bold leading-[100%] tracking-[0%] text-right font-[Tajawal]">العملة</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option>دولار أمريكي</option>
              <option>جنيه مصري</option>
              <option>ريال سعودي</option>
            </select>
          </div>
        </div>

        <div className="flex gap-2 mb-8">

        <div className="w-1/2">
            <label className="block mb-1 text-[14px] font-bold leading-[100%] tracking-[0%] text-right font-[Tajawal]">تاريخ البدء</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-1/2">
            <label className="block mb-1 text-[14px] font-bold leading-[100%] tracking-[0%] text-right font-[Tajawal]">الرصيد الابتدائي</label>
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              placeholder="$0"
              className="w-full p-2 border rounded"
            />
          </div>
          
        </div>

        <label className="block mb-1 text-[14px] font-bold leading-[100%] tracking-[0%] text-right font-[Tajawal]">ملاحظات (اختياري)</label>
        <input
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="اكتب هنا"
          className="w-full mb-8 p-2 border rounded"
        />

        <div className="flex justify-between gap-4">
         
          <button
            onClick={() => {
              onSave({ walletName, walletType, currency, balance, startDate, notes });
              onClose();
            }}
            className="w-[188px] h-[48px] bg-[#16423C] text-white px-8 py-[10px] rounded-[10px] hover:bg-green-800"
          >
            إنشاء محفظة
          </button>
          <div className="flex justify-between gap-4">
  <button
    onClick={onClose}
    className="w-[188px] h-[48px]  border-gray-600 border-[1px] text-gray-700 px-8 py-[10px] rounded-[10px] hover:bg-gray-100"
  >
    إلغاء
  </button>
</div>

        </div>
      </div>
    </div>
  );
}
