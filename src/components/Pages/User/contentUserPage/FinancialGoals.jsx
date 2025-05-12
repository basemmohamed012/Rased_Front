// FinancialGoals.jsx
export default function FinancialGoals() {
  const goals = [
    {
      title: "تمويل التقاعد",
      progress: 85,
      current: "10.000$",
      target: "500.000$",
      targetDate: "يناير 2040",
      monthlyAmount: "2000$",
      expectedDate: "نوفمبر 2039",
    },
    // يمكنك تكرار الهدف حسب الحاجة
    {
      title: "تمويل التقاعد",
      progress: 85,
      current: "10.000$",
      target: "500.000$",
      targetDate: "يناير 2040",
      monthlyAmount: "2000$",
      expectedDate: "نوفمبر 2039",
    },
    {
      title: "تمويل التقاعد",
      progress: 85,
      current: "10.000$",
      target: "500.000$",
      targetDate: "يناير 2040",
      monthlyAmount: "2000$",
      expectedDate: "نوفمبر 2039",
    },
  ];

  return (
    <div className="rtl text-right p-4 ">
      <h2 className="text-xl font-bold mb-4">الأهداف المالية</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {goals.map((goal, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-2"
          >
            <h3 className="font-bold text-lg">{goal.title}</h3>
            <div className="text-sm text-gray-500">مستوى التقدم</div>
            <div className="flex items-center gap-2 text-sm font-bold">
              <span>{goal.progress}%</span>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="mt-2 space-y-1 text-sm">
              <div>
                <span className="font-bold">{goal.current}</span> الحالي
              </div>
              <div>
                <span className="font-bold">{goal.target}</span> الهدف
              </div>
              <div>
                <span className="inline-block mr-1">📅</span>تاريخ الهدف:
                <span className="font-bold mr-1">{goal.targetDate}</span>
              </div>
              <div>
                <span className="inline-block mr-1">📈</span>الهدف الشهري:
                <span className="font-bold mr-1">{goal.monthlyAmount}</span>
              </div>
              <div>
                <span className="text-green-600 font-bold">
                  {goal.expectedDate}
                </span>{" "}
                التاريخ المتوقع للانتهاء
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
