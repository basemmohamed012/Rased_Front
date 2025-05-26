import React, { useEffect, useState } from 'react';
import NavbarHeader from '../../../Layout/NavbarHeader/NavbarHeader.jsx';
import SidebarW from '../../../Layout/SideBar/SidebarW.jsx';

import Footer from '../../Home/Footer/Footer';
import ProfileCard from './contentUserPage/ProfileCard.jsx';
import  Card  from './contentUserPage/Card.jsx';
import TransactionsTable from './contentUserPage/TransactionsTable.jsx';
import FinancialGoals from './contentUserPage/FinancialGoals.jsx';
import NotificationsList from './contentUserPage/NotificationsList.jsx';
import ReportsList from './contentUserPage/ReportsList.jsx';
import  PieChart  from './contentUserPage/Piechart.jsx';
import { Spinner } from '../../helpers/Spinner.jsx';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const ProfileUser = () => {
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
              {/* <NotificationsList /> */}
              {/* <ReportsList /> */}
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

export default ProfileUser;
