import React from "react";
import { Button } from "../ThreeDpie/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../ThreeDpie/Card";
import { Input } from "../ThreeDpie/Input";
import pie1 from "../../../../assets/images/pie1.svg"
import pie2 from "../../../../assets/images/pie2.svg"
import pie3 from "../../../../assets/images/pie3.svg"
import Ex_pie1 from "../../../../assets/images/Ex-pie1.png"
import Ex_pie2 from "../../../../assets/images/Ex-pie2.svg"
import Ex_pie3 from "../../../../assets/images/Ex-pie3.svg"
import aaa from "../../../../assets/images/aaa.svg"
import icondate from "../../../../assets/images/Icondate.svg"
import datedark from '../../../../assets/images/datedark.svg'

// Data for the spending categories legend
const spendingCategories = [
  { color: "#5a9ce7", label: "سحب تقدي" },
  { color: "#79d7be", label: "الدفع للمشتريات" },
  { color: "#2e5077", label: "التحويلات المالية" },
];

export const ThreeDPieChart = () => {
  return (
    <div  className="inline-flex  items-center gap-[123px] relative">
       {/* Spending Statistics Section */}
       <div className="flex flex-col w-[393px] items-end relative">
        
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          
        <div className="inline-flex items-center justify-center gap-2 p-2 relative flex-[0_0_auto]">
            <div className="relative right-8 w-fit mt-[-1.00px] [font-family:'Tajawal',Helvetica] font-medium text-black text-[25px] tracking-[0] leading-[42px] whitespace-nowrap [direction:rtl] dark:text-white">
              إحصائيات الإنفاق
            </div>
          </div>
          <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
          <div className="relative w-[70px] h-9 mt-[-1.00px] [font-family:'Tajawal',Helvetica] font-medium text-[#a6a6a6] text-sm tracking-[0] leading-[42px] whitespace-nowrap [direction:rtl]">
              هذا الأسبوع
            </div>
            <img
              className="relative w-[10.18px] h-[10.18px]"
              alt="Ep arrow up bold"
              src={aaa}
            />

            
          </div>

        </div>

        <Card className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto] border-0 shadow-none">
        <div className="relative w-[198px] h-[197px]">
                <div className="relative w-[181px] h-[171px] top-[13px] left-[9px]">
                  <div className="absolute w-[181px] h-[171px] top-0 left-0">
                    <div className="relative w-[174px] h-[167px] top-0.5 right-[40px]">
                      <img
                        className="absolute w-[87px] h-[142px] top-0 left-0"
                        alt="Ex"
                        src={Ex_pie3}
                      />
                      <img
                        className="absolute w-[87px] h-32 top-0 left-0"
                        alt="Pie"
                        src={pie3}
                      />
                      <img
                        className="absolute w-[87px] h-[117px] top-0 left-[87px]"
                        alt="Ex"
                        src={Ex_pie1}
                      />
                      <img
                        className="absolute w-[87px] h-[104px] top-0 left-[87px]"
                        alt="Pie"
                        src={pie1}
                      />
                      <img
                        className="absolute w-[146px] h-[75px] top-[92px] left-[23px]"
                        alt="Ex"
                        src={Ex_pie2}
                      />
                      <img
                        className="absolute w-[146px] h-[62px] top-[92px] left-[23px]"
                        alt="Pie"
                        src={pie2}
                      />
                    </div>
                  </div>
                  <div className="absolute top-[71px] right-[85px] [font-family:'Inter',Helvetica] font-normal text-[#ffffffe6] text-2xl tracking-[0] leading-[normal]">
                    515.41
                  </div>
                </div>
              </div>
          <CardContent className="p-0 w-full">
            <div className="flex relative right-28  justify-between w-full">
              {/* Legend */}
              <div className="inline-flex flex-col h-[197px] items-start justify-center relative flex-[0_0_auto]">
                {spendingCategories.map((category,index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-1 p-1 relative flex-[0_0_auto] "
                  >
                    
                    <div className="relative w-4 h-4">
                      
                      <div className="relative w-px h-px top-2 left-2 ">
                        <div
                          className="relative w-2 h-2 -top-1 -left-1 rounded border border-solid border-black "
                          style={{ backgroundColor: category.color }}
                        />
                      </div>
                    </div>
                    <div className="relative w-fit mt-[-0.50px] text-right text-[#000000b2] text-[12px] dark:text-white">
                      {category.label}
                    </div>
                    
                  </div>
                ))}
              </div>

              {/* Chart */}
              
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Date Input Card */}
      <Card className=" flex flex-col w-[564px] h-[255px] text-right items-center relative rounded-[28px] shadow-[1px_1px_20px_#0000001a] dark:bg-[#575757]">
        <CardHeader  className="flex flex-col text-right items-end gap-4 pl-6 pr-3 pt-4 pb-2 relative self-stretch w-full flex-[0_0_auto] border-b border-[#79d7be33] p-0">
          <div className="relative left-[490px] top-2 text-right w-fit mt-[-1.00px] font-m3-label-large  text-black dark:text-white  ">
            اختر تاريخ
          </div>

          <div className="flex justify-between  gap-[360px] relative self-stretch w-full flex-[0_0_auto]">
            

            <div className="flex flex-col w-12 h-12 items-center justify-center gap-2.5 relative">
              <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] rounded-[100px] overflow-hidden">
                <div className="inline-flex items-center justify-center gap-2.5 p-2 ">
                  <img
                    className="relative right-1  bottom-2 w-6 h-6 block dark:hidden"
                    alt="Icon"
                    src={icondate}
                  />
                   <img
                    className="relative right-1  bottom-2 w-12 h-12 hidden dark:block"
                    alt="Icon"
                    src={datedark}
                  />
                   
                </div>
              </div>
            </div>
            <div className="relative left-5 top-1 flex-1 self-stretch mt-[-1.00px]  font-semibold text-[22px] text-black text-left   whitespace-nowrap dark:text-white ">
              أدخل تاريخ
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col items-center px-6 py-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col h-14 items-start relative self-stretch w-full rounded-[4px_4px_0px_0px]">
            <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow rounded border-[3px] border-solid border-[#79d7be]">
              <div className="flex items-start gap-1 pl-4 pr-0 py-1 relative flex-1 self-stretch w-full grow rounded-[4px_4px_0px_0px]">
                <div className="flex flex-col h-12 items-start justify-center px-0 py-1 relative flex-1 grow">
                  <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                    <Input
                      className="border-0 relative text-left dark:text-white shadow-none p-0 h-auto font-m3-body-large font-[number:var(--m3-body-large-font-weight)] text-black text-[length:var(--m3-body-large-font-size)] tracking-[var(--m3-body-large-letter-spacing)] leading-[var(--m3-body-large-line-height)] [font-style:var(--m3-body-large-font-style)]"
                      placeholder="mm/dd/yyyy"
                    />
                  </div>

                  <div className="inline-flex items-center px-1 py-0 absolute -top-3 -left-1 bg-white dark:bg-[#575757]">
                    <div className="relative w-fit mt-[-1.00px] font-m3-body-small font-[number:var(--m3-body-small-font-weight)] text-[#79d7be] text-[length:var(--m3-body-small-font-size)] tracking-[var(--m3-body-small-letter-spacing)] leading-[var(--m3-body-small-line-height)] whitespace-nowrap [font-style:var(--m3-body-small-font-style)]">
                      Date
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex  items-end  px-3 py-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start justify-start gap-2 relative flex-1 grow">
            <Button
              variant="ghost"
              className="h-10 rounded-[100px] px-3 py-2.5"
            >
              <span className="font-m3-label-large  font-[number:var(--m3-label-large-font-weight)] text-[#79d7be] text-[length:var(--m3-label-large-font-size)] text-center tracking-[var(--m3-label-large-letter-spacing)] leading-[var(--m3-label-large-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--m3-label-large-font-style)]">
                إلغاء
              </span>
            </Button>

            <Button
              variant="ghost"
              className="h-10 rounded-[100px] px-3 py-2.5"
            >
              <span className="font-m3-label-large font-[number:var(--m3-label-large-font-weight)] text-[#79d7be] text-[length:var(--m3-label-large-font-size)] text-center tracking-[var(--m3-label-large-letter-spacing)] leading-[var(--m3-label-large-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--m3-label-large-font-style)]">
                حسنا
              </span>
            </Button>
          </div>
        </CardFooter>
      </Card>

     
    </div>
  );
};