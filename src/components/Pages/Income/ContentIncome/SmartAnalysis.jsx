// SmartAnalysis.jsx
import { AlertCircle, Info, AlertTriangle } from "lucide-react";

const alerts = [
  {
    type: "info",
    title: "زيادة في الدخل",
    message: "ارتفع دخلك بنسبة 18% مقارنة بالشهر الماضي.",
    date: "يناير 2040",
  },
  {
    type: "warning",
    title: "دخل غير منتظم",
    message: "تم اكتشاف دخل غير منتظم - يرجى تصنيفه.",
    date: "يناير 2040",
  },
  {
    type: "info",
    title: "نمو الاستثمار",
    message: "نمت عائدات استثماراتك بنسبة 14% هذا الشهر.",
    date: "يناير 2040",
  },
  {
    type: "info",
    title: "نمو الاستثمار",
    message: "نمت عائدات استثماراتك بنسبة 14% هذا الشهر.",
    date: "يناير 2040",
  },
];

export default function SmartAnalysis() {
  return (
    <div className="p-4 mx-auto ">
      <h2 className="text-right text-[22px] font-bold mb-6">تحليلات ذكية</h2>
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow flex flex-col gap-2">
            <div className="flex items-center ">
              <div className="flex items-center gap-4">
                 {alert.type === "info" && <Info className="text-[#2E77CA] w-[20px] h-[20px]" />}
                {alert.type === "warning" && <AlertTriangle className="text-[#FFC925] w-[20px] h-[20px]" />}
                <span className="text-right text-[18px] font-bold">{alert.title}</span>
                {alert.type === "info" && (
                  <span className="text-[#2E77CA] bg-[#2E77CA] bg-opacity-20 text-[16px]  rounded-[20px] w-[70px] h-[25px] text-center">تنبيه</span>
                )}
                {alert.type === "warning" && (
                  <span className="text-[#FFC925] bg-[#FFC925] bg-opacity-20 text-[16px]  rounded-[20px] w-[70px] h-[25px] text-center">تحذير</span>
                )}
               
              </div>
              
            </div>
            <p className="text-[14px] text-[#7A7575] font-medium text-right">{alert.message}</p>
            <span className="text-[14px] text-[#7A7575] font-medium text-right">{alert.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
