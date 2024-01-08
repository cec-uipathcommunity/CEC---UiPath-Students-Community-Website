import React from "react";

const Benefits = (props) => {
  const { data } = props;
  const isImgRight = props.imgPos === "right";

  return (
    <div className={`container p-8 mx-auto xl:px-0 ${props.className || ""}`}>
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            isImgRight ? "lg:order-2" : ""
          }`}
        >
          <img
            src={data.image}
            width="521"
            height="auto"
            alt="Benefits"
            className={"object-cover"}
            placeholder="blur"
            blurDataURL={data.image.src}
          />
        </div>

        <div
          className={`flex flex-col w-full lg:w-1/2 ${
            isImgRight ? "lg:justify-end lg:pr-8" : "lg:pl-8"
          }`}
        >
          <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white text-center lg:text-left">
            {data.title}
          </h3>

          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 text-center lg:text-left">
            {data.desc}
          </p>

          <div className="w-full lg:w-auto mx-auto"> {/* Updated class here */}
            {data.bullets.map((item, index) => (
              <div key={index} className="flex items-start mt-8 space-x-3">
                <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
                  {/* Replace this with your icon component */}
                  <svg
                    className="w-7 h-7 text-indigo-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM4 10a6 6 0 1112 0 6 6 0 01-12 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
