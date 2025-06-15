import React from 'react';

import NavbarWallet from '../../../Layout/NavbarWallet/NavbarWallet';
import SidebarW from '../../../Layout/SideBar/SidebarW.jsx';
import Footer from '../../Home/Footer/Footer';
import ManageSavig from './SavingContent/ManageSavig.jsx';
import SearchFilter from './SavingContent/SearchFilter.jsx';
import PropertyCard from './SavingContent/PropertyCard.jsx';

const Saving = () => {
  const properties = [
    {
      id: 1,
      category: 'الأجهزة التقنية',
      price: '500,000$',
      location: 'الشارع الرئيسي',
    
      area: 'غير محدد',
      dateAdded: '2023 يونيو 8',
      expiryDate: '2023 يونيو 15',
      status: 'active'
    },
    {
      id: 2,
      category: 'استثمار شخصي',
      price: '800,000$',
      location: 'شارع المال والأعمال',
   
      area: '250 متر',
      dateAdded: '2023 يوليو 1',
      expiryDate: '2023 يوليو 10',
      status: 'pending'
    },
    {
      id: 3,
      category: 'الأجهزة التقنية',
      price: '350,000$',
      location: 'حي النخيل',
     
      area: '180 متر',
      dateAdded: '2023 يونيو 20',
      expiryDate: '2023 يوليو 5',
      status: 'expired'
    }
    ,
    {
      id: 2,
      category: 'استثمار شخصي',
      price: '800,000$',
      location: 'شارع المال والأعمال',
      
      area: '250 متر',
      dateAdded: '2023 يوليو 1',
      expiryDate: '2023 يوليو 10',
      status: 'pending'
    },
    {
      id: 2,
      category: 'استثمار شخصي',
      price: '800,000$',
      location: 'شارع المال والأعمال',
     
      area: '250 متر',
      dateAdded: '2023 يوليو 1',
      expiryDate: '2023 يوليو 10',
      status: 'pending'
    },
    {
      id: 2,
      category: 'استثمار شخصي',
      price: '800,000$',
      location: 'شارع المال والأعمال',
      
      area: '250 متر',
      dateAdded: '2023 يوليو 1',
      expiryDate: '2023 يوليو 10',
      status: 'pending'
    },
    {
      id: 2,
      category: 'استثمار شخصي',
      price: '800,000$',
      location: 'شارع المال والأعمال',
      
      area: '250 متر',
      dateAdded: '2023 يوليو 1',
      expiryDate: '2023 يوليو 10',
      status: 'pending'
    },
    {
      id: 2,
      category: 'استثمار شخصي',
      price: '800,000$',
      location: 'شارع المال والأعمال',
      
      area: '250 متر',
      dateAdded: '2023 يوليو 1',
      expiryDate: '2023 يوليو 10',
      status: 'pending'
    },
    {
      id: 2,
      category: 'استثمار شخصي',
      price: '800,000$',
      location: 'شارع المال والأعمال',
    
      area: '250 متر',
      dateAdded: '2023 يوليو 1',
      expiryDate: '2023 يوليو 10',
      status: 'pending'
    },
    {
      id: 2,
      category: 'استثمار شخصي',
      price: '800,000$',
      location: 'شارع المال والأعمال',
      
      area: '250 متر',
      dateAdded: '2023 يوليو 1',
      expiryDate: '2023 يوليو 10',
      status: 'pending'
    },
    {
      id: 2,
      category: 'استثمار شخصي',
      price: '800,000$',
      location: 'شارع المال والأعمال',
      
      area: '250 متر',
      dateAdded: '2023 يوليو 1',
      expiryDate: '2023 يوليو 10',
      status: 'pending'
    },
    {
      id: 2,
      category: 'استثمار شخصي',
      price: '800,000$',
      location: 'شارع المال والأعمال',
      
      area: '250 متر',
      dateAdded: '2023 يوليو 1',
      expiryDate: '2023 يوليو 10',
      status: 'pending'
    },
    {
      id: 2,
      category: 'استثمار شخصي',
      price: '800,000$',
      location: 'شارع المال والأعمال',
      
      area: '250 متر',
      dateAdded: '2023 يوليو 1',
      expiryDate: '2023 يوليو 10',
      status: 'pending'
    },
    {
      id: 2,
      category: 'استثمار شخصي',
      price: '800,000$',
      location: 'شارع المال والأعمال',
      
      area: '250 متر',
      dateAdded: '2023 يوليو 1',
      expiryDate: '2023 يوليو 10',
      status: 'pending'
    },
    {
      id: 2,
      category: 'استثمار شخصي',
      price: '800,000$',
      location: 'شارع المال والأعمال',
      
      area: '250 متر',
      dateAdded: '2023 يوليو 1',
      expiryDate: '2023 يوليو 10',
      status: 'pending'
    }
  ];

  return (
    <div className="grid grid-rows-[auto_1fr_auto] grid-cols-1 min-h-screen">
      {/* Navbar */}
      <div className="row-span-1 relative z-10">
        <NavbarWallet />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-[250px_1fr] rtl:grid-cols-[1fr_250px]">
        {/* Sidebar */}
        <div>
          <SidebarW />
        </div>

        {/* Page Content */}
        <div className="p-6 absolute left-[70px] top-20 space-y-10">
          <ManageSavig />
          <SearchFilter />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
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

export default Saving;
