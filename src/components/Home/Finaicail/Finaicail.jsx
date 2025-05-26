import React from "react";

import 'aos/dist/aos.css';
import band from "../../../assets/images/bond11.svg"
import arrowbtn from"../../../assets/images/arrowbtn.svg"
import confedince from '../../../assets/images/confidence.svg' 
import goalll from "../../../assets/images/Layer.svg";
import www from "../../../assets/images/ss.svg";
import rabot from "../../../assets/images/robot.svg";

const Financial = () => {
  

  return (
    
    <section data-aos="fade-up" className="py-12 px-4 md:px-12 bg-white relative bottom-64 md:bottom-10 md:left-5  dark:bg-black">
    {/* العنوان */}
    <div className="text-center mb-20">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-relaxed">
        <span className="text-black dark:text-white slogan-font md:mb-10 text-4xl">
          راقب بذكاء، أنفق بحكمة
        </span>
      </h2>
    </div>

    {/* السيكشن الرئيسي */}
    <div className="max-w-7xl mx-auto flex flex-col
     lg:flex-row gap-8 items-start sm:relative sm:bottom-10">
      {/* الكروت */}

      {/* الجزء اليمين */}
      <div  data-aos="fade-right"  className="bg-gradient-to-b from-[rgba(22,66,60,0.73)] to-[rgba(62,87,38,1)]
       text-white transform transition duration-300 hover:scale-1 
       hover:-translate-y-0.5 hover:shadow-xl p-8 rounded-2xl
        sm:w-[200px] md:w-[720px] md:h-[700.5px] lg:w-[452px]
         lg:h-[820px]  ">
        
        {/* خلفية رموز خفيفة ممكن تضيفها كـ SVG أو صورة */}
        <img
        className="mt-40 "
         src={band} alt="" />
         <p className="mt-5 text-[16px] font-bold text-[#C3BABA]">
         !انجز مدفوعاتك، وتحكّم في ميزانيتك بكل سهولة
         </p>
        <h3 
        className="text-[40px] md:text-3xl font-bold mt-10"
        >تتبّع مصروفاتك
        </h3>
        <p className="text-sm md:text-base leading-relaxed mt-12">
        من خلال هذه الميزة، يمكنك تتبّع كل نفقـاتك اليومية بدقة وفي مكان واحد. سواء كانت مشتريات صغيرة أو دفعات شهرية كبيرة، يتم تسجيل كل عملية تلقائيًا، مما يساعدك على التحكم الكامل في أموالك وتحقيق استقرار مالي.
        </p>
        <button
         className="bg-white w-[161px] h-[54px] text-green-900 font-semibold px-6 py-2 rounded-full hover:bg-green-100 mt-10 transition">
          <div onClick={() => window.location.href = '/login'} className="flex gap-x-10">
            <p>تتبّع الآن</p>
            <img src={arrowbtn} alt="" />
          </div>
        </button>
      </div>
      <div  data-aos="fade-left" className="grid grid-cols-1 sm:grid-cols-2 gap-6  flex-1">
        {/* كارت 1 */}
        <div className="bg-white dark:bg-[#575757] h-[403.5px] w-[360px]
        transform transition duration-300 hover:scale-1 hover:-translate-y-0.5 hover:shadow-xl
        p-6 rounded-xl shadow-md border text-right">
          <img src={confedince} />
          <p className="font-bold text-[16px] mt-2  text-[#888787] dark:text-white">
          نشارك رحلتنا وبعض القصص
          </p>
          <h3 className="font-bold text-[26px] text-[#16423C] mt-2 dark:text-white">
          تتبّع مدّخراتك بذكاء وحقق أهدافـــــــــــــــــــــــك الـــــــــــــــمالــــــــية بثـــــــــــقة
          </h3>
          <p className="text-black text-[18px]  tracking-tight dark:text-white">
          راقب مدخراتك وراقب نموها من خلال أدوات ذكية تحلل دخلك ومصاريفك وتُظهر لك أفضل الطرق لتوفير المال. هذه الميزة تضمن أن تظل دائمًا على الطريق الصحيح نحو تحقيق أمان مالي طويل الأمد.
          </p>
        </div>

        {/* كارت 2 */}
        <div className="bg-white dark:bg-[#575757] h-[403.5px] w-[360px]
        transform transition duration-300 hover:scale-1 hover:-translate-y-0.5 hover:shadow-xl
         p-6 rounded-xl shadow-md border text-right">
          <img src={goalll} alt="khmkhr" />
          <p className="font-bold text-[16px] mt-2 text-[#888787] dark:text-white">
          ادّخر بذكاء، وحقق أهدافك المالية بثبات!
          </p>
          <h3 className="font-bold text-[26px] text-[#16423C] mt-2 dark:text-white">
          !أهـــــــــدافك
          </h3>
          <p className="text-black text-[18px]  tracking-tight mt-5 dark:text-white">
          حدد أهدافك المالية، سواء كانت للادخار، الاستثمار، أو التخطيط لمصاريف مستقبلية. يساعدك التطبيق على مراقبة تقدمك نحو هذه الأهداف خطوة بخطوة، مع تقديم إشعارات وتوصيات تحفّزك على الاستمرار وتحقيقها.
          </p>
        </div>

        {/* كارت 3 */}
        <div className="bg-white dark:bg-[#575757] h-[403.5px] w-[360px]
        transform transition duration-300 hover:scale-1 hover:-translate-y-0.5 hover:shadow-xl
        p-6 rounded-xl shadow-md border text-right">
           <img src={www} alt="" />
           
          <h3 className="font-bold text-[26px] text-[#16423C] mt-2 dark:text-white">
          قـــــــــــم بتـــــــــــــســـــــــــــــــــــــــــــــجيل <br />التــــزامـــــاتك المالــــــية لإدارة <br />أمـــــــــوالـــــــك بــــــــــفـــــــعاليــــــــــــة
          </h3>
          <p className="text-black text-[18px] tracking-tight mt-5 dark:text-white">
          يمكنك الآن تنظيم التزاماتك المالية بسهولة، مثل الديون، الفواتير الشهرية، أو الاشتراكات. يساعدك هذا على عدم تفويت أي موعد دفع، مما يجنبك الغرامات والتأخير، ويمنحك راحة بال أكبر.
          </p>
        </div>

        {/* كارت 4 */}
        <div className="bg-white dark:bg-[#575757] h-[403.5px] w-[360px]
        transform transition duration-300 hover:scale-1 hover:-translate-y-0.5 hover:shadow-xl
        p-6 rounded-xl shadow-md border text-right">
           <img src={rabot} alt="" />
           <p className="font-bold text-[16px] mt-2 text-[#888787] dark:text-white">
           تحدث مع مساعدك المالي الذكي
          </p>
          <h3 className="font-bold text-[26px] text-[#16423C] mt-2 dark:text-white">
          إجابــات فوريــــة لمســاعدتك فــــــــــــي إدارة أمـــــــــــــــوالـــــــــــك!
          </h3>
          <p className="text-black text-[18px]  tracking-tight mt-5 dark:text-white">
          لا تحتاج إلى الانتظار للحصول على استشارة مالية! عبر هذه الخاصية، يمكنك التحدث مباشرة مع مساعد ذكي يجيب على استفساراتك المالية ويوجهك إلى أفضل القرارات بناءً على وضعك الحالي.
          </p>
        </div>
      </div>

      
    </div>
  </section>
  );
};

