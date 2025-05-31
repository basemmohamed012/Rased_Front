import React, { useState } from "react";

const AddAmountPopup = ({ onClose, onConfirm }) => {
  const [amount, setAmount] = useState("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white w-[432px] h-[330px] max-w-md p-8 rounded-xl shadow-lg border flex flex-col justify-between">
        {/* العنوان والوصف */}
        <div className="text-right mt-6">
          <h2 className="text-xl font-bold mb-2">إضافة مبلغ مالي جديد</h2>
          <p className="text-[#BBB6B6] text-[12px]  mb-4">يمكنك إضافةمبلغ مالي جديد لتقترب من تحقيق هدفك !</p>
        </div>

        {/* حقل الإدخال */}
        <div className="text-right">
          <label className="block font-bold mb-1">القيمة</label>
          <input
            type="number"
            className="w-full border rounded px-3 py-2 text-gray-700 text-center focus:outline-none focus:ring-2 focus:ring-[#16423C]"
            placeholder="0.0$"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* الأزرار */}
        <div className="flex justify-between gap-3 mt-4">
          <button
            className="w-1/2 py-2 bg-[#16423C] text-white rounded font-bold hover:bg-[#10332e]"
            onClick={() => onConfirm(amount)}
          >
            تأكيد
          </button>
          <button
            className="w-1/2 py-2 border border-[#16423C] rounded text-[#16423C] font-bold hover:bg-gray-100"
            onClick={onClose}
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAmountPopup;
