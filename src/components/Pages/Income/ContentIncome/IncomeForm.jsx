import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ACCOUNT_STATUS, API_BASE_URL } from "../../../../constants/AppConstants.js";
import axios from "axios";
import { toast } from "react-toastify";
import { decryptToken } from '../../../helpers/TokenHelper'

const IncomeForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [walletName, setWalletName] = useState('');
  // const [walletId, setWalletId] = useState('');
  const [currency, setCurrency] = useState('');
  const [categories, setCategories] = useState([]);
  const [token, setToken] = useState('');
  const [form, setForm] = useState({
    WalletId: null,
    SharedWalletId: null,
    Title: '',
    Description: '',
    Amount: '',
    IncomeSourceTypeId: '',
    IncomeTemplateId: 0,
    CreatedDate: new Date()
  });


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
          
          // Get the required data
          setWalletName(localStorage.getItem('walletName'));
          form.WalletId = localStorage.getItem('walletId') === "null" ? null : localStorage.getItem('walletId');
          form.SharedWalletId = localStorage.getItem('sharedWalletId') === "null" ? null : localStorage.getItem('sharedWalletId');
          setCurrency(localStorage.getItem('walletCurrency'));
      }

      // Fetch Categories Data
      const fetchCategories = async () => {
        // Fetching the data
        try {
          const apiUrl = `${API_BASE_URL}/IncomeSourceType`;

          // API Call
          const response = await axios.get(apiUrl);
          
          // Check errors
          if(response.data.succeeded === true && response !== null && response.data !== null && response.data.data !== null) {
              setCategories(response.data.data);
          }
        } catch (err) {
            if(err.response && err.response.data.errors.length > 0)
              toast.error(err.response.data.errors.join(', ') || 'حدث خطأ ما');
        }
      }

      fetchCategories();
    }, []);

    // Handle Form Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if(form.Title == '' || form.Amount == '' || form.IncomeSourceTypeId == '') {
      toast.error('يرجى ملء جميع الحقول ❌');
      return;
    }

    try{
      setLoading(true);

      const apiUrl = `${API_BASE_URL}/incomes`;
      // API Call
      const response = await axios.post(apiUrl, form, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      // Check errors
      if(response.data.succeeded === false || response === null || response.data === null) {
          toast.error(response.data.message || 'خطأ في إنشاء مصدر دخل جديد!');
          return;
      }
      else {
        localStorage.removeItem('walletId');
        localStorage.removeItem('sharedWalletId');
        localStorage.removeItem('walletCurrency');
        localStorage.removeItem('walletName');
        localStorage.setItem('message', 'تم إنشاء مصدر الدخل بنجاح');
        navigate('/income');
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
        else {
          toast.error(errs.message || 'حدث خطأ ما');
        }
      }
    }
    finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    localStorage.removeItem('walletId');
    localStorage.removeItem('sharedWalletId');
    localStorage.removeItem('walletCurrency');
    localStorage.removeItem('walletName');
    navigate('/income');
  }

  return (
    <div className='container mt-6'>
      <div className='flex justify-between items-center'>
        <div className='flex-col gap-2 justify-start'>
          <h2 className="text-[20px] font-bold text-maincolor  mb-2 ">إنشاء مصدر دخل جديد</h2>
          {/* <p className='text-thirdcolor text-[14px] font-semibold ' >
            املأ البيانات التالية لإضافة ميزانية جديدة إلي حسابك
          </p> */}
        </div>
        <div className='flex justify-end items-center gap-6'>
          <p className='text-maincolor font-semibold'><span className='text-3xl'>💼</span> {walletName}</p>
          <p className='text-maincolor font-semibold'><span className='text-3xl'>💰</span> {currency}</p>
        </div>
      </div>
    <div className="w-[1020px] h-auto mx-auto bg-white p-8 rounded-lg shadow mt-8">
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-bold text-right ">العنوان</label>
            <input
              type="text"
              name="Title"
              className="w-full text-maincolor border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
              placeholder="أدخل الاسم هنا"
              value={form.Title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 font-bold text-right">القيمة</label>
            <input
              type="number"
              name="Amount"
              className="w-full text-maincolor border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
              placeholder="0.0"
              value={form.Amount}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-bold text-right ">ملاحظات (اختياري)</label>
            <input
              type="text"
              name="Description"
              className="w-full text-maincolor border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
              placeholder="أدخل ملاحظاتك هنا"
              value={form.Description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-1 font-bold text-right">الفئة</label>
            <select
              name="IncomeSourceTypeId"
              className="w-full text-gray-500 border-2 rounded px-3 py-2 border-gray-300 focus:border-maincolor focus:text-black"
              value={form.IncomeSourceTypeId}
              onChange={handleChange}
            >
              <option value="">اختـــــــر</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-start gap-8 mt-10 pt-6">

          <button
            type="submit"
            className={loading ? 'opacity-50 cursor-not-allowed px-6 py-2 w-[206px] h-[48px] bg-maincolor hover:bg-secondcolor text-white rounded-[10px]' : 'px-6 py-2 w-[206px] h-[48px] bg-maincolor hover:bg-secondcolor text-white rounded-[10px]'}
          >
            {
              loading ? 'جاري الحفظ ...' : 'حفظ'
            }
          </button>

          <button
            type="button"
            onClick={handleCancel}
            className="px-6 py-2 border-2 w-[112px] h-[48px] text-[#16423C] border-[#16423C] rounded-[10px]  "
          >
            رجـــوع
          </button>
        
        </div>
      </form>
    </div>
    </div>
  );
};

export default IncomeForm;
