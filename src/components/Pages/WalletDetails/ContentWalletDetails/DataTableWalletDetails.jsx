import React, { useState } from "react";
import { Card, CardContent } from "../../../../Layout/ui/card";
import { Badge } from "../../../../Layout/ui/badge";
import {cn} from '../../../../Layout/lib/utils'
import apple from "../../../../assets/images/apple.svg"
import mahmoud from "../../../../assets/images/mah,oud.svg"
import mohamed from "../../../../assets/images/mohamed.svg"
import selling from "../../../../assets/images/selling.svg"
import sub from "../../../../assets/images/subscribe.svg"
import transfer from "../../../../assets/images/transfer.svg"

const transactions = [
  {
    id: 1,
    amount: -40,
    date: "05 مارس",
    time: "12:05 م",
    status: "مكتمل",
    balance : 4000,
    type: 1,
    method: "بطاقة ائتمانية",
    cardEnding: "4120",
    user: "ICloud",
    icon: apple
  },
  {
    id: 2,
    amount: -40,
    date: "05 مارس",
    time: "12:05 م",
    status: "قيد التنفيذ",
    balance : 4000,
    type: 1,
    method: "بطاقة ائتمانية",
    cardEnding: "4120",
    user: "ICloud",
    icon: apple
  },
  {
    id: 3,
    amount: 100,
    date: "05 مارس",
    time: "12:05 م",
    status: "قيد التنفيذ",
    balance : 4000,
    type: 1,
    method: "بطاقة ائتمانية",
    cardEnding: "4120",
    user: "محمود فرج",
    icon: mohamed
  },
  {
    id: 4,
    amount: 150,
    date: "05 مارس",
    time: "12:05 م",
    status: "مكتمل",
    balance : 4000,
    type: 1,
    method: "بطاقة ائتمانية",
    cardEnding: "4120",
    user: " محمد عبدالله",
    icon: mahmoud
  },
];

const statusColors = {
  "مكتمل": "bg-green-100 text-green-700",
  "قيد التنفيذ": "bg-orange-100 text-orange-700",
};



export default function TransactionTable() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("الكل");

  const filteredTransactions = transactions.filter((tx) => {
    const matchesUser = tx.user.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === "الكل" || tx.type === filterType;
    return matchesUser && matchesType;
  });

  return (
    <Card className="overflow-x-auto w-[1020px]">
      <CardContent className="p-4 space-y-4">
        <div className="flex flex-col md:flex-row items-end   justify-between gap-4">
         <div>
         <h2 className="text-[30px] font-bold text-end w-full md:w-auto"> مصادر الدخل</h2>
         </div>

          <div className="flex flex-col md:flex-row gap-48 w-full md:w-auto">
            <input
              type="text"
              placeholder="ابحث عن المستخدم..."
              className="border rounded-xl px-3 py-1 text-sm focus:outline-none focus:ring w-full md:w-60"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="border rounded-xl gap-2 w-[100px] px-3 py-1 text-sm focus:outline-none focus:ring"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="الكل">كل الأنواع</option>
              <option value="شراء">شراء</option>
              <option value="اشتراك">اشتراك</option>
              <option value="تحويل نقدي">تحويل نقدي</option>
            </select>
          </div>
        </div>

        <table dir="rtl" className="w-full text-sm text-end">
         
        <tbody>
  {filteredTransactions.length > 0 ? (
    filteredTransactions.map((tx) => (
      <tr key={tx.id} className="border-b  py-4 hover:bg-gray-50">
        <td className="py-4">
        <img src={tx.icon} alt={tx.user}  />
          </td>
        <td>{tx.user}</td>
        
        <td>{tx.method} **** {tx.cardEnding}</td>
        <td className="  gap-10">
     
         {tx.balance}$   
        </td>
        <td className="items-end text-left relative right-5">
        {tx.type} 
        
        </td>
        <td>
        <Badge
  className={cn(
    "rounded-full px-3 py-1 text-xs",
    statusColors[tx.status.trim()] || "bg-gray-100 text-gray-700"
  )}
>
  {tx.status.trim()}
</Badge>

        </td>
        <td>{tx.time} - {tx.date}</td>
        <td className={cn("py-2 font-bold", tx.amount > 0 ? "text-green-600" : "text-red-600")}>
          {tx.amount > 0 ? `+$${tx.amount}` : `-$${Math.abs(tx.amount)}`}
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7" className="text-center py-4 text-gray-500">لا توجد معاملات مطابقة</td>
    </tr>
  )}
</tbody>

        </table>
      </CardContent>
    </Card>
  );
}
