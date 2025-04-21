import React, { useState } from 'react'
import arow from '../../assets/images/arowblack.svg'

const SortDropdown = () => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('الأحدث')

  const options = ['الأحدث', 'الأقدم', 'حسب القيمة']

  return (
    <div className="relative inline-block text-right">
      <div
        className="text-sm text-black flex items-center gap-1 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="font-bold text-[14px]">{selected}</span>
        <img src={arow} alt="arrow" className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => {
                setSelected(option)
                setOpen(false)
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SortDropdown
