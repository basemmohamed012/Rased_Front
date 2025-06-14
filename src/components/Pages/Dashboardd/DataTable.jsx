import React, { useState, useEffect } from 'react';
import { Search, Edit3, Trash2, Wallet, Users, Target } from 'lucide-react';
import axios from "axios";
import { ACCOUNT_STATUS, API_BASE_URL } from "../../../constants/AppConstants.js";
import { decryptToken } from '../../helpers/TokenHelper.js'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function TransactionTable() {
  const navigate = useNavigate();
  // State for data sources
  const [selectedSource, setSelectedSource] = useState('wallets');
  const [sourceData, setSourceData] = useState([]);
  const [selectedSourceId, setSelectedSourceId] = useState('');
  // State for transactions and filtering
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');
  const [expenseId, setExpenseId] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  
  // Category colors
  const categoryColors = {
  'مطاعم': 'bg-green-100 text-green-600', // Food
  'مشروبات': 'bg-green-100 text-green-600', // Drinks
  'بقالة': 'bg-green-100 text-green-600', // Grocery
  'حلويات': 'bg-green-100 text-green-600', // Desserts
  'مواد غذائية': 'bg-green-100 text-green-600', // Food supplies
  'ملابس': 'bg-yellow-100 text-yellow-600', // Shopping
  'إلكترونيات': 'bg-yellow-100 text-yellow-600', // Electronics
  'مستلزمات المنزل': 'bg-yellow-100 text-yellow-600', // Home essentials
  'مستلزمات شخصية': 'bg-yellow-100 text-yellow-600', // Personal care
  'كتب': 'bg-purple-100 text-purple-600', // Entertainment
  'الإيجار': 'bg-red-100 text-red-600', // Bills
  'فواتير كهرباء': 'bg-red-100 text-red-600', // Electricity Bills
  'صيانة منزلية': 'bg-red-100 text-red-600', // Home Maintenance
  'أثاث': 'bg-yellow-100 text-yellow-600', // Shopping
  'المواصلات العامة': 'bg-blue-100 text-blue-600', // Transportation
  'سيارات الأجرة': 'bg-blue-100 text-blue-600', // Taxi
  'الوقود': 'bg-blue-100 text-blue-600', // Fuel
  'الصيانة': 'bg-blue-100 text-blue-600', // Vehicle Maintenance
  'رياضة': 'bg-pink-100 text-pink-600', // Health
  'أفلام ومسرح': 'bg-purple-100 text-purple-600', // Entertainment
  'الهاتف المحمول': 'bg-red-100 text-red-600', // Bills
  'الإنترنت': 'bg-red-100 text-red-600', // Bills
  'الضرائب': 'bg-red-100 text-red-600', // Taxes
  'التأمين': 'bg-red-100 text-red-600', // Insurance
  'الأسهم': 'bg-green-100 text-green-600', // Investments
  'العقارات': 'bg-green-100 text-green-600', // Investments
  'الراتب': 'bg-green-100 text-green-600', // Income
  'دخل إضافي': 'bg-green-100 text-green-600' // Additional Income
  };

  // Source options
  const sourceOptions = [
    { value: 'wallets', label: 'المحافظ', icon: Wallet },
    { value: 'shared_wallets', label: 'المحافظ المشتركة', icon: Users }
    // { value: 'budgets', label: 'الميزانيات', icon: Target }
  ];

  // Get the Token
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
        setToken(originalAcessToken);
    }
  }, []);

  // Fetch source data when source type changes
  useEffect(() => {
    const accessToken = localStorage.getItem('acc-token');
    fetchSourceData(selectedSource, decryptToken(accessToken));
  }, [selectedSource]);

  // Fetch transactions when source ID changes
  useEffect(() => {
    if (selectedSourceId) {
      fetchTransactions(selectedSource, selectedSourceId);
    }
  }, [selectedSourceId, selectedSource]);

  // Fetch source data (wallets, shared wallets, or budgets)
  const fetchSourceData = async (sourceType, curToken) => {
    // Fetch Data
    const fetchWallets = async () => {
      // Fetching the data
      try {
        // setLoading(true);
        setSourceData([]);

        const apiUrl = `${API_BASE_URL}/Wallets/All`;

        // API Call
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${curToken}`
          }
        });
        
        // Check errors
        if(response.data.succeeded === true && response !== null && response.data !== null && response.data.data !== null) {
            setSourceData(response.data.data);
        }
      } catch (err) {
          console.log(err);
          // set the unsuccessful message
          if(err.status === 401) { // UnAuthorized
              localStorage.clear();
              // Call Logout Endpoint ...
              navigate('/login');
          }
          if(err.response && err.response.data.errors.length > 0)
              toast.error(err.response.data.errors.join(', ') || 'حدث خطأ ما');
      } finally {

      }
    }

    const fetchSharedWallets = async () => {
      // Fetching the data
      try {
        // setLoading(true);
        setSourceData([]);

        const apiUrl = `${API_BASE_URL}/SharedWallets/All`;

        // API Call
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${curToken}`
          }
        });
        
        // Check errors
        if(response.data.succeeded === true && response !== null && response.data !== null && response.data.data !== null) {
            setSourceData(response.data.data);
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

      }
    }

    if(sourceType === 'wallets')
      fetchWallets();
    else
      fetchSharedWallets();
  };

  // Fetch transactions for selected source
  const fetchTransactions = async (sourceType, sourceId) => {
    const fetchTransactionsByWallets = async () => {
      // Fetching the data
      try {
        setLoading(true);
        setTransactions([]);

        const apiUrl = `${API_BASE_URL}/expenses/GetTenExpensesByWallet/${sourceId}`;

        console.log(token);

        // API Call
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        console.log(response);

        // Check errors
        if(response.data.succeeded === true && response !== null && response.data !== null && response.data.data !== null) {
            setTransactions(response.data.data);
        }
      } catch (err) {
          console.log(err);
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

    const fetchTransactionsBySharedWallets = async () => {
      // Fetching the data
      try {
        setLoading(true);
        setTransactions([]);

        const apiUrl = `${API_BASE_URL}/expenses/GetTenExpensesByWallet/${sourceId}?isShared=true`;

        console.log(token);

        // API Call
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        console.log(response);

        // Check errors
        if(response.data.succeeded === true && response !== null && response.data !== null && response.data.data !== null) {
            setTransactions(response.data.data);
        }
      } catch (err) {
          console.log(err);
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

    if(sourceType === 'wallets')
      fetchTransactionsByWallets();
    else
      fetchTransactionsBySharedWallets();
  };

  const handleSourceChange = (newSource) => {
    setSelectedSource(newSource);
  };

  const handleSourceIdChange = (sourceId) => {
    setSelectedSourceId(sourceId);
  };

  const handleUpdateExpense = (exId) => {
    navigate(`/edit-expense/${exId}`);
  }

  const handleDeleteExpense = async (data) => {
    try{
      setDeleteLoading(true);

      const apiUrl = `${API_BASE_URL}/expenses/${data.expenseId}`;
      
      // API Call
      const response = await axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      // Check errors
      if(response.data.succeeded === false || response === null) {
          toast.error(response.data.message || 'خطأ!');
          return;
      }
      else {
        setShowDeleteModal(false);
        fetchTransactions(selectedSource, selectedSourceId);
        toast.success('تم حذف المصروف بنجاح!');
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
  }

  const formatArabicDate = (dateStr) => {
    const dateObj = new Date(dateStr);
    return dateObj.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white h-auto p-4 rounded-2xl w-5/6 shadow-xl border-1 rtl text-right">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
        <h2 className="text-[22px] text-maincolor font-bold">العمليات الحالية</h2>
        
        <div className="flex items-center gap-2 flex-wrap">
          {/* Source Type Selection */}
          <div className="flex items-center gap-1 bg-gray-50 rounded-lg p-1">
            {sourceOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <button
                  key={option.value}
                  onClick={() => handleSourceChange(option.value)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedSource === option.value
                      ? 'bg-secondcolor text-white shadow-sm'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {option.label}
                </button>
              );
            })}
          </div>

          {/* Source Selection Dropdown */}
          {sourceData.length > 0 && (
            <select
              className="flex w-[180px] h-[48px] items-center border p-2 px-3 rounded-md text-sm text-gray-700 bg-white"
              value={selectedSourceId}
              onChange={(e) => handleSourceIdChange(e.target.value)}
            >
              <option value="">اختر {sourceOptions.find(opt => opt.value === selectedSource)?.label}</option>
              {sourceData.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-maincolor"></div>
          <span className="mr-2 text-gray-600">جاري التحميل...</span>
        </div>
      )}

      {/* No Source Selected */}
      {!selectedSourceId && !loading && (
        <div className="text-center py-8 text-gray-500">
          <p>يرجى اختيار {sourceOptions.find(opt => opt.value === selectedSource)?.label} لعرض العمليات</p>
        </div>
      )}

      {/* Transactions Table */}
      {selectedSourceId && !loading && (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-[18px] font-bold border-b-2 border-gray-200">
                <th className="p-2 whitespace-nowrap text-right">التاريخ</th>
                <th className="p-2 whitespace-nowrap text-center">العملية</th>
                <th className="p-2 whitespace-nowrap text-center">الفئة</th>
                <th className="p-2 whitespace-nowrap text-center">الميزانية</th>
                <th className="p-2 whitespace-nowrap text-center">الكمية$</th>
                <th className="p-2 whitespace-nowrap text-center">طريقة الدفع</th>
                <th className="p-2 whitespace-nowrap text-center">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length > 0 ? (
                transactions.map((tx) => (
                  <tr key={tx.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-2 text-right text-sm font-bold text-gray-700">{formatArabicDate(tx.date)}</td>
                    <td className="py-4 px-2 text-center text-md font-semibold text-maincolor">{tx.title}</td>
                    <td className="py-4 px-2 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-[14px] font-medium ${
                          categoryColors[tx.subCategoryName] || "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {tx.subCategoryName}
                      </span>
                    </td>
                    <td className="py-4 px-2 text-center text-sm font-medium text-maincolor">{tx.relatedBudgetName || 'ـــ'}</td>
                    <td className="py-4 px-2 text-center text-sm font-semibold text-error">${tx.amount}</td>
                    <td className="py-4 px-2 text-center text-sm font-medium text-maincolor">{tx.paymentMethodName || 'ـــ'}</td>
                    <td className="py-4 px-2 text-center">
                      <span className={`text-[14px] font-medium ${
                        1 === 1 ? 'text-green-600' : 
                        1 === 0 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        مكتمل
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-8 text-gray-500">
                    لا توجد عمليات متاحة
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {
      showDeleteModal && (
        <DeleteExpenseModal
          onClose={() => setShowDeleteModal(false)}
          onDelete={handleDeleteExpense}
          expenseId={expenseId}
          deleteLoading={deleteLoading}
        />
        )
      }
    </div>
  );
}
