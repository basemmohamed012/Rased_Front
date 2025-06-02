import { Edit, Trash2 } from 'lucide-react';

const IncomeCard = ({ title, category, amount, percentage, color, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-lg font-bold text-maincolor">{title}</h4>
          <p className="text-sm text-secondcolor">{category}</p>
          <p className="text-2xl font-bold text-maincolor mt-1">
            ${amount.toLocaleString()}
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <span className="text-green-600 font-bold text-sm flex items-center ml-3">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 4l-6 6h4v6h4v-6h4z" />
            </svg>
            {percentage}%
          </span>
          
          {/* Action Buttons */}
          <div className="flex space-x-2">
            <button
              onClick={onEdit}
              className="p-2 text-warning hover:bg-yellow-50 rounded-lg transition-colors duration-200"
              title="Edit"
            >
              <Edit size={18} />
            </button>
            <button
              onClick={onDelete}
              className="p-2 text-error hover:bg-red-50 rounded-lg transition-colors duration-200"
              title="Delete"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Progress Information */}
      <div className="text-sm text-gray-500 mb-2">
        <span className='font-semibold'>{percentage}%</span> من إجمالي مصادر الدخل في هذه المحفظة
      </div>

      {/* Progress Bar */}
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

export default IncomeCard