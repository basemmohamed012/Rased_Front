import React, { useState } from "react";
import wallettt from '../../../assets/images/wallettt.svg'
import mageFiltter from '../../../assets/images/mage_filter.svg'
import Dropdown from '../../../Layout/DropDown/DropDown.jsx';
import AddWalletModal from "./Addwalletindividual.jsx";
import { useNavigate } from "react-router-dom";
export default function IndividualWalletsSection() {
  const navigate =useNavigate();
  const Walletdetails = (wallet) => {
    navigate('/details', { state: { wallet } });
  };
  
 
  const [wallets, setWallets] = useState([
    {
      id: 1,
      name: "محفظتي الأولى",
      amount: 15000,
      type: "شخصية",
      currency: "جنيه مصري",
      creationDate: "10 مارس 2025",
      totalActivity: 6.25,
      pieData: [
        { name: "كاش", value: 5000 },
        { name: "تحويلات", value: 7000 },
        { name: "فيزا", value: 3000 }
      ]
    },
    {
      id: 2,
      name: "محفظتي الثانية",
      amount: 10000,
      type: "شخصية",
      currency: "دولار أمريكي",
      creationDate: "5 أبريل 2025",
      totalActivity: 4.5,
      pieData: [
        { name: "كاش", value: 4000 },
        { name: "تحويلات", value: 3000 },
        { name: "فيزا", value: 2000 }
      ]
    },
    {
      id: 3,
      name: "محفظتي الثانية",
      amount: 90000,
      type: "شخصية",
      currency: "دولار أمريكي",
      creationDate: "5 أبريل 2025",
      totalActivity: 4.5,
      pieData: [
        { name: "كاش", value: 4000 },
        { name: "تحويلات", value: 5000 },
        { name: "فيزا", value: 6000 }
      ]
    },
  ]);
  
  const [showModal, setShowModal] = useState(false);

  const handleSave = (newWallet) => {
    setWallets(prev => [
      ...prev,
      {
        id: Date.now(),
        name: newWallet.walletName,
        amount: Number(newWallet.balance), // خليه رقم مش نص
        currency: newWallet.currency,
        type: newWallet.walletType,
        creationDate: new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' }),
        totalActivity: 0, // أو أي قيمة افتراضية
        pieData: [], // مبدئياً فاضي
      }
    ]);
    setShowModal(false);
  };
  
  return (
    <div className="p-6 w-[1020px] h-auto text-right font-sans">
      <div className="flex justify-between">
        {/* العنوان + تصفية */}
        <div className="justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-black text-lg font-bold">
            <span className="text-[14px] font-bold">تصفية</span>
            <img src={mageFiltter} alt="" />
          </div>
          <h2 className="text-[20px] font-bold">المحافظ الفردية</h2>
        </div>
        <Dropdown />
      </div>

      {/* كروت المحافظ */}
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        {wallets.map((wallet) => (
          <div
            key={wallet.id}
            className="bg-white shadow-xl border-2 rounded-xl p-6 text-center"
          >
            <div className="text-green-700 text-4xl flex justify-center mb-2">
              <img src={wallettt} alt="" />
            </div>
            <h3 className="font-bold text-[20px] mb-1">{wallet.name}</h3>
            <p className="text-[#ADAAAA] mb-2">{wallet.amount} {wallet.currency}</p>
            <div className="text-[14px] text-gray-500 flex justify-between gap-5 px-4">
              <span className="text-[#ADAAAA]">نوع المحفظة :</span>
              <span className="text-[#ADAAAA]">{wallet.type}</span>
            </div>
            <button 
  onClick={() => Walletdetails(wallet)}
  className="mt-3 relative left-[9px] w-[200px] bg-[#16423C] text-white py-2 rounded-[15px] text-sm hover:bg-white hover:text-[#16423C] hover:border-2 hover:border-[#16423C] transition">
    عرض التفاصيل
</button>

          </div>
        ))}

        {/* زر الإضافة */}
        <div
          onClick={() => setShowModal(true)}
          className="bg-white shadow-xl border-dashed border-2 border-gray-300 w-[240px] h-[223px] rounded-xl p-6 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-50 transition"
        >
          <span className="text-3xl text-[#16423C] font-bold">+</span>
          <span className="mt-2 text-sm text-gray-500">إضافة</span>
        </div>
      </div>

      {/* مودال الإضافة */}
      {showModal && (
        <AddWalletModal
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
