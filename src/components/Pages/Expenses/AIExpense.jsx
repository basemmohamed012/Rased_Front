import React, { useState, useRef, useEffect } from 'react';
import { Upload, Sparkles, Zap, CheckCircle, Wallet, Users } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { ACCOUNT_STATUS, API_BASE_URL } from "../../../constants/AppConstants.js";
import axios from "axios";
import { toast } from "react-toastify";
import { decryptToken } from '../../helpers/TokenHelper'
import { useLocation } from 'react-router-dom';

const AIExpense = () => {
  const navigate = useNavigate();
  const [selectedWallet, setSelectedWallet] = useState('');
  const [selectedSharedWallet, setSelectedSharedWallet] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageForm, setImageForm] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showMagic, setShowMagic] = useState(false);
  const fileInputRef = useRef(null);
  // Walets and Token
  const [wallets, setWallets] = useState([]);
  const [sharedWallets, setSharedWallets] = useState([]);
  const [token, setToken] = useState('');

  // Get Wallets
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

      // Fetch Data
      const fetchWallets = async () => {
        // Fetching the data
        try {
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
        }
      }

      fetchWallets();

      // Fetch Data
      const fetchSharedWallets = async () => {
        // Fetching the data
        try {
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
              setSharedWallets(response.data.data);
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

      fetchSharedWallets();
  }, []);

  const handleWalletChange = (walletId) => {
    setSelectedWallet(walletId);
    setSelectedSharedWallet(''); // Clear shared wallet selection
  };

  const handleSharedWalletChange = (walletId) => {
    setSelectedSharedWallet(walletId);
    setSelectedWallet(''); // Clear personal wallet selection
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setIsProcessing(true);
      setShowMagic(true);
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setTimeout(() => {
          setUploadedImage(e.target.result);
          setImageForm(file);
          setIsProcessing(false);
          setShowMagic(false);
        }, 2000); // Simulate processing time
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!uploadedImage || (!selectedWallet && !selectedSharedWallet)) {
      alert('يرجى اختيار صورة ومحفظة');
      return;
    }

    try{
      setIsSaving(true);

      const apiUrl = `${API_BASE_URL}/Bill/scan`;
      
      const payload = {
        ImageFile: imageForm
      }

      // API Call
      const response = await axios.post(apiUrl, payload, {
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
        const resp = response.data;
        localStorage.setItem('message', 'تأكد من البيانات واحفظها 🚀');
        navigate('/add-expense', {
          state: {
            from: 'ai',
            data: {
              wId: selectedWallet,
              swId: selectedSharedWallet,
              amount: resp.totalPrice,
              title: resp.description,
              date: new Intl.DateTimeFormat('en-CA').format(new Date(resp.date)) // Ensures 'YYYY-MM-DD'
            }
          }
        });
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
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    // Clear any stored data
    setSelectedWallet('');
    setSelectedSharedWallet('');
    setUploadedImage(null);
    // navigate('/expenses');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className='flex justify-between items-center mb-8'>
          <div className='flex-col gap-2 justify-start'>
            <h2 className="text-3xl font-bold text-[#16423C] mb-2 flex items-center gap-3">
              <Sparkles className="text-amber-500 animate-pulse" />
              إنشاء مصروف جديد بالذكاء الاصطناعي
            </h2>
            <p className="text-gray-600">قم برفع صورة الفاتورة ودع الذكاء الاصطناعي يقوم بالباقي</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#16423C] to-[#0f2e28] p-6">
            <div className="flex items-center gap-3 text-white">
              <Zap className="animate-bounce" />
              <h3 className="text-xl font-semibold">معالج الفواتير الذكي</h3>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Image Upload Section */}
            <div className="relative">
              <label className="block mb-4 font-bold text-right text-gray-800 text-lg">
                📄 فاتورة / ملف إضافي
              </label>
              
              <div 
                className={`relative border-3 border-dashed rounded-2xl p-12 text-center transition-all duration-500 cursor-pointer hover:scale-[1.02] ${
                  uploadedImage 
                    ? 'border-green-400 bg-green-50' 
                    : 'border-[#16423C] bg-gradient-to-br from-slate-50 to-blue-50 hover:from-blue-50 hover:to-indigo-50'
                }`}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                
                {isProcessing && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="relative">
                        <Sparkles className="w-16 h-16 text-purple-600 animate-spin mx-auto mb-4" />
                        <div className="absolute inset-0 w-16 h-16 mx-auto">
                          <div className="w-full h-full border-4 border-pink-400 rounded-full animate-ping"></div>
                        </div>
                      </div>
                      <p className="text-lg font-semibold text-purple-700 animate-pulse">
                        ✨ لحظات مذهلة تتشكل الآن... ✨
                      </p>
                      <p className="text-sm text-purple-600 mt-2">جاري تحليل الفاتورة بالذكاء الاصطناعي</p>
                    </div>
                  </div>
                )}

                {showMagic && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute animate-ping"
                        style={{
                          left: `${20 + (i * 60) % 80}%`,
                          top: `${20 + (i * 30) % 60}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      >
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                      </div>
                    ))}
                  </div>
                )}
                
                {!uploadedImage && !isProcessing && (
                  <div className="space-y-4">
                    <Upload className="w-20 h-20 text-[#16423C] mx-auto animate-bounce" />
                    <div>
                      <p className="text-xl font-semibold text-[#16423C] mb-2">
                        اسحب وأفلت الصورة هنا أو انقر للاختيار
                      </p>
                      <p className="text-gray-600">PNG، JPG، JPEG حتى 10MB</p>
                    </div>
                  </div>
                )}
                
                {uploadedImage && !isProcessing && (
                  <div className="space-y-4">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto animate-pulse" />
                    <div>
                      <p className="text-xl font-semibold text-green-700 mb-2">
                        ✅ تم رفع الصورة بنجاح!
                      </p>
                      <img 
                        src={uploadedImage} 
                        alt="Uploaded invoice" 
                        className="max-w-xs max-h-48 mx-auto rounded-lg shadow-lg border-2 border-green-300"
                      />
                      <p className="text-green-600 mt-2">جاهز للمعالجة بالذكاء الاصطناعي</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Wallets Selection */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Personal Wallets */}
              <div className={`transition-all duration-300 ${selectedSharedWallet ? 'opacity-50 pointer-events-none' : ''}`}>
                <label className="mb-4 font-bold text-right text-gray-800 text-lg flex items-center gap-2 justify-start">
                  <Wallet className="text-blue-600" />
                  المحافظ الشخصية
                </label>
                <select
                  value={selectedWallet}
                  onChange={(e) => handleWalletChange(e.target.value)}
                  className="w-full p-4 border-2 border-gray-300 rounded-xl text-right bg-white focus:border-[#16423C] focus:ring-2 focus:ring-[#16423C]/20 transition-all duration-300 hover:border-[#16423C]/50"
                  disabled={selectedSharedWallet !== ''}
                >
                  <option value="">اختر المحفظة الشخصية...</option>
                  {wallets.map(wallet => (
                    <option key={wallet.id} value={wallet.id}>
                      {wallet.name} ({wallet.walletCurrency.name})
                    </option>
                  ))}
                </select>
              </div>

              {/* Shared Wallets */}
              <div className={`transition-all duration-300 ${selectedWallet ? 'opacity-50 pointer-events-none' : ''}`}>
                <label className="mb-4 font-bold text-right text-gray-800 text-lg flex items-center gap-2 justify-start">
                  <Users className="text-green-600" />
                  المحافظ المشتركة
                </label>
                <select
                  value={selectedSharedWallet}
                  onChange={(e) => handleSharedWalletChange(e.target.value)}
                  className="w-full p-4 border-2 border-gray-300 rounded-xl text-right bg-white focus:border-[#16423C] focus:ring-2 focus:ring-[#16423C]/20 transition-all duration-300 hover:border-[#16423C]/50"
                  disabled={selectedWallet !== ''}
                >
                  <option value="">اختر المحفظة المشتركة...</option>
                  {sharedWallets.map(wallet => (
                    <option key={wallet.id} value={wallet.id}>
                      {wallet.name} ({wallet.walletCurrency.name})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-start gap-6 pt-8">
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={!uploadedImage || (!selectedWallet && !selectedSharedWallet) || isSaving}
                className="relative overflow-hidden px-8 py-4 w-52 bg-gradient-to-r from-[#16423C] to-[#0f2e28] text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSaving && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      <Sparkles className="w-5 h-5 animate-pulse" />
                    </div>
                  </div>
                )}
                <span className={isSaving ? 'invisible' : 'flex items-center gap-2 justify-center'}>
                  {isSaving ? '' : (
                    <>
                      <Zap className="w-5 h-5" />
                      حفظ
                    </>
                  )}
                </span>
                {isSaving && (
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                    جاري المعالجة... ✨
                  </div>
                )}
              </button>
              
              <button
                type="button"
                onClick={handleCancel}
                className="px-8 py-4 border-3 border-[#16423C] text-[#16423C] rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-[#16423C] hover:text-white hover:scale-105"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIExpense;