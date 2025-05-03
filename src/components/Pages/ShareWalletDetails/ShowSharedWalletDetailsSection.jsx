import React from 'react';
import NavbarWallet from '../../../Layout/NavbarWallet/NavbarWallet';
import SidebarW from '../../../Layout/SideBar/SidebarW.jsx';
import SharedWalletDetailsSection from './ContentSharedWalletDetails/SharedWalletDetailsSection.jsx'

import Footer from '../../Home/Footer/Footer';
import Buttons from './ContentSharedWalletDetails/Buttons.jsx';

const ShowSharedWalletDetailsSection = () => {
 
  return (
    <div className="grid grid-rows-[auto_1fr_auto] grid-cols-1 min-h-screen">
      {/* Navbar */}
      <div className="row-span-1 relative z-10">
        <NavbarWallet />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-[250px_1fr] rtl:grid-cols-[1fr_250px] gap-6">
        {/* Sidebar */}
        <div className="bg-white min-h-full">
          <SidebarW />
        </div>

        {/* Page Content */}
        <div className='relative left-[900px] p-6 space-y-10'>
          <SharedWalletDetailsSection/>
          <div>
            <Buttons/>
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

export default ShowSharedWalletDetailsSection;
