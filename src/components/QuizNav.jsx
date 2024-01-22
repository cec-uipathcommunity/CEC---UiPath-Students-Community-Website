import React, { useState, useEffect } from 'react';
import logo from '../image/UiPath Student Developer_rgb_medium.png';
import LogoutConfirmationModal from '../components/LogoutConfirmationModal';
import Notification from './Notification';

const QuizNav = ({ userName }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLogoutConfirmationOpen, setLogoutConfirmationOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [latestNotification, setLatestNotification] = useState(null);
  const [showAllNotifications, setShowAllNotifications] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLogoutConfirmation = () => {
    setLogoutConfirmationOpen(!isLogoutConfirmationOpen);
  };

  const handleLogout = () => {
    toggleLogoutConfirmation();
  };

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const fetchNotifications = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_FETCH_BASE_URL}/api/notifications`);
      const data = await response.json();
      if (data.success) {
        setNotifications(data.notifications);
        setLatestNotification(data.notifications[0]);
      }
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  // const addNotification = async (content) => {
  //   try {
  //     const response = await fetch(`${process.env.REACT_APP_FETCH_BASE_URL}/api/send-notification`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ content }),
  //     });
  //     const data = await response.json();
  //     if (data.success) {
  //       fetchNotifications();
  //     }
  //   } catch (error) {
  //     console.error('Error sending notification:', error);
  //   }
  // };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const closeNotification = () => {
    setLatestNotification(null);
  };

  const toggleAllNotifications = () => {
    setShowAllNotifications(!showAllNotifications);
  };

  return (
    <header className="flex items-center h-20 px-0 sm:px-0.2 bg-white sticky top-0" style={{ backgroundColor: "#242526", color: "white" }}>
      <div className="flex items-center lg:pl-0" >
        <img
          src={logo}
          alt="Logo"
          style={{ height: '60px', backgroundColor: 'white' }}
        />
        <h1 className="text-lg font-bold hidden lg:block xl:block 2xl:block ml-4">
          CEC - UiPath Students Community
        </h1>
      </div>

      <button
        className="block sm:hidden absolute top-2 right-2 p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full"
        onClick={toggleMobileMenu}
      >
        <span className="sr-only">Menu</span>
        <svg
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </button>

      <div className="hidden sm:flex flex-shrink-0 items-center ml-auto border-l pl-3 ml-3 space-x-1">
        <button className="inline-flex items-center p-2 hover:bg-stone-600 rounded-lg">
          <span className="sr-only">User Menu</span>
          <div className="md:flex md:flex-col md:items-end md:leading-tight">
            <span className="font-semibold hidden sm:block">{userName}</span>
          </div>
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="hidden sm:block h-6 w-6 text-gray-300 ml-2"
            onClick={handleLogout}

          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full"
          onClick={() => {
            setLatestNotification(null);
            toggleAllNotifications();
          }}>
          <span className="sr-only">Notifications</span>
          <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full" />
          <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping" />
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        {showAllNotifications && (
      <div className="absolute top-16 right-4 z-10">
        {notifications.map((notification) => (
          <Notification
            key={notification._id}
            content={notification.content}
            onClose={() => setLatestNotification(null)}
          />
        ))}
      </div>
    )}

    <div className="fixed top-14 right-4 z-10">
      {latestNotification && (
        <Notification
          content={latestNotification.content}
          onClose={closeNotification}
        />
      )}
    </div>

        <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full" onClick={handleLogout}>
          <span className="sr-only">Log out</span>
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 z-50 bg-gray-800 bg-opacity-50">
          <div className="absolute top-0 right-0 p-4">
            <div className="bg-white p-6 rounded-md shadow-md w-64">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-800">{userName}</span>
                <button
                  className="text-gray-600 hover:text-gray-800"
                  onClick={toggleMobileMenu}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <button
                className="block w-full py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                onClick={() => {
                  toggleMobileMenu();
                  handleLogout();
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {isLogoutConfirmationOpen && (
        <LogoutConfirmationModal
          userName={userName}
          onCancel={toggleLogoutConfirmation}
          onConfirm={() => {
            toggleLogoutConfirmation();
            logout();
          }}
        />
      )}
    </header>
  );
};

export default QuizNav;
