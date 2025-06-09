import FriendItem from '../FreindsItem/FriendItem.jsx';
export default function BlockFriends({ friends = [] }) {
  if (!friends || friends.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">لا توجد حسابات محظورة</h3>
        <p className="text-gray-500">لم تقم بحظر أي شخص بعد</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
        <h3 className="text-red-800 font-semibold text-right mb-2">الحسابات المحظورة</h3>
        <p className="text-red-600 text-sm text-right">
          هؤلاء الأشخاص لا يمكنهم رؤية ملفك الشخصي أو التواصل معك
        </p>
      </div>
      
      {friends.map((friend) => (
        <FriendItem key={friend.id} friend={friend} />
      ))}
    </div>
  );

}