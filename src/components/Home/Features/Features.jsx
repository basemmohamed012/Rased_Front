import React from 'react'
import oction from '../../../assets/images/octicon_goal-16.svg'
import octiondark from '../../../assets/images/option.svg'
import garden_security from '../../../assets/images/garden_security-26.svg'
import gardendark from '../../../assets/images/optin3.svg'
import ri from '../../../assets/images/ri_apps-2-ai-fill.svg'
import ridark from '../../../assets/images/option2.svg'
const Features = () => {
  return (
    <div>
      <section className="mt-32 mr-10">

<div className="min-h-screen py-16 ">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
     
      <div
        className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-[#77757] hover:shadow-xl transition duration-300 dark:hover:bg-[#777575]">
        <div className="w-16 h-16 rounded-full flex items-center justify-center">

          <img className="block dark:hidden" src={oction} alt="" />
          <img className="hidden dark:block" src={octiondark} alt="" />
        </div>
        <h3 className="text-[27px] font-bold text-[#2E5077]  dark:text-[#79D7BE]">
          تحقيق الأهداف بسهولة
        </h3>
        <p className="text-gray-600 text-[20px] dark:text-white ">
          حدد أهدافك المالية ودونها<br /> وتابع تقدمك<br /> وانطلق نحو مستقبلك المالي.
        </p>
      </div>
     
      <div
        className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-[#77757] hover:shadow-xl transition duration-300 dark:hover:bg-[#777575]">
        <div className="w-16 mb-4  rounded-full flex items-center justify-center">
          <img className="block dark:hidden" src={garden_security} alt="" />
          <img className="hidden dark:block" src={gardendark} alt="" />
        </div>
        <h3 className="text-[27px]  font-bold text-[#2E5077] whitespace-nowrap  dark:text-[#79D7BE]">
          أموالك في أمان... بذكاء غير<br /> مسبوق!
        </h3>
        <p className="text-gray-600 text-[20px] whitespace-nowrap dark:text-white">
          حماية متكاملة وتقنيات ذكاء اصطناعي <br />متطورة لضمان أمان معاملاتك المالية.
        </p>
      </div>

   
      <div
        className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl  hover:shadow-xl transition duration-300 dark:hover:bg-[#777575]">
        <div className="w-16 h-16  rounded-full flex items-center justify-center">
          <img className="block dark:hidden" src={ri} alt="" />
          <img className="hidden dark:block" src={ridark} alt="" />
        </div>
        <h3 className="text-[27px] font-bold py-2 text-[#2E5077] whitespace-nowrap  dark:text-[#79D7BE]">
          ذكاء اصطناعي لمساعدتك
        </h3>
        <p className="text-gray-600 text-[20px] pt-3  whitespace-nowrap dark:text-white">
          تحليلات ذكية، تنبيهات مالية واقتراحات <br />متخصصة لإدارة اموالك بكفاءة.
        </p>
      </div>

    </div>
  </div>
</div>
</section>
    </div>
  )
}

export default Features
