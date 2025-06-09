import React, { useEffect, useState } from 'react';
import NavbarHeader from '../../../../Layout/NavbarHeader/NavbarHeader';
import SidebarW from '../../../../Layout/SideBar/SidebarW.jsx';
import Footer from '../../../Home/Footer/Footer.jsx';
import { Spinner } from '../../../helpers/Spinner.jsx';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import EditExpense from './EditExpense';

const EditExpensePage = () => {
    const [loading, setLoading] = useState(true);
    
      useEffect(() => {
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
              <div className="">
                <SidebarW />
              </div>

              {/* Page Content */}
              <div className="p-6 absolute left-[70px]  top-20  space-y-10">
                <EditExpense />
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
  )
}

export default EditExpensePage