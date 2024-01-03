import TypingEff from "../components/TypingEff";
import Timer from "../components/Timer";
import React from "react";
import QuizPos from '../image/quiz_post.jpeg'
function Quiz() {
  return (
    <>
    <TypingEff/>
      <div className="relative bg-white pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  QuizQuest
                </h1>
                <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                <div className="max-w-3xl mx-auto p-4 text-left">
                <ul className="flex flex-wrap items-center">
                  
                  <li>
                    <a
                      href="/events/quizquest1"
                      className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-primary dark:text-white">
                      
                      <Timer deadline={new Date(2024, 0, 3, 19, 30, 0)} />

                    </a>
                    <li>
                    <a
                      href="/events/quizquest1"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                    >
                      Join
                    </a>
                  </li>
                  </li>
                </ul>
                
      <h1 className="text-3xl font-bold mb-6">Rules and Regulations</h1>
      <div className="mb-8">
        
        <h2 className="text-2xl font-bold mb-4">Event Schedule:</h2>
        <p><strong>Online Quiz Rounds:</strong> Every Wednesday at 7:30 PM</p>
        <p><strong>Final Round (Offline Mode):</strong> To be held at the college</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Competition Structure:</h2>
        <p><strong>Online Rounds (1st Round):</strong></p>
        <p>5 weeks of online quizzes</p>
        <p><strong>Time:</strong> 7:30 PM every Monday</p>
        <p>Top 40% participants qualify for the Final Round</p>
        <p><strong>Final Round (2nd Round):</strong></p>
        <p>Offline mode at the college</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Eligibility Criteria:</h2>
        <p>Enrollment in the Free UiPath Automation Explore Course on UiPath Academy is mandatory.</p>
        <p>Completion of the course by January 15, 2024, is required for Final Round eligibility.</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Prizes and Goodies:</h2>
        <p>Exciting rewards await the champions!</p>
      </div>
    </div>
                </p>
               
                
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src={QuizPos}
                    alt="hero"
                    className="max-w-full lg:ml-auto"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
