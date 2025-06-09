import React from "react";
import FriendStatsCard from "./FriendStatsCard";

export default function FriendStats({ friends }) {
  const acceptedFriends = friends.filter(f => f.relationshipType === "accepted");
  const pendingFriends = friends.filter(f => f.relationshipType === "pending");
  const blockedFriends = friends.filter(f => f.relationshipType === "blocked");
  const mentionFriends = friends.filter(f => f.relationshipType === "mention");

  return (
    <div className="flex flex-col gap-4 mt-4">
      <FriendStatsCard label="كل الأصدقاء" count={acceptedFriends.length} color="#16423C" />
      <FriendStatsCard label="طلبات الصداقة" count={pendingFriends.length} color="#D97706" />
      <FriendStatsCard label="الأشخاص المحظورين" count={blockedFriends.length} color="#DC2626" />
      <FriendStatsCard label="تم ذكرك فيها" count={mentionFriends.length} color="#2563EB" />
    </div>
  );
}
