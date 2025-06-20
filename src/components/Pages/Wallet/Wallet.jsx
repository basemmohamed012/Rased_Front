import React from 'react';
import NavbarHeader from '../../../Layout/NavbarHeader/NavbarHeader';
import SidebarW from '../../../Layout/SideBar/SidebarW.jsx';
import WalletIndividual from '../../Pages/Wallet/WalletIndividual.jsx';
import Footer from '../../Home/Footer/Footer';
import SharedWalletsSection from '../SharedWallet/SharedWalletsSection.jsx';

const Wallet = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] grid-cols-1 min-h-screen">
      {/* Navbar */}
      <div className=" row-span-1 relative z-10">
        <NavbarHeader />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-[250px_1fr] rtl:grid-cols-[1fr_250px]">
        {/* Sidebar */}
        <div className="bg-white">
          <SidebarW />
        </div>

        {/* Page Content */}
        <div className="p-6 absolute left-[70px] top-10 h-[770px] space-y-10">
          <WalletIndividual />
          <hr className='hidden lg:block relative bottom-12' />
          <div className=' lg:block relative bottom-20'>
          <SharedWalletsSection />
          </div>
        
        </div>
      </div>

      {/* Footer */}
      <div className=" row-span-1 mt-6 ">
        <Footer />
      </div>
    </div>
  );
};

export default Wallet;
