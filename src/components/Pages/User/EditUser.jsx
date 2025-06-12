import React, { useState, useEffect, useRef } from 'react';
import { Camera, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ACCOUNT_STATUS, API_BASE_URL } from "../../../constants/AppConstants.js";
import axios from "axios";
import { toast } from "react-toastify";
import { decryptToken } from '../../helpers/TokenHelper'

const EditUser = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({});
    const [form, setForm] = useState({
        FullName: '',
        UserName: '',
        DateOfBirth: null,
        Address: '',
        ProfilePic: null
    });
    const [token, setToken] = useState('');

    // Profile picture states
    const [profileImage, setProfileImage] = useState(null); // For display (base64 or blob URL)
    const [profileImageBytes, setProfileImageBytes] = useState(null); // For sending to backend
    const [originalImageBytes, setOriginalImageBytes] = useState(null); // Original from backend
    const fileInputRef = useRef(null);
    
    // Convert file to bytes array
    const fileToBytes = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const arrayBuffer = reader.result;
                const bytes = Array.from(new Uint8Array(arrayBuffer));
                resolve(bytes);
            };
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        });
    };
    
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

        // Fetch the userData
        const fetchUserData = async () => {
        // Fetching the data
        try {
            setUserData({});

            const apiUrl = `${API_BASE_URL}/Auth/GetUser`;

            // API Call
            const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${originalAcessToken}`
            }
            });
            
            // Check errors
            if(response.data.succeeded === true && response !== null && response.data !== null && response.data.data !== null) {
                const resp = response.data.data;
                setUserData(resp);

                // Fill Form Data
                form.FullName = resp.fullName || '';
                form.UserName = resp.userName || '';
                form.DateOfBirth = resp.dateOfBirth || null;
                form.Address = resp.address || '';
                
                // Receiving the image as bytes
                if(resp.profilePic !== null && resp.profilePic !== '') {
                    setProfileImage(arrayBufferToBase64(resp.profilePic));
                }
            }
            else {
            // something unexpected occured
            localStorage.setItem('message', 'خطأ ما حدث!!');
            window.history.back();
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

        fetchUserData();

    }, []);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleImageClick = () => {
        fileInputRef.current?.click();
    };
    
    const bytesToBase64 = (bytes) => {
        // Convert bytes array to Uint8Array if it's not already
        const uint8Array = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
        
        // Convert to binary string
        let binaryString = '';
        for (let i = 0; i < uint8Array.length; i++) {
            binaryString += String.fromCharCode(uint8Array[i]);
        }
        
        // Convert binary string to Base64
        return btoa(binaryString);
    };

    const arrayBufferToBase64 = (buffer) => {
      if (!buffer) return '';
      
      // If buffer is already a string (possibly base64), return it
      if (typeof buffer === 'string') return buffer;
      
      // Convert array buffer to base64
      let binary = '';
      const bytes = new Uint8Array(buffer);
      const len = bytes.byteLength;
      
      for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      
      return window.btoa(binary);
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                alert('يرجى اختيار ملف صورة صحيح');
                return;
            }
            
            // Validate file size (e.g., max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('حجم الصورة كبير جداً. يرجى اختيار صورة أصغر من 5 ميجابايت');
                return;
            }
            
            try {
                // Convert to bytes for backend
                const bytes = await fileToBytes(file);
                const base64String = bytesToBase64(bytes);
                setProfileImageBytes(base64String);
                
                // Create preview URL
                // const previewUrl = URL.createObjectURL(file);
                setProfileImage(arrayBufferToBase64(bytes));
            } catch (error) {
                toast.error(error);
            }
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        // validation
        if(form.FullName === '') {
            toast.error('ادخل اسمك كاملا ❌');
            setLoading(false);
            return;
        }
        if (form.UserName === '') {
            toast.error('يجب اختيار اسم مستخدم ❌');
            setLoading(false);
            return;
        }
        const isValidUserName = /^[A-Za-z0-9_-]+$/.test(form.UserName);
        if (!isValidUserName) {
            toast.error('❌ اسم المستخدم يجب أن يحتوي على حروف إنجليزية، أرقام، شرطة (-)، أو شرطة سفلية (_) فقط');
            setLoading(false);
            return;
        }

        try {
            setLoading(true);

            const apiUrl = `${API_BASE_URL}/Auth/UpdateUser`;
            // profile image
            if(profileImageBytes !== null && profileImageBytes !== '')
                form.ProfilePic = profileImageBytes;

            // API Call
            const response = await axios.put(apiUrl, form, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            // Check errors
            if(response.data.succeeded === false || response === null || response.data === null) {
                toast.error(response.data.message || 'خطأ ما حدث!');
                return;
            }
            else {
                localStorage.setItem('message', response.data.message);
                navigate('/profile');
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
        navigate('/profile');
    };
    
    return (
        <div className='container mt-6'>
            <div className='flex justify-between items-center'>
                <div className='flex-col gap-2 justify-start'>
                    <h2 className="text-[20px] font-bold text-maincolor mb-2">تعديل البيانات الشخصية</h2>
                </div>
            </div>
            
            <div className="w-[1020px] h-auto mx-auto bg-white p-8 rounded-lg shadow mt-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Profile Picture Section */}
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <div 
                                className="w-32 h-32 rounded-full border-4 border-maincolor cursor-pointer overflow-hidden bg-gray-100 flex items-center justify-center hover:opacity-80 transition-opacity"
                                onClick={handleImageClick}
                            >
                                {profileImage ? (
                                    <img 
                                        src={`data:image/png;base64,${profileImage}`}
                                        alt="Profile" 
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <User size={48} className="text-gray-400" />
                                )}
                            </div>
                            <button
                                type="button"
                                onClick={handleImageClick}
                                className="absolute bottom-0 right-0 bg-maincolor text-white p-2 rounded-full hover:bg-secondcolor transition-colors"
                            >
                                <Camera size={16} />
                            </button>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 font-bold text-right">الاسم كامل</label>
                            <input
                                type="text"
                                name="FullName"
                                className="w-full text-maincolor border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
                                placeholder="أدخل الاسم هنا"
                                value={form.FullName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-bold text-right">اسم المستخدم</label>
                            <input
                                type="text"
                                name="UserName"
                                className="w-full text-maincolor border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
                                placeholder="أدخل اسم المستخدم"
                                value={form.UserName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 font-bold text-right">الإيميل</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full text-maincolor border-2 rounded px-3 py-2 border-graycolor bg-gray-50"
                                placeholder="البريد الإلكتروني"
                                value={userData.email}
                                disabled
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-bold text-right">تاريخ الميلاد</label>
                            <input
                                type="date"
                                name="DateOfBirth"
                                className="w-full text-maincolor border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
                                value={form.DateOfBirth}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block mb-1 font-bold text-right">العنوان</label>
                        <input
                            type="text"
                            name="Address"
                            className="w-full text-maincolor border-2 rounded px-3 py-2 border-graycolor focus:border-maincolor focus:text-black"
                            placeholder="أدخل العنوان"
                            value={form.Address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex justify-start gap-8 mt-10 pt-6">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`px-6 py-2 w-[206px] h-[48px] bg-maincolor hover:bg-secondcolor text-white rounded-[10px] ${
                                loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        >
                            {loading ? 'جاري الحفظ ...' : 'حفظ'}
                        </button>

                        <button
                            type="button"
                            onClick={handleCancel}
                            className="px-6 py-2 border-2 w-[112px] h-[48px] text-[#16423C] border-[#16423C] rounded-[10px]"
                        >
                            رجـــوع
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUser