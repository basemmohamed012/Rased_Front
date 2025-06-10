import exportImg from '../../../../assets/images/export.svg'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ACCOUNT_STATUS, API_BASE_URL } from "../../../../constants/AppConstants.js";
import axios from "axios";
import { toast } from "react-toastify";
import { decryptToken } from '../../../helpers/TokenHelper'

export default function ExpenseForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [walletName, setWalletName] = useState('');
  // const [walletId, setWalletId] = useState('');
  const [currency, setCurrency] = useState('');
  const [categories, setCategories] = useState([]);
  const [payments, setPayments] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [token, setToken] = useState('');
  const [filteredSubcategories, setFilteredSubcategories] = useState([]);
  const [form, setForm] = useState({
    WalletId: null,
    SharedWalletId: null,
    Title: '',
    Description: '',
    Amount: '',
    Date: '',
    CategoryName: '',
    SubCategoryId: '',
    PaymentMethodId: null,
    RelatedBudgetId: null,
    Attachment: null
  });

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
      let wId = null;
      let swId = null;
      if(!accessToken) {
          navigate('/login');
          return;
      }
      else {
          // decrypt the access token
          originalAcessToken = decryptToken(accessToken);
          setToken(originalAcessToken);
          // If there is a message
          const msg = localStorage.getItem('message');
          if(msg) {
            toast.success(msg);
            setTimeout(() => {
              localStorage.removeItem('message');
            }, 1000);
          }
          // Get the required data
          setWalletName(localStorage.getItem('walletName'));
          if(localStorage.getItem('walletId') !== "null") {
            form.WalletId = localStorage.getItem('walletId');
            wId = localStorage.getItem('walletId');
          }
          if(localStorage.getItem('sharedWalletId') !== "null") {
            form.SharedWalletId = localStorage.getItem('sharedWalletId');
            swId = localStorage.getItem('sharedWalletId');
          }
          setCurrency(localStorage.getItem('walletCurrency'));
      }

      // Fetch Categories Data
      const fetchCategories = async () => {
        // Fetching the data
        try {
          const apiUrl = `${API_BASE_URL}/Categories/All`;

          // API Call
          const response = await axios.get(apiUrl);
          
          // Check errors
          if(response.data.succeeded === true && response !== null && response.data !== null && response.data.data !== null) {
              setCategories(response.data.data);

              // set Category Name, if AI
              if(location.state.from === 'ai') {
                form.CategoryName = 'أخري';
                const selectedCategory = response.data.data.find(
                  category => category.name === 'أخري'
                );
                form.SubCategoryId = selectedCategory.subCategories[0].id;
              
                if (selectedCategory) {
                  setFilteredSubcategories(selectedCategory.subCategories);
                } else {
                  setFilteredSubcategories([]);
                }
              }
          }
        } catch (err) {
            if(err.response && err.response.data.errors.length > 0)
              toast.error(err.response.data.errors.join(', ') || 'حدث خطأ ما');
        }
      }
      fetchCategories();

      // Fetch Categories Data
      const fetchPayments = async () => {
        // Fetching the data
        try {
          const apiUrl = `${API_BASE_URL}/PaymentMethods/All`;

          // API Call
          const response = await axios.get(apiUrl);
          
          // Check errors
          if(response.data.succeeded === true && response !== null && response.data !== null && response.data.data !== null) {
              setPayments(response.data.data);
          }
        } catch (err) {
            if(err.response && err.response.data.errors.length > 0)
              toast.error(err.response.data.errors.join(', ') || 'حدث خطأ ما');
        }
      }
      fetchPayments();

      // Fetch Categories Data
      const fetchBudgets = async () => {
        // Fetching the data
        try {
          let apiUrl = '';
          if(wId !== null)
            apiUrl = `${API_BASE_URL}/budgets/wallets/${wId}/valid`;
          if(swId !== null)
            apiUrl = `${API_BASE_URL}/budgets/wallets/${swId}/valid?isShared=true`;
          
          // API Call
          const response = await axios.get(apiUrl, {
            headers: {
              Authorization: `Bearer ${originalAcessToken}`
            }
          });
          
          // Check errors
          if(response.data.succeeded === true && response !== null && response.data !== null && response.data.data !== null) {
              setBudgets(response.data.data);
          }
        } catch (err) {
            if(err.response && err.response.data.errors.length > 0)
              toast.error(err.response.data.errors.join(', ') || 'حدث خطأ ما');
        }
      }
      fetchBudgets();

      // If the redirection from AI
      if(location.state.from === 'ai') {
        const dt = location.state.data;
        form.WalletId = dt.wId;
        form.SharedWalletId = dt.swId;
        form.Amount = dt.amount;
        form.Title = dt.title;
        form.Description = dt.title;
        form.Date = dt.date;
        form.PaymentMethodId = 1;
      }
    }, []);
  
  // Update subcategories when category changes
  useEffect(() => {
    if (form.CategoryName) {
      const selectedCategory = categories.find(
        category => category.name === form.CategoryName
      );
      
      if (selectedCategory) {
        setFilteredSubcategories(selectedCategory.subCategories);
      } else {
        setFilteredSubcategories([]);
      }
      
      // Reset subcategory selection when category changes
      if(location.state.from !== 'ai')
        setForm(prev => ({ ...prev, SubCategoryId: "" }));
    } else {
      setFilteredSubcategories([]);
    }
  }, [form.CategoryName]);

  // Enhanced handleChange function to handle file uploads
  const handleChange = (e) => {
      const { name, value, files } = e.target;
      
      if (name === 'Attachment' && files && files[0]) {
          const file = files[0];
          // Optional: Add file size validation (5MB = 5 * 1024 * 1024 bytes)
          if (file.size > 5 * 1024 * 1024) {
              alert('حجم الملف يجب أن يكون أقل من 5 ميغابايت');
              return;
          }
          setForm(prev => ({ ...prev, [name]: file }));
      } else {
          setForm(prev => ({ ...prev, [name]: value }));
      }
  };

  // Function to remove the uploaded file
  const removeFile = () => {
      setForm(prev => ({ ...prev, Attachment: null }));
      // Reset the file input
      const fileInput = document.getElementById('fileUpload');
      if (fileInput) {
          fileInput.value = '';
      }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if(form.Title === '' || form.Amount === '' || form.Date === '' || form.CategoryName === '' || form.SubCategoryId === '' || form.PaymentMethodId === null) {
      toast.error('يرجى ملء جميع الحقول ❌');
      return;
    }

    try{
      setLoading(true);

      const apiUrl = `${API_BASE_URL}/expenses`;
      // API Call
      const response = await axios.post(apiUrl, form, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      
      // Check errors
      if(response.data.succeeded === false || response === null || response.data === null) {
          toast.error(response.data.message || 'خطأ في إنشاء مصروف جديدة!');
          return;
      }
      else {
        localStorage.removeItem('walletId');
        localStorage.removeItem('sharedWalletId');
        localStorage.removeItem('walletCurrency');
        localStorage.removeItem('walletName');
        localStorage.setItem('message', 'تم إنشاء مصروف جديد بنجاح');
        navigate('/expenses');
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
    navigate('/expenses');
  }

  return (
    <div>
      <div className='flex justify-between items-center'>
        <div className='flex-col gap-2 justify-start'>
          <h2 className="text-[20px] font-bold text-maincolor mb-2 ">{ location.state.from === 'ai' ? 'تأكد من البيانات الناتجة عن الذكاء الإصطناعي ✨' : 'إنشاء مصروف جديد' }</h2>
        </div>
        {
          location.state.from !== 'ai' ? (
            <div className='flex justify-end items-center gap-6'>
              <p className='text-maincolor font-semibold'><span className='text-3xl'>💼</span> {walletName}</p>
              <p className='text-maincolor font-semibold'><span className='text-3xl'>💰</span> {currency}</p>
            </div>   
          ) : ('')
        }
      </div>
      <div className="w-[1020px] h-auto mx-auto bg-white p-8 rounded-lg shadow mt-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-bold text-right">الاسم/العنوان</label>
              <input
                type="text"
                name="Title"
                className="w-full text-maincolor border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
                placeholder="ادخل الاسم هنا"
                value={form.Title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-right">المبلغ</label>
              <input
                type="number"
                name="Amount"
                className="w-full text-maincolor border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
                placeholder="0.0 $"
                value={form.Amount}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-bold text-right">الوصف</label>
            <input
              type="text"
              name="Description"
              className="w-full text-maincolor border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
              placeholder="أدخل تفاصيل عن المصروف"
              value={form.Description}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-bold text-right">طريقة الدفع</label>
              <select
                name="PaymentMethodId"
                className="w-full text-maincolor border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
                value={form.PaymentMethodId}
                onChange={handleChange}
              >
                <option value="">اختر طريقة الدفع المناسبة</option>
                {payments.map(payment => (
                  form.PaymentMethodId === payment.id ? (
                    <option key={payment.id} value={payment.id} selected>
                      {payment.name}
                    </option>
                  ) : (
                    <option key={payment.id} value={payment.id}>
                      {payment.name}
                    </option>
                  )
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-bold text-right">التاريخ</label>
              <input
                type="date"
                name="Date"
                className="w-full text-maincolor border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
                value={form.Date}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
            <label className="block mb-1 font-bold text-right">الفئة</label>
            <select
              name="CategoryName"
              className="w-full text-gray-500 border-2 rounded px-3 py-2 border-gray-300 focus:border-maincolor focus:text-black"
              value={form.CategoryName}
              onChange={handleChange}
            >
              <option value="">اختـــــــر</option>
              {categories.map(category => (
                form.CategoryName === 'أخري' && category.name === 'أخري' ? (
                  <option key={category.id} value={category.name} selected>
                    {category.name}
                  </option>
                ) : (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                )
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-bold text-right">الفئة الفرعية</label>
            <select
              name="SubCategoryId"
              className="w-full text-gray-500 border-2 rounded px-3 py-2 border-gray-300 focus:border-maincolor focus:text-black"
              value={form.SubCategoryId}
              onChange={handleChange}
              disabled={!form.CategoryName} // Disable if no category selected
            >
              <option value="">اختـــــــر</option>
              {filteredSubcategories.map(subcategory => (
                subcategory.name === 'أخري' ? (
                  <option key={subcategory.id} value={subcategory.id} selected>
                    {subcategory.name}
                  </option>
                ) : (
                  <option key={subcategory.id} value={subcategory.id}>
                    {subcategory.name}
                  </option>
                )
              ))}
            </select>
          </div>
          </div>

          <div>
            <div>
              <label className="block mb-1 font-bold text-right">اربط هذا المصروف بميزانية معينة</label>
              <select
                name="RelatedBudgetId"
                className="w-full text-maincolor border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
                value={form.RelatedBudgetId}
                onChange={handleChange}
              >
                <option value="">اختر ميزانية مناسبة</option>
                {budgets.map(budget => (
                  <option key={budget.budgetId} value={budget.budgetId}>
                    {budget.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {
            location.state.from !== 'ai' ? (
              <div>
                <label className="block mb-1 font-bold text-right">فاتورة / ملف إضافي</label>
                <div className="border-dashed border-2 border-[#A9A6A6] p-10 text-center rounded-lg relative">
                    {!form.Attachment ? (
                        // Show upload area when no file is selected
                        <>
                            <input
                                type="file"
                                name="Attachment"
                                className="hidden"
                                id="fileUpload"
                                onChange={handleChange}
                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                            />
                            <label htmlFor="fileUpload" className="cursor-pointer text-[#16423C] font-bold">
                                <img
                                    className='mx-auto mb-4'
                                    src={exportImg} 
                                    alt="" 
                                />
                            </label>
                            <p className="text-sm text-gray-500 mt-2">
                                (إضافة ملفات لا تتجاوز 5 ميغابايت على الأكثر)
                            </p>
                        </>
                    ) : (
                        // Show file info when file is selected
                        <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
                            <div className="text-center">
                                <div className="text-green-600 text-lg mb-2">✓</div>
                                <p className="text-[#16423C] font-bold text-sm">
                                    {form.Attachment.name}
                                </p>
                                <p className="text-gray-500 text-xs">
                                    {(form.Attachment.size / 1024 / 1024).toFixed(2)} ميغابايت
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={removeFile}
                                className="bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold transition-colors"
                                title="إزالة الملف"
                            >
                                ×
                            </button>
                        </div>
                    )}
                </div>
              </div>
            ) : ('')
          }
          
          <div className="flex justify-start gap-8 mt-10">
            <button
              type="submit"
              className="px-6 py-2 w-[206px] h-[48px] bg-[#16423C] text-white rounded-[10px]"
            >
              {
                loading ? 'جاري الحفظ ...' : 'حفظ'
              }
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 border-2 w-[112px] h-[48px] text-[#16423C] border-[#16423C] rounded-[10px]"
            >
              إلغاء
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