export default Financial;



{/* <section>
  import financeAmico from "../../../assets/images/Finance-amico 1.png";
import sharedGoal from "../../../assets/images/Shared goals-cuate 1.png";
import eWalletbro from "../../../assets/images/E-Wallet-bro (1) 1.png";
import arowIcon from "../../../assets/images/akar-icons_arrow-up.png";
import img4 from "../../../assets/images/3675211 (1) 1.png";
import chatBot from "../../../assets/images/Chat bot-cuate 1.png";
<div className="max-w-7xl mx-auto mt-28 mb-40 relative right-12">
  <div className="text-center mb-12">
    <h1 className="text-[45px] ml-10 font-bold font-[Nastaliq] text-[#2E5077] dark:text-[#79D7BE]">
      راقب بذكاء, أنفق بحكمة
    </h1>
  </div>

  <div className="grid lg:grid-cols-3 gap-2">
   
    <div className="bg-white rounded-xl border-2 shadow-lg p-2 flex flex-col items-center text-right w-[350px] h-[432px] hover:scale-[1.01] hover:border-[#79D7BE] dark:bg-[#282828]">
      <div className="mt-4">
        <p className="mb-8 mt-4 ml-14 text-[#888787] font-bold text-[16px] dark:text-white">
          نشارك رحلتنا وبعض القصص
        </p>
      </div>
      <h3 className="text-[24px] text-right font-bold text-[#2E5077] ml-16 dark:text-white">
        تتبّع مدّخراتك بذكاء <br /> وحقق أهدافك <br /> المالية بثقة
      </h3>
      <img src={financeAmico} className="w-[254px] h-[233px]" alt="Finance Illustration" />
    </div>

   
    <div className="bg-white rounded-xl border-2 shadow-lg p-2 flex flex-col items-center text-center w-[350px] h-[432px] hover:scale-[1.01] hover:border-[#79D7BE] dark:bg-[#282828]">
      <div className="mb-4 mt-8">
        <p className="dark:text-white  text-[#888787] font-bold">
          ادّخر بذكاء، وحقق أهدافك المالية بثبات!
        </p>
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">أهدافك</h3>
      <img src={sharedGoal} alt="Goals Illustration" />
    </div>


    <div className="bg-white rounded-xl border-2 shadow-lg p-2 flex flex-col items-center text-right w-[383px] h-[820px] md:row-span-2 hover:scale-[1.01] hover:border-[#79D7BE] dark:bg-[#282828]">
      <div className="mb-4">
        <p className="mb-8 mt-10 text-[#888787] font-bold text-[16px] dark:text-white">
          !انجز مدفوعاتك، وتحكّم في ميزانيتك بكل <br /> سهولة
        </p>
      </div>
      <h3 className="text-[40px] text-right font-bold text-[#2E5077] mb-24 dark:text-white">
        تتبع مصروفاتك
      </h3>
      <img src={eWalletbro} alt="E-Wallet Illustration" />
      <button className="mt-28 ml-24 rounded-[30px] w-[196px] h-[54px] bg-[#2E5077] text-white px-6 py-2 hover:bg-[#1f2857] transition-colors dark:bg-[#79D7BE]">
        <div className="flex justify-between">
          <p>إنشاء محفظة</p>
          <img src={arowIcon} alt="Arrow Icon" />
        </div>
      </button>
    </div>

  
    <div className="bg-white rounded-xl border-2 shadow-lg p-2 flex flex-col text-right w-[350px] h-[374px] hover:scale-[1.01] hover:border-[#79D7BE] dark:bg-[#282828]">
      <div className="mb-4">
        <h3 className="text-[27px] font-bold mb-8 mt-4 ml-8 mr-8 text-[#2E5077] dark:text-white">
          قم بتسجيل <br /> التزاماتك المالية <br /> لإدارة أموالك بفعالية
        </h3>
      </div>
      <img src={img4} className="w-[153px] h-[164px] mr-20" alt="Financial Commitments Illustration" />
    </div>


    <div className="bg-white rounded-xl border-2 shadow-lg p-2 flex flex-col items-center text-right w-[350px] h-[374px] hover:scale-[1.01] hover:border-[#79D7BE] dark:bg-[#282828]">
      <div className="mb-4">
        <h3 className="text-[16px] font-bold mb-8 mt-4 ml-10 text-[#888787] dark:text-white">
          تحدث مع مساعدك المالي الذكي
        </h3>
        <h3 className="text-[#2E5077] font-bold text-[26px] dark:text-white">
          إجابات فورية لمساعدتك <br /> في إدارة أموالك!
        </h3>
        <img src={chatBot} className="w-[215px] h-[218px]" alt="Chat Bot Illustration" />
      </div>
    </div>
  </div>
</div>
</section> */}