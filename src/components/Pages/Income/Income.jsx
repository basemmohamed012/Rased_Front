import React, {useState, useEffect} from 'react';
import NavbarHeader from '../../../Layout/NavbarHeader/NavbarHeader';
import SidebarW from '../../../Layout/SideBar/SidebarW.jsx';
import Footer from '../../Home/Footer/Footer';
import IncomeOverview from './ContentIncome/IncomeOverview.jsx';
import Barchart from './ContentIncome/Barchart.jsx';
import SmartAnalysis from './ContentIncome/SmartAnalysis.jsx';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Spinner } from '../../helpers/Spinner.jsx';
import WalletIncomeCards from './ContentIncome/WalletIncomeCards.jsx';
import SharedWalletIncomeCards from './ContentIncome/SharedWalletIncomeCards.jsx';

const Budget = () => {

  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const message = localStorage.getItem('message');
      if(message) {
        toast.success(message);
        setTimeout(() => {
          localStorage.removeItem('message');
        }, 1000);
      }
  
      setTimeout(() => {
          setLoading(false);
        }, 1000);
    }, []);


  return (
    <>
      {
        loading ? ( <Spinner loading={loading} /> ) : (
          <div className="grid grid-rows-[auto_1fr_auto] grid-cols-1 min-h-screen">
            {/* Navbar */}
            <div className=" row-span-1 relative z-10">
              <NavbarHeader />
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-[250px_1fr] rtl:grid-cols-[1fr_250px]">
              {/* Sidebar */}
              <div className="h-[2130px]">
                <SidebarW />
              </div>

              {/* Page Content */}
            <div className="p-6 absolute left-[70px] top-20  space-y-10">
              <IncomeOverview />
              <Barchart />
              <WalletIncomeCards />
              <SharedWalletIncomeCards />
              <SmartAnalysis />
              </div>
            </div>

            {/* Footer */}
            <div className=" row-span-1 mt-6 ">
              <Footer />
            </div>

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
          </div>
        )
      }
    
    </>
  );
};

export default Budget;
