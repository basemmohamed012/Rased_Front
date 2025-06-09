import { useState } from "react";
import AllFriends from './AllFreinds/AllFriends.jsx';
import UnreadFriends from "./UnreadFreinds/UnreadFreinds.jsx";
import MentionFriends from "./MintionFreinds/MentionFriends.jsx";
import BlockFriends from './BlockFreinds/BlockFriends.jsx';
import { SlidersHorizontal, Search } from 'lucide-react';
import FriendStats from './FriendStats.jsx'; 
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

export default function Friends() {
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const getFilteredFriends = () => {
    switch (filter) {
      case "unread":
        return friends.filter(friend => !friend.isRead);
      case "mentions":
        return friends.filter(friend => friend.type === 'mention');
      case "system":
        return friends.filter(friend => friend.type === 'system'); // المحظورين
      default:
        return friends;
    }
  };

  const filteredFriends = getFilteredFriends();
  const displayedFriends = filteredFriends.slice(0, visibleCount);

  return (

    <div className="w-[638px] h-auto border-2 rounded-[15px] shadow-xl relative top-[20px] p-[24px] gap-[48px] bg-white">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="font-bold text-[26px] leading-none tracking-normal text-right">شبكتك الاجتماعية</h2>
          <p className="mt-4 text-[#8D8A8A] font-normal text-base leading-none tracking-normal text-right">
            تواصل مع أصدقائك وشارك معهم أهم إنجازاتك المالية ! {friends.length} 
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-16 mb-6">
        {/* مربع البحث */}
        <div className="flex items-center bg-[#F4F4F4] rounded-full px-4 py-2 w-full max-w-md">
          <input
            type="text"
            placeholder="بحث..."
            className="flex-grow bg-transparent border-none text-right outline-none"
          />
          <Search size={18} className="text-gray-400" />
        </div>

        {/* زر التصفية */}
        <button className="flex items-center text-black font-semibold">
          تصفية
          <SlidersHorizontal className="mr-2" size={20} />
        </button>
      </div>

      <div className="flex bg-[rgba(38,80,58,0.1)] gap-4 w-[590px] h-[52px] justify-between rounded-[15px] pt-2 pr-6 pb-2 pl-6 mb-6 flex-wrap">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full text-sm transition-all ${filter === "all" ? "bg-[#16423C] text-white" : "bg-gray-200 hover:bg-gray-300"}`}
        >
          الكل {friends.length}
        </button>
        <button
          onClick={() => setFilter("unread")}
          className={`px-4 py-2 rounded-full text-sm transition-all ${filter === "unread" ? "bg-[#16423C] text-white" : "bg-gray-200 hover:bg-gray-300"}`}
        >
          غير مقروءة {friends.filter(f => !f.isRead).length}
        </button>
        <button
          onClick={() => setFilter("mentions")}
          className={`px-4 py-2 rounded-full text-sm transition-all ${filter === "mentions" ? "bg-[#16423C] text-white" : "bg-gray-200 hover:bg-gray-300"}`}
        >
          تم ذكرك فيها {friends.filter(f => f.type === 'mention').length}
        </button>
        <button
          onClick={() => setFilter("system")}
          className={`px-4 py-2 rounded-full text-sm transition-all ${filter === "system" ? "bg-[#16423C] text-white" : "bg-gray-200 hover:bg-gray-300"}`}
        >
          المحظورين {friends.filter(f => f.type === 'system').length}
        </button>
      </div>

      <div className="w-[590px]">
        {filter === "all" && (
          <AllFriends friends={displayedFriends} />
        )}
        {filter === "unread" && <UnreadFriends friends={displayedFriends} />}
        {filter === "mentions" && <MentionFriends friends={displayedFriends} />}
        {filter === "system" && <BlockFriends friends={displayedFriends} />}
      </div>

      <div className="flex justify-center mt-6 w-[590px]">
        {visibleCount < filteredFriends.length && (
          <button
            onClick={() => setVisibleCount(prev => prev + 6)}
            className="w-[590px] h-[54px] bg-[rgba(199,199,199,0.4)] rounded-[10px] gap-[10px] border border-[rgba(166,166,166,1)] pt-4 pr-8 pb-4 pl-8 hover:bg-[rgba(199,199,199,0.6)] transition-all"
          >
            عرض المزيد
          </button>
        )}
      </div>
    </div>
  );
}