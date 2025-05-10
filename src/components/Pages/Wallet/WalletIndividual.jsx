import React, { useEffect, useState } from "react";
import wallettt from '../../../assets/images/wallettt.svg'
import mageFiltter from '../../../assets/images/mage_filter.svg'
import Dropdown from '../../../Layout/DropDown/DropDown.jsx';
import AddWalletModal from "./Addwalletindividual.jsx";
import { useNavigate } from "react-router-dom";
import { ACCOUNT_STATUS, API_BASE_URL } from "../../../constants/AppConstants.js";
import axios from "axios";
import { toast } from "react-toastify";
import { decryptToken } from '../../helpers/TokenHelper'

export default function IndividualWalletsSection() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [wallets, setWallets] = useState([]);

  // Get the Wallets from backend
  const apiUrl = `${API_BASE_URL}/Wallets/All`;
  useEffect(async () => {
      // check if the account is active
      if(localStorage.getItem('acc-stat') !== ACCOUNT_STATUS.ACTIVE) {
        // Call the Logout from Backend ..
        localStorage.clear();
        navigate('/login');
      }
      // Get the token
      const accessToken = localStorage.getItem('acc-token');
      let originalAcessToken = '';
      if(!accessToken) {
          navigate('/login');
          return;
      }
      else {
          // decrypt the access token
          originalAcessToken = decryptToken(accessToken);
          console.log(originalAcessToken);
      }

      // Fetching the data
      try {
        setLoading(true);
        setWallets([]);

        // API Call
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${originalAcessToken}`
          }
        });
        
        // Check errors
        if(response.data.succeeded === true && response !== null && response.data !== null && response.data.data !== null) {
            setWallets(response.data.data);
        }
    } catch (err) {
        // set the unsuccessful message
        if(err.status === 401) { // UnAuthorized
          localStorage.clear();
          // Call Logout Endpoint ...
          navigate('/login');
        }
        if(err.response && err.response.data.errors.length > 0)
          toast.error(err.response.data.errors.join(', ') || 'حدث خطأ ما');
    } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000)
    }
  }, []);


  const Walletdetails = (wallet) => {
    navigate('/details', { state: { wallet } });
  };  
  
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
          <div className="flex justify-between mt-6">
            {/* العنوان + تصفية */}
            <div className="justify-between items-center mb-6">
              
              <h2 className="text-[20px] font-bold">المحافظ الفردية</h2>
            </div>
            <Dropdown />
          </div>
        
          {
            loading ? (
              <div className="flex justify-center items-start min-h-screen">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-maincolor mx-auto"></div>
                  {/* <p className="mt-2 text-maincolor">جاري التحميل ⌛</p> */}
                </div>
              </div>
            ) : (
            <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
              {
                wallets.length > 0 ? (
              wallets.map((wallet) => (
                <div
                  key={wallet.id}
                  className="bg-white shadow-xl border-2 rounded-xl p-6 text-center"
                >
                  <div className="text-green-700 text-4xl flex justify-center mb-2">
                    <img src={wallettt} alt="" />
                  </div>
                  <h3 className="font-bold text-[20px] mb-1">{wallet.name}</h3>
                  <p className="text-[#ADAAAA] mb-2">{wallet.totalBalance.toFixed(2)} {wallet.currency}</p>
                  <div className="text-[14px] text-gray-500 flex justify-center gap-5 px-4">
                    <span className="text-green-500">{wallet.status}</span>
                  </div>
                  <button 
                    onClick={() => Walletdetails(wallet)}
                    className="mt-3 relative left-[9px] w-[200px] bg-[#16423C] text-white py-2 rounded-[15px] text-sm hover:bg-white hover:text-[#16423C] hover:border-2 hover:border-[#16423C] transition">
                      عرض التفاصيل
                  </button>

                </div>
              ))) : (
                <div className="flex justify-center items-center">لا يوجد لديك محافظ شخصية حتي الآن</div>
              )
            }

              {/* زر الإضافة */}
              <div
                onClick={() => setShowModal(true)}
                className="bg-white shadow-xl border-dashed border-2 border-gray-300 w-[240px] h-[223px] rounded-xl p-6 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-50 transition"
              >
                <span className="text-3xl text-[#16423C] font-bold">+</span>
                <span className="mt-2 text-sm text-gray-500">إضافة</span>
              </div>
            </div>
            )
          }
          

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
