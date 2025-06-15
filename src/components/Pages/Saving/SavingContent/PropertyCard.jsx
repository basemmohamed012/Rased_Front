// src/components/Pages/Saving/SavingContent/PropertyCard.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Clock, Edit3, Eye, Trash2 } from 'lucide-react';

export default function PropertyCard({ property }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${property.id}`, { state: { property } });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'pending':
        return 'bg-orange-500';
      case 'expired':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active':
        return 'نشط';
      case 'pending':
        return 'قيد المراجعة';
      case 'expired':
        return 'منتهي الصلاحية';
      default:
        return 'غير محدد';
    }
  };

  if (!property) return null;

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white rounded-lg text-right shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden max-w-sm w-full"
    >
      {/* Status Badge */}
      <div className="relative">
        <div
          className={`absolute top-6 left-5 ${getStatusColor(
            property.status
          )} text-white px-2 py-1 rounded-full text-xs font-medium`}
        >
          {getStatusText(property.status)}
        </div>
        <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* التصنيف */}
        <div className="text-gray-600 mb-2 font-medium">{property.category}</div>

        {/* السعر */}
        <div className="flex justify-between text-gray-900 mb-3">
          <p>المبلغ الإجمالي</p>
          <div className="text-xl font-bold">{property.price}</div>
        </div>

        {/* الموقع */}
        <div className="flex justify-between items-center text-gray-600 mb-2">
          <div className="flex">
            <MapPin className="w-4 h-4 ml-1 mt-1" />
            الموقع
          </div>
          <span className="text-sm">{property.location}</span>
        </div>

        {/* المساحة */}
        <div className="text-sm flex justify-between text-gray-600 mb-4">
          <span className="font-medium">المساحة:</span> {property.area}
        </div>

        {/* التواريخ */}
        <div className="space-y-2 mb-4 text-xs text-gray-500">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Calendar className="w-3 h-3 ml-1" />
              تاريخ الإضافة:
            </div>
            <span>{property.dateAdded}</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Clock className="w-3 h-3 ml-1" />
              تاريخ الانتهاء:
            </div>
            <span>{property.expiryDate}</span>
          </div>
        </div>

        {/* أزرار التحكم */}
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <button
            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <button
            className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Edit3 className="w-4 h-4" />
          </button>
          <button
            className="p-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
