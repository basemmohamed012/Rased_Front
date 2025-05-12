// TransactionsTable.jsx
import { Trash2, Edit3, Search, ChevronDown } from "lucide-react";

const transactions = [
  {
    date: "2 مارس 2025",
    name: "شراء سوبر ماركت",
    category: "خضار",
    amount: "80.00 $",
    status: "مكتمل",
  },
  {
    date: "18 مارس 2025",
    name: "كشف أسنان",
    category: "صحة",
    amount: "100.00 $",
    status: "مكتمل",
  },
  {
    date: "2 مارس 2025",
    name: "إيجار المنزل",
    category: "المنزل",
    amount: "780.00 $",
    status: "مكتمل",
  },
  {
    date: "14 مارس 2025",
    name: "اشتراك نتفلكس",
    category: "ترفيه",
    amount: "7.50 $",
    status: "مكتمل",
  },
  {
    date: "18 مارس 2025",
    name: "كشف أسنان",
    category: "صحة",
    amount: "100.00 $",
    status: "مكتمل",
  },
];

const categoryColors = {
  خضار: "bg-[#3D984A] bg-opacity-20 text-[#3D984A]",
  صحة: "bg-[#1D98B5] bg-opacity-20 text-[#1D98B5]",
  المنزل: "bg-purple-100 text-purple-600",
  ترفيه: "bg-[#FC380C] bg-opacity-20 text-[#FC380C]",
};

export default function TransactionsTable() {
  return (
    <div className="bg-white h-[536px] p-4 rounded-2xl shadow-xl border-1 rtl text-right">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
        <h2 className="text-[22px]  font-bold">العمليات الحالية</h2>
        <div className="flex items-center gap-2 ">

          <div className="relative">
            <input
              type="text"
              placeholder="بحث..."
              className="border w-[232px] h-[48px]  rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring "
            />
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="flex w-[130px] h-[48px] items-center gap-1 border p-2 px-3 rounded-md text-sm text-gray-700">
            <ChevronDown className="w-4 h-4" />
            كل الفئات
          </button>
          
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="" >
            <tr className=" text-[18px] font-bold ">
              <th className="p-2 whitespace-nowrap">التاريخ</th>
              <th className="p-2 whitespace-nowrap">العملية</th>
              <th className="p-2 whitespace-nowrap">الفئة</th>
              <th className="p-2 whitespace-nowrap">الكمية</th>
              <th className="p-2 whitespace-nowrap">الحالة</th>
              <th className="p-2 whitespace-nowrap absolute left-16">الإجراء</th>
            </tr>
          </thead>
          <tbody >
            {transactions.map((tx, idx) => (
              <tr key={idx} className="border-b ">
                <td className="py-8 text-[14px] font-bold    ">{tx.date}</td>
                <td className="py-8 text-[16px] font-bold ">{tx.name}</td>
                <td className="py-8 ">
                  <span
                    className={`px-3 py-1 rounded-full text-[14px] font-medium ${
                      categoryColors[tx.category] || "bg-gray-100 text-gray-600 "
                    }`}
                  >
                    {tx.category}
                  </span>
                </td>
                <td className="py-8 text-[18px] font-bold">{tx.amount}</td>
                <td className="py-8 text-[18px] font-bold ">{tx.status}</td>
                <td className="py-8 flex gap-2 justify-end">
                  <button className="text-gray-500 hover:text-blue-600">
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button className="text-gray-500 hover:text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
