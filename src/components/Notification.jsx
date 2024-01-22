const Notification = ({ content, onClose }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-2 flex items-center justify-between">
      <span className="text-gray-800">{content}</span>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-gray-800 focus:outline-none"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Notification;
