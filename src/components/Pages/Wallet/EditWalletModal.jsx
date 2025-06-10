import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { API_BASE_URL } from "../../../constants/AppConstants";
import { toast } from "react-toastify";

const EditWalletModal = ({ onClose, onEdit, walletId, token, editLoading }) => {
  const [walletName, setWalletName] = useState('');
  const [balance, setBalance] = useState(0.0);
  const [notes, setNotes] = useState('');
  // Wallet
  const [wallet, setWallet] = useState(null);
  // Data Parts
  const [currencies, setCurrencies] = useState([]);
  const [currency, setCurrency] = useState('-999');
  const [colors, setColors] = useState([]);
  const [color, setColor] = useState('-999');
  const [statusData, setStatusData] = useState([]);
  const [status, setStatus] = useState('-999');

  // Fetch the Wallet From API
  useEffect(() => {
    const fetchWallet = async () => {
      const apiUrl = `${API_BASE_URL}/Wallets/Single/${walletId}`;
      try {
        // API Call
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        // Set Wallet
        const resp = response.data.data;
        if(resp === null || resp === undefined) {
            onClose();
            return;
        }
        setWallet(resp);
        setWalletName(resp.name);
        setNotes(resp.description);
        setBalance(resp.initialBalance);
        setCurrency(resp.walletCurrency.id);
        setStatus(resp.walletStatus.id);
        setColor(resp.walletColor.id);
      }
      catch(err) {
        // set the unsuccessful message
        if(err.status === 401) { // UnAuthorized
            localStorage.clear();
            // Call Logout Endpoint ...
            navigate('/login');
        }
        else if(err.status === 400) {
            let errs = err.response.data;
            if(Array.isArray(errs.errors)) {
                toast.error(errs.errors.join(', ') || 'حدث خطأ ما');
            }
        }
      }
    }

    fetchWallet();
  }, []);

  // Fetch Wallet Data Parts
  useEffect(() => {
    const fetchDataParts = async () => {
      const apiUrl = `${API_BASE_URL}/Wallets/DataParts`;
      try {
        const response = await axios.get(apiUrl);

        const resp = response.data.data;
        setCurrencies(resp.currency);
        setStatusData(resp.status);
        setColors(resp.color);
      }
      catch(err) {
        // console.err(err);
      }
    }

    fetchDataParts();
  }, []);

  const walletValidation = () => {
    if(walletName == '' || walletName == undefined || walletName == null) {
      toast.error('اسم المحفظة مطلوب ❌');
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40  flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-[15px] w-[432px] h-[567px] shadow-xl text-right">
      <h3 className="text-[18px] mt-8 font-bold leading-[100%] tracking-[0%] text-center mb-10 font-[Tajawal]">
        تحديث بيانات محفظة
      </h3>


        <label className="block mb-1 text-[14px] font-bold leading-[100%] tracking-[0%] text-right font-[Tajawal]">
          اسم المحفظة
        </label>

        <input
          type="text"
          value={walletName}
          onChange={(e) => setWalletName(e.target.value)}
          placeholder="اكتب اسم هنا"
          className="w-full mb-8 p-2 border-graycolor hover:border-maincolor rounded"
        />


        <div className="flex gap-2 mb-8">

          <div className="w-1/2">
            <label className="block mb-1 text-[14px] font-bold leading-[100%] tracking-[0%] text-right font-[Tajawal]">الرصيد الابتدائي</label>
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              placeholder="$0"
              className="w-full p-2 border-graycolor hover:border-maincolor rounded"
            />
          </div>
          <div className="w-1/2">
            <label className="block mb-1 text-[14px] font-bold leading-[100%] tracking-[0%] text-right font-[Tajawal]">العملة</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full p-2 border-graycolor hover:border-maincolor rounded"
            >
              <option value='-999' selected>اختر ..</option>
              {
                currencies.map((ele) => 
                    ele.id == currency ? (
                        <option value={ele.id} key={ele.id} selected >{ele.name}</option>
                    ) : (
                        <option value={ele.id} key={ele.id} >{ele.name}</option>
                    )
                )
              }
            </select>
          </div>
        </div>

        <div className="flex gap-2 mb-8">
          <div className="w-1/2">
            <label className="block mb-1 text-[14px] font-bold leading-[100%] tracking-[0%] text-right font-[Tajawal]">حالة المحفظة</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 border-graycolor hover:border-maincolor rounded"
            >
              <option value='-999' selected>اختر ..</option>
              {
                statusData.map((ele) => 
                    ele.id == status ? (
                        <option value={ele.id} key={ele.id} selected >{ele.name}</option>
                    ) : (
                        <option value={ele.id} key={ele.id} >{ele.name}</option>
                    )
                )
              }
            </select>
          </div>
          <div className="w-1/2">
            <label className="block mb-1 text-[14px] font-bold leading-[100%] tracking-[0%] text-right font-[Tajawal]">لون المحفظة</label>
            <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full p-2 border-graycolor hover:border-maincolor rounded"
            >
              <option value='-999' selected>اختر ..</option>
              {
                colors.map((ele) => 
                    ele.id == color ? (
                        <option value={ele.id} key={ele.id} selected >{ele.name}</option>
                    ) : (
                        <option value={ele.id} key={ele.id} >{ele.name}</option>
                    )
                )
              }
            </select>
          </div>
        </div>

        <label className="block mb-1 text-[14px] font-bold leading-[100%] tracking-[0%] text-right font-[Tajawal]">ملاحظات (اختياري)</label>
        <input
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="اكتب هنا"
          className="w-full mb-8 p-2 border-graycolor hover:border-maincolor rounded"
        />

        <div className="flex justify-between gap-4">
          <button
            onClick={() => {
              onEdit({ walletName, notes, balance, status, color, currency, walletId });
              walletValidation();
            }}
            className={`w-[188px] h-[48px] bg-[#16423C] text-white px-8 py-[10px] rounded-[10px] hover:bg-green-800 ${editLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            { 
              editLoading ? 'جاري الحفظ ..' : 'حفظ التعديلات'
            }
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

export default EditWalletModal