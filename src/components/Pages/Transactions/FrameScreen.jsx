import {
  ArrowUpDownIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  FilterIcon,
  ImageIcon,
  SearchIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Badge } from "./Ui/Badge.jsx";
import { Button } from "./Ui/Button.jsx";
import { Card, CardContent } from "./Ui/Card.jsx";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./Ui/Collapsible.jsx";
import { Input } from "./Ui/Input.jsx";
import { Separator } from "./Ui/Separator.jsx";
import img1 from "../../../assets/images/money_9221329.svg";
import img2 from "../../../assets/images/Ellipse 36.svg";
import img3 from "../../../assets/images/Ellipse 37.svg";
import img4 from "../../../assets/images/Ellipse 38.svg";

// Summary card data for mapping
const summaryCards = [
  
   {
    id: 1,
    title: "إجمالي الرصيد",
    value: "$380.67",
    description: "في 5 محافظ",
    icon: img1,
    alt: "Wallet",
    valueClass: "text-3xl",
  },
   {
    id: 2,
    title: "المرسل",
    value: "6",
    description: "معاملات مرسلة",
    icon: img2,
    alt: "Send",
  },
  {
    id: 3,
    title: "المستلم",
    value: "5",
    description: "معاملات مستلمة",
    icon: img3,
    alt: "Email",
  },
 
    {
    id: 4,
    title: "قيد الموافقة",
    value: "1",
    description: "بانتظار موافقتك",
    icon: img4,
    alt: "Hourglass",
  }
 
];

