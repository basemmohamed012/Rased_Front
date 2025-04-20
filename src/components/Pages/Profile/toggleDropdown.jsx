import { useState, useEffect, useRef } from "react";

const Dropdown = ({ buttonId, menuId, label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button
        id={buttonId}
        ref={buttonRef}
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
      </button>
      <div
        id={menuId}
        ref={menuRef}
        className={`absolute left-0 mt-2 bg-white shadow-md rounded p-2 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}
        role="menu"
      >
        {options.map((option, index) => (
          <a key={index} href={option.href} className="block px-4 py-2 hover:bg-gray-100">
            {option.label}
          </a>
        ))}
      </div>
    </div>
  );
};

const DropdownContainer = () => {
  return (
    <div className="space-y-4">
      <Dropdown buttonId="menu-button-1" menuId="menu-1" label="Menu 1" options={[{ label: "Option 1", href: "#" }, { label: "Option 2", href: "#" }]} />
      <Dropdown buttonId="menu-button-2" menuId="menu-2" label="Menu 2" options={[{ label: "Option A", href: "#" }, { label: "Option B", href: "#" }]} />
      <Dropdown buttonId="menu-button-3" menuId="menu-3" label="Menu 3" options={[{ label: "Item 1", href: "#" }, { label: "Item 2", href: "#" }]} />
    </div>
  );
};

export default DropdownContainer;
