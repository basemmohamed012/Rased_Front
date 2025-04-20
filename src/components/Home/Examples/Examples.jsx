import React from 'react'
import Example_light from '../../../assets/images/ex.svg'
import arow_ex_light from '../../../assets/images/arowup.svg'
import arow_ex_dark from '../../../assets/images/arowdown.svg'
import question from '../../../assets/images/question.svg'

const Examples = () => {
  return (
    <div>
      <section className="mx-auto my-10 p-4">
        <div className="flex flex-col sm:flex-row mb-8 relative right-0 sm:right-16 bottom-16 items-center sm:items-start">
          <img className="w-[62px] h-[62px] block mb-4 sm:mb-0" src={Example_light} alt=""/>
          <h2 className="text-[30px] text-center sm:text-right font-bold sm:relative sm:bottom-8 sm:right-10 text-[#777575] dark:text-white">
            اعرف أكثر مع <br/><span className="text-[35px] sm:text-[45px] text-black font-bold dark:text-white">الأسئلة الشائعة</span>
          </h2>
        </div>

        <div className="space-y-8 relative right-0  bottom-16 max-w-[95%] sm:max-w-[93%] mx-auto">
          {[
            {
              question: "ماذا يقدم تطبيق راصد؟",
              answer: "تطبيق راصد يساعدك في إدارة أموالك، متابعة مصروفاتك، وتحقيق أهدافك المالية بسهولة وأمان."
            },
            {
              question: "هل أقدر احذف حسابي؟",
              answer: "نعم، يمكنك حذف حسابك بسهولة من خلال الإعدادات داخل التطبيق."
            },
            {
              question: "ماذا يقدم تطبيق راصد؟",
              answer: "تطبيق راصد يساعدك في إدارة أموالك، متابعة مصروفاتك، وتحقيق أهدافك المالية بسهولة وأمان."
            },
            {
              question: "هل أقدر احذف حسابي؟",
              answer: "نعم، يمكنك حذف حسابك بسهولة من خلال الإعدادات داخل التطبيق."
            },
            {
              question: "ماذا يقدم تطبيق راصد؟",
              answer: "تطبيق راصد يساعدك في إدارة أموالك، متابعة مصروفاتك، وتحقيق أهدافك المالية بسهولة وأمان."
            }
          ].map((item, index) => (
            <details data-aos="zoom-in-up" key={index} className="group w-full transition-all">
              <summary className="cursor-pointer list-none">
                <div className="border-2 border-[rgba(79,95,29,0.5)] rounded-[40px] shadow-custom p-4 sm:p-8 transition-all group-open:shadow-lg group-open:bg-[#16423C] group-open:rounded-[20px] group-open:border-none group-open:-translate-y-4">
                  <div className="flex justify-between mr-2 sm:mr-10 items-center text-black text-[20px] sm:text-[25px] dark:text-white font-bold">
                    <div className='flex gap-2 items-center'>
                      <img src={question} alt="" className="w-6 sm:w-auto"/>
                      <p className='group-open:text-white'>{item.question}</p>
                    </div>
                    <span className="transform transition-transform">
                      <img src={arow_ex_light} alt='' className="ml-4 sm:ml-16 dark:hidden group-open:block"/>
                      <img src={arow_ex_dark} alt='' className="ml-4 sm:ml-16 group-open:hidden"/>
                    </span>
                  </div>
                  <p className="mt-4 group-open:text-white mr-8 sm:mr-10 text-[#777575] text-[16px] sm:text-[18px] text-right dark:text-gray-300 leading-relaxed transition-all group-open:block hidden">
                    {item.answer}
                  </p>
                </div>
              </summary>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Examples