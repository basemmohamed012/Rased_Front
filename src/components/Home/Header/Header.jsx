import React from 'react'
import imgLight1 from '../../../assets/images/freepik--Analysis--inject-87.png'
import imgDark1 from '../../../assets/images/FreePhoto.svg'
import imgLightDark2 from '../../../assets/images/manHome.svg'
import imgDark3 from '../../../assets/images/arowHome.svg'
import shapelight from '../../../assets/images/Rectangle11.svg'
import shapedark from '../../../assets/images/7799.svg'
const Heaader = () => {
  return (
    <>
   <section>
  <div className="container mx-auto px-8 py-16 ">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      
      
      {/* Right Content */}
      <div className="mt-10 text-center lg:text-right">
        <h2 className="text-[30px] sm:text-[40px] lg:text-[61px] font-bold relative lg:right-20 lg:bottom-8 dark:text-white">
          تحكم في أموالك بثقة <br />مع تقارير دقيقة <br />وموثوقة
        </h2>

        <div className="mb-8">
          <p className="text-gray-600 font-bold text-[14px] mb-10 relative lg:right-20 dark:text-white">
            موثوق من:
          </p>

          <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-end relative lg:left-[230px]">
            <div className="flex -space-x-4 rtl:space-x-reverse">
              {[
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=100&h=100",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=100&h=100",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100",
              ].map((src, index) => (
                <img
                  key={index}
                  className="w-[70px] h-[70px] rounded-full border-2 border-white"
                  src={src}
                  alt="User"
                />
              ))}
            </div>

            <div className="text-center lg:text-right lg:relative lg:right-2">
              <p className="font-bold text-[25px] mb-1">1.45 مليون +</p>
              <p className="text-[18px] text-gray-600 dark:text-white">
                مستخدم من كل أنحاء العالم
              </p>
            </div>
          </div>
        </div>
      </div>


{/* Left Content */}
<div className="flex justify-start items-start m-0 p-0">
  <div className="relative  w-full max-w-[827px] m-0 p-0 
                  bottom-[40px] sm:bottom-[50px] md:bottom-[70px] lg:bottom-[120px] xl:bottom-[143px] right-0 lg:right-10">
    
    {/* الصورة */}
    <img
      src={shapelight}
      alt=""
      className="w-full h-auto object-contain m-0 p-0"
    />

    {/* عنصر فوق الصورة */}
    <div className='flex justify-between'>
    <div className=" absolute top-10 sm:top-[150px] left-0  lg:left-24 w-full px-4 sm:px-6 md:px-8 mt-4">
      <div className="relative top-0 text-left">
        
        {/* الإحصائيات */}
        <div className="mb-10 lg:mb-16">
          <p className="font-bold text-white  text-[24px] sm:text-[14px] md:text-[32px] lg:text-[40px]  dark:text-white">
            1.45 مليون
          </p>
          <p className="text-white text-[8px] sm:text-[12px] md:text-[18px] font-medium dark:text-white">
            من المستخدمين المتفاعلين
          </p>
        </div>

        <div className="mb-10 md:mb-32">
          <p className="font-bold text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] dark:text-white">
            140 ألف
          </p>
          <p className="text-white text-[8px] sm:text-[16px] md:text-[18px] font-medium dark:text-white">
            عملية تنزيل من جميع المتجر
          </p>
        </div>

        {/* النص الختامي */}
        <p className="text-white  text-[8px] sm:text-[13px] md:text-[14px] mt-20 sm:mt-12 text-left font-medium leading-relaxed dark:text-white">
          تحكم في أموالك بسهولة، وقلل<br />
          من الجهد المبذول في إدارة<br />
          النفقات.
        </p>
      </div>
                  </div>
                  <div >
                    <img

                      className='  relative bottom-[270px] left-[20px] w-[400px] md:absolute md:top-[160px] md:left-[240px] md:w-[480px] lg:absolute lg:w-[500px] lg:h-[660px] lg:top-[110px] lg:left-[320px] '
                      src={imgDark1} alt="" />
                  </div>
                  <div>
                    <img
                      className=' relative bottom-[190px] left-[180px] md:absolute md:top-[380px] md:left-96  '
                      src={imgLightDark2} alt="" />
                  </div>
                  
    </div>
    
    <div>
                    <img
                    className='hidden lg:block lg:absolute lg:top-[200px] lg:left-[680px]  '
                     src={imgDark3} 
                      alt="" />
                  </div>

  </div>
</div>
    </div>
  </div>
</section>


    
    </>
  )
}

export default Heaader

//bottom-[600px] left-[140px] w-[545px] h-[630px]
{/* <div>
<div className="flex items-start justify-start -z-10  absolute left-0 top-[-80px] ">
   
   <img src={shapelight} className='block dark:hidden' />
   <img src={shapedark} className='hidden dark:block' />
</div>
 <div className="mb-8 whitespace-nowrap ">
 
   <div className="relative  left-2">
     <div className="mb-4">
       <p className="font-bold text-right text-black text-[40px] dark:text-white">  1.45 مليون </p>
       <p className="text-black text-right text-[18px] font-medium dark:text-white"> من المستخدمين ل <br />المتفاعلين</p>
     </div>

     <div className="mb-12 dark:text-white">
       <p className="font-bold text-black text-right text-[40px] dark:text-white">140 ألف</p>
       <p className="text-black text-right text-[18px] font-medium dark:text-white">عملية تنزيل من جميع <br />المتجر</p>
     </div>
   </div>

   
   <p className="text-black text-[14px] ml-32 mt-20 text-right font-medium leading-relaxed dark:text-white">
     تحكم في أموالك بسهولة، وقلل <br />من الجهد المبذول في إدارة<br /> النفقات.
   </p>
   
 </div>

 <div className="flex items-center justify-center">
   <div>
     <img className="absolute left-[335px] top-14 w-[580px] h-[680px] block dark:hidden" src={imgLight1} alt="" />
     <img className="absolute left-[230px] top-14 w-[720px] h-[720px] hidden dark:block" src={imgDark1} alt="" />
   </div>

   <img className="absolute top-[400px] left-[410px] w-[165px] h-[300px]" src={imgLightDark2} alt="" />

   <div>
     <img className="absolute top-[120px] left-[660px] w-[302px] h-[415px] block dark:hidden" src={imgLight3} alt="" />
     <img className="absolute top-[120px] left-[660px] w-[302px] h-[415px] hidden dark:block" src={imgDark3} alt="" />
   </div>
 </div>
</div> */}