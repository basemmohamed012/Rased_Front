/* AddSharedWallet.jsx */
import React, { useState } from "react";

export default function AddWalletModal({ onClose, onSave }) {
  const [wallet, setWallet] = useState({
    name: "",
    type: "",
    members: 1,
    owner: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setWallet(prev => ({
      ...prev,
      [name]: type === 'number' ? Math.max(1, Number(value)) : value
    }));
  };

  const handleSubmit = () => {
    onSave(wallet);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 left-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-xl font-bold mb-6 text-right">إضافة محفظة جديدة</h2>

        <div className="space-y-4 text-right">
          <div>
            <label className="block text-sm text-gray-600 mb-1">اسم المحفظة</label>
            <input
              type="text"
              name="name"
              value={wallet.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#16423C]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">النوع</label>
            <input
              type="text"
              name="type"
              value={wallet.type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#16423C]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">عدد المشتركين</label>
            <input
              type="number"
              name="members"
              min="1"
              value={wallet.members}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#16423C]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">المالك</label>
            <input
              type="text"
              name="owner"
              value={wallet.owner}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#16423C]"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-[#16423C] text-white px-6 py-2 rounded-xl text-sm hover:bg-white hover:text-[#16423C] hover:border-2 hover:border-[#16423C] transition"
          >
            إضافة المحفظة
          </button>
        </div>
      </div>
    </div>
  );
}
