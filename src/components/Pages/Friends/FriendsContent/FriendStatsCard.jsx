import React from "react";

export default function FriendStatsCard({ label, count, color = "#16423C" }) {
  return (
    <div className="bg-white rounded-xl border p-4 shadow-lg w-full max-w-[370px]">
      <div className="flex justify-between items-center">
        <h3 className="text-right font-semibold text-gray-700 text-md">{label}</h3>
        <span
          className="text-lg font-bold"
          style={{ color: color }}
        >
          {count}
        </span>
      </div>
    </div>
  );
}
