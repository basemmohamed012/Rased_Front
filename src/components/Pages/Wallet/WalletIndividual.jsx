import React, { useState } from "react";
import wallettt from '../../../assets/images/wallettt.svg'
import mageFiltter from '../../../assets/images/mage_filter.svg'
import  Dropdown from '../../../Layout/DropDown/DropDown.jsx';
import AddWalletModal from "./Addwalletindividual.jsx";

const wallets = [
  { id: 1, name: "محفظتي", amount: "15,000 جنيه مصري", type: "شخصية" },
  { id: 2, name: "محفظتي", amount: "15,000 جنيه مصري", type: "شخصية" },
  { id: 3, name: "محفظتي", amount: "15,000 جنيه مصري", type: "شخصية" },
];

export default function IndividualWalletsSection() {
    const [showModal, setShowModal] = useState(false);
  return (
    <div className="p-6  w-[1020px] h-[350px] text-right font-sans">
     <div className="flex justify-between">
         {/* العنوان + تصفية */}
      <div className=" justify-between items-center mb-6">
        <div className="flex items-center gap-2 text-black text-lg font-bold">
         
          <span className="text-[14px] font-bold " >تصفية</span>
          <img src={mageFiltter} alt="" />
        </div>
        <h2 className="text-[20px] font-bold">المحافظ الفردية</h2>
      </div>
      <Dropdown />
     </div>

      {/* الأزرار */}
      
      
      {/* كروت المحافظ */}
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-[800px] h-[173px] gap-6">
        {wallets.map((wallet) => (
          <div
            key={wallet.id}
            className="bg-white shadow-md rounded-xl p-6 text-center"
          >
            <div className="text-green-700 text-4xl flex justify-center mb-2">
            <img src={wallettt} alt="" />
            </div>
            <h3 className="font-bold text-[20px]  mb-1">{wallet.name}</h3>
            <p className="text-[#ADAAAA] mb-2">{wallet.amount}</p>
            <div className="text-[14px] text-gray-500 flex justify-between gap-5 px-4">
            <span className="text-[#ADAAAA]"> نوع المحفظة :</span>
              <span className="text-[#ADAAAA]">{wallet.type}</span>
              
            </div>
          </div>
          
        ))}
        <div className="flex justify-between relative right-[850px] bottom-32 items-center mb-6">
        
        <button 
        onClick={() => setShowModal(true)}
        className="bg-[#16423C] w-[113px] h-[35px] rounded-[15px] text-white  ">
          + إضافة
        </button>
      </div>
      {showModal && (
        <AddWalletModal
          onClose={() => setShowModal(false)}
          onSave={() => {
            // هنا ممكن تحفظ البيانات
            console.log("تم الحفظ");
          }}
        />
      )}
      </div>
      
    </div>
  );
}
