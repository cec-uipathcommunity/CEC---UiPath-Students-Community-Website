import React, { useState, useEffect } from 'react';
const styles = `
/* AdminDashboard.css */

body {
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  text-align: center;
}

label {
  display: block;
  margin-bottom: 8px;
}

select,
input {
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  width: 100%;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  margin-top: -10px;
  margin-bottom: 10px;
  text-align: center;
}

  `;
const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserName, setSelectedUserName] = useState('');
  const [week, setWeek] = useState(2);
  const [correctQuestions, setCorrectQuestions] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [leaderboardPosition, setLeaderboardPosition] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/admin/getallusers', {
          headers: {
            'Authorization': `Bearer ${'UIPATHIAMTHESTUDENTDEVELOPERCHAMPION2023'}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        setError('Error fetching users. Please try again later.');
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
    if (!selectedUserName) {
      setError('Please select a user.');
      return;
    }

    const selectedUser = users.find(user => user.name === selectedUserName);

    if (!selectedUser) {
      setError('Selected user not found.');
      return;
    }

    const userId = selectedUser._id;

    // Convert minutes and seconds to total seconds before sending to the database
    const timeTakenInSeconds = parseInt(minutes, 10) * 60 + parseInt(seconds, 10);

    try {
      const response = await fetch('http://localhost:5000/admin/addquizdetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${'UIPATHIAMTHESTUDENTDEVELOPERCHAMPION2023'}`,
        },
        body: JSON.stringify({
          userId,
          week,
          correctQuestions,
          timeTaken: timeTakenInSeconds,
          leaderboardPosition,
          totalQuestions,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Quiz data submitted successfully:', data);

      // Optionally, clear the form for the next entry
      setWeek(2);
      setCorrectQuestions(0);
      setMinutes(0);
      setSeconds(0);
      setLeaderboardPosition(0);
      setTotalQuestions(10);
      setSelectedUserName('');
      setError(''); // Clear any previous error
    } catch (error) {
      setError('Error submitting quiz data. Please try again later.');
      console.error('Error submitting quiz data:', error);
    }
  };

  return (
    <div>
       <style>{styles}</style>
      <h1>Admin Dashboard</h1>
      <div>
        <label>Select User:</label>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <select value={selectedUserName} onChange={(e) => setSelectedUserName(e.target.value)}>
          <option value="" disabled>Select User</option>
          {users.map(user => (
            <option key={user._id} value={user.name}>{user.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Week:</label>
        <input type="number" value={week} onChange={(e) => setWeek(e.target.value)} />
      </div>
      <div>
      <div>
        <label>Leaderboard Position:</label>
        <input type="number" value={leaderboardPosition} onChange={(e) => setLeaderboardPosition(e.target.value)} />
      </div>
        <label>Correct Questions:</label>
        <input type="number" value={correctQuestions} onChange={(e) => setCorrectQuestions(e.target.value)} />
      </div>
      <div>
        <label>Time Taken:</label>
        <div>
          <label>Minutes:</label>
          <input type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
        </div>
        <div>
          <label>Seconds:</label>
          <input type="number" value={seconds} onChange={(e) => setSeconds(e.target.value)} />
        </div>
      </div>
      <div>
        <label>Total Questions:</label>
        <input type="number" value={totalQuestions} onChange={(e) => setTotalQuestions(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Submit Quiz Data</button>
    </div>
  );
};

export default AdminDashboard;
