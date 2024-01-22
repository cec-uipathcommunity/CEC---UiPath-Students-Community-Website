import React, { useState, useEffect } from "react";
import QuizSide from "./QuizSide";
import { Link } from 'react-router-dom';
import Countdown from '../components/countdown'
function DashboardQuiz(props) {
  const { quizDetails,error } = props;
  const [latestWeekNumber, setLatestWeekNumber] = useState(0);

    const [isDiv1Visible, setDiv1Visible] = useState(true);
  
    const toggleDivs = () => {
      setDiv1Visible(!isDiv1Visible);
    };

  useEffect(() => {
    const latestWeek = quizDetails.length > 0 ? Math.max(...quizDetails.map((quiz) => quiz.week)) : 0;
    setLatestWeekNumber(latestWeek);
  }, [quizDetails]);

  const totalScore = quizDetails.reduce((acc, quiz) => acc + quiz.correctQuestions, 0);
  const totalQuizCount = quizDetails.length;
  const averageScore = totalQuizCount > 0 ? totalScore / totalQuizCount : 0;
  const averageLeaderboardPosition = totalQuizCount > 0 ? quizDetails.reduce((acc, quiz) => acc + quiz.leaderboardPosition, 0) / totalQuizCount : 0;

  const latestWeekDetails = quizDetails.find((quiz) => quiz.week === latestWeekNumber) || {};
  const latestWeekTotalQuestion = latestWeekDetails.totalQuestions || 0;
  const latestWeekLeaderboardPosition = latestWeekDetails.leaderboardPosition || 0;
  const latestWeekScore = latestWeekDetails.correctQuestions || 0;
  const timeInLatestWeekQuiz = latestWeekDetails.timeTaken || 0;

  const minutes = Math.floor(timeInLatestWeekQuiz / 60);
  const seconds = timeInLatestWeekQuiz % 60;
  const formattedTime = timeInLatestWeekQuiz > 60 ? `${minutes}:${seconds} min` : `${seconds} sec`;



  // Placeholder Icons
  // const averageScoreIcon = (
  //   <svg
  //     aria-hidden="true"
  //     fill="none"
  //     viewBox="0 0 24 24"
  //     stroke="currentColor"
  //     className="h-6 w-6"
  //   >
  //     {/* Placeholder icon for Average Score */}
  //     <circle cx="12" cy="12" r="10" />
  //   </svg>
  // );
  const latestWeekLeaderboardIcon = (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6"
    >
      {/* Placeholder icon for Latest Week Leaderboard Position */}
      {/* You can replace the placeholder with an appropriate icon */}
      <circle cx="12" cy="12" r="10" />
    </svg>
  );

  const lastWeekScoreIcon = (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6"
    >
      {/* Placeholder icon for Last Week Score */}
      {/* You can replace the placeholder with an appropriate icon */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );

  const totalAttendedQuizIcon = (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6"
    >
      {/* Placeholder icon for Total Attended Quiz */}
      {/* You can replace the placeholder with an appropriate icon */}
      <circle cx="12" cy="12" r="10" />
    </svg>
  );

  const averageLeaderboardPositionIcon = (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6"
    >
      {/* Placeholder icon for Average Leaderboard Position */}
      {/* You can replace the placeholder with an appropriate icon */}
      <circle cx="12" cy="12" r="10" />
    </svg>
  );

  const [selectedWeek, setSelectedWeek] = useState('Week 1');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const studentsData = {
    'Week 1': [
      { name: 'Shreesha', score: '4/5 ', timeTaken: '0:35' },
      { name: 'Achala P R', score: '4/5 ', timeTaken: '0:35' },
      { name: 'Srushti Rajendra Naik', score: '4/5 ', timeTaken: '0:39' },
      { name: 'Praharsh T', score: '4/5 ', timeTaken: '0:43' },
      { name: 'Rinisha S Prabhu', score: '4/5 ', timeTaken: '0:44' },
    ],
    'Week 2': [
      { name: 'Srushti Rajendra Naik', score: '9/10 ', timeTaken: '1:40' },
      { name: 'Bhoomika  Kamat', score: '7/10 ', timeTaken: '1:32' },
      { name: 'Praharsh T', score: '7/10 ', timeTaken: '1:40' },
      { name: 'Rakshitha B Bhajentri', score: '7/10 ', timeTaken: '1:42' },
      { name: 'P Shreekar Shenoy', score: '7/10 ', timeTaken: '1:52' },
    ],
  };


  const handleWeekChange = (week) => {
    setSelectedWeek(week);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // quizDetails.map((quiz) => (
  //             <li key={quiz.week}>
  //               <p>Week {quiz.week}:</p>
  //               <p>Correct Questions: {quiz.correctQuestions}</p>
  //               <p>Time Taken: {quiz.timeTaken}</p>
  //               <p>Leaderboard Position: {quiz.leaderboardPosition}</p>
  //               <p>Total Questions: {quiz.totalQuestions}</p>
  //             </li>
  //           ))}
  return (
    <div>
     {isDiv1Visible ? ( <div className="flex bg-gray-100 min-h-screen">
        <QuizSide  />

        <div className="flex-grow text-gray-800">
          <main className="p-6 sm:p-10 space-y-6">
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
              <div className="mr-6">
                <h1 className="text-4xl font-semibold mb-2">Quiz Quest Dashboard</h1>
              </div>
              {(error && <div className="error">{error}</div>) || (<h1 className="text-sm font-semibold mb-2">Data Upto Quiz Quest Week 2</h1>)}
              {/* <div className="flex flex-wrap items-start justify-end -mb-3">
          <button className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            Manage dashboard
          </button>
        </div> */}
            </div>
            <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.707 11.707a1 1 0 010 1.414 1 1 0 01-1.414 0L11 13.414V7a1 1 0 012 0v5.586l1.707-1.707a1 1 0 011.414 0zM12 4a8 8 0 100 16 8 8 0 000-16z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={toggleDivs}>
                    Start Quiz Week 3

                  </button>
                  <div><span className="block text-gray-500">
                    on 23-01-2024
                  </span></div>
                </div>
              </div>
              

              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">102</span>
                  <span className="block text-gray-500">Total Participants</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
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
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">{averageScore.toFixed(2)}</span>
                  <span className="block text-gray-500">Your Average Score</span>
                </div>
              </div>



              {/* Latest Week Leaderboard Position */}
              <div className="flex items-center p-8 bg-white shadow rounded-lg mb-4">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                  {latestWeekLeaderboardIcon}
                </div>
                <div>
                  <span className="inline-block text-2xl font-bold">{latestWeekLeaderboardPosition}</span>
                  <span className="block text-gray-500">Week {latestWeekNumber} Leaderboard Position</span>
                </div>
              </div>

              {/* Last Week Score */}
              <div className="flex items-center p-8 bg-white shadow rounded-lg mb-4">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                  {lastWeekScoreIcon}
                </div>
                <div>
                  <span className="inline-block text-2xl font-bold">{latestWeekScore}/{latestWeekTotalQuestion}</span>
                  <span className="block text-gray-500">Week {latestWeekNumber} Score</span>
                </div>
              </div>

              {/* Total Attended Quiz */}
              <div className="flex items-center p-8 bg-white shadow rounded-lg mb-4">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
                  {totalAttendedQuizIcon}
                </div>
                <div>
                  <span className="inline-block text-2xl font-bold">{totalQuizCount}</span>
                  <span className="block text-gray-500">Total Attended Quiz</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg mb-4">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">{formattedTime}</span>
                  <span className="block text-gray-500">Week {latestWeekNumber} Time Taken</span>
                </div>
              </div>
              {/* Average Leaderboard Position */}
              <div className="flex items-center p-8 bg-white shadow rounded-lg mb-4">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                  {averageLeaderboardPositionIcon}
                </div>
                <div>
                  <span className="inline-block text-2xl font-bold">{averageLeaderboardPosition.toFixed(2)}</span>
                  <span className="block text-gray-500">Average Leaderboard Position</span>
                </div>
              </div>

            </section>
            <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      fill="#fff"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl ">Not Completed</span>
                  <span className="block text-gray-500">Automation Explorer</span>
                </div>
              </div>
              
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.707 11.707a1 1 0 010 1.414 1 1 0 01-1.414 0L11 13.414V7a1 1 0 012 0v5.586l1.707-1.707a1 1 0 011.414 0zM12 4a8 8 0 100 16 8 8 0 000-16z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <Link to="/events/quizquest/leaderboard1"><button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                   >
                    Check the LeaderBoard
                    

                  </button></Link>
                  
                </div>
              </div>
              <div className="row-span-3 bg-white shadow rounded-lg">
                <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                  <span>LeaderBoard</span>
                  <div className="relative inline-block text-left">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600"
                      onClick={toggleDropdown}
                    >
                      {selectedWeek}
                      <svg
                        className="-mr-1 ml-1 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {dropdownOpen && (
                      <div className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg">
                        <div className="py-1 rounded-md bg-white shadow-xs">
                          <button
                            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                            onClick={() => handleWeekChange('Week 1')}
                          >
                            Week 1
                          </button>
                          <button
                            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                            onClick={() => handleWeekChange('Week 2')}
                          >
                            Week 2
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="overflow-y-auto" style={{ maxHeight: '24rem' }}>
                  <ul className="p-6 space-y-6">
                    {studentsData[selectedWeek].map((student, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-gray-600">{student.name}</span>
                        <span className="ml-auto font-semibold">{student.score}</span>
                        <span className="ml-3 text-gray-600">{student.timeTaken}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">3</span>
                  <span className="block text-gray-500">No. of Quiz Left</span>
                </div>
              </div>
              
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.707 11.707a1 1 0 010 1.414 1 1 0 01-1.414 0L11 13.414V7a1 1 0 012 0v5.586l1.707-1.707a1 1 0 011.414 0zM12 4a8 8 0 100 16 8 8 0 000-16z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <Link to="/events/quizquest/praticequiz"><button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                   >
                    Take a Pratice Quiz

                  </button></Link>
                  
                </div>
                
              </div>
              {/* <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
                <div className="px-6 py-5 font-semibold border-b border-gray-100">
                  Students by type of studying
                </div>
                <div className="p-4 flex-grow">
                  <div className="flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                    Chart
                  </div>
                </div>
              </div> */}
            </section>
            
          </main>
        </div>

      </div>) : (
        <Countdown  /> 

        )}

    </div>
  )
}

export default DashboardQuiz
