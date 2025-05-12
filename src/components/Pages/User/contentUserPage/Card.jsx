import arowred from '../../../../assets/images/arowred.svg'
import arowgreen from '../../../../assets/images/up-arrow.svg'
const cards = [
 {
    title: "صافي الثروة",
    value: "70,000$",
    subtitle: "إجمالي الممتلكات مطروحًا منها الالتزامات",
    color: "green",
    change: "+4.75%",
  },
   
  {
    title: "الالتزامات",
    value: "15,000$",
    subtitle: "إجمالي الديون المستحقة",
    color: "red",
    change: "-1.72%",
  },
  {
    title: "الممتلكات",
    value: "58,000$",
    subtitle: "القيمة السوقية لجميع الممتلكات",
    color: "green",
    change: "+13.8%",
  },
   {
    title: "الدرجة الائتمانية",
    value: "400",
    subtitle: "معدل تقييم العميل النهائي",
    color: null,
    change: null,
  },
  
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  rtl text-right">
      {cards.map((card, i) => (
        <div key={i} className="bg-white rounded-2xl shadow p-4">
          <p className="text-[#8D8A8A] text-[16px] font-bold mb-2">{card.title}</p>
          <div className="flex items-center justify-between">
            <p className="text-[35px]  font-bold">{card.value}</p>
            {card.change && (
              <div
                className={`flex items-center text-sm font-semibold ${
                  card.color === "red" ? "text-red-500" : "text-green-600"
                }`}
              >
               
                {card.change}
                 {card.color === "red" ? (
                  < img src={arowred} className="w-4 h-4 mr-1" />
                ) : (
                  <img src={arowgreen} className="w-4 h-4 mr-1" />
                )}
              </div>
            )}
          </div>
          <p className="text-[9px] text-[#A6A6A6] mt-2">{card.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
