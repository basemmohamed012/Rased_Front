import React from 'react'

import NavbarWallet from '../../../../Layout/NavbarWallet/NavbarWallet';
import SidebarW from '../../../../Layout/SideBar/SidebarW.jsx';
import Footer from '../../../Home/Footer/Footer';
import GoalDetail from './GoalDetail.jsx'


const Goals = () => {
  return (
    <div>
       <div className="grid grid-rows-[auto_1fr_auto] grid-cols-1 ">
      {/* Navbar */}
      <div className=" row-span-1 relative z-10">
        <NavbarWallet />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-[250px_1fr] rtl:grid-cols-[1fr_250px]">
        {/* Sidebar */}
        <div className="">
           <SidebarW />
        </div>

        {/* Page Content */}
        <div className="p-6 absolute left-[70px] top-20   space-y-10">
          <GoalDetail />
    
        </div>
      </div>

      {/* Footer */}
      <div className=" row-span-1 mt-6 ">
        <Footer />
      </div>
    </div>
    </div>
  )
}

export default Goals
