import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FETCH_BASE_URL = "http://localhost:5000";

const Login = () => {
  const navigate = useNavigate();
  const [errorMsge, setErrorMsge] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleLogIn = async () => {
    if (userData.email === "" || userData.password === "") {
      setErrorMsge("Please Fill The Form");
      return;
    }
    console.log(userData)

    try {
      const response = await fetch(`${FETCH_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log(response)
      const responseJSON = await response.json();

      if (responseJSON.success) {
        localStorage.setItem("safeToken", responseJSON.authToken);
        localStorage.setItem("userName", responseJSON.userName);

        navigate("/events/quizquest/quizdashboard");
      } else {
        setErrorMsge(responseJSON.message || "Login Failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMsge("An error occurred while logging in");
    }
  };
  const changeUserInfo = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Quiz Quest
              </h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogIn();
                }}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Email ID"
                    value={userData.email}
                    onChange={(e) => changeUserInfo("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={userData.password}
                    onChange={(e) => changeUserInfo("password", e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <div className="error">{errorMsge}</div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;