import { useState } from "react";
import {
  ChevronDownIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

export default function SearchFilter() {
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <div className="flex items-center rounded-md p-1 bg-white w-[1026px] gap-3">
      {/* مربع البحث */}
      <div className="flex flex-1 items-center border-2 border-[#A9A6A6] rounded-md pr-2 pl-3">
        <input
          type="text"
          placeholder="بحث"
          className="flex-grow text-sm border-none py-1 h-[48px] focus:outline-none"
        />
        <MagnifyingGlassIcon className="w-5 h-5 text-[#A9A6A6]" />
      </div>

      {/* زر التصفية */}
      <button className="flex items-center gap-1 px-3 py-1 h-[48px] border-2 border-[#A9A6A6] rounded-md hover:bg-gray-100">
        <FunnelIcon className="w-5 h-5 text-gray-600" />
        <span className="text-gray-700 text-sm font-medium">تصفية</span>
      </button>

      {/* زر كل الفئات */}
      <div className="relative">
        <button
          onClick={() => setCategoryOpen(!categoryOpen)}
          className="flex items-center gap-1 px-3 py-1 h-[48px] border-2 border-[#A9A6A6] rounded-md hover:bg-gray-100 text-gray-700 text-sm font-medium"
        >
          كل الفئات
          <ChevronDownIcon className="w-4 h-4" />
        </button>
        {categoryOpen && (
          <ul className="absolute right-0 mt-1 w-40 bg-white border-2 border-[#A9A6A6] rounded-md shadow-md z-10">
            <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
              فئة 1
            </li>
            <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
              فئة 2
            </li>
            <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
              فئة 3
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
