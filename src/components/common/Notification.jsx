import React, { useEffect } from 'react';
import { FiCheck, FiX, FiInfo, FiAlertCircle } from 'react-icons/fi';

const icons = {
  success: <FiCheck className="w-5 h-5" />,
  error: <FiX className="w-5 h-5" />,
  info: <FiInfo className="w-5 h-5" />,
  warning: <FiAlertCircle className="w-5 h-5" />
};

const colors = {
  success: 'bg-green-100 text-green-800',
  error: 'bg-red-100 text-red-800',
  info: 'bg-blue-100 text-blue-800',
  warning: 'bg-yellow-100 text-yellow-800'
};

const Notification = ({ type = 'info', message, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (duration && onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div className={`
      flex items-center gap-3 p-4 rounded-lg
      ${colors[type]}
    `}>
      <span className="flex-shrink-0">
        {icons[type]}
      </span>
      <p className="flex-grow">{message}</p>
      {onClose && (
        <button 
          onClick={onClose}
          className="flex-shrink-0 hover:opacity-75"
        >
          <FiX className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Notification;
