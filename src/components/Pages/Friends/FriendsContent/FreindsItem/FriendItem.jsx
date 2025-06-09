import { useState } from 'react';
import {
  UserPlus,
  UserMinus,
  MoreHorizontal,
  UserX,
  Users,
  MessageCircle,
  Check
} from 'lucide-react';

export default function FriendItem({ friend }) {
  const [isFollowing, setIsFollowing] = useState(friend.isFollowing);
  const [isIgnored, setIsIgnored] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [friendAccepted, setFriendAccepted] = useState(false);
  const [unblocked, setUnblocked] = useState(false);

  const handleFollow = () => {
    setIsFollowing(true);
    setFriendAccepted(true);
  };

  const handleIgnore = () => {
    setIsIgnored(true);
  };

  const handleUnblock = () => {
    setUnblocked(true);
    console.log('تم إلغاء حظر', friend.name);
  };

  if (isIgnored) {
    return null;
  }

  const renderActionButtons = () => {
    switch (friend.relationshipType) {
      case 'accepted':
        return (
          <div className="flex items-center gap-2 relative">
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
              title="عرض الأشخاص"
            >
              <Users size={20} className="text-gray-600" />
            </button>

            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
              title="محادثة"
            >
              <MessageCircle size={20} className="text-gray-600" />
            </button>

            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
              title="المزيد"
            >
              <MoreHorizontal size={20} className="text-gray-600" />
            </button>

            {showMenu && (
              <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[120px]">
                <button className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm">
                  عرض الملف الشخصي
                </button>
                <button className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm">
                  إرسال رسالة
                </button>
                <button className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm text-red-600">
                  إلغاء الصداقة
                </button>
              </div>
            )}
          </div>
        );

      case 'pending':
        return friendAccepted ? (
          <div className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium flex items-center gap-2 text-sm">
            <Check size={16} />
            تم قبول الصداقة
          </div>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleIgnore}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200 flex items-center gap-2"
            >
              <UserMinus size={16} />
              رفض
            </button>
            <button
              onClick={handleFollow}
              className="px-4 py-2 bg-[#16423C] text-white rounded-lg font-medium hover:bg-[#1a4d45] transition-all duration-200 flex items-center gap-2"
            >
              <UserPlus size={16} />
              قبول
            </button>
          </div>
        );

      case 'blocked':
        return unblocked ? (
          <div className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium flex items-center gap-2 text-sm">
            <Check size={16} />
            تم فك الحظر
          </div>
        ) : (
          <button
            onClick={handleUnblock}
            className="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition-all duration-200 flex items-center gap-2"
          >
            <UserX size={16} />
            إلغاء الحظر
          </button>
        );

      case 'mention':
        return (
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
            >
              <MoreHorizontal size={20} className="text-gray-600" />
            </button>

            {showMenu && (
              <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[120px]">
                <button className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm">
                  عرض الإشارة
                </button>
                <button className="w-full px-4 py-2 text-right hover:bg-gray-50 text-sm">
                  الرد على الإشارة
                </button>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={friend.avatar}
            alt={friend.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          {friend.status === 'online' && friend.relationshipType !== 'blocked' && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          )}
          {friend.relationshipType === 'blocked' && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
          )}
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-right">{friend.name}</h3>
          <p className="text-sm text-gray-600 text-right">{friend.title}</p>
          <p className="text-xs text-gray-500 text-right">
            {friend.relationshipType === 'blocked'
              ? 'محظور'
              : `${friend.mutualFriends} صديق مشترك`}
          </p>
        </div>
      </div>

      {renderActionButtons()}
    </div>
  );
}
