import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ACCOUNT_STATUS, API_BASE_URL } from "../../../../constants/AppConstants.js";
import axios from "axios";
import { toast } from "react-toastify";
import { decryptToken } from '../../../helpers/TokenHelper'

const EditExpense = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
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
    RelatedBudgetId: null
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
      if(!accessToken) {
          navigate('/login');
          return;
      }
      else {
          // decrypt the access token
          originalAcessToken = decryptToken(accessToken);
          setToken(originalAcessToken);
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
          }
        } catch (err) {
            if(err.response && err.response.data.errors.length > 0)
              toast.error(err.response.data.errors.join(', ') || 'حدث خطأ ما');
        }
      }
      fetchCategories();

      // Fetch Payment Methods Data
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

      // Fetch Budget Data
    const fetchBudgets = async (wId, swId) => {
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

      // Fetch Expense Data
      const fetchExpenseData = async () => {
        try {
        const apiUrl = `${API_BASE_URL}/expenses/${id}`;
        const response = await axios.get(apiUrl, {
            headers: {
            Authorization: `Bearer ${originalAcessToken}`
            }
        });

        // Check if the response is valid
        if(response.data.succeeded === true && response.data.data) {
            const expenseData = response.data.data;

            form.WalletId = expenseData.walletId;
            form.SharedWalletId = expenseData.sharedWalletId;
            form.Title = expenseData.title;
            form.Date = expenseData.date.split('T')[0];
            form.CategoryName = expenseData.categoryName;
            form.SubCategoryId = expenseData.subCategoryId;
            form.Amount = expenseData.amount;
            form.Description = expenseData.description;
            form.PaymentMethodId = expenseData.paymentMethodId;
            form.RelatedBudgetId = expenseData.relatedBudgetId;

            fetchBudgets(expenseData.walletId, expenseData.sharedWalletId);
        }
        }
        catch (err) {
            if(err.response && err.response.data.errors.length > 0)
                toast.error(err.response.data.errors.join(', ') || 'حدث خطأ ما');
        }
        }
    fetchExpenseData();
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
    } else {
      setFilteredSubcategories([]);
    }
  }, [form.CategoryName]);

  // Enhanced handleChange function to handle file uploads
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
    if(form.Title === '' || form.Amount === '' || form.Date === '' || form.CategoryName === '' || form.SubCategoryId === '' || form.PaymentMethodId === null) {
      toast.error('يرجى ملء جميع الحقول ❌');
      return;
    }

    try{
      setLoading(true);

      const apiUrl = `${API_BASE_URL}/expenses/${id}`;
      // API Call
      const response = await axios.put(apiUrl, form, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      // Check errors
      if(response.data.succeeded === false || response === null || response.data === null) {
          toast.error(response.data.message || 'خطأ في تحديث بيانات المصروف!');
          return;
      }
      else {
        localStorage.removeItem('walletId');
        localStorage.removeItem('sharedWalletId');
        localStorage.removeItem('walletCurrency');
        localStorage.removeItem('walletName');
        localStorage.setItem('message', 'تم تحديث بيانات المصروف بنجاح');
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
          <h2 className="text-[20px] font-bold text-maincolor  mb-2 ">تحديث بيانات مصروف</h2>
        </div>
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
                  form.PaymentMethodId == payment.id ? (
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
                form.CategoryName == category.name ? (
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
                form.SubCategoryId == subcategory.id ? (
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
                  form.RelatedBudgetId == budget.budgetId ? (
                  <option key={budget.budgetId} value={budget.budgetId} selected>
                    {budget.name}
                  </option>
                    ) : (
                    <option key={budget.budgetId} value={budget.budgetId}>
                        {budget.name}
                    </option>
                    )
                ))}
              </select>
            </div>
          </div>

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

export default EditExpense