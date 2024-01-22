import React, { useEffect, useRef } from 'react';

const LogoutConfirmationModal = ({ userName, onCancel, onConfirm }) => {
  const modalRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onCancel();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-md shadow-md w-full max-w-md transition-opacity duration-300 opacity-100"
      >
        <p className="text-2xl font-semibold mb-4">Logout Confirmation</p>
        <p className="text-gray-700 mb-6">
          Are you sure you want to logout, {userName}?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
            onClick={onConfirm}
          >
            Confirm Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmationModal;
