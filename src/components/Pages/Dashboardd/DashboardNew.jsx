import React from 'react';
import NavbarHeader from '../../../Layout/NavbarHeader/NavbarHeader';
import SidebarW from '../../../Layout/SideBar/SidebarW.jsx';
import Buttonss from '../Dashboardd/DashContent/Buttonss.jsx'
import Footer from '../../Home/Footer/Footer';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Wallet = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const message = localStorage.getItem('message');
    const accessToken = localStorage.getItem('acc-token');
    if(!accessToken) {
      // the user should not reach here
      navigate('/login');
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
    <div className="grid grid-rows-[auto_1fr_auto] grid-cols-1 min-h-screen">
      {/* Navbar */}
      <div className="row-span-1 relative z-10">
        <NavbarHeader />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-[250px_1fr] rtl:grid-cols-[1fr_250px]">
        {/* Sidebar */}
        <div className="bg-white">
          <SidebarW />
        </div>

        {/* Page Content */}
        <div className="p-6 absolute left-[70px] top-15 h-[770px] space-y-10">
         
         <Buttonss />
        
        </div>
      </div>

      {/* Footer */}
      <div className="row-span-1 mt-10">
        <Footer />
      </div>

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
    </div>
  );
};

export default Wallet;
