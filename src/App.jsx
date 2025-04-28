import './App.css'
import HomePage from './components/Home/pageHome/HomePage.jsx'
import {Routes , Route } from 'react-router-dom';
import ErrorBoundary from './Hooks/Boundary/ErrorBoundary.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import SidebarW from './Layout/SideBar/SidebarW.jsx';
import  Wallet  from './components/Pages/Wallet/Wallet.jsx';
import DashboardNew from './components/Pages/Dashboardd/DashboardNew.jsx'
import LoginPage from './components/Pages/auth/LoginPage.jsx';
import SignupPage from './components/Pages/auth/SignupPage.jsx';
import ResetPasswordPage from './components/Pages/auth/ResetPasswordPage.jsx';
import VerifyOTPPage from './components/Pages/auth/VerifyOTPPage.jsx';

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
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/verify-otp' element={<VerifyOTPPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/reset-password' element={<ResetPasswordPage />} />
          <Route path="/profile" element={<DashboardNew />} />
          <Route path="/dashboard" element={<Wallet />} />
        </Routes>

      </ErrorBoundary>
     
    </div>
    
  )
}

export default App
