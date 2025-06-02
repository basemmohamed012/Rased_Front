import { useEffect, useState } from "react";
import wallettt from '../../../assets/images/wallettt.svg'
import Dropdown from '../../../Layout/DropDown/DropDown.jsx';
import { useNavigate } from "react-router-dom";
import { ACCOUNT_STATUS, API_BASE_URL } from "../../../constants/AppConstants.js";
import axios from "axios";
import { toast } from "react-toastify";
import { decryptToken } from '../../helpers/TokenHelper'
import walletIcon from "../../../assets/images/share.svg";
import { useLocation } from 'react-router-dom';


const BudgetWallets = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Loadings
  const [loading, setLoading] = useState(true);
  // Wallets
  const [wallets, setWallets] = useState([]);
  const [sharedWallets, setSharedWallets] = useState([]);

  // Get the Wallets from backend
  useEffect(() => {
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
      }

      // Fetch Data
      const fetchWallets = async () => {
        // Fetching the data
        try {
          setLoading(true);
          setWallets([]);

          const apiUrl = `${API_BASE_URL}/Wallets/All`;

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
          setLoading(false);
        }
      }

      fetchWallets();

      // Fetch Data
      const fetchSharedWallets = async () => {
        // Fetching the data
        try {
          setLoading(true);
          setWallets([]);

          const apiUrl = `${API_BASE_URL}/SharedWallets/All`;

          // API Call
          const response = await axios.get(apiUrl, {
            headers: {
              Authorization: `Bearer ${originalAcessToken}`
            }
          });
          
          // Check errors
          if(response.data.succeeded === true && response !== null && response.data !== null && response.data.data !== null) {
              setSharedWallets(response.data.data);
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
          setLoading(false);
        }
      }

      fetchSharedWallets();
  }, []);

  const handleBudget = (walletId, sharedWalletId, name, currency) => {
    localStorage.setItem('walletId', walletId);
    localStorage.setItem('sharedWalletId', sharedWalletId);
    localStorage.setItem('walletName', name);
    localStorage.setItem('walletCurrency', currency);

    if(location.state && location.state.from === 'budget')
      navigate('/add-budget');
    else
      navigate('/add-income');
  }
  
  return (
    <div className="p-6 w-[1020px] h-auto text-right font-sans">
      <div className="flex justify-between mt-6">
        {/* العنوان + تصفية */}
        <div className="justify-between items-center mb-6">
          {
            location.state && location.state.from === 'budget' ? ( 
                <h2 className="text-[20px] font-bold text-maincolor">اختر المحفظة المناسبة لإنشاء ميزانيــة جديدة</h2>
             ) : (
                <h2 className="text-[20px] font-bold text-maincolor">اختر المحفظة المناسبة لإنشاء مصدر دخــل جديد</h2>
            )
          }
        </div>
        {/* <Dropdown /> */}
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
          <>
          <div className="flex justify-center">
            <p className="text-secondcolor font-semibold border-b-2 border-b-maincolor p-2 mb-2 w-1/4 text-center rounded-lg">المحافظ الشخصية</p>
          </div>
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
              <p className="text-[#ADAAAA] mb-2">{wallet.totalBalance.toFixed(2)} {wallet.walletCurrency.name}</p>
              <div className="text-[14px] text-gray-500 flex justify-center gap-5 px-4">
                <span className={`${wallet.walletStatus.name == 'نشط' ? 'text-green-600' : 'text-red-600'}`}>{wallet.walletStatus.name}</span>
              </div>
              <div className="mt-6 flex justify-center gap-6">
                <button 
                    onClick={() => handleBudget(wallet.id, null, wallet.name, wallet.walletCurrency.name)}
                  className="bg-maincolor text-white px-4 py-2 rounded-md shadow-md hover:bg-secondcolor cursor-pointer">
                  {/* <Eye className="text-maincolor cursor-pointer hover:text-gray-500" /> */}
                  اختـــــــر
                </button>
              </div>

            </div>
          ))) : (
            <div className="flex justify-center items-center text-error">لا يوجد لديك محافظ شخصية حتي الآن</div>
          )
          }
        </div>

        <div className="flex justify-center mt-10">
          <p className="text-secondcolor font-semibold border-b-2 border-b-maincolor p-2 mb-2 w-1/4 text-center rounded-lg">المحافظ المشتركة</p>
        </div>
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
          {
          sharedWallets.length > 0 ? (
          sharedWallets.map((wallet) => (
            <div
              key={wallet.id}
              className="bg-white shadow-xl border-2 rounded-xl p-6 text-center"
            >
              <div className="text-green-700 text-4xl flex justify-center mb-2">
                <img src={walletIcon} alt="" />
              </div>
              <h3 className="font-bold text-[20px] mb-1">{wallet.name}</h3>
              <p className="text-[#ADAAAA] mb-2">{wallet.totalBalance.toFixed(2)} {wallet.walletCurrency.name}</p>
              <div className="text-[14px] text-gray-500 flex justify-center gap-5 px-4">
                <span className={`${wallet.walletStatus.name == 'نشط' ? 'text-green-600' : 'text-red-600'}`}>{wallet.walletStatus.name}</span>
              </div>
              <div className="mt-6 flex justify-center gap-6">
                <button 
                    onClick={() => handleBudget(null, wallet.id, wallet.name, wallet.walletCurrency.name)}
                  className="bg-maincolor text-white px-4 py-2 rounded-md shadow-md hover:bg-secondcolor cursor-pointer">
                  {/* <Eye className="text-maincolor cursor-pointer hover:text-gray-500" /> */}
                  اختـــــــر
                </button>
              </div>

            </div>
          ))) : (
            <div className="flex justify-center items-center text-error">لا يوجد لديك محافظ شخصية حتي الآن</div>
          )
          }
        </div>
        </>
        )
      }
    </div>
  );
}

export default BudgetWallets