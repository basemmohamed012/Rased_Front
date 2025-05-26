import React, {useState, useEffect} from 'react'
import Abdoimg from '../../../../assets/images/Abdo.svg'
import loca from '../../../../assets/images/location.svg'
import email from '../../../../assets/images/e-mail.svg'
import phone from '../../../../assets/images/phone.svg'
import date from '../../../../assets/images/date.svg'
import { useNavigate } from 'react-router-dom';
import { ACCOUNT_STATUS, API_BASE_URL } from "../../../../constants/AppConstants.js";
import axios from "axios";
import { toast } from "react-toastify";
import { decryptToken } from '../../../helpers/TokenHelper'
import { User, Star, MapPin, Calendar, Edit3 } from 'lucide-react';

const ProfileCard = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState({});
  const [profileImage, setProfileImage] = useState(null); // For display (base64 or blob URL)

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
            if(resp.profilePic !== null && resp.profilePic !== '')
              setProfileImage(arrayBufferToBase64(resp.profilePic)); // Convert bytes to image URL
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

  const handleUpdateData = () => {
    navigate('/edit-user');
  }


  return (
    <div className="mx-auto mt-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white max-w-4xl">
      {/* الغلاف المتدرج مع الأنماط الهندسية */}
      <div className="h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 relative overflow-hidden">
        {/* نماذج هندسية للخلفية */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-8 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute top-12 right-12 w-16 h-16 bg-white rounded-lg rotate-45"></div>
          <div className="absolute bottom-8 left-16 w-12 h-12 bg-white rounded-full"></div>
          <div className="absolute bottom-4 right-20 w-24 h-24 bg-white rounded-lg rotate-12 opacity-50"></div>
        </div>
        
        {/* خطوط متموجة */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/20 to-transparent backdrop-blur-sm"></div>
        
        {/* زر التعديل */}
        <button onClick={handleUpdateData} className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white p-2 rounded-xl hover:bg-white/30 transition-all duration-300">
          <Edit3 className='inline' size={18} /> تعديل البيانات
        </button>
      </div>

      {/* قسم المعلومات الرئيسي */}
      <div className="bg-white px-8 py-6 relative">
        {/* الصورة الشخصية مع تأثيرات متقدمة */}
        <div className="absolute -top-20 right-8">
          <div className="relative">
            {/* حلقة خارجية متحركة */}
            <div className="absolute inset-0 w-32 h-32 border-4 border-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
            
            {/* الصورة الرئيسية */}
            <div className="w-28 h-28 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 m-2">
              {profileImage ? (
                <img 
                  src={`data:image/png;base64,${profileImage}`}
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                  <User size={40} className="text-blue-600" />
                </div>
              )}
            </div>
            
            {/* مؤشر الحالة النشطة */}
            <div className="absolute bottom-3 left-3 w-4 h-4 bg-green-400 border-3 border-white rounded-full shadow-lg">
              <div className="w-full h-full bg-green-500 rounded-full animate-ping opacity-50"></div>
            </div>
          </div>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="p-10 flex-cols justify-center items-center">
          {/* الاسم والشارة */}
          <div className="flex items-center gap-4 mb-3">
            <h2 className="font-bold text-2xl text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {userData.fullName}
            </h2>
            <div className="flex items-center gap-1 bg-gradient-to-r from-emerald-400 to-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              <Star size={12} fill="currentColor" />
              <span>{userData.badge}</span>
            </div>
          </div>

          {/* اسم المستخدم */}
          <p className="text-maincolor font-medium mb-6 text-sm">{userData.userName}@</p>

          {/* معلومات إضافية */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
              <MapPin size={14} className="text-blue-500" />
              <span>{userData.address || 'لم يتم التحديد'}</span>
            </div>
            
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
              <Calendar size={14} className="text-purple-500" />
              <span>{userData.dateOfBirth || 'لم يتم التحديد'}</span>
            </div>
            
            <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 px-3 py-2 rounded-lg">
              <Star size={14} className="text-yellow-500" fill="currentColor" />
              <span className="text-orange-600 font-medium">4.85</span>
            </div>
          </div>
        </div>

        {/* شريط الإحصائيات السفلي */}
        <div className="pt-4 border-t border-gray-100">
          <div className="grid grid-cols-1 gap-6 text-center">
            {/* <div className="group cursor-pointer">
              <div className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                156
              </div>
              <div className="text-xs text-gray-500 group-hover:text-gray-600">المنشورات</div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="text-2xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors">
                2.3K
              </div>
              <div className="text-xs text-gray-500 group-hover:text-gray-600">المتابعون</div>
            </div> */}
            
            <div className="group cursor-pointer">
              <div className="text-2xl font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors">
                89%
              </div>
              <div className="text-xs text-gray-500 group-hover:text-gray-600">معدل النشاط</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
