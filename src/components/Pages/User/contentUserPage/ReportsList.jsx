// ReportsList.jsx
import { Download, FileText } from "lucide-react";

export default function ReportsList() {
  const reports = [
    {
      title: "تمويل طارئ",
      description: "يجب إتمام مراجعة وضعك وأهدافك المالي لهذا الشهر! ابدأ الآن",
      date: "يناير 2040",
      format: "PDF",
      size: "3.4MB",
    },
    {
      title: "تمويل طارئ",
      description: "يجب إتمام مراجعة وضعك وأهدافك المالي لهذا الشهر! ابدأ الآن",
      date: "يناير 2040",
      format: "PDF",
      size: "3.4MB",
    },
    {
      title: "تمويل طارئ",
      description: "يجب إتمام مراجعة وضعك وأهدافك المالي لهذا الشهر! ابدأ الآن",
      date: "يناير 2040",
      format: "PDF",
      size: "3.4MB",
    },
    {
      title: "تمويل طارئ",
      description: "يجب إتمام مراجعة وضعك وأهدافك المالي لهذا الشهر! ابدأ الآن",
      date: "يناير 2040",
      format: "PDF",
      size: "3.4MB",
    },
  ];

  return (
    <div className="rtl text-right p-4">
      <h2 className="text-xl font-bold mb-4">التقارير المتاحة</h2>
      <div className="flex flex-col gap-4">
        {reports.map((report, idx) => (
          <div
            key={idx}
            className="bg-white w-[1020px] h-[123px] p-4 border-1 rounded-xl shadow-xl flex justify-between items-start"
          >
            {/* أيقونة التنزيل */}
            

            {/* تفاصيل التقرير */}
            <div className="flex-1">
              <div className="flex items-center gap-1 font-bold text-gray-800">
                <FileText className="w-4 h-4 text-gray-500" />
                <span>{report.title}</span>
              </div>
              <p className="text-sm text-gray-600">{report.description}</p>
              <div className="text-xs text-gray-400 mt-1 flex gap-4">
                <span>{report.date}</span>
                <span>{report.format}</span>
                <span>{report.size}</span>
              </div>
            </div>
            <button className="text-gray-700 hover:text-black">
              <Download className="w-5 h-5 mt-1" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
