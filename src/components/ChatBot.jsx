import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [chatResponses, setChatResponses] = useState([]);

  const handleSendMessage = async () => {
    // Simulate an API call
    const postData = { message: userInput };

    try {
      const data = await simulateApi(postData);
      const chatResponse = processChatResponse(data);
      setChatResponses(chatResponse);

      // Update this function based on your specific logic for user messages
      const newUserMessage = { type: 'user', text: userInput };
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);
      setUserInput('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const simulateApi = async (postData) => {
    // Simulate an API call
    return new Promise((resolve) => {
      // Replace this URL with the actual endpoint of your Python server
      fetch('http://localhost:8080', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => console.error('Error:', error));
    });
  };

  const processChatResponse = (data) => {
    if (typeof data.Response === 'object' && data.Response !== null && data.Response.Response) {
      return Array.isArray(data.Response.Response) ? data.Response.Response : [];
    }

    return [{ type: 'bot', text: data.Response || 'I do not understand.' }];
  };

  useEffect(() => {
    // You can implement additional logic here based on the API response or other events
  }, [chatResponses]);

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen && (
        <div className="bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[634px]">
          <div className="flex flex-col space-y-1.5 pb-6">
            <h2 className="font-semibold text-lg tracking-tight">CEC UiPath Community Bot</h2>
            <p className="text-sm text-[#6b7280] leading-3">Powered by AI</p>
          </div>

          <div className="pr-4 h-[474px]" style={{ minWidth: '100%', display: 'table' }}>
            {chatResponses.map((response, index) => (
              <div key={index} className={`flex gap-3 my-4 text-gray-600 text-sm flex-1`}>
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                  <div className="rounded-full bg-gray-100 border p-1">
                    {/* Replace this with your user or bot icon */}
                    {response.type === 'user' ? (
                      <svg
                        stroke="none"
                        fill="black"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Your user icon path */}
                      </svg>
                    ) : (
                      <svg
                        stroke="none"
                        fill="black"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Your bot icon path */}
                      </svg>
                    )}
                  </div>
                </span>
                <p className="leading-relaxed">
                  <span className="block font-bold text-gray-700">{response.type.toUpperCase()} </span>
                  {response.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center pt-0">
            <form className="flex items-center justify-center w-full space-x-2">
              <input
                className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
                placeholder="Type your message"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
                type="button"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        className={`fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium ${
          isOpen ? 'disabled:pointer-events-none disabled:opacity-50' : ''
        } border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900`}
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        data-state="closed"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white block border-gray-200 align-middle"
        >
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" className="border-gray-200"></path>
        </svg>
      </button>
    </div>
  );
};

export default ChatBot;
