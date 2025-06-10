import React from 'react'

import NavbarHeader from '../../../Layout/NavbarHeader/NavbarHeader';
import SidebarW from '../../../Layout/SideBar/SidebarW.jsx';
import Footer from '../../Home/Footer/Footer.jsx';
import MangeFriends from './FriendsContent/MangeFriends.jsx'
import FreindsPage from './FriendsContent/FreindsPage.jsx'
import FriendSuggestions from './FriendsContent/FriendSuggestions.jsx';
import FriendStats from './FriendsContent/FriendStats.jsx'
const Friends = () => {

  const friends = [
  // أصدقاء فعليين (مقبولين بالفعل)
  {
    id: 1,
    name: "فاطمة عبد المقصود",
    title: "مطورة برمجيات",
    mutualFriends: 12,
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    isFollowing: true,
    isRead: true,
    time: "منذ ساعتين",
    status: "online",
    type: "friend",
    relationshipType: "accepted"
  },
  {
    id: 2,
    name: "عبد الله محمود",
    title: "مصمم جرافيك",
    mutualFriends: 8,
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    isFollowing: true,
    isRead: true,
    time: "منذ ساعتين",
    status: "offline",
    type: "friend",
    relationshipType: "accepted"
  },
  // طلبات صداقة جديدة
  {
    id: 3,
    name: "نسمة محمود",
    title: "مهندسة شبكات",
    mutualFriends: 15,
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    isFollowing: false,
    isRead: false,
    time: "منذ ساعتين",
    status: "online",
    type: "friend",
    relationshipType: "pending"
  },
  {
    id: 4,
    name: "أحمد فتحي الله",
    title: "مدير مشاريع",
    mutualFriends: 20,
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    isFollowing: false,
    isRead: false,
    time: "منذ ساعتين",
    status: "offline",
    type: "friend",
    relationshipType: "pending"
  },
  // إشارات
  {
    id: 5,
    name: "عبد الله محمود",
    title: "كاتب محتوى",
    mutualFriends: 6,
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    isFollowing: false,
    isRead: false,
    time: "منذ ساعتين",
    status: "online",
    type: "mention",
    relationshipType: "mention"
  },
  {
    id: 6,
    name: "نور الهدى",
    title: "أخصائية تسويق",
    mutualFriends: 9,
    avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    isFollowing: false,
    isRead: true,
    time: "منذ ساعتين",
    status: "online",
    type: "mention",
    relationshipType: "mention"
  },
  // أشخاص محظورين
  {
    id: 7,
    name: "حميدة محمد",
    title: "محلل بيانات",
    mutualFriends: 11,
    avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    isFollowing: false,
    isRead: true,
    time: "منذ ساعتين",
    status: "online",
    type: "system",
    relationshipType: "blocked"
  },
  {
    id: 8,
    name: "مازن فتح",
    title: "معلم",
    mutualFriends: 5,
    avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    isFollowing: false,
    isRead: true,
    time: "منذ ساعتين",
    status: "offline",
    type: "system",
    relationshipType: "blocked"
  },
];

  return (
    <div>
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
        <div className="p-6 absolute left-[70px] top-20  space-y-10">
      <MangeFriends />
      <div className='flex gap-5'>
        <FreindsPage />
    <div className=''>
        <FriendSuggestions />
       <FriendStats friends={friends} />
    </div>
        </div>
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

export default Friends
