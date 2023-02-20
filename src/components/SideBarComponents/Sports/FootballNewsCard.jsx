import React from "react";

const FootballNewsCard = ({ news1 }) => {
  const handleClick = (event) => {
    event.preventDefault();
    window.open(news1.url, "_blank", "noreferrer");
  };
  return (
    <>
      <div className="w-full mt-2 mb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-500 ">
        <a href="#">
          <img
            className="rounded-t-lg w-full"
            src={news1.thumbnailUrl}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {news1.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
          <a
            onClick={handleClick}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
          >
            Watch it on YouTube
          </a>
        </div>
      </div>
    </>
  );
};

export default FootballNewsCard;
