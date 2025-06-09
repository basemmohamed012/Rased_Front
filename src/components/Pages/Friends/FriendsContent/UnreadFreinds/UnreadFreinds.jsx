import FriendItem from '../FreindsItem/FriendItem.jsx';

export default function UnreadFriends({ friends = [] }) {
  if (!friends || friends.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        لا توجد طلبات صداقة غير مقروءة
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {friends.map((friend) => (
        <FriendItem key={friend.id} friend={friend} />
      ))}
    </div>
  );
}