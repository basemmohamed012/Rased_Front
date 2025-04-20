import './App.css'
import HomePage from './components/Home/pageHome/HomePage.jsx'
import {Routes , Route } from 'react-router-dom';
import Signn_up from './components/Forms/Sign_up.jsx';
import LoginPage from './components/Forms/Log_in.jsx'
import ReseatPassword from './components/Forms/ReseatPassword.jsx'
import ErrorBoundary from './Hooks/Boundary/ErrorBoundary.jsx';
import ProfileClient from './components/Pages/Profile/ProfileClient.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import NavbarWallet from './Layout/NavbarWallet/NavbarWallet.jsx';
import SidebarW from './Layout/SideBar/SidebarW.jsx';
import  Wallet  from './components/Pages/Wallet/Wallet.jsx';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الأنيميشن بالمللي ثانية
      once: true,     // الأنيميشن يشتغل مرة واحدة بس
    });
  }, []);

  return (
    
    <div className='overflow-hidden'>
<ErrorBoundary>
        <Routes >
        <Route path='/' element={<HomePage />} />
       <Route path='/sign_up' element={<Signn_up />} />
        <Route path="/login" element={<LoginPage  />} />
        <Route path='/pass' element={<ReseatPassword />   } />
        <Route path="/profile" element={<SidebarW />} />
        <Route path="/dashboard" element={<Wallet />} />
      </Routes>
  
    </ErrorBoundary>
     
    </div>
    
  )
}

export default App
