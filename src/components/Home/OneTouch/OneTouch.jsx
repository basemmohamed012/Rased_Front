import React from 'react'
import img1 from '../../../assets/images/Rectangle 39333.svg'
import img2 from '../../../assets/images/freepik--Analysis--inject-79.svg'
import img3 from '../../../assets/images/iPhone 13 Pro2.svg'
import img4 from '../../../assets/images/Site Stats-cuate.svg'

const OneTouch = () => {
  return (
    
      <section className="mb-32 ">
    <h1 className="text-[45px] font-bold text-right mr-40 mb-32">
      إدارة مالية ذكية وسهلة <span className="text-[#2E5077] dark:text-[#79D7BE]"> <a href="#">بلمسة واحدة</a></span>
    </h1>
    <div className="w-[1056px] h-[504px] bg-[#c8ebe1] dark:bg-[#4d6760] mr-[220px] rounded-[15px]">
      <img className="relative top-16 right-20" src={img1} alt="" />
      <img className="relative bottom-72 left-8" src={img2} alt=""/>
      <img className="relative bottom-[1000px] right-[320px]" src={img3} alt="" />
      <img className="relative bottom-[1480px] right-[720px]" src={img4} alt="" />
    </div>
  </section>
    
  )
}

export default OneTouch
