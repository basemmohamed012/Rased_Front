import React from 'react';
import NavbarHeader from '../../../Layout/NavbarHeader/NavbarHeader';
import SidebarW from '../../../Layout/SideBar/SidebarW.jsx';
import DetailsWallet from '../../Pages/WalletDetails/ContentWalletDetails/DetailsWallets.jsx';
import StatsSection from '../../Pages/WalletDetails/ContentWalletDetails/StatsSection.jsx';
import DataTableWalletDetails from './ContentWalletDetails/DataTableWalletDetails.jsx'
import DataTableWalletDetailsDate from './ContentWalletDetails/DataTableWalletDetailsDate.jsx'
import Footer from '../../Home/Footer/Footer';
import Barchart from '../Income/ContentIncome/Barchart.jsx';
import PerformanceChart from '../Expenses/ContentExpenses/ThirdTap/PerformanceChart'

const Wallet = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] grid-cols-1 min-h-screen">
      {/* Navbar */}
      <div className="row-span-1 relative z-10">
        <NavbarHeader />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-[250px_1fr] rtl:grid-cols-[1fr_250px] gap-6">
        {/* Sidebar */}
        <div className="bg-white min-h-full">
          <SidebarW />
        </div>

        {/* Page Content */}
        <div className="relative left-[900px] p-6 space-y-10">
          <DetailsWallet />
          <div className='w-[1020px]'>
          <StatsSection />
          </div>
          <div>
          <Barchart />
          </div>
          <div className=''>
            
          
           <PerformanceChart />

          </div>
         
          
        </div>
      </div>

      {/* Footer */}
      <div className="row-span-1 mt-6">
        <Footer />
      </div>
    </div>
  );
};

export default Wallet;
