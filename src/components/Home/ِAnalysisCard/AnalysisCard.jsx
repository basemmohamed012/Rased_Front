import creditCardImg from "../../../assets/images/business.svg"; // عدّل المسار حسب مكان الصورة
import g955 from '../../../assets/images/g9486.svg'
import Rectangle from '../../../assets/images/Rectangle 404.svg'
const CreditAnalysisSection = () => {
  return (
    <section className="flex flex-col  md:flex-row md:justify-between">
      <div data-aos="fade-left" className="flex flex-col 
      w-[735px] h-[800px] md:h-[980px] lg:h-[750px] relative sm:top-[50px]  md:top-[100px] 
      md:right-[20px] lg:right-[100px] gap-y-5
      text-right">
     <p className="text-[22px] mr-5 md:mr-36 lg:mr-0 md:text-[30px] md:text-center md:whitespace-nowrap lg:text-[45px] font-bold text-black dark:text-white">
     تحليلات دقيقة لمعاملاتك الائتمانية
     </p>
     <p className="text-[11px] mr-4  md:text-[18px] lg:text-[22px] relative sm:right-2 md:right-24 lg:right-0  dark:text-white">
     تحكّم شامل في معاملاتك الائتمانية، وقل وداعًا للفوائد غير المتوقعة. نساعدك  <br className="md:hidden"/> متابعة كل عملية تتم باستخدام بطاقاتك الائتمانية، مع تحليل شامل، تنبيهات  <br className="md:hidden"/> دورية، وتوصيات ذكية لتجنب الديون المتراكمة وتحسين تقييمك الائتماني.
     </p>
     <div className="flex gap-6 mr-2 md:mt-20 ">
      <img src={g955} alt="" />
      <p className="md:text-[22px]  lg:text-[32px] font-bold">
        ابرز المزايا :
      </p>
     </div>
     <div className="max-w-3xl mr-8">
        <ul className="space-y-2 ml-24 text-gray-800 leading-loose">
          <li className="text-black text-[11px] md:text-[16px] dark:text-white ">
            <strong className="text-black font-bold text-[13px] md:text-[16px] dark:text-white dark:font-bold " > . عرض فوري لجميع عمليات الشراء والسحب </strong><br />
            تحديث لحظي لكل معاملة تُجرى باستخدام بطاقاتك، مع تصنيف تلقائي  <br className="md:hidden" />حسب نوع الإنفاق.
          </li>

          <li className="text-black text-[11px] md:text-[16px] dark:text-white">
            <strong className="text-black font-bold dark:text-white dark:font-bold" > . تنبيهات بمواعيد السداد</strong><br />
            نُذكّرك بمواعيد الدفع قبل استحقاقها، لتجنُّب الغرامات والفوائد.
          </li>

          <li className="text-black text-[11px] md:text-[16px] dark:text-white">
            <strong className="text-black font-bold dark:text-white dark:font-bold" > . متابعة الحد الائتماني</strong><br />
            راقب استخدامك الشهري مقارنة بالحد الائتماني المسموح، وتلقّ تنبيهات  <br className="md:hidden" /> عند تجاوز نسب الإنفاق الآمنة.
          </li>

          <li className="text-black text-[11px] md:text-[16px] dark:text-white">
            <strong className="text-black font-bold dark:text-white dark:font-bold md:whitespace-nowrap"> . تحليل الفوائد والمصاريف الإضافية</strong><br />
            نعرض لك بدقة كيف يتم احتساب الفوائد أو الرسوم، ونقترح طرقًا للتقليل منها.
          </li>

          <li className="text-black text-[11px] md:text-[16px] dark:text-white ">
            <strong className="text-black font-bold dark:text-white dark:font-bold" > . تحسين السلوك المالي الائتماني</strong><br />
            نقدّم نصائح مخصصة تساعدك على استخدام بطاقاتك بشكل أكثر مسؤولية  <br className="md:hidden" />، مما يعزّز من  تقييمك الائتماني بمرور الوقت.
          </li>
        </ul>
      </div>
      </div>


      <div data-aos="fade-right" className="relative md:mt-96 lg:mt-48 hidden md:block ">
   <img 
   className="flex absolute right-32 md:mt-20 lg:mt-0 "
   src={Rectangle}
    alt="" />
    <img
    className="relative left-10 md:mr-12 lg:mr-0 md:mt-28 lg:mt-0"
     src={creditCardImg}
      alt="" />
      </div>
    </section>
  );
};

export default CreditAnalysisSection;
