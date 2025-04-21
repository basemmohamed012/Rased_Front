import React from 'react'
import plan from '../../../assets/images/plan.svg'
import controle from '../../../assets/images/controle.svg'
import anyway from '../../../assets/images/anyway.svg'

const Advantage = () => {
  return (
    <div className='relative bottom-20 md:bottom-0 md:mt-20 p-4'>

      {/* العنوان والوصف */}
      <h1 className="font-bold text-black dark:text-white text-[19px] whitespace-nowrap md:text-[30px] lg:text-[45px] leading-[100%] tracking-[0%] md:text-center lg:text-right lg:mr-20">
        أموالك... مُنظمة، محسوبة، وتحت سيطرتك
      </h1>
      <p className='text-right md:text-center lg:text-right text-[#777575] font-[Tajawal] font-normal text-[14px] md:text-[18px] lg:text-[22px] leading-[24px] tracking-[-0.02em] mt-6 lg:mr-20'>
        إدارة أموالك لم تعد معقدة .. خطط، تابع، وحقق أهدافك المالية بأسهل طريقة
      </p>

      {/* الكروت */}
      <section className="flex flex-col items-center justify-center gap-6 px-4 py-10 md:flex-row md:gap-4">
        
        {/* كارت 1 */}
        <div data-aos="fade-right" className="w-full max-w-[387px] h-[211px] px-[31px] py-[32px] bg-white dark:bg-[#777575] shadow-md rounded-2xl text-right flex flex-col gap-[17px]">
          <img src={plan} alt="تخطيط" className="w-[40px] h-[40px] self-center" />
          <h3 className="font-[Tajawal] text-[20px] font-bold dark:text-white text-black whitespace-nowrap">تخطيط ذكي لمستقبلك</h3>
          <p className="font-[Tajawal] text-[16px] font-normal dark:text-white text-[#777575] leading-[22px]">
            حدد أهدافك المالية الأكثر انتظاماً، واتبع تقدمك لتحقيق طموحاتك بسهولة
          </p>
        </div>

        {/* كارت 2 */}
        <div data-aos="fade-up" className="w-full max-w-[387px] h-[211px] px-[31px] py-[32px] bg-white dark:bg-[#777575] shadow-md rounded-2xl text-right flex flex-col gap-[17px]">
          <img src={controle} alt="تحكم" className="w-[40px] h-[40px] self-center" />
          <h3 className="font-[Tajawal] text-[20px] font-bold dark:text-white text-black whitespace-nowrap">تحكُّم كامل دون عناء</h3>
          <p className="font-[Tajawal] text-[16px] font-normal dark:text-white text-[#777575] leading-[22px]">
            أضف مدفوعاتك، حدد ميزانيتك، واحصل على رؤية واضحة لمستقبلك المالي
          </p>
        </div>

        {/* كارت 3 */}
        <div data-aos="fade-left" className="w-full max-w-[387px] h-[211px] px-[31px] py-[32px] bg-white dark:bg-[#777575] shadow-md rounded-2xl text-right flex flex-col gap-[17px]">
          <img src={anyway} alt="كل شيء" className="w-[40px] h-[40px] self-center" />
          <h3 className="font-[Tajawal] text-[20px] font-bold dark:text-white text-black whitespace-nowrap">كل شيء في مكان واحد</h3>
          <p className="font-[Tajawal] text-[16px] font-normal dark:text-white text-[#777575] leading-[22px]">
            تابع دخلك، نَظم نفقاتك، وادِر مدخراتك بسهولة تامة
          </p>
        </div>

      </section>
    </div>
  )
}

export default Advantage
