import { useState } from "react";
import AllNotifications from './AllNotification/Allnotification.jsx';
import UnreadNotifications from './UnreadNotfication/UnreadNotification.jsx';
import MentionsNotifications from './MintionNotification/MintionNotification.jsx'
import SystemNotifications from './SystemNotification/SystemNotification.jsx'
import tabler_message_filled from '../../../assets/images/tabler_message-filled.svg'
import tabler_message_filled1 from '../../../assets/images/tabler_message-filled1.svg'
import tabler_message_filled2 from '../../../assets/images/tabler_message-filled2.svg'
import tabler_message_filled3 from '../../../assets/images/tabler_message-filled3.svg'
import NotificationItem from './NotificationItem/NotificationItem.jsx';

const notifications = [
  {
    id: 1,
    title: "ارتفاع كبير في سعر سهمك المفضل",
    description: "السهم الخاص بك قد ارتفع بنسبة ٥٪ خلال ساعة واحدة.",
    type: "success",
    image: tabler_message_filled,
    isRead: false,
    time: "منذ ساعتين" ,
  },
  {
    id: 2,
    title: "تحديث في سياسة الخصوصية",
    description: "لقد قمنا بتحديث سياسة الخصوصية الخاصة بنا.",
    type: "info",
    image: tabler_message_filled1,
    isRead: true,
    time: "منذ ساعتين" ,
  },
  {
    id: 3,
    title: "تنبيه بخسارة قيمة عملة معتادة",
    description: "قيمة عملة مشهورة قد انخفضت بشكل مفاجئ.",
    type: "error",
    image: tabler_message_filled2,
    isRead: false,
    time: "منذ ساعتين" ,
  },
  {
    id: 4,
    title: "تقرير بموعد الجلسة الاستثمارية",
    description: "تذكير بموعد جلستك الاستثمارية القادمة.",
    type: "warning",
    image: tabler_message_filled3,
    isRead: true,
    time: "منذ ساعتين" ,
  },
  {
    id: 5,
    title: "دليل جديد لسوق العملات الرقمية",
    description: "اكتشف دليلنا الجديد لفهم السوق.",
    type: "info",
    image: tabler_message_filled3,
    isRead: false,
    time: "منذ ساعتين" ,
  },
  {
    id: 6,
    title: "نصيحة استثمارية لهذا الأسبوع",
    description: "تعرف على أفضل الفرص الاستثمارية للأسبوع الحالي.",
    type: "info",
    image: tabler_message_filled3,
    isRead: true,
    time: "منذ ساعتين" ,
  },
  {
    id: 7,
    title: "تم ذكرك في تعليق",
    description: "قام شخص بذكرك في تعليق على منشور استثماري.",
    type: "mention",
    image: tabler_message_filled,
    isRead: false,
    time: "منذ ساعتين" ,
  },
  {
    id: 8,
    title: "تحديث جديد من النظام",
    description: "هناك تحديث جديد في التطبيق لتحسين الأداء.",
    type: "system",
    image: tabler_message_filled2,
    isRead: true,
    time: "منذ ساعتين" ,
  },
  
];

export default function Notifications() {
  const [filter, setFilter] = useState("all");
const [visibleCount, setVisibleCount] = useState(6);


  return (
    <div className="w-[1022px] h-auto border-2 rounded-[15px] shadow-xl relative  top-[20px] p-[24px] gap-[48px]">
      <div className="flex justify-between items-center mb-6">
       <div>
       <h2 className="font-bold text-[26px] leading-none tracking-normal">الإشعارات</h2>
       <p className="mt-4 text-[#8D8A8A] font-normal text-base leading-none tracking-normal"
 >
         لديك {notifications.length} إشعار. تصفح لتراها!</p>
       </div>
        <button className="bg-[#EDEDED] w-[185px] h-[51px]  rounded-[15px] gap-[10px] pt-4 pr-3 pb-4 pl-8">
          
          <p className="text-[#9A9595] font-bold text-base leading-none tracking-normal whitespace-nowrap ">
          تعيين الجميع كمقروءة
          </p>
        </button>
      </div>

      <div className="flex bg-[rgba(38,80,58,0.1)] gap-4 w-[974px] h-[52px]  justify-between rounded-[15px] pt-2 pr-6 pb-2 pl-6 mb-6 flex-wrap">
  <button
    onClick={() => setFilter("all")}
    className={`px-4 py-2 rounded-full text-sm ${filter === "all" ? "bg-[#16423C] text-white" : "bg-gray-200 hover:bg-gray-300"}`}
  >
    الكل {notifications.length}
  </button>
  <button
    onClick={() => setFilter("unread")}
    className={`px-4 py-2 rounded-full text-sm ${filter === "unread" ? "bg-[#16423C] text-white" : "bg-gray-200 hover:bg-gray-300"}`}
  >
    غير مقروءة
  </button>
  <button
    onClick={() => setFilter("mentions")}
    className={`px-4 py-2 rounded-full text-sm ${filter === "mentions" ? "bg-[#16423C] text-white" : "bg-gray-200 hover:bg-gray-300"}`}
  >
    تم ذكرك فيها
  </button>
  <button
    onClick={() => setFilter("system")}
    className={`px-4 py-2 rounded-full text-sm ${filter === "system" ? "bg-[#16423C] text-white" : "bg-gray-200 hover:bg-gray-300"}`}
  >
    النظام
  </button>
</div>





{filter === "all" && (
    <AllNotifications notifications={notifications.slice(0, visibleCount)} />
  )}
      {filter === "unread" && <UnreadNotifications notifications={notifications} />}
      {filter === "mentions" && <MentionsNotifications notifications={notifications} />}
      {filter === "system" && <SystemNotifications notifications={notifications} />}

      <div className="flex justify-center mt-6">
  {visibleCount < notifications.length && (
    <button
      onClick={() => setVisibleCount(prev => prev + 6)}
      className="w-[974px] h-[54px]  bg-[rgba(199,199,199,0.4)] rounded-[10px] gap-[10px] border border-[rgba(166,166,166,1)] pt-4 pr-8 pb-4 pl-8"
    >
      عرض المزيد
    </button>
  )}
</div>
    </div>
  );
}
