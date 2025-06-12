import React from 'react';

const friends = [
  {
    id: 1,
    name: 'مها عبدالمقصود',
    title: 'محلل مالي خبرة 5+ سنوات',
    mutualFriends: 4,
    avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    id: 2,
    name: 'مها عبدالمقصود',
    title: 'محلل مالي خبرة 5+ سنوات',
    mutualFriends: 4,
    avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    id: 3,
    name: 'مها عبدالمقصود',
    title: 'محلل مالي خبرة 5+ سنوات',
    mutualFriends: 4,
    avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
];

export default function FriendSuggestions() {
  return (
    <div className="bg-white rounded-xl border p-4 mt-5 shadow-lg w-full max-w-[370px]">
      <h2 className="text-right font-bold text-lg text-gray-800 mb-4">اقتراحات صداقة</h2>
      <div className="space-y-4">
        {friends.map((friend) => (
          <div
            key={friend.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-5 flex-1 justify-end">
              <img
                src={friend.avatar}
                alt={friend.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-right whitespace-nowrap ml-10">
                <h3 className="text-sm font-semibold text-gray-900">{friend.name}</h3>
                <p className="text-xs text-gray-500">{friend.title}</p>
                <p className="text-xs text-gray-400">{friend.mutualFriends} أصدقاء مشتركين</p>
              </div>
            </div>
            <button className="bg-[#16423C] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1a4d45] transition-all duration-200 text-sm">
              تواصل
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

