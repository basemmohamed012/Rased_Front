import React from 'react';
import NavbarWallet from '../../../Layout/NavbarWallet/NavbarWallet';
import SidebarW from '../../../Layout/SideBar/SidebarW.jsx';
import Footer from '../../Home/Footer/Footer';
import MangeBudget from './BudgetContent/mangeBudget.jsx';
import StateMangeBudget from './BudgetContent/StateMangeBudget.jsx'
import SimpleBarchart from './BudgetContent/SimpleBarchart.jsx'
import PieCharts from './BudgetContent/Piecharts.jsx'
import Category from './BudgetContent/Category.jsx'
import HomeCard from './BudgetContent/BudgetCards.jsx/HomeCard.jsx';
import EducationCard from './BudgetContent/BudgetCards.jsx/EducationCard.jsx';
import TransportCard from './BudgetContent/BudgetCards.jsx/TransportCard.jsx';
import RestaurantCard from './BudgetContent/BudgetCards.jsx/RestaurantCard.jsx';
import NotificationsList from '../User/contentUserPage/NotificationsList.jsx';


const Budget = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] grid-cols-1 min-h-screen">
      {/* Navbar */}
      <div className=" row-span-1 relative z-10">
        <NavbarWallet />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-[250px_1fr] rtl:grid-cols-[1fr_250px]">
        {/* Sidebar */}
        <div className="h-[2200px]">
           <SidebarW />
        </div>

        {/* Page Content */}
        <div className="p-6 absolute left-[70px] top-20  space-y-10">
        <MangeBudget />
        <StateMangeBudget />
       <div className='flex gap-6'>
         <SimpleBarchart />
         <PieCharts />
       </div>
       <Category />
       <div className='flex gap-6 w-[1020px] '>
         <HomeCard />
         <EducationCard />
       </div>
        <div className='flex gap-6 w-[1020px] '>
         <TransportCard />
         <RestaurantCard />
       </div>
       <NotificationsList />
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
