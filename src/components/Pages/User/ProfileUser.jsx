import React from 'react';
import NavbarWallet from '../../../Layout/NavbarWallet/NavbarWallet';
import SidebarW from '../../../Layout/SideBar/SidebarW.jsx';

import Footer from '../../Home/Footer/Footer';
import ProfileCard from './contentUserPage/ProfileCard.jsx';
import  Card  from './contentUserPage/Card.jsx';
import TransactionsTable from './contentUserPage/TransactionsTable.jsx';
import FinancialGoals from './contentUserPage/FinancialGoals.jsx';
import NotificationsList from './contentUserPage/NotificationsList.jsx';
import ReportsList from './contentUserPage/ReportsList.jsx';
import  PieChart  from './contentUserPage/Piechart.jsx';


const ProfileUser = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] grid-cols-1 min-h-screen">
      {/* Navbar */}
      <div className=" row-span-1 relative z-10">
        <NavbarWallet />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-[250px_1fr] rtl:grid-cols-[1fr_250px]">
        {/* Sidebar */}
        <div className="min-h-[3400px]">
           <SidebarW />
        </div>

        {/* Page Content */}
        <div className="p-6 absolute left-[70px] top-10  space-y-10">
         <ProfileCard />
         <Card />
         <div className='flex gap-16'>
         <PieChart />
          <PieChart />
         </div>
         <TransactionsTable />
         <FinancialGoals />
         <NotificationsList />
         <ReportsList />
        </div>
      </div>

      {/* Footer */}
      <div className=" row-span-1 mt-6 ">
        <Footer />
      </div>
    </div>
  );
};

export default ProfileUser;
