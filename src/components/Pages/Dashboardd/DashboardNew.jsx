import React from 'react';
import NavbarWallet from '../../../Layout/NavbarWallet/NavbarWallet';
import SidebarDash from '../Dashboardd/DashContent/SidebarDash.jsx';
import Buttonss from '../Dashboardd/DashContent/Buttonss.jsx'
import Footer from '../../Home/Footer/Footer';


const Wallet = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] grid-cols-1 min-h-screen">
      {/* Navbar */}
      <div className="row-span-1 relative z-10">
        <NavbarWallet />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-[250px_1fr] rtl:grid-cols-[1fr_250px]">
        {/* Sidebar */}
        <div className="bg-white">
          <SidebarDash />
        </div>

        {/* Page Content */}
        <div className="p-6 absolute left-[70px] top-10 h-[770px] space-y-10">
         
         <Buttonss />
        
        </div>
      </div>

      {/* Footer */}
      <div className="row-span-1 mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Wallet;
