import React from "react";

const IncomeOverview = () => {
  const cards = [
    {
      title: "الشهر الحالي",
      value: "$50,000",
      subtitle: "أعلى من الشهر الماضي",
      change: "1.20%",
    },
    {
      title: "التغيير الشهري",
      value: "8.14%",
      subtitle: "أعلى من الشهر الماضي",
      change: "4.75%",
    },
    {
      title: "متوسط الدخل اليومي",
      value: "$700",
      subtitle: "بناءً على إجمالي الدخل الشهري",
      change: "1.20%",
    },
  ];

  return (
    <div className="w-[1020px] py-10 px-4 text-right">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-1">نظرة عامة على الدخل</h2>
        <p className="text-gray-600 mb-10">
          تتبع تدفق أموالك بذكاء – احصل على رؤية واضحة لمصادر دخلك.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const isCurrentMonth = card.title === "الشهر الحالي";

            return (
              <div
                key={idx}
                className={`rounded-lg w-[325px] h-[180px] p-6 shadow-md ${
                  isCurrentMonth ? "bg-green-900 text-white" : "bg-white text-black"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  {isCurrentMonth && <span className="text-white text-sm">▾</span>}
                </div>
                <div className="text-3xl font-bold">{card.value}</div>
                <div className="text-sm mt-2">
                  {card.subtitle}
                  <span
                    className={`ml-2 font-semibold ${
                      isCurrentMonth ? "text-green-300" : "text-green-600"
                    }`}
                  >
                    ▲ {card.change}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IncomeOverview;
