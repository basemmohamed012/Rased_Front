// NotificationsList.jsx
import { Info, AlertTriangle } from "lucide-react";

export default function NotificationsList() {
  const notifications = [
    {
      title: "التقرير المالي الشهري",
      message:
        "تمويلك الحالي أقل من المصروفات المتوقعة لـ 6 شهور. راجع توزيعات المحفظة الاستثمارية الخاصة بك للوصول إلى هدفك",
      type: "تنبيه",
      date: "يناير 2040",
      icon: <Info className="w-4 h-4 text-blue-500" />,
      labelColor: "bg-blue-100 text-blue-600",
    },
    {
      title: "تمويل طارئ",
      message:
        "تمويلك الحالي أقل من المصروفات المتوقعة لـ 6 شهور. راجع توزيعات المحفظة الاستثمارية الخاصة بك للوصول إلى هدفك",
      type: "تنبيه",
      date: "يناير 2040",
      icon: <Info className="w-4 h-4 text-blue-500" />,
      labelColor: "bg-blue-100 text-blue-600",
    },
    {
      title: "تمويل طارئ",
      message:
        "تمويلك الحالي أقل من المصروفات المتوقعة لـ 6 شهور. راجع توزيعات المحفظة الاستثمارية الخاصة بك للوصول إلى هدفك",
      type: "تحذير",
      date: "يناير 2040",
      icon: <AlertTriangle className="w-4 h-4 text-yellow-500" />,
      labelColor: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "تمويل طارئ",
      message:
        "تمويلك الحالي أقل من المصروفات المتوقعة لـ 6 شهور. راجع توزيعات المحفظة الاستثمارية الخاصة بك للوصول إلى هدفك",
      type: "تنبيه",
      date: "يناير 2040",
      icon: <Info className="w-4 h-4 text-blue-500" />,
      labelColor: "bg-blue-100 text-blue-600",
    },
  ];

  return (
    <div className="rtl text-right p-4">
      <h2 className="text-xl font-bold mb-4">التنبيهات</h2>
      <div className="flex flex-col gap-4">
        {notifications.map((n, idx) => (
          <div
            key={idx}
            className="bg-white w-[1020px] h-[123px] p-4 border-2 rounded-xl shadow-xl flex flex-col gap-2"
          >
            <div className="flex items-center gap-2 font-bold text-gray-800">
              {n.icon}
              <span>{n.title}</span>
              <span
                className={`text-sm font-normal px-2 py-0.5 rounded-full ${n.labelColor}`}
              >
                {n.type}
              </span>
            </div>
            <p className="text-sm text-gray-600">{n.message}</p>
            <div className="text-xs text-gray-400">{n.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
