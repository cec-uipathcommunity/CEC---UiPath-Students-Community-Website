import React from "react";
import Blog from "../components/Blog";
import quizImg from "../image/quiz_post.jpeg";
import intro_uipath from "../image/intro_uipath.jpg";
import intro_muk from "../image/Exploring UiPath Studio.png"
import { Link } from "react-router-dom";
const Events = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <>
      <div>
        <div className="-mx-4" onClick={() => openInNewTab("")}>
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Recent Events
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Sessions and Events
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 justify-around">
        <Blog
            imgs={intro_muk}
            title={"Exploring UiPath Studio: A Beginner's guide to Automation"}
            desc={
              `An Online Webiner talk on "Exploring UiPath Studio: A Beginner's guide to Automation" by Mr. Mukesh Kala" `
            }
            dates={"Every Wednesday of Jan 2024"}
            badgen={"Completed"}
          />
             <Link to="/events/quizquest/quizdashboard">  <Blog
            imgs={quizImg}
            title={"QuizQuest"}
            desc={
              "Join us every Wednesday at 7:30 PM for online quiz rounds, culminating in a final offline round at the college."
            }
            dates={"Every Wednesday of Jan 2024"}
            badgen={"Ongoing"}
          /></Link>
        
          <Blog
            imgs={intro_uipath}
            title={"An Introduction to Automation Using UiPath"}
            desc={
              'The Department of CSE organised a talk on "An Introduction to Automation Using UiPath". Mr. Arpan Bangera, programmer Analyst/Senior RPA developer at Novigo Solutions Pvt. Ltd. ...'
            }
            dates={"21-12-2023"}
            badgen={"Completed"}
          />
        </div>
      </div>
    </>
  );
};

export default Events;
