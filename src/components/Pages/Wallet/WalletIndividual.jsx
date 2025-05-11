import React, { useEffect, useState } from "react";
import wallettt from '../../../assets/images/wallettt.svg'
import Dropdown from '../../../Layout/DropDown/DropDown.jsx';
import AddWalletModal from "./Addwalletindividual.jsx";
import { useNavigate } from "react-router-dom";
import { ACCOUNT_STATUS, API_BASE_URL } from "../../../constants/AppConstants.js";
import axios from "axios";
import { toast } from "react-toastify";
import { decryptToken } from '../../helpers/TokenHelper'
import { Eye, PenBoxIcon, Trash2Icon } from "lucide-react";
import EditWalletModal from "./EditWalletModal.jsx";
import DeleteWalletModal from "./DeleteWalletModal.jsx";

export default function IndividualWalletsSection() {
  const navigate = useNavigate();
  // Loadings
  const [loading, setLoading] = useState(true);
  const [saveLoading, setSaveLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  // Wallets
  const [wallets, setWallets] = useState([]);
  const [addedWallet, setAddedWallet] = useState(false);
  const [walletId, setWalletId] = useState(null);
  // Token
  const [token, setToken] = useState('');
  // Modals
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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
          setToken(originalAcessToken); // state for the token
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
          setTimeout(() => {
            setLoading(false);
          }, 1000)
      }
      }

      fetchWallets();
  }, [addedWallet]);

  const Walletdetails = (wallet) => {
    navigate('/details', { state: { wallet } });
  };
  
  const handleSave = async (newWallet) => {
    try{
      setSaveLoading(true);

      const apiUrl = `${API_BASE_URL}/Wallets/Create`;
      
      const walletBody = {
        Name: newWallet.walletName,
        Description: newWallet.notes,
        InitialBalance: newWallet.balance,
        WalletStatusId: newWallet.status,
        ColorTypeId: newWallet.color,
        CurrencyId: newWallet.currency
      }
      // API Call
      const response = await axios.post(apiUrl, walletBody, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      // Check errors
      if(response.data.succeeded === false || response === null || response.data === null) {
          toast.error(response.data.message || 'خطأ في إنشاء محفظة جديدة!');
          return;
      }
      else {
        toast.success(response.data.message);
        setShowModal(false);
        setAddedWallet((prev) => !prev);
        return;
      }
    }
    catch(err) {
      console.log(err);
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
        // else {
        //   toast.error(errs.title || 'حدث خطأ ما');
        // }
      }
    }
    finally {
      setSaveLoading(false);
    }
  };

  const handleEdit = async (updatedWallet) => {
    try{
      setEditLoading(true);

      const apiUrl = `${API_BASE_URL}/Wallets/Update/${updatedWallet.walletId}`;
      
      const walletBody = {
        Name: updatedWallet.walletName,
        Description: updatedWallet.notes,
        InitialBalance: updatedWallet.balance,
        WalletStatusId: updatedWallet.status,
        ColorTypeId: updatedWallet.color,
        CurrencyId: updatedWallet.currency
      }
      // API Call
      const response = await axios.put(apiUrl, walletBody, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      // Check errors
      if(response.data.succeeded === false || response === null) {
          toast.error(response.data.message || 'خطأ في إنشاء محفظة جديدة!');
          return;
      }
      else {
        toast.success(response.data.message);
        setShowEditModal(false);
        setAddedWallet((prev) => !prev);
        return;
      }
    }
    catch(err) {
      console.log(err);
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
    finally {
      setEditLoading(false);
    }
  };

  const handleDelete = async (data) => {
    try{
      setDeleteLoading(true);

      const apiUrl = `${API_BASE_URL}/Wallets/Delete/${data.walletId}`;
      
      // API Call
      const response = await axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      // Check errors
      if(response.data.succeeded === false || response === null) {
          toast.error(response.data.message || 'خطأ في إنشاء محفظة جديدة!');
          return;
      }
      else {
        toast.success(response.data.message);
        setShowDeleteModal(false);
        setAddedWallet((prev) => !prev);
        return;
      }
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
    finally {
      setDeleteLoading(false);
    }
  };
  
  return (
    <div className="p-6 w-[1020px] h-auto text-right font-sans">
      <div className="flex justify-between mt-6">
        {/* العنوان + تصفية */}
        <div className="justify-between items-center mb-6">
          
          <h2 className="text-[20px] font-bold">المحافظ الشخصية</h2>
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
              <p className="text-[#ADAAAA] mb-2">{wallet.totalBalance.toFixed(2)} {wallet.walletCurrency.name}</p>
              <div className="text-[14px] text-gray-500 flex justify-center gap-5 px-4">
                <span className={`${wallet.walletStatus.name == 'نشط' ? 'text-green-600' : 'text-red-600'}`}>{wallet.walletStatus.name}</span>
              </div>
              <div className="mt-6 flex justify-center gap-6">
                <button 
                  className="">
                  <Eye className="text-maincolor cursor-pointer hover:text-gray-500" />
                </button>

                <button 
                  onClick={() => { setShowEditModal(true); setWalletId(wallet.id); }}
                  className="">
                  <PenBoxIcon className="text-warning cursor-pointer hover:text-gray-500" />
                </button>

                <button 
                  onClick={() => { setShowDeleteModal(true); setWalletId(wallet.id); }}
                  className="">
                  <Trash2Icon className="text-error cursor-pointer hover:text-gray-500" />
                </button>
              </div>

            </div>
          ))) : (
            <div className="flex justify-center items-center text-error">لا يوجد لديك محافظ شخصية حتي الآن</div>
          )
        }

          {/* زر الإضافة */}
          <div
            onClick={() => setShowAddModal(true)}
            className="bg-white shadow-xl border-dashed border-2 border-gray-300 w-[240px] h-[223px] rounded-xl p-6 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-50 transition"
          >
            <span className="text-3xl text-[#16423C] font-bold">+</span>
            <span className="mt-2 text-sm text-gray-500">إضافة</span>
          </div>
        </div>
        )
      }
      

      {/* مودال الإضافة */}
      {showAddModal && (
        <AddWalletModal
          onClose={() => setShowAddModal(false)}
          onSave={handleSave}
          saveLoading={saveLoading}
        />
      )}

      {/* مودال التعديل */}
      {showEditModal && (
        <EditWalletModal
          onClose={() => setShowEditModal(false)}
          onEdit={handleEdit}
          walletId={walletId}
          token={token}
          editLoading={editLoading}
        />
      )}

      {/* مودال الحذف */}
      {showDeleteModal && (
        <DeleteWalletModal
          onClose={() => setShowDeleteModal(false)}
          onDelete={handleDelete}
          walletId={walletId}
          deleteLoading={deleteLoading}
        />
      )}
    </div>
  );
}
