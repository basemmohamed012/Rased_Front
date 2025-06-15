import axios from "axios";
import { ACCOUNT_STATUS, API_BASE_URL } from "../../../../../constants/AppConstants.js";
import { decryptToken } from '../../../../helpers/TokenHelper.js'
import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from 'react';
import DeleteBudgetModal from "../DeleteBudgetModal.jsx";
import { Eye, PenBoxIcon, Trash2Icon } from "lucide-react";
import { toast } from "react-toastify";


const SharedWalletBudgetCards = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [budgets, setBudgets] = useState([]);
  const [wallets, setWallets] = useState([]);
  const [walletId, setWalletId] = useState('');
  const [budgetId, setBudgetId] = useState('');
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    // Simulate API call for wallets
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

      // Fetch Data
      const fetchWallets = async () => {
        // Fetching the data
        try {
          // setLoading(true);
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
            
        }
      }

      fetchWallets();
  }, []);

  const handleWalletChange = async (e) => {
    const selectedWalletId = e.target.value;
    setWalletId(selectedWalletId);
    setSelectedBudget(null);
    
    // Fetching the data
    try {
      setLoading(true);
      setBudgets([]);

      const apiUrl = `${API_BASE_URL}/Budgets/Wallets/${selectedWalletId}/Valid?isShared=true`;

      // API Call
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      // Check errors
      if(response.data.succeeded === true && response !== null && response.data !== null && response.data.data !== null) {
          setBudgets(response.data.data);
          setSelectedBudget(response.data.data[0] || null);
      }
    } catch (err) {
        // set the unsuccessful message
        if(err.status === 401) { // UnAuthorized
            localStorage.clear();
            // Call Logout Endpoint ...
            navigate('/login');
        }
        if(err.response)
            toast.error(err.response.data.errors_string || 'حدث خطأ ما');
    } finally {
        setLoading(false);
        setIsOpen(false); // Close expanded view when switching wallets
    }
  };

  const handleBudgetSelect = (budget) => {
    setSelectedBudget(budget);
    setIsOpen(false);
  };

  const getProgressBarColor = (spent, budget) => {
    const percentage = (spent / budget) * 100;
    if (spent > budget) return 'bg-red-600';
    if (percentage > 80) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const calculatePercentage = (spent, budget) => {
    return Math.round((spent / budget) * 100);
  };

  const handleDeleteBudget = async (data) => {
    try{
      setDeleteLoading(true);

      const apiUrl = `${API_BASE_URL}/Budgets/${data.budgetId}`;
      
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
        handleWalletChange({ target: { value: walletId } });
        setSelectedBudget(null);
        toast.success('تم حذف الميزانية بنجاح!');
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

  const handleExpenseDate = (expData) => {
    const date = new Date(expData);

    // Extract the parts
    const day = date.getDate();
    const month = date.toLocaleString('ar-EG', { month: 'short' });
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'مساءً' : 'صباحًا';

    // Convert to 12-hour format
    const formattedHours = hours % 12 || 12;

    // Format the final string
    return `${day} ${month} ${formattedHours}:${minutes} ${amPm}`;
  } 

  const handleUpdateBudget = (budgetId) => {
    navigate(`/edit-budget/${budgetId}`);
  }

  return (
    <div className='container flex-col gap-6 mt-4 max-w-4xl mx-auto p-4'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-maincolor text-2xl font-bold'>ابحث باسم المحفظة المشتركة</h2>
        <div className="w-64">
          <select
            name="walletId"
            className="w-full text-gray-700 border-2 rounded-lg px-3 py-2 border-gray-300 focus:border-maincolor focus:text-black focus:outline-none"
            value={walletId}
            onChange={handleWalletChange}
          >
            <option value="">اختر المحفظة</option>
            {wallets.map(wallet => (
              <option key={wallet.id} value={wallet.id}>
                {wallet.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <>
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
            {/* Budget Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {budgets.map(budget => (
                <div 
                  key={budget.budgetId}
                  className={`bg-white shadow-md rounded-lg p-4 cursor-pointer border-2 hover:shadow-lg transition-all ${
                    selectedBudget?.id === budget.budgetId ? 'border-maincolor' : 'border-gray-200'
                  }`}
                  onClick={() => handleBudgetSelect(budget)}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg text-maincolor font-semibold">{budget.name}</h3>
                    <span className="text-thirdcolor text-sm">{budget.categoryName}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>ما تم إنفاقه: <strong>${budget.spentAmount}</strong></span>
                    <span>الميزانية: <strong>${budget.budgetAmount}</strong></span>
                  </div>
                  <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden my-2">
                    <div 
                      className={`h-full ${getProgressBarColor(budget.spentAmount, budget.budgetAmount)}`}
                      style={{ width: `${Math.min(calculatePercentage(budget.spentAmount, budget.budgetAmount), 100)}%` }} 
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{calculatePercentage(budget.spentAmount, budget.budgetAmount)}%</span>
                    <span>المتبقي: <strong>${budget.remainingAmount}</strong></span>
                  </div>
                  {budget.spentAmount > budget.budgetAmount && (
                    <div className="text-red-600 text-sm font-semibold mt-1">زيادة ${budget.spentAmount - budget.budgetAmount}</div>
                  )}

                  <div className="flex justify-between mt-4">
                    {/* Edit/Delete */}
                  <button 
                    onClick={() => handleUpdateBudget(budget.budgetId)}
                    className="">
                    <PenBoxIcon className="text-warning cursor-pointer hover:text-gray-500" />
                  </button>

                  <button 
                    onClick={() => { setShowDeleteModal(true); setBudgetId(budget.budgetId); }}
                    className="">
                    <Trash2Icon className="text-error cursor-pointer hover:text-gray-500" />
                  </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed Budget Card */}
            {selectedBudget && (
              <div className="bg-white shadow-lg rounded-lg p-6 rtl text-right">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800">{selectedBudget.name}</h2>
                  <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <svg
                      className={`w-5 h-5 text-gray-600 transform transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>ما تم إنفاقه: <strong>${selectedBudget.spentAmount}</strong></span>
                  <span>الميزانية: <strong>${selectedBudget.budgetAmount}</strong></span>
                </div>

                <div className="w-full bg-gray-300 h-4 rounded-full overflow-hidden my-3">
                  <div 
                    className={`h-full ${getProgressBarColor(selectedBudget.spentAmount, selectedBudget.budgetAmount)}`}
                    style={{ width: `${Math.min(calculatePercentage(selectedBudget.spentAmount, selectedBudget.budgetAmount), 100)}%` }} 
                  />
                </div>

                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span className="font-semibold">{calculatePercentage(selectedBudget.spentAmount, selectedBudget.budgetAmount)}%</span>
                  <span>المتبقي: <strong>${selectedBudget.remainingAmount}</strong></span>
                </div>

                {selectedBudget.spentAmount > selectedBudget.budgetAmount && (
                  <div className="text-red-600 text-sm font-semibold mt-2 bg-red-50 p-2 rounded">
                    زيادة ${selectedBudget.spentAmount - selectedBudget.budgetAmount}
                  </div>
                )}

                {isOpen && (
                  <div className="mt-6 border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-lg font-semibold">العمليات الحالية:</p>
                      {/* <button className="bg-blue-800 w-8 h-8 text-white rounded-full hover:bg-blue-900 transition-colors flex items-center justify-center">
                        <span className="text-lg">+</span>
                      </button> */}
                    </div>
                    
                    {selectedBudget.relatedExpenses && selectedBudget.relatedExpenses.length > 0 ? (
                      <div className="space-y-3">
                        {selectedBudget.relatedExpenses.map((transaction, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div className="flex flex-col">
                              <span className="font-medium text-gray-800">{transaction.title}</span>
                              <span className="text-gray-500 text-sm">{handleExpenseDate(transaction.date)}</span>
                            </div>
                            <span className="text-red-600 font-semibold">-${transaction.amount}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-4">لا توجد عمليات مالية</p>
                    )}
                  </div>
                )}
              </div>
            )}

            {budgets.length === 0 && walletId && (
              <div className="text-center py-8">
                <p className="text-gray-500 text-lg">لا توجد ميزانيات لهذه المحفظة</p>
              </div>
            )}

            {
              showDeleteModal && (
                <DeleteBudgetModal
                  onClose={() => setShowDeleteModal(false)}
                  onDelete={handleDeleteBudget}
                  budgetId={budgetId}
                  deleteLoading={deleteLoading}
                />
              )
            }
            </>
          )}
      </>
    </div>
  );
}

export default SharedWalletBudgetCards