// Transaction data for different categories
const allTransactions = {
  sent: [
    {
      id: 1,
      amount: "-250$",
      status: "مكتمل",
      title: "دفع إيجار المنزل",
      type: "sent",
      users: [
        { name: "أحمد محمد", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=30&h=30" },
      ],
      details: {
        date: "8 مايو 2023",
        budget: "نفقات المنزل",
        category: "ايجار المنزل",
        approved: "8 مايو 2023 4:00 م",
        recipient: "أحمد محمد",
        method: "تحويل بنكي"
      },
    },
    {
      id: 2,
      amount: "-150$",
      status: "مكتمل",
      title: "دفع فاتورة الكهرباء",
      type: "sent",
      users: [
        { name: "شركة الكهرباء", image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=30&h=30" },
      ],
      details: {
        date: "5 مايو 2023",
        budget: "فواتير المنزل",
        category: "كهرباء",
        approved: "5 مايو 2023 2:30 م",
        recipient: "شركة الكهرباء",
        method: "دفع إلكتروني"
      },
    },
    {
      id: 3,
      amount: "-75$",
      status: "مكتمل",
      title: "شراء مواد غذائية",
      type: "sent",
      users: [
        { name: "سوبر ماركت", image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=30&h=30" },
      ],
      details: {
        date: "3 مايو 2023",
        budget: "مصروف شخصي",
        category: "طعام وشراب",
        approved: "3 مايو 2023 6:15 م",
        recipient: "سوبر ماركت الأهرام",
        method: "بطاقة ائتمان"
      },
    },
  ],
  received: [
    {
      id: 4,
      amount: "+500$",
      status: "مكتمل",
      title: "راتب شهر مايو",
      type: "received",
      users: [
        { name: "الشركة", image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=30&h=30" },
      ],
      details: {
        date: "1 مايو 2023",
        budget: "دخل شهري",
        category: "راتب",
        approved: "1 مايو 2023 9:00 ص",
        sender: "شركة التكنولوجيا المتقدمة",
        method: "تحويل بنكي"
      },
    },
    {
      id: 5,
      amount: "+200$",
      status: "مكتمل",
      title: "مكافأة مشروع",
      type: "received",
      users: [
        { name: "المدير", image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=30&h=30" },
      ],
      details: {
        date: "10 مايو 2023",
        budget: "دخل إضافي",
        category: "مكافآت",
        approved: "10 مايو 2023 11:30 ص",
        sender: "إدارة الموارد البشرية",
        method: "تحويل فوري"
      },
    },
    {
      id: 6,
      amount: "+100$",
      status: "مكتمل",
      title: "استرداد مشتريات",
      type: "received",
      users: [
        { name: "متجر الإلكترونيات", image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=30&h=30" },
      ],
      details: {
        date: "7 مايو 2023",
        budget: "استرداد",
        category: "مرتجعات",
        approved: "7 مايو 2023 3:45 م",
        sender: "متجر الإلكترونيات الحديثة",
        method: "استرداد نقدي"
      },
    },
  ],
  pending: [
    {
      id: 7,
      amount: "-300$",
      status: "قيد المراجعة",
      title: "دفع قسط السيارة",
      type: "pending",
      users: [
        { name: "البنك", image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=30&h=30" },
      ],
      details: {
        date: "12 مايو 2023",
        budget: "أقساط",
        category: "قسط سيارة",
        approved: "في انتظار الموافقة",
        recipient: "البنك الأهلي",
        method: "خصم تلقائي"
      },
    },
  ],
};

export const FrameScreen = () => {
  const [openItem, setOpenItem] = useState(null);
  const [activeTab, setActiveTab] = useState('sent'); // sent, received, pending

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const getCurrentTransactions = () => {
    return allTransactions[activeTab] || [];
  };

  const getTabTitle = () => {
    switch(activeTab) {
      case 'sent': return 'المرسل';
      case 'received': return 'المستلم';
      case 'pending': return 'قيد الانتظار';
      default: return 'المرسل';
    }
  };

  return (
    <main  className="flex flex-col w-[1026px]">
      {/* Summary Section */}
      <div className="flex flex-col items-center gap-[53px] px-[60px] py-[53px] w-full ">
        <section className="flex flex-col items-center gap-[53px] w-[1026px]">
          <div className="flex items-center gap-[55px] w-full">
            <div className="flex items-center justify-between w-[1026px]">
              

              <div className="flex flex-col items-start  gap-1 text-right">
                <h1 className="font-bold text-black text-[26px] mt-[-1.00px] [font-family:'Tajawal',Helvetica] text-left tracking-[0] leading-normal [direction:rtl]">
                  التحويلات المالية
                </h1>
                <p className="[font-family:'Tajawal',Helvetica] font-normal text-[#8c8a8a] text-base text-left tracking-[0] leading-normal [direction:rtl]">
                  إدارة معاملاتك وتحويلاتك بين المحافظ.
                </p>
              </div>

              <Button className="h-11 px-8 py-2.5 bg-[#16423c] rounded-[10px] text-white [font-family:'Tajawal',Helvetica] font-bold [direction:rtl]">
                <span className="text-[22px] leading-5">+ </span>
                <span className="text-lg leading-5">تحويل جديد</span>
              </Button>
            </div>
          </div>

          <div className="flex w-[1022px]">
            <div className="flex gap-4 w-full">
              {summaryCards.map((card) => (
                <Card
                  key={card.id}
                  className="flex-1 shadow-[0px_1px_30px_#0000001a] border-none cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => {
                    if (card.title === 'المرسل') setActiveTab('sent');
                    else if (card.title === 'المستلم') setActiveTab('received');
                    else if (card.title === 'قيد الموافقة') setActiveTab('pending');
                  }}
                >
                  <CardContent className="flex items-center  justify-start gap-6 px-4 py-6 relative">
                   

                    <div className="flex flex-col items-start gap-6">
                      <div className="relative mt-[-1.00px] [font-family:'Tajawal',Helvetica] font-bold text-black text-lg tracking-[0] leading-normal [direction:rtl]">
                        {card.title}
                      </div>

                      <div className="flex flex-col items-center justify-end gap-2">
                        <div className="inline-flex items-end gap-[3px]">
                          <div
                            className={`relative ${card.valueClass || "w-[85px] h-[31px] text-[40px] text-center"} mt-[-1.00px] [font-family:'Tajawal',Helvetica] font-bold text-black tracking-[0] leading-normal whitespace-nowrap`}
                          >
                            {card.value}
                          </div>
                        </div>

                        <div className="[font-family:'Tajawal',Helvetica] font-bold text-[#a6a6a6] text-xs text-left leading-normal mt-2 whitespace-nowrap [direction:rtl] tracking-[0]">
                          {card.description}
                        </div>
                      </div>
                    </div>
                     <img
                      className="relative w-12 h-10 rounded-md object-cover"
                      alt={card.alt}
                      src={card.icon}
                    />

                    <div className="absolute w-[46px] h-[42px] bottom-6 left-6 bg-[#16423c] rounded-[23px/21px] blur-[35px]" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Transaction List Section */}
      <div className="flex flex-col items-center gap-6 px-[60px] py-6 w-full bg-white">
        <section className="flex flex-col items-center gap-6 w-full">
          {/* Search and Filter Bar */}
          <div className="flex items-start justify-end gap-3 w-[1026px]">
            <div className="relative flex-1 ">
              <Input
                className="h-12 pl-10 bg-white rounded-[10px] border border-[#c7c7c7]"
                placeholder="البحث في المعاملات..."
              />
              <SearchIcon className="absolute left-2 top-3 w-6 h-6 text-gray-400" />
            </div>
           
            <Button
              variant="outline"
              className="flex items-center justify-between w-[130px] h-12 px-2 py-2.5 bg-white rounded-[10px] border border-[#c7c7c7]"
            >
              <ArrowUpDownIcon className="w-6 h-6" />
              <span className="[font-family:'Tajawal',Helvetica] font-bold text-[#656161] text-sm text-center [direction:rtl]">
                كل الفئات
              </span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-between w-[97px] h-12 px-2 py-2.5 bg-white rounded-[10px] border border-[#c7c7c7]"
            >
              <FilterIcon className="w-6 h-6" />
              <span className="[font-family:'Tajawal',Helvetica] font-bold text-black text-sm text-center [direction:rtl]">
                تصفية
              </span>
            </Button>

            
          </div>

          {/* Transaction List Container */}
          <div className="flex flex-col items-start gap-6 w-[1026px]">
            {/* Tab Header */}
            <div className="flex h-[49px] items-center justify-between px-6 py-2 w-full bg-[#26503a1a] rounded-[10px]">
             
             <Button
                variant={activeTab === 'sent' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('sent')}
                className={`px-10 py-2 rounded-[10px] text-sm leading-normal [font-family:'Tajawal',Helvetica] font-bold text-left tracking-[0] [direction:rtl] ${
                  activeTab === 'sent' ? 'bg-[#16423c] text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                المرسل
              </Button>

              <Button
                variant={activeTab === 'received' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('received')}
                className={`text-sm leading-normal [font-family:'Tajawal',Helvetica] font-bold text-left tracking-[0] [direction:rtl] ${
                  activeTab === 'received' ? 'bg-[#16423c] text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                المستلم
              </Button>

              

               <Button
                variant={activeTab === 'pending' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('pending')}
                className={`text-sm leading-normal [font-family:'Tajawal',Helvetica] font-bold text-left tracking-[0] [direction:rtl] ${
                  activeTab === 'pending' ? 'bg-[#16423c] text-white' : 'text-black hover:bg-gray-100'
                }`}
              >
                قيد الانتظار
              </Button>

            </div>

            {/* Current Tab Title */}
            <div className="w-full text-right">
              <h2 className="text-xl font-bold text-[#16423c] [font-family:'Tajawal',Helvetica] [direction:rtl]">
                {getTabTitle()} ({getCurrentTransactions().length} معاملة)
              </h2>
            </div>

            {/* Transaction Cards */}
            <div className="flex flex-col items-center gap-[35px] w-full">
              {getCurrentTransactions().length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="text-gray-400 text-lg [font-family:'Tajawal',Helvetica] [direction:rtl]">
                    لا توجد معاملات في هذا القسم
                  </div>
                </div>
              ) : (
                getCurrentTransactions().map((transaction) => (
                  <Collapsible
                    key={transaction.id}
                    open={openItem === transaction.id}
                    onOpenChange={() => toggleItem(transaction.id)}
                    className="w-full border border-solid border-[#eeeded] rounded-[10px] hover:shadow-md transition-shadow"
                  >
                    <Card className="border-none shadow-none">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between w-full">
                          <div className="inline-flex flex-col items-start gap-2">
                            <div className={`mt-[-1.00px] [font-family:'Tajawal',Helvetica] font-bold text-xl leading-normal whitespace-nowrap ${
                              transaction.amount.startsWith('+') ? 'text-[#3d984a]' : 'text-[#e00a00]'
                            }`}>
                              {transaction.amount}
                            </div>

                            <Badge className={`px-4 py-1 rounded-[20px] shadow-[0px_1px_40px_#0000001a] font-bold text-base ${
                              transaction.status === 'مكتمل' 
                                ? 'bg-[#3d984a33] text-[#3d984a]' 
                                : 'bg-[#f59e0b33] text-[#f59e0b]'
                            }`}>
                              {transaction.status}
                            </Badge>
                          </div>

                          <div className="inline-flex items-start justify-end gap-4">
                            <div className="inline-flex flex-col items-end justify-center gap-1">
                              <div className="mt-[-1.00px] [font-family:'Tajawal',Helvetica] font-bold text-black text-lg leading-normal [direction:rtl]">
                                {transaction.title}
                              </div>

                              <div className="inline-flex items-center justify-center gap-2">
                                {transaction.users.map((user, index) => (
                                  <React.Fragment key={index}>
                                    {index > 0 && (
                                      <div className="w-[5.67px] h-[5px] bg-gray-400 rounded-full" />
                                    )}
                                    <div className="inline-flex items-center justify-center gap-0.5">
                                      <div className="[font-family:'Tajawal',Helvetica] font-medium text-black text-[10px] leading-[10px] whitespace-nowrap [direction:rtl]">
                                        {user.name}
                                      </div>
                                      <img
                                        className="w-[15px] h-[15px] object-cover rounded-full"
                                        alt="User"
                                        src={user.image}
                                      />
                                    </div>
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>

                            <div className="inline-flex items-center gap-4">
                              <ImageIcon className="w-6 h-6" />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end mt-10 w-full">
                          <CollapsibleTrigger asChild>
                            <Button
                              variant="ghost"
                              className="flex h-[35px] items-center justify-center gap-2.5 px-8 py-2.5 w-full hover:bg-gray-50"
                            >
                              {openItem === transaction.id ? (
                                <ChevronUpIcon className="w-3.5 h-3.5" />
                              ) : (
                                <ChevronDownIcon className="w-3.5 h-3.5" />
                              )}
                              <span className="[font-family:'Tajawal',Helvetica] font-normal text-[#8c8a8a] text-lg leading-5 whitespace-nowrap [direction:rtl]">
                                {openItem === transaction.id ? 'إخفاء التفاصيل' : 'عرض التفاصيل'}
                              </span>
                            </Button>
                          </CollapsibleTrigger>

                          {transaction.details && (
                            <CollapsibleContent className="w-full">
                              <div className="flex flex-col items-start gap-4 w-full mt-4 p-4 bg-gray-50 rounded-lg">
                                <h3 className="text-lg font-bold text-[#16423c] [font-family:'Tajawal',Helvetica] [direction:rtl] mb-2">
                                  تفاصيل المعاملة
                                </h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                  <div className="flex items-center justify-between">
                                    <div className="[font-family:'Cairo',Helvetica] font-bold text-black text-sm [direction:rtl]">
                                      {transaction.details.date}
                                    </div>
                                    <div className="[font-family:'Cairo',Helvetica] font-semibold text-[#8c8a8a] text-sm [direction:rtl]">
                                      التاريخ
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between">
                                    <div className="[font-family:'Tajawal',Helvetica] font-normal text-black text-sm [direction:rtl]">
                                      {transaction.details.budget}
                                    </div>
                                    <div className="[font-family:'Tajawal',Helvetica] font-medium text-[#8c8a8a] text-sm [direction:rtl]">
                                      الميزانية
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between">
                                    <Badge
                                      variant="outline"
                                      className="px-2 py-1 bg-[#d9d5d5] text-black rounded-[5px] font-normal text-xs"
                                    >
                                      {transaction.details.category}
                                    </Badge>
                                    <div className="[font-family:'Tajawal',Helvetica] font-medium text-[#8c8a8a] text-sm [direction:rtl]">
                                      الفئة
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between">
                                    <div className="[font-family:'Tajawal',Helvetica] font-normal text-black text-sm [direction:rtl]">
                                      {transaction.details.approved}
                                    </div>
                                    <div className="[font-family:'Tajawal',Helvetica] font-medium text-[#8c8a8a] text-sm [direction:rtl]">
                                      تمت الموافقة
                                    </div>
                                  </div>

                                  {transaction.details.recipient && (
                                    <div className="flex items-center justify-between">
                                      <div className="[font-family:'Tajawal',Helvetica] font-normal text-black text-sm [direction:rtl]">
                                        {transaction.details.recipient}
                                      </div>
                                      <div className="[font-family:'Tajawal',Helvetica] font-medium text-[#8c8a8a] text-sm [direction:rtl]">
                                        المستلم
                                      </div>
                                    </div>
                                  )}

                                  {transaction.details.sender && (
                                    <div className="flex items-center justify-between">
                                      <div className="[font-family:'Tajawal',Helvetica] font-normal text-black text-sm [direction:rtl]">
                                        {transaction.details.sender}
                                      </div>
                                      <div className="[font-family:'Tajawal',Helvetica] font-medium text-[#8c8a8a] text-sm [direction:rtl]">
                                        المرسل
                                      </div>
                                    </div>
                                  )}

                                  <div className="flex items-center justify-between">
                                    <div className="[font-family:'Tajawal',Helvetica] font-normal text-black text-sm [direction:rtl]">
                                      {transaction.details.method}
                                    </div>
                                    <div className="[font-family:'Tajawal',Helvetica] font-medium text-[#8c8a8a] text-sm [direction:rtl]">
                                      طريقة الدفع
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CollapsibleContent>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Collapsible>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};