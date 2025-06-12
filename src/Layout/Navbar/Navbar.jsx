import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logoNew.svg";
import logoDark from "../../assets/images/logo1.png";
import DarkModeToggle from "./DarkModeToggle.jsx";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "الرئيسية", path: "/" },
    { name: "من نحن", path: "#" },
    { name: "تواصل معنا", path: "/#" },
    // { name: "الحساب الشخصي", path: "/profile" },
  ];

  return (
    <nav className="relative z-50 flex items-center justify-between px-4 lg:px-10 mt-6 flex-row-reverse lg:flex-row">

      {/* Mobile Controls */}
      <div className="lg:hidden relative order-first">
        <div className="flex items-center gap-2 justify-end">
          <DarkModeToggle />
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="text-black z-10 dark:text-white" />
            ) : (
              <Menu className="text-black z-10 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileOverlay"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white dark:bg-[#1a1a1a] z-50 flex flex-col items-center justify-center  gap-6 p-16 h-[50%]"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-black dark:text-white"
            >
              <X size={28} />
            </button>

            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  navigate(link.path);
                  setMenuOpen(false);
                }}
                className={`text-xl font-bold ${
                  location.pathname === link.path
                    ? "text-emerald-700 dark:text-[#79D7BE] border-b-2 border-emerald-700 dark:border-[#79D7BE]"
                    : "hover:text-emerald-700 dark:hover:text-[#79D7BE]"
                }`}
              >
                {link.name}
              </button>
            ))}

            {/* <div className="flex flex-col w-full items-center gap-3 mt-4">
              <button
                onClick={() => {
                  navigate("/login");
                  setMenuOpen(false);
                }}
                className="w-[80%] text-[16px] text-[#2E5077] border-2 border-[#2E5077] dark:border-[#79D7BE] dark:text-[#79D7BE] px-6 py-2 rounded-[5px]"
              >
                تسجيل دخول
              </button>
              <button
                onClick={() => {
                  navigate("/signup");
                  setMenuOpen(false);
                }}
                className="w-[80%] text-[16px] text-white bg-[#2E5077] dark:bg-[#79D7BE] dark:text-white px-6 py-2 rounded-[5px]"
              >
                إنشاء حساب
              </button>
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo */}
      <div className="flex relative right-0 lg:right-20  items-center order-last lg:order-none">
        <img src={logo} alt="Logo" className="w-[80px]   h-[40px] block dark:hidden" />
        <img src={logoDark} alt="Logo Dark" className="w-[80px] h-[40px] hidden dark:block" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-14 text-black dark:text-white font-bold text-[14px]">
        {links.map((link) => (
          <button
            key={link.path}
            onClick={() => navigate(link.path)}
            className={`nav-link ${
              location.pathname === link.path
                ? "text-emerald-700 dark:text-[#79D7BE] border-b-2 border-emerald-700 dark:border-[#79D7BE]"
                : "hover:text-emerald-700 dark:hover:text-[#79D7BE]"
            }`}
          >
            {link.name}
          </button>
        ))}
        <DarkModeToggle />
      </div>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex relative left-20 items-center gap-4">
        <a
          onClick={() => navigate("/login")}
          className="bg-transparent w-[185px] h-[54px] text-[18px] cursor-pointer z-10 text-center bg-white text-[#16423C] border-[#16423C] border-[2px] px-6 py-2 rounded-[5px] dark:border-[#79D7BE] dark:text-[#79D7BE] transition duration-300"
        >
          <p className="mt-1">تسجيل دخول</p>
        </a>
        <a
          onClick={() => navigate("/signup")}
          className="bg-[#16423C] w-[185px] h-[54px] cursor-pointer z-10 text-[18px] text-center text-white px-6 py-2 rounded-[5px] hover:bg-emerald-700 dark:bg-[#79D7BE] dark:text-white transition duration-300"
        >
          <p className="mt-1">إنشاء حساب</p>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
