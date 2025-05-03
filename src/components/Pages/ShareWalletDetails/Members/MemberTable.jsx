import React from 'react';
import { Search } from 'lucide-react';
import { useState } from 'react';
import img1 from '../../../../assets/images/محمد هيثم.svg'
import img2 from '../../../../assets/images/محمد عبدالله.svg'
import img3 from '../../../../assets/images/محمد محمود.svg'
import img4 from '../../../../assets/images/محمد حاتم.svg'
import img5 from '../../../../assets/images/عبدالله محمود.svg'

const members = [
  {
    name: 'محمد هيثم',
    role: 'المالك',
    joined: '15 مارس 2025',
    amount: '5000$',
    lastSeen: 'منذ 3 أيام',
    email: 'mohamedhaitham@example.com',
    image: img1
  },
  {
    name: 'محمد عبدالله',
    role: 'مشاهد',
    joined: '1 مارس 2025',
    amount: '2000$',
    lastSeen: 'منذ يومين',
    email: 'mohamedabdallah@example.com',
    image: img2
  } ,
  {
    name: 'محمد محمود',
    role: 'مشاهد',
    joined: '4 مارس 2025',
    amount: '1000$',
    lastSeen: 'منذ أسبوع',
    email: 'mohamedmahmoud@example.com',
    image: img3
  },
  {
    name: 'عبدالله أحمد',
    role: 'مشرف',
    joined: '1 مارس 2025',
    amount: '2000$',
    lastSeen: 'منذ 30 يوم',
    email: 'abdallahahmed@example.com',
    image: img4
  },
  {
    name: 'محمد حاتم',
    role: 'مشاهد',
    joined: '15 مارس 2025',
    amount: '8000$',
    lastSeen: 'منذ 104 يوم',
    email: 'mohamedhatem@example.com',
    image: img5
  },
  {
    name: 'محمد أحمد',
    role: 'مشاهد',
    joined: '10 مارس 2025',
    amount: '1000$',
    lastSeen: 'منذ شهر',
    email: 'mohamedahmed@example.com',
    image: img2
  },
  {
    name: 'محمد هيثم',
    role: 'مشرف',
    joined: '4 مارس 2025',
    amount: '1000$',
    lastSeen: 'منذ أسبوع',
    email: 'mohamedhaitham2@example.com',
    image: img1
  }
];


const roleColors = {
  'المالك': 'bg-[#3D984A] text-white',
  'مشرف': 'bg-[#FFAE4C1A] text-[#FFAE4C]',
  'مشاهد': 'bg-[#79CA321A] text-[#79CA32]',
};

export default function MembersTable() {
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredMembers = members.filter(member =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <div className="w-full min-w-[1020px] mx-auto p-6 bg-white shadow-lg rounded-[20px] border">
      
      {/* العنوان وشريط الأدوات */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <h2 className="text-2xl font-bold text-right">الصفحة الشخصية للأعضاء</h2>

        <div className="flex gap-4 items-center w-full sm:w-auto">
          
          {/* حقل البحث */}
          <div className="relative w-full sm:w-[232px]">
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}

              placeholder="ابحث عن عضو"
              className="w-full h-[48px] pr-4 pl-10 rounded-[10px] bg-gray-100 text-sm focus:outline-none"
            />
            <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>

          {/* زر الإضافة */}
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#1E5631] hover:bg-[#164e27] w-[155px] h-[48px] rounded-[10px] text-white text-sm font-semibold"
          >
            <p className="whitespace-nowrap text-center ">+ إضافة عضو</p>
          </button>
        </div>
      </div>

      {/* الجدول */}
      <div className="overflow-hidden rounded-[20px] border">
        <table className="min-w-full text-sm text-right bg-white">
          <thead className=" text-gray-700">
            <tr>
              <th className="px-6 py-3">الاسم</th>
              <th className="px-6 py-3">الصلاحية</th>
              <th className="px-6 py-3">تاريخ الانضمام</th>
              <th className="px-6 py-3">المبلغ المدفوع</th>
              <th className="px-6 py-3">آخر ظهور</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
          {filteredMembers.map((member, idx) => (
              <tr key={idx}>
                <div>
                <td className="px-6 py-4 font-medium">
                  <div className='flex gap-2'>
                  <div>
                  <img src={member.image} alt="" />
                  </div>
                  <div className='flex flex-col'>
                  {member.name} <br /> 
                  <div className='text-[14px] font-bold text-[#C7C7C7] '>{member.email}</div>
                 
                  </div>
                  </div>
                </td>
             
                </div>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${roleColors[member.role]}`}>
                    {member.role}
                  </span>
                </td>
                <td className="px-6 py-4">{member.joined}</td>
                <td className="px-6 py-4">{member.amount}</td>
                <td className="px-6 py-4">{member.lastSeen}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg w-[432px] h-[344px] p-6 text-right">
      <h3 className="text-[18px] font-bold mb-4 mt-5">إضافة عضو جديد</h3>
      <p className="text-[#BBB6B6] text-[12px]  mb-6">
        يمكنك دعوة عضو جديد للدخول والمشاركة في هذه المحفظة المشتركة.
        سوف يصل إليهم بريد إلكتروني بالدعوة الخاصة بك.
      </p>

      <label htmlFor="email" className="block mb-2 text-[16px] font-medium">
        البريد الإلكتروني
      </label>
      <input
  id="email"
  type="email"
  placeholder="اكتب البريد الالكتروني الخاص بصديقك هنا"
  className="w-[384px] h-[37px] border border-gray-300 text-[14px] text-[#BBB6B6] rounded px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-green-600 text-center"
/>


      <div className="flex justify-end gap-4">
      <button className="w-[188px] h-[48px] px-4 py-2 bg-[#16423C] text-white rounded-[10px]  hover:bg-[#FFF] hover:text-[#16423C] hover:border-2 hover:border-[#16423C] ">
          إرسال دعوة
        </button>
        
        <button
          onClick={() => setShowModal(false)}
          className="px-4 py-2 w-[188px] h-[48px] bg-white text-[#16423C] border-2 border-[#16423C] rounded-[10px] "
        >
          إلغاء
        </button>
       
      </div>
    </div>
  </div>
)}

    </div>
  );
}
