import React from 'react';
import hand from '../../../assets/images/hand1.svg';
import follow from '../../../assets/images/follow.svg';
import manage from '../../../assets/images/manage.svg';
import achive from '../../../assets/images/achive.svg';

const Management = () => {
  return (
    <div>
      <section className='relative'>
        <div data-aos="fade-up-left" className=" flex flex-col lg:flex-row justify-around">
          <div className="relative lg:right-14 lg:top-40 text-center lg:text-right">
            <h1 className="font-[Tajawal] font-bold text-[38px] md:text-[50px] leading-[100%] tracking-[0%] lg:relative lg:right-14 lg:bottom-12 mb-6 lg:mb-0">
              انطلق نحو الحرية <br />المالية... تابع،<br /> ادّخر، وحقق<br /> أهدافك!
            </h1>

            <p className="font-[Tajawal] font-normal text-[25px] leading-[100%] tracking-[0%] lg:relative lg:right-14 mb-6 lg:mb-0">
              تابع مدخراتك، راقب نفقاتك، <br />
              وحدد أهدافك المالية لتحقيق <br />
              الاستقرار والنمو بثقة
            </p>

            <a
              href=""
              className="inline-block w-[185px] h-[54px] pt-4 pr-10 pb-4 pl-10 bg-[#16423C] text-white rounded-[5px] lg:relative lg:top-10 lg:right-14 hover:bg-[#2d705e] dark:bg-[#2E5077]"
            >
              تسجيل الدخول
            </a>
          </div>

          <div data-aos="fade-up" className="relative top-20 ">
            <img className='hidden lg:block w-[650px] h-[631px]' src={hand} alt="" />
          </div>

          <div className='mt-12 lg:mt-0 lg:relative lg:top-28 lg:right-10'>
            {/* Mobile/Tablet Card View */}
            <div className="lg:hidden space-y-8">
              <div className="bg-white rounded-lg w-[350px] border-2 h-[220px] md:w-[550px] mr-5 md:mr-36 shadow-md p-6">
                <div className="flex flex-col items-center">
                  <img src={follow} alt="" className="mb-4" />
                  <p className="font-[Tajawal] font-bold text-[28px] leading-[100%] tracking-[0%] text-center mb-4">
                    تتبّع المدخرات
                  </p>
                  <p className="font-[Tajawal] font-normal text-[22px] leading-[100%] tracking-[0%] text-center whitespace-nowrap">
                    راقب مدخراتك بسهولة، حدد<br />
                    أنواع التوفير، واستمتع برؤية <br />
                    واضحة لنمو أموالك.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md w-[350px] border-2 h-[220px] md:w-[550px] mr-5 md:mr-36  p-6">
                <div className="flex flex-col items-center">
                  <img src={manage} alt="" className="mb-4" />
                  <p className="font-[Tajawal] font-bold text-[28px] leading-[100%] tracking-[0%] text-center mb-4">
                    إدارة المصروفات
                  </p>
                  <p className="font-[Tajawal] font-normal text-[22px] leading-[100%] tracking-[0%] text-center whitespace-nowrap">
                    سجّل نفقاتك، نظّمها في <br />ميزانيات واضحة، وتحكّم<br /> في أين تذهب أموالك.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md w-[350px] border-2 h-[220px] md:w-[550px] mr-5 md:mr-36  p-6">
                <div className="flex flex-col items-center">
                  <img src={achive} alt="" className="mb-4" />
                  <p className="font-[Tajawal] font-bold text-[28px] leading-[100%] tracking-[0%] text-center mb-4">
                    تحقيق الأهداف المالية
                  </p>
                  <p className="font-[Tajawal] font-normal text-[22px] leading-[100%] tracking-[0%] text-center whitespace-nowrap">
                    حدّد أهدافك المالية، ضع خططًا <br />مدروسة، وتابع تقدمك خطوة<br /> بخطوة حتى تصل لما تطمح إليه.
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop View */}
            <div data-aos="fade-up-right" className="hidden lg:block">
              <div className='flex gap-20 relative left-20 mb-4'>
                <img src={follow} alt="" />
                <p className="font-[Tajawal] font-bold text-[28px] leading-[100%] tracking-[0%] text-right relative left-16">
                  تتبّع المدخرات
                </p>
              </div>

              <p className="font-[Tajawal] font-normal text-[22px] leading-[100%] tracking-[0%] text-right relative left-16 mb-16 whitespace-nowrap">
                راقب مدخراتك بسهولة، حدد<br />
                أنواع التوفير، واستمتع برؤية <br />
                واضحة لنمو أموالك.
              </p>

              <div className='flex gap-20 relative left-20 mb-4'>
                <img src={manage} alt="" />
                <p className="font-[Tajawal] font-bold text-[28px] dark:text-black leading-[100%] tracking-[0%] text-right relative left-16">
                  إدارة المصروفات
                </p>
              </div>

              <p className="font-[Tajawal] font-normal text-[22px] leading-[100%] tracking-[0%] text-right relative left-16 mb-16 whitespace-nowrap">
                سجّل نفقاتك، نظّمها في <br />ميزانيات واضحة، وتحكّم<br /> في أين تذهب أموالك.
              </p>

              <div className='flex gap-20 relative left-20 mb-4'>
                <img src={achive} alt="" />
                <p className="font-[Tajawal] font-bold text-[28px] leading-[100%] tracking-[0%] text-right relative left-16">
                  تحقيق الأهداف المالية
                </p>
              </div>

              <p className="font-[Tajawal] font-normal text-[22px] leading-[100%] tracking-[0%] text-right relative left-16 mb-16 whitespace-nowrap">
                حدّد أهدافك المالية، ضع خططًا <br />مدروسة، وتابع تقدمك خطوة<br /> بخطوة حتى تصل لما تطمح إليه.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;