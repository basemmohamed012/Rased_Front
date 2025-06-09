import React, { useState, useEffect } from 'react';
import axios from "axios";
import { ACCOUNT_STATUS, API_BASE_URL } from "../../../../constants/AppConstants.js";
import { decryptToken } from '../../../helpers/TokenHelper.js'
import { useNavigate } from "react-router-dom";
import DeleteIncomeModal from './DeleteIncomeModal.jsx';
import { toast } from 'react-toastify';
import IncomeCard from './IncomeCard';

const SharedWalletIncomeCards = () => {
  const navigate = useNavigate();
  const [selectedWallet, setSelectedWallet] = useState('');
  const [incomes, setIncomes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [wallets, setWallets] = useState([]);
  const [token, setToken] = useState('');
  const [incomeId, setIncomeId] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Get Wallets
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

  // Mock API call function
  const fetchIncomes = async (walletId) => {    
    // Fetching the data
    try {
      setLoading(true);
      setIncomes([]);

      const apiUrl = `${API_BASE_URL}/incomes/GetAllIncomes/${walletId}?isShared=true`;

      // API Call
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      // Check errors
      if(response.data.succeeded === true && response !== null && response.data !== null && response.data.data !== null) {
          setIncomes(response.data.data);
      }
    } catch (err) {
      console.log(err);
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
    }
  };

  // Calculate percentage for each income
  const calculatePercentages = (incomes) => {
    const totalAmount = incomes.reduce((sum, income) => sum + income.amount, 0);
    return incomes.map(income => ({
      ...income,
      percentage: totalAmount > 0 ? Math.round((income.amount / totalAmount) * 100) : 0
    }));
  };

  const processedIncomes = calculatePercentages(incomes);

  // Handle wallet selection
  const handleWalletChange = (e) => {
    const walletId = e.target.value;
    setSelectedWallet(walletId);
    if (walletId) {
      fetchIncomes(walletId);
    } else {
      setIncomes([]);
    }
  };

  // Handle edit action
  const handleEdit = (incomeId) => {
    navigate(`/edit-income/${incomeId}`);
  };

  // Handle delete action
  const handleDeleteIncome = async (data) => {
    try{
      setDeleteLoading(true);

      const apiUrl = `${API_BASE_URL}/incomes/${data.incomeId}`;
      
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
        handleWalletChange({ target: { value: selectedWallet } });
        toast.success('تم حذف مصدر الدخل بنجاح!');
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

  // Color palette for progress bars
  const colors = ['#10B981', '#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444'];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      {/* Wallet Selector */}
      <div className="p-6 flex justify-between items-center">
        <h2 className="w-2/3 text-xl font-bold text-maincolor mb-4">ابحث باسم المحفظة المشتركة</h2>
        <select
          value={selectedWallet}
          onChange={handleWalletChange}
          className="w-1/3 p-3 border border-graycolor rounded-lg focus:ring-2 focus:ring-maincolor focus:border-transparent outline-none"
        >
          <option value="">اختر المحفظة</option>
          {wallets.map(wallet => (
            <option key={wallet.id} value={wallet.id}>
              {wallet.name}
            </option>
          ))}
        </select>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-maincolor"></div>
        </div>
      )}

      {/* Income Cards */}
      {!loading && processedIncomes.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-maincolor">
            مصادر الدخل ({processedIncomes.length})
          </h3>
          <div className="grid gap-4">
            {processedIncomes.map((income, index) => (
              <IncomeCard
                key={income.incomeId}
                title={income.title}
                category={income.incomeSourceTypeName}
                amount={income.amount}
                percentage={income.percentage}
                color={colors[index % colors.length]}
                onEdit={() => handleEdit(income.incomeId)}
                onDelete={() => { setShowDeleteModal(true); setIncomeId(income.incomeId); }}
              />
            ))}
          </div>
        </div>
      )}

      {
        showDeleteModal && (
          <DeleteIncomeModal
            onClose={() => setShowDeleteModal(false)}
            onDelete={handleDeleteIncome}
            incomeId={incomeId}
            deleteLoading={deleteLoading}
          />
        )
      }

      {/* No Data State */}
      {!loading && selectedWallet && processedIncomes.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl shadow-lg">
          <p className="text-error">لا يوجد مصادر دخل لهذه المحفظة</p>
        </div>
      )}
    </div>
  );
}

export default SharedWalletIncomeCards