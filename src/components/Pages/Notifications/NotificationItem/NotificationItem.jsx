
import { useState } from "react";
export default function NotificationItem({ title, description, image,time  }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
    
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    return (
      <div className="flex items-center justify-between w-[974px] h-[104px] p-6 border rounded-[20px]">
        <div className="flex items-center gap-4">
          <img src={image} alt="" />
          <div>
            <div className="flex gap-10 items-center">
            <h4 className="font-Tajawal font-bold text-[22px] leading-[100%] tracking-normal"
            >{title}</h4>
            <p >{time}</p>
            </div>
            <p className=" text-[#8D8A8A] mt-4 text-[16px] leading-[100%] tracking-normal">{description}</p>
          </div>
        </div>
        <button 
         onClick={handleOpenModal}
        className="w-[185px] h-[42px] rounded-[15px] gap-[10px] pt-2.5 pr-8 pb-2.5 pl-8 bg-[#16423C] text-white hover:border-2 hover:border-[#16423C] hover:bg-white hover:text-[#16423C]">
         <p className="font-bold text-[18px] leading-[100%] tracking-normal whitespace-nowrap"
         >
         عرض التفاصيل
         </p>
        </button>

        {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[400px] text-center relative">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <img src={image} alt="Notification" className="w-20 h-20 mx-auto mb-4" />
            <p className="text-gray-700 mb-2">{description}</p>
            <p className="text-gray-500 text-sm">{time}</p>
            <button
              onClick={handleCloseModal}
              className="mt-6 bg-[#16423C] text-white px-6 py-2 rounded-[10px] hover:bg-white hover:text-[#16423C] hover:border-2 hover:border-[#16423C]"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
      </div>
    );
  }
  