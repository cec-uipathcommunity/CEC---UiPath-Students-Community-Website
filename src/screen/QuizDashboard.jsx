import React, { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import QuizNav from "../components/QuizNav";
const FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL || "http://localhost:5000";

const QuizDashboard = () => {
  const [errorMsge, setErrorMsge] = useState("");
  const [userDetails, setUserDetails] = useState({
    userName: "",
    userEmail: "",
    quizDetails: [],
  });
  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const token = localStorage.getItem("safeToken");
        const response = await fetch(`${FETCH_BASE_URL}/events/quizquest/quizdashboard/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const responseJSON = await response.json();

        if (responseJSON.success) {
          setUserDetails(responseJSON.user);
        } else {
          setErrorMsge(responseJSON.message || "Failed to load user information");
        }
      } catch (error) {
        console.error("Error:", error);
        setErrorMsge("An error occurred while fetching user information");
      }
    };

    fetchUserInformation();
  }, []);

  const { userName, quizDetails } = userDetails;

  return (
    <div>
      
      <QuizNav userName={userName}/>
      <Dashboard quizDetails={quizDetails} error={errorMsge} />
    </div>
  );
};

export default QuizDashboard;
