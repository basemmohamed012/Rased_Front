/* SharedWalletsSection.jsx */
import React, { useState } from "react";
import walletIcon from "../../../assets/images/share.svg";
import Dropdown from "../../../Layout/DropDown/DropDown.jsx";
import AddWalletModal from "../SharedWallet/AddSharedWallet.jsx";
import { useNavigate } from "react-router-dom";
export default function SharedWalletsSection() {

  const navigate = useNavigate();
  const WalletShared = (wallet) => {
    navigate('/detailsSharedWallet', { state: { wallet } });
  };
  
  const [showModal, setShowModal] = useState(false);
  const [sharedWallets, setSharedWallets] = useState([
    {
      id: 1,
      name: "محفظتي 1"  ,
      type: "مشتركة",
      in: "هذا الشهر+ 14.2%",
      members: 7,
      owner: " باسم محمد",
      creationDate: "2024-05-10",
      currency: "جنيه مصري",
      amount: 25000,
      totalActivity: 14.2,
      pieData: [
        { name: "كاش", value: 4000 },
        { name: "تحويلات", value: 5000 },
        { name: "فيزا", value: 6000 }
      ]
      ,
    DataMembers:[
      { id: 1, name: "محمد عبدالله", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ أسبوعين" },
      { id: 2, name: "محمد محمود", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-04", amountPaid: 1000, lastSeen: "منذ أسبوع" },
      { id: 3, name: "عبدالله محمود", email: "example@gmail.com", role: "مشرف", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ 40 يوم" },
      { id: 4, name: "محمد عبدالله", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ أسبوعين" },
      { id: 5, name: "محمد محمود", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-04", amountPaid: 1000, lastSeen: "منذ أسبوع" },
      { id: 6, name: "عبدالله محمود", email: "example@gmail.com", role: "مشرف", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ 40 يوم" },
    ]
      
    }
    ,{
      id: 2,
      name: "محفظتي 2",
      type: "مشتركة",
      in: "هذا الشهر+ 14.2%",
      members: 7,
      owner: "محمد المحلاوي",
      creationDate: "2024-05-10",
      currency: "جنيه مصري",
      amount: 50000,
      totalActivity: 14.2,
      pieData: [
        { name: "كاش", value: 4000 },
        { name: "تحويلات", value: 5000 },
        { name: "فيزا", value: 6000 }
      ]
      ,
      DataMembers:[
        { id: 1, name: "محمد عبدالله", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ أسبوعين" },
        { id: 2, name: "محمد محمود", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-04", amountPaid: 1000, lastSeen: "منذ أسبوع" },
        { id: 3, name: "عبدالله محمود", email: "example@gmail.com", role: "مشرف", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ 40 يوم" },
        { id: 4, name: "محمد عبدالله", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ أسبوعين" },
        { id: 5, name: "محمد محمود", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-04", amountPaid: 1000, lastSeen: "منذ أسبوع" },
        { id: 6, name: "عبدالله محمود", email: "example@gmail.com", role: "مشرف", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ 40 يوم" },
      ]
        
    }
    ,{
      id: 3,
      name: "محفظتي 3" ,
      type: "مشتركة",
      in: "هذا الشهر+ 14.2%",
      members: 7,
      owner: "ايمن ياسين",
      creationDate: "2024-05-10",
      currency: "جنيه مصري",
      amount: 22000,
      totalActivity: 14.2,
      pieData: [
        { name: "كاش", value: 4000 },
        { name: "تحويلات", value: 5000 },
        { name: "فيزا", value: 6000 }
      ],
      DataMembers:[
        { id: 1, name: "محمد عبدالله", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ أسبوعين" },
        { id: 2, name: "محمد محمود", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-04", amountPaid: 1000, lastSeen: "منذ أسبوع" },
        { id: 3, name: "عبدالله محمود", email: "example@gmail.com", role: "مشرف", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ 40 يوم" },
        { id: 4, name: "محمد عبدالله", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ أسبوعين" },
        { id: 5, name: "محمد محمود", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-04", amountPaid: 1000, lastSeen: "منذ أسبوع" },
        { id: 6, name: "عبدالله محمود", email: "example@gmail.com", role: "مشرف", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ 40 يوم" },
      ]
        
    }
    ,{
      id: 4,
      name: "محفظتي 4",
      type: "مشتركة",
      in: "هذا الشهر+ 14.2%",
      members: 7,
      owner: " فوزي الفرماوي",
      creationDate: "2024-05-10",
      currency: "جنيه مصري",
      amount: 40000,
      totalActivity: 14.2,
      pieData: [
        { name: "كاش", value: 4000 },
        { name: "تحويلات", value: 5000 },
        { name: "فيزا", value: 6000 }
      ]
      ,
      DataMembers:[
        { id: 1, name: "محمد عبدالله", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ أسبوعين" },
        { id: 2, name: "محمد محمود", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-04", amountPaid: 1000, lastSeen: "منذ أسبوع" },
        { id: 3, name: "عبدالله محمود", email: "example@gmail.com", role: "مشرف", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ 40 يوم" },
        { id: 4, name: "محمد عبدالله", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ أسبوعين" },
        { id: 5, name: "محمد محمود", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-04", amountPaid: 1000, lastSeen: "منذ أسبوع" },
        { id: 6, name: "عبدالله محمود", email: "example@gmail.com", role: "مشرف", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ 40 يوم" },
      ]
        
    }
    ,{
      id: 5,
      name: "محفظتي 5" ,
      type: "مشتركة",
      in: "هذا الشهر+ 14.2%",
      members: 7,
      owner: "محمد عادل",
      creationDate: "2024-05-10",
      currency: "جنيه مصري",
      amount: 30000,
      totalActivity: 14.2,
      pieData: [
        { name: "كاش", value: 4000 },
        { name: "تحويلات", value: 5000 },
        { name: "فيزا", value: 6000 }
      ],
      DataMembers:[
        { id: 1, name: "محمد عبدالله", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ أسبوعين" },
        { id: 2, name: "محمد محمود", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-04", amountPaid: 1000, lastSeen: "منذ أسبوع" },
        { id: 3, name: "عبدالله محمود", email: "example@gmail.com", role: "مشرف", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ 40 يوم" },
        { id: 4, name: "محمد عبدالله", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ أسبوعين" },
        { id: 5, name: "محمد محمود", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-04", amountPaid: 1000, lastSeen: "منذ أسبوع" },
        { id: 6, name: "عبدالله محمود", email: "example@gmail.com", role: "مشرف", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ 40 يوم" },
      ]
        
    }

    ,{
      id: 6,
      name: " 6محفظتي",
      type: "مشتركة",
      in: "هذا الشهر+ 14.2%",
      members: 7,
      owner: " بسنت",
      creationDate: "2024-05-10",
      currency: "جنيه مصري",
      amount: 60000,
      totalActivity: 14.2,
      pieData: [
        { name: "كاش", value: 4000 },
        { name: "تحويلات", value: 5000 },
        { name: "فيزا", value: 6000 }
      ]
      ,
      DataMembers:[
        { id: 1, name: "محمد عبدالله", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ أسبوعين" },
        { id: 2, name: "محمد محمود", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-04", amountPaid: 1000, lastSeen: "منذ أسبوع" },
        { id: 3, name: "عبدالله محمود", email: "example@gmail.com", role: "مشرف", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ 40 يوم" },
        { id: 4, name: "محمد عبدالله", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ أسبوعين" },
        { id: 5, name: "محمد محمود", email: "example@gmail.com", role: "مشاهد", joinDate: "2025-03-04", amountPaid: 1000, lastSeen: "منذ أسبوع" },
        { id: 6, name: "عبدالله محمود", email: "example@gmail.com", role: "مشرف", joinDate: "2025-03-01", amountPaid: 2000, lastSeen: "منذ 40 يوم" },
      ]
        
    }
           
  ]);

  const handleAddWallet = (newWallet) => {
    setSharedWallets(prev => [
      ...prev,
      { id: prev.length + 1, in: "", ...newWallet }
    ]);
  };

  return (
    <div className="relative p-6 w-[1120px] h-[800px] flex-wrap text-right font-sans mx-auto">
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
            className="bg-white shadow-md border border-gray-200 rounded-xl p-4 text-center flex flex-col justify-between w-[250px] h-auto"
          >
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className=" text-right">
                <h3 className="font-bold text-[18px]">{wallet.name}</h3>
                <div className="bg-[rgba(121,202,50,0.1)] w-[73px] h-[19px] rounded-md inline-block px-2 py-1 mb-2">
                <p className="text-[#79CA32] text-right text-[8px] whitespace-nowrap font-bold">{wallet.in}</p>
              </div>
                </div>
                <img src={walletIcon} alt="wallet icon" className="w-8 h-8" />
              </div>
              
              <div className="text-[12px] text-[#5c5c5c] space-y-1">
                <div className="flex justify-between">
                  <span className="font-medium">النوع</span>
                  <span className="font-bold">{wallet.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">عدد المشتركين</span>
                  <span className="font-bold">{wallet.members} مشتركين</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">المالك</span>
                  <span className="font-bold">{wallet.owner}</span>
                </div>
              </div>
            </div>
            <button 
           onClick={() => WalletShared(wallet)}
            
            className="mt-4 bg-[#16423C] text-white font-medium py-2 rounded-full hover:bg-white hover:text-[#16423C] hover:border hover:border-[#16423C] transition">
              عرض التفاصيل
            </button>
          </div>
        ))}

        {/* كرت الإضافة */}
        <div
          onClick={() => setShowModal(true)}
          className="h-[205px] w-[250px] bg-white shadow-md border-dashed border-2 border-gray-300 rounded-xl p-4 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-50 transition"
        >
          <span className="text-4xl text-[#16423C] font-bold mb-2">+</span>
          <span className="text-sm text-gray-500">إضافة بطاقة جديدة</span>
        </div>
      </div>

      {/* مودال الإضافة */}
      {showModal && (
        <AddWalletModal
          onClose={() => setShowModal(false)}
          onSave={(data) => {
            handleAddWallet(data);
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}