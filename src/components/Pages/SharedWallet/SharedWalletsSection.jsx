import React, { useState } from "react";
import walletIcon from "../../../assets/images/share.svg";
import mageFilter from "../../../assets/images/mage_filter.svg";
import Dropdown from "../../../Layout/DropDown/DropDown.jsx";
import AddWalletModal from "../Wallet/Addwalletindividual.jsx";

const sharedWallets = [
  { id: 1, name: "محفظتي", type: "مشتركة" , in : "هذا الشهر+ 14.2%" , profit: "14%", members: 7, owner: "ايمن محمود" },
  { id: 2, name: "محفظتي", type: "مشتركة" , in : "هذا الشهر+ 14.2%" , profit: "14%", members: 7, owner: "احمد محمود" },
  { id: 3, name: "محفظتي",  type: "مشتركة" , in : "هذا الشهر+ 14.2%" , profit: "14%", members: 7, owner: "باسم محمود" },
  { id: 4, name: "محفظتي",  type: "مشتركة" , in : "هذا الشهر+ 14.2%" ,profit: "14%", members: 7, owner: "محمد محمود" },
  { id: 5, name: "محفظتي",  type: "مشتركة" , in : "هذا الشهر+ 14.2%" ,profit: "14%", members: 7, owner: "فوزي محمود" },
];

export default function SharedWalletsSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6 w-[1120px]  flex-wrap text-right font-sans mx-auto">
      {/* الهيدر */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[20px] font-bold">المحافظ المشتركة</h2>
        <Dropdown />
      </div>

      {/* شبكة الكروت */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12">
  {sharedWallets.map((wallet) => (
    <div
      key={wallet.id}
      className="bg-white shadow-md rounded-xl p-4 text-center flex flex-col justify-between w-[250px] h-[205px]"
    >
      <div>
        
       <div className="flex justify-between">
       <div>
        <h3 className="font-bold text-[18px] mb-1">{wallet.name}</h3>
        
        <div className="bg-[rgba(121,202,50,0.1)] w-[73px] h-[19px] rounded-[5px]">
        <p className="text-[#79CA32]  text-[8px] font-bold relative top-1 ">
            {wallet.in}
        </p>
        </div>
        </div>
        <img src={walletIcon} alt="" />
       </div>
        <div className="text-[13px] text-[#ADAAAA] space-y-1 mt-4">
          <div className="flex justify-between">
          <p className="text-[12px] font-medium">النوع </p>
          <p className="text-[12px] font-bold">{wallet.type}</p>
          </div>
          <div className="flex justify-between">
          <p className="text-[12px] font-medium">عدد المشتركين </p>
          <p className="text-[12px] font-bold">{wallet.members} مشتركين</p>
          </div>
          <div className="flex justify-between">
          <p className="text-[12px] font-medium">المالك </p>
          <p className="text-[12px] font-bold">{wallet.owner}</p>
          </div>
        </div>
      </div>
      <button className="mt-4 bg-[#16423C] text-white py-2 rounded-[15px] text-sm hover:bg-white hover:text-[#16423C] hover:border-2 hover:border-[#16423C] transition">
        عرض التفاصيل
      </button>
    </div>
  ))}

  {/* كرت الإضافة */}
  <div
    onClick={() => setShowModal(true)}
    className="h-[205px] w-[250px] bg-white shadow-md border-dashed border-2 border-gray-300 rounded-xl p-4 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-50 transition"
  >
    <span className="text-3xl text-[#16423C] font-bold">+</span>
    <span className="mt-2 text-sm text-gray-500">إضافة</span>
  </div>
</div>


      {/* مودال الإضافة */}
      {showModal && (
        <AddWalletModal
          onClose={() => setShowModal(false)}
          onSave={(data) => {
            console.log("تم الحفظ", data);
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}
