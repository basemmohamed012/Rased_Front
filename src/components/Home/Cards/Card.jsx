import React from "react";
import { Testimonials } from "./data.js"; // import your array
import 'flowbite'; // تأكد من تفعيل flowbite

const TestimonialsSlider = () => {
  return (
    <div className=" bg-gradient-to-l from-[rgba(22,66,60,0.73)] to-[rgba(62,87,38,1)] dark:bg-[#575757]  w-full min-h-[705px] relative bottom-[150px] md:bottom-0 px-4 lg:px-16 py-12">
      <div className="flex flex-col mt-24  lg:flex-row-reverse justify-between items-center gap-12">
        
        {/* النص */}
        <div data-aos="flip-left" className="flex flex-col text-center lg:text-right items-center lg:items-end gap-6 w-full lg:w-[35%]">
          <h1 className="font-bold lg:text-right lg:relative lg:left-[230px] text-white text-3xl md:text-4xl">
            أنت في أيد أمينة!
          </h1>
          <p className=" font-medium text-[#c3bbbb] text-lg md:text-xl">
            انضم إلى آلاف المستخدمين الذين يعتمدون علينا لإدارة أموالهم بأمان وذكاء!
          </p>
          <a
            href="#"
            className="border-[3px] border-[#16423C] lg:relative lg:left-[365px] rounded-md text-white text-center w-[118px] h-[49px] flex items-center justify-center"
          >
            <p>المزيد</p>
          </a>
        </div>

        {/* الكاروسيل */}
        <div data-aos="flip-right" id="controls-carousel" className="relative w-full lg:w-[60%]" data-carousel="static">
          <div className="relative h-[500px] md:h-[480px] overflow-hidden rounded-lg">

            {Testimonials.map((item, index) => (
              <div
                key={item.id}
                className={`hidden duration-700 ease-in-out`}
                data-carousel-item={index === 0 ? "active" : ""}
              >
                <div className="flex justify-center">
                  <div  className="sm:w-[80%] md:w-[420px] md:h-[480px] p-6 bg-[#16423C] rounded-xl shadow-lg flex flex-col gap-4 text-right">
                    <div className="flex items-center gap-52 md:gap-60 mt-7">
                      <img src={item.image} alt={item.name} className="w-[79px] h-[77px] rounded-full object-cover" />
                      <div className="flex gap-1">
                      <img src={item.image5} alt="" />
                      <img src={item.image5} alt="" />
                      </div>
                    </div>
                    <div>
                        <h2 className="text-[27px] font-bold text-white mb-3 ">{item.name}</h2>
                        
                      </div>
                    <p className="text-white text-[20px] md:text-base mb-3">{item.text}</p>

                    <p className="text-[20px] text-gray-300">{item.duration}</p>
                    <div className="flex items-center gap-4  font-semibold">
                    <p className="text-white">{item.rating}</p>
                      <img src={item.image3} alt="" />
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* أزرار التنقل */}
          <button type="button" className="absolute top-0 right-[-30px] md:right-0  start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
              <svg className="w-4 h-4 text-white  rtl:rotate-180" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="absolute top-0 left-[-30px] md:left-0  end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
              <svg className="w-4 h-4 text-white rtl:rotate-180" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;





// import React from 'react';
// import { useState } from 'react';
// import { Testimonials } from './data';
// import arow from "../../../assets/images/arow12.svg"
// import aroww from "../../../assets/images/arow11.svg"


// const Cards = () => {
//   console.log(Testimonials.length)
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerPage = 3;

//   const nextSlide = () => {
//     if (currentIndex + itemsPerPage < Testimonials.length+1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const handleMouseDown = () => {
//     // عند الضغط على الزر، يبدأ التمرير باستمرار
//     intervalRef.current = setInterval(prevSlide, 100); // 100 ميلي ثانية للتحرك كل 0.1 ثانية
//   };

//   const handleMouseUp = () => {
//     // عند رفع الضغط عن الزر، يتوقف التمرير
//     clearInterval(intervalRef.current);
//   };
  

//   const visibleItems = Testimonials.slice(currentIndex, currentIndex + itemsPerPage);
//   return (
// //     <div>
// //       <div className=" bg-gradient-to-l from-[rgba(22,66,60,0.73)] to-[rgba(62,87,38,1)] dark:bg-[#575757] mt-80 w-[1521px] h-[705px] relative bottom-72  ">
        
// //         <div className='flex justify-between'>

// //         <div className='flex items-center  justify-center mt-40 relative left-56 gap-5 '>
// //   <div className='flex justify-between gap-3 absolute z-10 '>
// //     <button onClick={ prevSlide }>
// //       <div className='w-[35px] h-[35px] bg-[#A19F9F] rounded-[75px] relative left-[180px]  '>
// //         <img src={arow} alt="" className='items-center relative right-2 top-[10px]' />
// //       </div>
// //     </button>
// //     <button onClick={nextSlide}>
// //       <div className='w-[35px] h-[35px] bg-[#A19F9F] rounded-[75px] relative right-[530px]'>
// //         <img src={aroww} alt="" className='items-center relative right-2 top-[10px]' />
// //       </div>
// //     </button>
// //   </div>

// //   {/* ✅ غلاف السلايدر */}
// //   <div className="w-[1130px] overflow-hidden">
// //   <div
// //   className="flex gap-5 transition-transform duration-500 ease-in-out"
// //   style={{ transform: `translateX(-${currentIndex * (357 + 20)}px)` }}
// // >

// //       {visibleItems.map((item) => (
// //         <div key={item.id} className="w-[357px] h-[440px] flex-shrink-0 rounded-[20px] p-[24px] bg-[#16423C]  flex flex-col items-center overflow-hidden">
// //           <div className='flex'>
// //             <img src={item.image} alt={item.name} className="w-[79px] h-[77px] rounded-full mb-4 ml-52" />
// //             <div className='flex gap-1 relative top-8 left-6'>
// //               <img src={item.image5} className='w-[12px] h-[18px] block dark:hidden' alt="" />
// //               <img src={item.image5} className='w-[12px] h-[18px] block dark:hidden' alt="" />
// //               <img src={item.image5} className='w-[12px] h-[18px] hidden dark:block' alt="" />
// //               <img src={item.image5} className='w-[12px] h-[18px] hidden dark:block' alt="" />
// //             </div>
// //           </div>
// //           <h3 className="text-[27px] text-white ml-44 font-bold whitespace-nowrap">{item.name}</h3>
// //           <p className="text-[20px] font-medium text-white  text-right">{item.text}</p>
// //           <p className="text-[20px] font-medium text-white  text-right mt-5 ml-32 whitespace-nowrap">{item.duration}</p>
// //           <div className='flex gap-4 mt-2 ml-60'>
// //             <p className='font-bold text-white'>4.8</p>
// //             <img src={item.image3} alt="" />
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   </div>
// // </div>

// // </div>
// // </div>
// // </div>


         
//           <div className="flex flex-col w-[413px] items-end gap-[27px] mt-52 relative left-28 ">
//             <h1 className="self-stretch whitespace-nowrap  font-bold text-white text-[45px] tracking-[0] leading-[normal] [direction:rtl]">
//               أنت في أيد أمينة!
//             </h1>

//             <p className="self-stretch  font-medium text-[#c3bbbb] text-2xl tracking-[0] leading-[normal] [direction:rtl]">
//               انضم إلى آلاف المستخدمين الذين  يعتمدون علينا لإدارة أموالهم
//               بأمان وذكاء!
//             </p>
//             <a href="#" className='w-[118px] h-[49px] border-[3px] rounded-[5px] border-[#16423C]  text-white
//             text-center items-center ml-72  '><p className='mt-2'>المزيد</p></a>
//           </div>

       


//   );
// };

// export default Cards;
// import React from "react";

// const TestimonialsSection = () => {
//   return (
//     <div className="bg-gradient-to-l from-[rgba(22,66,60,0.73)] to-[rgba(62,87,38,1)] dark:bg-[#575757] mt-40 w-full min-h-[705px] relative px-4 lg:px-16 py-12">
//       <div className="flex flex-col lg:flex-row justify-between items-center gap-12">

//         {/* ✅ النص */}
//         <div className="flex flex-col text-center lg:text-right items-center lg:items-end gap-6 w-full lg:w-[40%]">
//           <h1 className="font-bold text-white text-3xl md:text-4xl">
//             أنت في أيد أمينة!
//           </h1>
//           <p className="font-medium text-[#c3bbbb] text-lg md:text-xl">
//             انضم إلى آلاف المستخدمين الذين يعتمدون علينا لإدارة أموالهم بأمان وذكاء!
//           </p>
//           <a
//             href="#"
//             className="border-[3px] border-[#16423C] rounded-md text-white text-center w-[118px] h-[49px] flex items-center justify-center"
//           >
//             <p>المزيد</p>
//           </a>
//         </div>

//         {/* ✅ الكروسل - Flowbite */}
//         <div id="controls-carousel" className="relative w-full lg:w-[60%]" data-carousel="static">
//           <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

//             {/* استبدل الصور دي بصورك الحقيقية */}
//             <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
//               <img src="/images/test1.jpg" className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="..." />
//             </div>
//             <div className="hidden duration-700 ease-in-out" data-carousel-item>
//               <img src="/images/test2.jpg" className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="..." />
//             </div>
//             <div className="hidden duration-700 ease-in-out" data-carousel-item>
//               <img src="/images/test3.jpg" className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="..." />
//             </div>
//           </div>

//           {/* الأزرار */}
//           <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//             <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
//               <svg className="w-4 h-4 text-white rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
//               </svg>
//               <span className="sr-only">Previous</span>
//             </span>
//           </button>
//           <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//             <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
//               <svg className="w-4 h-4 text-white rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
//               </svg>
//               <span className="sr-only">Next</span>
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialsSection;
