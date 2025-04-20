import React from 'react'
import mid_num from '../../../assets/images/mdii_number-1-circle-outline.svg'
import mid1_num from '../../../assets/images/num1.svg'
import mid_num2 from '../../../assets/images/2.svg'
import mid_num3 from '../../../assets/images/33.svg'
import num2_dark from '../../../assets/images/2numDark.svg'
import num3_dark from '../../../assets/images/3numDark.svg'
import freephc_bord from '../../../assets/images/freepik--Board--inject-65.png'
import fin from '../../../assets/images/Financial data-rafiki 1.png'
const Analysis = () => {
  return (
    <div>
      <section className="flex justify-around relative right-10">
    <div>
      <div>
        <h1 className="font-bold text-[45px] text-right ">أموالك... مُنظمة، محسوبة،<br /> وتحت سيطرتك!</h1>
        <p className="text-[#777575] text-[22px] text-right font-medium">إدارة أموالك لم تعد معقدة .. خطط، تابع، وحقق أهدافك المالية
          بأسهل طريقة</p>
      </div>
      <div className="mt-20 space-y-6 ">
        <div
          className="bg-[#2E5077]  w-[600px] h-[144px] rounded-[15px] drop-shadow-xl  dark:bg-[#79D7BE] dark:text-black group">
          <div className="flex relative right-16 top-8 ">
            <div className="ml-2">
              <img className="mt-3 block dark:hidden " src={mid_num}
                alt="" />
                <img className="mt-3 hidden dark:block " src={mid1_num}
                alt="" />
            </div>
            <div className="ml-36 ">
              <p className="text-[32px] text-white font-bold text-right dark:text-black">كل شئ في مكان واحد</p>
            </div>
          </div>
          <p className="mt-12 text-[#C4C2C2] text-right  mr-[100px] dark:text-[#4E4C4C]">تابع دخلك، نظّم نفقاتك، وأدر مدخراتك بسهولة تامة.</p>
        </div>


        <div
          className="bg-[#2E5077] bg-opacity-5 w-[600px] h-[144px] rounded-[15px] drop-shadow-xl  dark:bg-[#79D7BE] dark:bg-opacity-10 group">
          <div className="flex relative right-16 top-8 ">
            <div className="ml-2">
              <img className=" block dark:hidden mt-3" src={mid_num2} alt="" />
              <img className="hidden dark:block mt-3" src={num2_dark} alt="" />
            </div>
            <div className="ml-36">
              <p className="text-[32px] font-bold ">تحكم كامل دون عناء</p>
            </div>
          </div>
          <p className="mt-12 text-start text-[16px] text-[#777575] mr-[50px]">أتمت مدفوعاتك، حدد ميزانياتك، واحصل على رؤية واضحة لمستقبلك المالي</p>
        </div>
        <div
          className="bg-[#2E5077] bg-opacity-5 w-[600px] h-[144px] rounded-[15px] drop-shadow-xl   dark:bg-[#79D7BE] dark:bg-opacity-10 group">
          <div className="flex relative right-16 top-8 ">
            <div className="ml-2">
              <img className="mt-3 block dark:hidden" src={mid_num3}
                alt="" /> 
                 <img className="mt-3 hidden dark:block" src={num3_dark}
                alt="" /> 
            </div>
            <div className="ml-36">
              <p className="text-[32px] font-bold">تخطيط ذكي لمستقبلك</p>
            </div>
          </div>
          <p className="mt-12 text-start text-[16px] text-[#777575] mr-[50px]">حدد أهدافك المالية، ادّخر بانتظام، وتتبع تقدّمك لتحقيق طموحاتك بسهولة</p>
        </div>
      </div>
    </div>
    <div className="w-[540px] h-[775px] bg-[rgba(45,79,118,0.2)] dark:bg-[#3c4c48]  rounded-[15px] drop-shadow-md">
      <img className="mr-20" src={freephc_bord} alt="gnlkergrew" />
      <img src={fin} alt="gnlkergrew" />
    </div>
  </section>

    </div>
  )
}

export default Analysis
