import { useState, useRef, useEffect } from 'react';
import { Search, MessageCircle, Users, Bell, User, Settings, LogOut, ChevronDown } from 'lucide-react';
import logo from '../../assets//images/logoNew.svg'
import axios from "axios";
import { decryptToken } from '../../components/helpers/TokenHelper';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL, ACCOUNT_STATUS } from "../../constants/AppConstants";

const NavbarHeader = () => {
  const navigate = useNavigate();
  const [isNotificationActive, setIsNotificationActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const dropdownRef = useRef(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNotificationClick = () => {
    setIsNotificationActive(!isNotificationActive);
    navigate('/notifications')
  };

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProfileNavigation = () => {
    setIsDropdownOpen(false);
    navigate('/profile');
  };

  const handleLogout = async () => {
    setIsDropdownOpen(false);

    try {
      const apiUrl = `${API_BASE_URL}/Auth/Logout`;

      let reqBody = {
        Email: userData.email || ''
      }
      // API Call
      const response = await axios.post(apiUrl, reqBody);
      
      // Check errors
      if(response.data.succeeded === true && response !== null && response.data !== null) {
          localStorage.clear();
          localStorage.setItem('message', response.data.message);
          navigate('/');
      }
      else {
        // something unexpected occured
        localStorage.setItem('message', 'خطأ ما حدث!!');
        return;
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

  };

  const handleLogoClick = () => {
    navigate('/dashboard');
  };

  const handleFriends = () => {
    navigate('/friendships')
  }

  const DarkModeToggle = () => (
    <button className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-all duration-200 group">
      <div className="w-full h-full bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full group-hover:scale-110 transition-transform duration-200"></div>
    </button>
  );

  return (
    <header className="">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div 
            onClick={handleLogoClick}
            className="cursor-pointer"
          >
            <img src={logo} className='ml-40 ' />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="البحث..."
                className="w-96 h-12 bg-gray-50 border border-gray-200 rounded-full px-6 pr-12 text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondcolor focus:border-transparent transition-all duration-200"
              />
              <Search 
                size={20} 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>

            {/* Action Icons */}
            <div className="flex items-center gap-2">
              
              {/* Messages */}
              <button className="relative w-12 h-12 bg-gray-50 hover:bg-blue-50 rounded-full flex items-center justify-center transition-all duration-200 group">
                <MessageCircle size={20} className="text-gray-600 group-hover:text-blue-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
              </button>

              {/* People */}
              <button onClick={handleFriends} className="w-12 h-12 bg-gray-50 hover:bg-green-50 rounded-full flex items-center justify-center transition-all duration-200 group">
                <Users size={20} className="text-gray-600 group-hover:text-green-600" />
              </button>

              {/* Notifications */}
              <button 
                onClick={handleNotificationClick}
                className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isNotificationActive 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-gray-50 hover:bg-yellow-50 text-gray-600 hover:text-yellow-600'
                }`}
              >
                <Bell size={20} className={isNotificationActive ? 'animate-pulse' : ''} />
                {!isNotificationActive && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">5</span>
                )}
              </button>

              {/* Dark Mode Toggle */}
              <DarkModeToggle />

            </div>

            {/* User Profile Section */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={handleProfileClick}
                className="flex items-center gap-3 p-2 rounded-full hover:bg-gray-50 transition-all duration-200 group"
              >
                {/* User Info */}
                <div className="text-right hidden md:block">
                  <div className="font-semibold text-gray-800 text-sm group-hover:text-blue-600 transition-colors">
                    {userData.fullName || 'المستخدم'}
                  </div>
                  <div className="text-xs text-gray-500">{userData.userName}</div>
                </div>

                {/* Profile Image */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border-2 border-secondcolor overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center group-hover:border-blue-300 transition-colors">
                    {profileImage ? (
                      <img 
                        src={`data:image/png;base64,${profileImage}`}
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User size={24} className="text-secondcolor" />
                    )}
                  </div>
                  
                  {/* Online Status */}
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
                </div>

                {/* Dropdown Arrow */}
                <ChevronDown 
                  size={16} 
                  className={`text-gray-400 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                  
                  {/* User Info Header */}
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="font-semibold text-gray-800">{userData.fullName || 'المستخدم'}</div>
                    <div className="text-sm text-gray-500">{userData.userName}</div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                    <button
                      onClick={handleProfileNavigation}
                      className="w-full flex items-center gap-3 px-4 py-3 text-right hover:bg-gray-50 transition-colors duration-150 group"
                    >
                      <User size={18} className="text-gray-500 group-hover:text-blue-600" />
                      <span className="text-gray-700 group-hover:text-blue-600">الملف الشخصي</span>
                    </button>

                    {/* <button
                      onClick={() => {console.log('Settings'); setIsDropdownOpen(false);}}
                      className="w-full flex items-center gap-3 px-4 py-3 text-right hover:bg-gray-50 transition-colors duration-150 group"
                    >
                      <Settings size={18} className="text-gray-500 group-hover:text-gray-700" />
                      <span className="text-gray-700 group-hover:text-gray-800">الإعدادات</span>
                    </button> */}
                  </div>

                  {/* Logout */}
                  <div className="border-t border-gray-100 pt-2">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-right hover:bg-red-50 transition-colors duration-150 group"
                    >
                      <LogOut size={18} className="text-gray-500 group-hover:text-red-600" />
                      <span className="text-gray-700 group-hover:text-red-600">تسجيل الخروج</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarHeader;