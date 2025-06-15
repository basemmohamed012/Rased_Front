import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import backImg from '../../assets/images/G.svg';
import { Spinner } from '../helpers/Spinner';
import { ACCOUNT_STATUS, API_BASE_URL } from '../../constants/AppConstants';
import { encryptToken } from '../helpers/TokenHelper';

const VerifyOTP = () => {
  // Check the page size
  if(window.innerWidth <= 1024)
    navigate('/');

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [countdown, setCountdown] = useState(120); // 2 minutes (120 seconds)
  
  const inputRefs = useRef([]);

  const userOtp = localStorage.getItem('otp');
  const userEmail = localStorage.getItem('user-email');
  const rememberMe = localStorage.getItem('remember-me') || false;

  // Initial page load
  useEffect(() => {
    // check if there is any manipulation
    if(!userOtp || userOtp != 'false') {
      window.history.back();
      return;
    }
    // Check the user email
    if (!userEmail) {
      localStorage.clear();
      localStorage.setItem('message', 'حدث خطأ ما، الرجاء إعادة تسجيل الدخول');
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

  // Handle countdown timer that starts automatically
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setResendDisabled(false);
    }
  }, [countdown]);

  // Handle OTP input change
  const handleOtpChange = (index, value) => {
    // Allow only numbers
    if (value && !/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input or previous on backspace
    if (value !== '') {
      // Move to next input
      if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle key press in OTP fields
  const handleKeyDown = (e, index) => {
    // On backspace, clear current field and focus previous
    if (e.key === 'Backspace') {
      if (index > 0 && otp[index] === '') {
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
        inputRefs.current[index - 1].focus();
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    setError('');

    // Validate OTP
    if (otpValue.length !== 6) {
      setError('يرجى إدخال رمز التحقق المكون من 6 أرقام');
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Make API request to verify OTP
      const response = await axios.post(`${API_BASE_URL}/Auth/Otp/Verify`, {
        rememberMe: rememberMe === 'true' ? true : false,
        email: userEmail,
        otp: otpValue
      });

      let dataResponse = response.data.data;
      // [1] If there are errors in the email or the account is banned
      if(dataResponse.hasEmailError === true || dataResponse.isBanned === true) {
        // Redirect to the login page
        localStorage.clear();
        localStorage.setItem('message', response.data.data.message);
        navigate('/login');
      }
      // [2] Success --> Store the account status
      localStorage.setItem('acc-stat', dataResponse.accountStatus);
      localStorage.setItem('message', response.data.message);
      if(dataResponse.accountStatus === ACCOUNT_STATUS.ACTIVE) {
        // Store the access token if available
        let accessToken = dataResponse.accessToken;
        if (accessToken) {
          // Encrypt the Access Token Before storing it to the Local Storage
          let encToken = encryptToken(accessToken);
          // Store it
          localStorage.setItem('acc-token', encToken);
          // Remove some uncessary data
          localStorage.removeItem('user-email');
          localStorage.removeItem('remember-me');
          localStorage.removeItem('otp');
          localStorage.removeItem('theme');
          // Navigate to the dashboard
          navigate('/dashboard')
        }
      }
      else if(dataResponse.accountStatus === ACCOUNT_STATUS.RESET_PASSWORD) {
        localStorage.setItem('message', response.data.message);
        localStorage.setItem('otp', 'true');
        localStorage.setItem('user-email', userEmail);
        navigate('/reset-password');
      }
      else {
        localStorage.clear();
        localStorage.setItem('message', 'حدث خطأ ما، الرجاء إعادة تسجيل الدخول');
        navigate('/login');
      }
      
    } catch (err) {
      // Handle unsuccessful submission
      if(err.status !== 200 || !err.response.data.succeeded) {
        let errors = err.response.data.errors;
        let message = 'حدث خطأ أثناء التحقق. يرجى المحاولة مرة أخرى.';
        // check if the errors property is array
        if(Array.isArray(err.response.data.errors) && err.response.data.errors.length > 0) {
          message = errors.join(', ');
        }
        else {
          // check if the errors property is object
          if(typeof errors === 'object') {
            message = Object.values(errors).join(', ');
          }
        }
        // toastify display
        toast.error(message);
        setError(message);

        return;
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle resend OTP
  const handleResendOTP = async () => {
    if (resendDisabled) return;
    
    setResendDisabled(true);
    setCountdown(120); // Reset to 2 minutes
    
    try {
      const response = await axios.post(`${API_BASE_URL}/Auth/Otp/Resend`, {
        email: userEmail
      });
      
      if(response.data.succeeded) {
        toast.success(response.data.message);
      }

    } catch (err) {
      // Handle unsuccessful submission
      if(err.status !== 200 || !err.response.data.succeeded) {
        let errors = err.response.data.errors;
        let message = 'حدث خطأ أثناء التحقق. يرجى المحاولة مرة أخرى.';
        // check if the errors property is array
        if(Array.isArray(err.response.data.errors) && err.response.data.errors.length > 0) {
          message = errors.join(', ');
        }
        else {
          // check if the errors property is object
          if(typeof errors === 'object') {
            message = Object.values(errors).join(', ');
          }
        }
        // toastify display
        toast.error(message);
        setError(message);

        return;
      }
    }
  };

  // Format countdown time as MM:SS
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Handle paste functionality
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    
    // Check if pasted content is a 6-digit number
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split('');
      setOtp(digits);
      
      // Focus the last input
      inputRefs.current[5].focus();
    }
  };

  return (
    <>
      {loading ? (
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
              className="bg-white border-2 rounded-tr-[100px] rounded-bl-[100px] shadow-lg px-6 py-8 w-full max-w-md h-auto flex flex-col gap-6"
            >
              <h2 className="text-[22px] mt-10 font-bold text-maincolor text-center">خطوة واحدة لتجربة مميزة 💰</h2>
              <p className="text-md text-gray-500 text-center">
                من فضلك أدخل رمز التحقق المُرسل إلي{" "}
                <span className=" block">
                  &nbsp;🔹&nbsp;{userEmail}&nbsp;🔹
                </span>
              </p>
              
              {/* OTP Expiry Time */}
              <div className="text-center border-2 border-maincolor p-2">
                <span className="text-sm text-maincolor">
                  صلاحية الرمز: <span className={countdown < 30 ? "text-red-500 font-bold" : "font-bold"}>{formatTime(countdown)}</span>
                </span>
              </div>

              {/* Error message display
              {error && (
                <div className="p-2 bg-red-100 border border-red-400 text-red-700 rounded text-center">
                  {error}
                </div>
              )} */}

              <div className="flex flex-col gap-2 text-right">
                {/* OTP input squares */}
                <div className="flex justify-center gap-2 dir-ltr" onPaste={handlePaste}>
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-12 h-12 text-center border-2 rounded-md text-lg font-bold border-graycolor focus:border-maincolor focus:outline-none"
                    />
                  ))}
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full h-[48px] rounded-[5px] bg-[#16423C] hover:bg-white hover:text-[#16423C] hover:border-2 hover:border-[#16423C] text-white text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'جاري التحقق ...' : 'تفعيل الحساب'}
              </button>

              <h4 className="font-bold text-sm text-maincolor text-center mt-5 whitespace-nowrap">
                أو قُــم بـــ{" "}
                <span
                  className={`${
                    resendDisabled 
                      ? 'text-gray-400 cursor-not-allowed' 
                      : 'text-gray-600 cursor-pointer hover:underline hover:text-maincolor'
                  }`}
                  onClick={resendDisabled ? undefined : handleResendOTP}
                >
                  إعادة إرسال رمز التحقق
                  {resendDisabled && countdown > 0 && ` (${formatTime(countdown)})`}
                </span>
              </h4>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default VerifyOTP;