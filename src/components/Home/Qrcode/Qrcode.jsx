import React from 'react';

// استيراد الصور مباشرة

import qrcodedark from '../../../assets/images/qrcodedark.svg'
import appStoreIcon from '../../../assets/images/appp.svg';
import googlePlayIcon from '../../../assets/images/windows.svg';
import iphoneFront from '../../../assets/images/iPhone 13 Pro1.svg';
import iphoneBack from '../../../assets/images/iPhone 13 Pro.svg';
import trilight from '../../../assets/images/trilight.svg'
import frame from '../../../assets/images/Frame.svg'
import arowww from '../../../assets/images/arowwwwdark.svg'


const Qrcode = () => {
  return (
    <div>
      <section data-aos="fade-up" className="flex justify-center items-center mx-4 mt-20 ">
        <div className="w-full lg:w-[1242px] h-auto lg:h-[620px]  bg-gradient-to-r from-[rgba(22,66,60,0.73)] to-[rgba(62,87,38,1)] flex flex-col lg:flex-row justify-between items-center rounded-[20px] mb-24 py-8 lg:py-0">
          {/* Content Container */}
          <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start w-full">
            {/* Text Section - Always First */}
            <div className="text-center lg:text-right mb-8 lg:mb-0 order-1">
              <p className="text-[32px] text-white lg:text-[50px] font-bold relative lg:top-52 lg:whitespace-nowrap lg:left-[340px]">
                قم بتنزيل تطبيق راصد <br />المالي الآن!
              </p>
            </div>

            {/* QR Code Section */}
            <div className="flex flex-col items-center order-2 lg:order-none mb-8 lg:mb-0">
             
              <img 
                className=" mb-4 lg:relative lg:bottom-20 lg:right-16" 
                src={qrcodedark} 
                alt="QR Code Dark" 
              />
              
              <img 
                className=' lg:relative lg:bottom-16 lg:right-16' 
                src={trilight} 
                alt='Triangle Light' 
              />
            
              
              <button className="w-[118px] h-[30px] bg-white rounded-[10px] text-black text-[13px] dark:bg-white dark:text-black lg:relative lg:bottom-16 lg:right-[60px]">
                امسح الكود الآن
              </button>
            </div>

            {/* Store Buttons Section */}
            <div className="flex flex-col items-center order-3 lg:order-none lg:relative lg:right-60">
              <div className="bg-[#16423C] mb-4 w-[194px] h-[48px]  rounded-[10px]">
                <a className="flex justify-around p-2" href="">
                  <p className="font-bold text-[20px] text-[#FFEB00]">App Store</p>
                  <img src={appStoreIcon} alt="App Store" />
                 
                </a>
              </div>
              
              <div className="bg-[#16423C] w-[194px] h-[48px]  rounded-[10px] relative">
                <a className="flex justify-around p-2" href="">
                  <p className="font-bold text-[20px] text-[#FFEB00] ">Google Play</p>
                  <img  src={googlePlayIcon} alt="Google Play" />
                 
                </a>
                
                <img className='hidden lg:block lg:absolute lg:left-[210px]  lg:bottom-2' src={arowww} alt="Arrow Dark" />
              </div>
            </div>
          </div>

          {/* iPhone Images - Only visible on desktop */}
          <div className="hidden lg:flex">
            <img className="relative top-[154px] left-48" src={iphoneFront} alt="iPhone Front" />
            <div>
              <img className="absolute  left-40" src={iphoneBack} alt="iPhone Back" />
            </div>
          </div>
        </div>
       
      </section>
      <img className='hidden lg:block relative bottom-28  right-[139.5px] ' src={frame} alt="" />
    </div>
  );
};

export default Qrcode;