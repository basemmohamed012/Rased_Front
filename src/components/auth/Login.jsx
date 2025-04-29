import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backImg from '../../assets/images/G.svg';
import cradImg from '../../assets/images/CardForm.svg';
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from '../helpers/Spinner';
import { ACCOUNT_STATUS, API_BASE_URL } from '../../constants/AppConstants';
import { toast } from 'react-toastify';


const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Simulate loading the page (remove this in production or replace with actual data loading)
  useEffect(() => {
    let accountStatus = localStorage.getItem('acc-stat');
    if(accountStatus) {
      if(accountStatus === ACCOUNT_STATUS.SUSPENDED) {
        navigate('/verify-otp');
      }
      else if(accountStatus === ACCOUNT_STATUS.ACTIVE) {
        navigate('/dashboard');
      }
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Function to handle input changes
  const handleChange = (e) => {
    let { id, value } = e.target;
    if(id === 'remember-me') {
      value = e.target.checked;

      console.log('from change: ', value);
    }
    
    // Map the HTML id to the formData property
    const fieldMap = {
      'email': 'email',
      'password': 'password',
      'remember-me': 'rememberMe'
    };
    
    const field = fieldMap[id] || id;
    
    setFormData({
      ...formData,
      [field]: value
    });

    console.log('Form Data:', formData); // Debugging line to check form data
  };

  // Validation Function
  const formValidation = () => {
    // Basic validation
    if (!formData.email || !formData.password) {
      setError(['جميع الحقول مطلوبة ❌']);
      return false;
    }
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError(['يرجى إدخال بريد إلكتروني صالح ❌']);
      return false;
    }
    
    return true; // All validations passed
  }

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    // Validation First
    if (!formValidation()) {
      return; // Stop submission if validation fails
    }

    try {
      setIsSubmitting(true);
      
      // Send data to the backend
      const response = await axios.post(`${API_BASE_URL}/Auth/Login`, {
        email: formData.email,
        password: formData.password
      });
      
      // Store Some Data
      localStorage.setItem('acc-stat', ACCOUNT_STATUS.SUSPENDED); // Set account status to 'suspended'
      localStorage.setItem('user-email', formData.email);

      console.log('from submit:', formData.rememberMe);
      
      localStorage.setItem('remember-me', formData.rememberMe);
      localStorage.setItem('message', response.data.message);
      
      // Redirect to login or dashboard
      navigate('/verify-otp');
      
    } catch (err) {
      // Check if the response has errors
      if(err.status !== 200 || !err.response.data.succeeded) {
        let errors = err.response.data.errors;
        let message = ['جميع الحقول مطلوبة ❌'];
        // check if the errors property is array
        if(Array.isArray(err.response.data.errors) && err.response.data.errors.length > 0) {
          message = errors;
        }
        else {
          // check if the errors property is object
          if(typeof errors === 'object') {
            message = Object.values(errors);
          }
        }
        setError(message);

        return;
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {
        loading ? (<Spinner loading={loading} />) :
        (
          <div className="relative min-h-screen w-full overflow-hidden">
          {/* Background Image */}
          <img
            className="hidden lg:block absolute lg:right-[100px] lg:bottom-10 inset-0 w-full h-full object-cover z-0"
            src={backImg}
            alt="background"
          />

          {/* Overlay content */}
          <div className="relative z-10 flex items-center justify-center lg:gap-28 lg:justify-between flex-wrap w-full h-full px-4 md:px-10 py-10">
            {/* Right: Form */}
            <form
              onSubmit={handleSubmit}
              className="
                flex flex-col gap-4 
                w-full max-w-[398px] 
                border-2
                bg-white relative sm:top-40 lg:top-10 
                rounded-tr-[40px] md:rounded-tr-[100px] 
                rounded-bl-[40px] md:rounded-bl-[100px]
                p-6 
                mx-auto
                lg:ml-[120px]
              "
            >
              <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-col items-center gap-4">
                  <h2 className="text-2xl font-bold text-maincolor ">مرحـــــبــًا بك في راصــــد</h2>
                  <p className="text-md font-tajawal text-gray-500 tracking-tighter mb-3 text-center">
                    تحديثات جديدة بانتظارك في راصــد &nbsp;
                    <span><Link to='/' className='underline text-sm text-gray-400 hover:text-maincolor'>الصفحة الرئيسية</Link></span>
                  </p>
                </div>

                {/* Error message display */}
                {error && (
                  <div className="w-[274px] p-2 bg-red-100 border text-red-700 rounded text-sm text-right">
                    {Array.isArray(error) ? (
                      <ul className="list-disc pl-5">
                        {error.map((err, index) => (
                          <li key={index}>{err}</li>
                        ))}
                      </ul>
                    ) : (
                      error
                    )}
                  </div>
                )}

                <div className="flex flex-col w-[274px] gap-1">
                  <label className="font-bold text-[14px]" htmlFor="email">البريد الإلكتروني</label>
                  <input 
                    dir="ltr" 
                    id="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="p-2 rounded border-2 border-graycolor focus:border-maincolor" 
                  />
                </div>

                <div className="flex flex-col w-[274px] gap-1">
                  <label className="font-bold text-[14px]" htmlFor="password">كلمة المرور</label>
                  <input 
                    dir="ltr" 
                    id="password"
                    type="password" 
                    value={formData.password}
                    onChange={handleChange}
                    className="p-2 rounded border-2 border-graycolor focus:border-maincolor" 
                  />
                </div>

                <div className="flex items-center w-[274px] gap-2 mb-2">
                  <input 
                    type="checkbox" 
                    id="remember-me"
                    value={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#16423C] border-graycolor focus:border-maincolor rounded" 
                  />
                  <label className="font-bold text-[14px]" htmlFor="remember-me">تذكرني؟</label>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-[274px] h-[48px] rounded-[5px] bg-[#16423C] hover:text-[#16423C] hover:border-2 hover:border-[#16423C] hover:bg-white text-white text-sm font-semibold transition duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'جاري المُعالجة ...' : 'دخــول'}
                </button>

                <div className="text-center mt-2">
                  <p className="text-maincolor text-[14px] font-bold">
                    لا تمتلك حساب؟{' '}
                    <span onClick={() => navigate('/signup')} className="text-[#9A9898] font-semibold underline hover:text-maincolor cursor-pointer">
                      إنشاء حساب
                    </span>
                  </p>
                </div>
              </div>
            </form>

            {/* Left: Image (hidden on small screens) */}
            <div className="hidden lg:flex flex-col justify-center items-center w-[526px] mt-[130px] ml-[100px] h-[300px]">
              <img src={cradImg} alt="card" className="w-[456px] h-[253px]" />
              <p className="text-white font-bold text-center mt-4">تحليلات موثوقة تقودك لاتخاذ القرار المالي الصحيح.</p>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-12 mb-6 text-center px-4 z-20">
            <p className=''>كل الحقوق محفوظة لدي راصــــد &copy; 2025</p>
          </div>
        </div>
        )
      }
    </>
  );
};

export default Login;