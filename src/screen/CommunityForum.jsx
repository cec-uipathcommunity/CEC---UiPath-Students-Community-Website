// CommunityForum.js
import React, { useState } from 'react';

const CommunityForum = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (newComment.trim() === '') {
      return;
    }

    // Assuming you have a backend/API to handle comment submissions
    // You can replace this with your actual API call
    const updatedComments = [...comments, { content: newComment, author: 'User', timestamp: new Date() }];
    setComments(updatedComments);
    setNewComment('');
  };

  return (
    <div className="container mx-auto my-8 p-6 bg-white rounded shadow-lg max-w-3xl">
      <h2 className="text-3xl font-semibold mb-4">Tech Discussion Forum</h2>

      <form onSubmit={handleCommentSubmit} className="mb-6">
        <textarea
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Share your thoughts..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
        >
          Post Comment
        </button>
      </form>

      <div className="comments">
        {comments.map((comment, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-gray-800">{comment.author}</span>
              <span className="text-gray-500">{comment.timestamp.toLocaleString()}</span>
            </div>
            <p className="text-gray-800">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityForum;
