import React from 'react'

const DeleteBudgetModal = ({ onClose, onDelete, budgetId, deleteLoading }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40  flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-[15px] w-[450px] h-[200px] shadow-xl text-right">
      <h3 className="text-[18px] mt-8 font-bold leading-[100%] tracking-[0%] text-center mb-10 font-[Tajawal]">
        هل أنت متأكد من حذف هذه الميزانيّــــة ؟
      </h3>

        <div className="flex justify-between gap-4">
          <button
            onClick={() => {
              onDelete({ budgetId });
            }}
            className={`w-[188px] h-[48px] bg-error text-white px-8 py-[10px] rounded-[10px] hover:bg-red-500 ${deleteLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            { 
              deleteLoading ? 'جاري الحذف ..' : 'تأكـــيد'
            }
          </button>
          <div className="flex justify-between gap-4">
          <button
            onClick={onClose}
            className="w-[188px] h-[48px]  border-gray-600 border-[1px] text-gray-700 px-8 py-[10px] rounded-[10px] hover:bg-gray-100"
          >
            إلغاء
          </button>
        </div>

        </div>
      </div>
    </div>
  )
}

export default DeleteBudgetModal