import React, { useState } from "react";

const amounts = ["1 مليون", "2 مليون", "6 مليون"];

const AmountSelector = () => {
  const [active, setActive] = useState("1 مليون");

  return (
    <div className="flex border border-gray-300 rounded-[12px] overflow-hidden w-fit">
      {amounts.map((amount) => (
        <button
          key={amount}
          onClick={() => setActive(amount)}
          className={`px-4 py-2 text-[14px] font-bold font-[Tajawal] transition
            ${active === amount
              ? "bg-[#0F3E3E] text-white"
              : "bg-white text-gray-400"
            }`}
        >
          {amount}
        </button>
      ))}
    </div>
  );
};

export default AmountSelector;
