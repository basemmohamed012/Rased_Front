import React from 'react'
import Navbar from '../../../Layout/Navbar/Navbar.jsx'
import Header from '../../Home/Header/Header.jsx'
import GoogleAppStore from '../../Home/Google&ApStore/GoogleAppStore'
import Financial from '../../Home/Finaicail/Finaicail'
import AnalysisCard from '../ِAnalysisCard/AnalysisCard.jsx'
import  Card  from '../../Home/Cards/Card'
import Advantage from '../../Home/Advantages/advantage.jsx'
import Examples from '../../Home/Examples/Examples'
import Qrcode from '../../Home/Qrcode/Qrcode'
import Management from '../../Home/Management/Management'
import LandingPageFooter from '../Footer/LandingPageFooter.jsx'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const message = localStorage.getItem('message');
    const accessToken = localStorage.getItem('acc-token');
    if(accessToken) {
      // the user should not reach here
      navigate('/dashboard');
      return;
    }
    if(message) {
      toast.success(message);
      setTimeout(() => {
        localStorage.removeItem('message');
      }, 1000);
    }
  }, []);

  return (
    
   <>
   <Navbar/>
    
    <Header />
    
   
   <Financial />
  
   
    <GoogleAppStore />
    <AnalysisCard />
    <Card/>
    <Advantage />
    <Management />
    <Qrcode/>
    <Examples />
    <LandingPageFooter />
    {/*
   <OneTouch />
   <Analysis />
   <Features />
   
  */}
  {/* Toastify */}
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
   </>
   
  
   
    
  )
}

export default Home
