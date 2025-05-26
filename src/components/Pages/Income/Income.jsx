import React from 'react';
import NavbarHeader from '../../../Layout/NavbarHeader/NavbarHeader';
import SidebarW from '../../../Layout/SideBar/SidebarW.jsx';
import Footer from '../../Home/Footer/Footer';
import IncomeOverview from './ContentIncome/IncomeOverview.jsx';
import Barchart from './ContentIncome/Barchart.jsx';
import SourceOfIncome from './ContentIncome/SourceOfIncome.jsx';
import SmartAnalysis from './ContentIncome/SmartAnalysis.jsx';


const Budget = () => {
  return (
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
         <SourceOfIncome />
         <SmartAnalysis />
        </div>
      </div>

      {/* Footer */}
      <div className=" row-span-1 mt-6 ">
        <Footer />
      </div>
    </div>
  );
};

export default Budget;
