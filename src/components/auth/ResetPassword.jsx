import React, { useEffect, useState } from 'react';
import backImg from '../../assets/images/G.svg';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Spinner } from '../helpers/Spinner';
import { API_BASE_URL, ACCOUNT_STATUS } from '../../constants/AppConstants';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const [formData, setFormData] = useState({
    password: '',
    confirmedPassword: ''
  });
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get the required data from local storage
  const userEmail = localStorage.getItem('user-email');
  const accountStatus = localStorage.getItem('acc-stat');
  const userOtp = localStorage.getItem('otp');

  useEffect(() => {
    // Check the page size
    if(window.innerWidth <= 1024)
      navigate('/');

    if(!userEmail || !accountStatus || !userOtp || accountStatus !== ACCOUNT_STATUS.RESET_PASSWORD || userOtp !== 'true') {
      localStorage.clear();
      localStorage.setItem('message', 'حدث خطأ ما, حاول مرة أخري');
      navigate('/login');
    }

    const timer = setTimeout(() => {
      setLoading(false);
      const message = localStorage.getItem('message');

      if(message) {
        toast.success(message);
        setTimeout(() => {
          localStorage.removeItem('message');
        }, 1000);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Function to handle input changes
  const handleChange = (e) => {
    let { id, value } = e.target;
    
    // Map the HTML id to the formData property
    const fieldMap = {
        'password': 'password',
        'confirm-password': 'confirmedPassword'
    };
    
    const field = fieldMap[id] || id;
    
    setFormData({
      ...formData,
      [field]: value
    });
  };

  // Validation Function
  const formValidation = () => {
    // Basic validation
    if (!formData.password || !formData.confirmedPassword) {
      setError(['جميع الحقول مطلوبة']);
      return false;
    }
    // Check if passwords match
    if (formData.password !== formData.confirmedPassword) {
      setError(['كلمات المرور غير متطابقة']);
      return false;
    }
    // Password validation
    const passwordErrors = [];
    // Check minimum length
    if (formData.password.length < 5) {
      passwordErrors.push('يجب أن تكون كلمة المرور 5 أحرف على الأقل');
    }
    // Check for at least one letter
    const letterRegex = /[a-zA-Z]/;
    if (!letterRegex.test(formData.password)) {
      passwordErrors.push('يجب أن تحتوي كلمة المرور على حرف واحد على الأقل');
    }
    const upperCaseRegex = /[A-Z]/;
    if (!upperCaseRegex.test(formData.password)) {
      passwordErrors.push('يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل');
    }
    const lowerCaseRegex = /[a-z]/;
    if (!lowerCaseRegex.test(formData.password)) {
      passwordErrors.push('يجب أن تحتوي كلمة المرور على حرف صغير واحد على الأقل');
    }
    // Check for at least one non-alphanumeric character
    const specialCharRegex = /[^a-zA-Z0-9]/;
    if (!specialCharRegex.test(formData.password)) {
      passwordErrors.push('يجب أن تحتوي كلمة المرور على حرف خاص واحد على الأقل');
    }
    // Check for at least one digit
    const digitRegex = /[0-9]/;
    if (!digitRegex.test(formData.password)) {
      passwordErrors.push('يجب أن تحتوي كلمة المرور على رقم واحد على الأقل');
    }
    // If there are password errors, set them and return
    if (passwordErrors.length > 0) {
      setError(passwordErrors);
      return false;
    }

    return true; // All validations passed
  }

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    if(!formValidation()) {
        return;
    }

    try {
      setIsSubmitting(true);
      
      // Send data to the backend
      const response = await axios.post(`${API_BASE_URL}/Auth/Password/Reset`, {
        email: userEmail,
        NewPassword: formData.password,
        ConfirmedNewPassword: formData.confirmedPassword
      });
      
      // Store Some Data
      localStorage.setItem('acc-stat', ACCOUNT_STATUS.INACTIVE);
      localStorage.setItem('message', response.data.message);
      
      // Redirect to login
      navigate('/login');
      
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
      { loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="relative w-full min-h-screen overflow-hidden">
          {/* Background Image */}
          <img
            className="hidden lg:block absolute lg:right-[120px] inset-0 w-full h-full object-cover z-0"
            src={backImg}
            alt="background"
          />

          {/* Main Content */}
          <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
            <form 
              onSubmit={handleSubmit}
              className="bg-white border-2 rounded-tr-[100px] rounded-bl-[100px] shadow-lg px-6 py-8 w-full max-w-md h-auto flex flex-col gap-4"
            >
              <h2 className="text-[22px] font-bold mt-10 text-maincolor text-center">إعادة تعيين كلمة المرور 🔐</h2>
              <p className="text-md text-gray-500 text-center">
                الآن تستطيع إعادة تعيين كلمة المرور{" "}
                <span className=" block">
                  &nbsp;🔹&nbsp;{userEmail}&nbsp;🔹
                </span>
              </p>
              
                {/* Error message display */}
                {error && (
                    <div className="w-[274px] p-2 bg-red-100 border text-red-700 rounded text-md text-right m-auto">
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

              <div className="flex flex-col w-full gap-2 mt-5 mb-2">
                <label className="text-maincolor font-bold text-[14px]" htmlFor="email">كلمة المرور الجديدة</label>
                <input 
                  dir="ltr" 
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="p-2 rounded border-2 border-graycolor focus:border-maincolor w-full" 
                />
              </div>

              <div className="flex flex-col w-full gap-2 mb-5">
                <label className="text-maincolor font-bold text-[14px]" htmlFor="email">تأكيد كلمة المرور الجديدة</label>
                <input 
                  dir="ltr" 
                  id="confirm-password"
                  type="password"
                  value={formData.confirmedPassword}
                  onChange={handleChange}
                  className="p-2 rounded border-2 border-graycolor focus:border-maincolor w-full" 
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full h-[48px] rounded-[5px] bg-maincolor mb-4 hover:bg-white hover:text-[#16423C] hover:border-2 hover:border-[#16423C] text-white text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'جاري المُعالجــة ...' : 'إعادة تعيين'}
              </button>

              <div className="text-center mb-6">
                  <p className="text-maincolor text-[14px] font-bold">
                    رجوع إلي ... {' '}
                    <span onClick={() => navigate('/signup')} className="text-gray-400 hover:underline hover:text-maincolor cursor-pointer">
                      تسجيل الدخول
                    </span>
                  </p>
                </div>
            </form>
          </div>

          {/* Footer note */}
          <div className="mb-4 text-center px-4 z-20">
            <p className=''>كل الحقوق محفوظة لدي راصــــد &copy; 2025</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ResetPassword;
