import React, { useEffect, useState } from 'react';
import HomePage from '../../Home/pageHome/HomePage.jsx'

const Active = () => {
  const [activeLink, setActiveLink] = useState("home-link"); // حالة لتتبع الرابط النشط

  useEffect(() => {
    // الحصول على اسم الصفحة الحالي
    const currentPath = window.location.pathname.split("/").pop();

    // تحديد الرابط النشط بناءً على الصفحة الحالية
    let newActiveLink = "home-link"; // افتراضيًا، الرابط النشط هو "الرئيسية"

    if (currentPath !== "index.html" && currentPath !== "") {
      newActiveLink = currentPath.replace(".html", ""); // إزالة الامتداد إذا وجد
    }

    // تحديث حالة الرابط النشط
    setActiveLink(newActiveLink);
  }, []); // [] تعني أن useEffect سيعمل مرة واحدة عند التحميل

  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <a
            href={HomePage}
            className={`nav-link ${activeLink === "nav-link" ? "text-[#16423C] border-b-2 border-[#16423C]" : ""}`}
            id="home-link"
          >
            الرئيسية
          </a>
        </li>
        <li>
          <a
            href="/about.html"
            className={`nav-link ${activeLink === "nav-link" ? "text-[#16423C] border-b-2 border-[#16423C]" : ""}`}
          >
            من نحن
          </a>
        </li>
        <li>
          <a
            href="/services.html"
            className={`nav-link ${activeLink === "nav-link" ? "text-[#16423C] border-b-2 border-[#16423C]" : ""}`}
          >
            تواصل معنا
          </a>
        </li>
        <li>
          <a
            href="/contact.html"
            className={`nav-link ${activeLink === "nav-link" ? "text-[#16423C] border-b-2 border-[#16423C]" : ""}`}
          >
             الحساب الشخصي
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Active;