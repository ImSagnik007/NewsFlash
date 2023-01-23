import React, { useState, useEffect } from "react";
import classnames from "classnames";
import axios from "axios";

const NewsCard = ({ news1 }) => {
  const [showBackground, setShowBackground] = useState(true);
  const [hovered, setHovered] = useState(false);

  const defaultImageUrl =
    "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png";

  const handleClick = (event) => {
    event.preventDefault();
    window.open(news1.url, "_blank", "noreferrer");
  };

  const titleWords = news1.title ? news1.title.split(" ") : [];
  const truncatedTitle =
    titleWords.length > 7
      ? `${titleWords.slice(0, 7).join(" ")}...`
      : news1.title;

  const descriptionWords = news1.description
    ? news1.description.split(" ")
    : [];
  const truncatedDescription =
    descriptionWords.length > 11
      ? `${descriptionWords.slice(0, 11).join(" ")}...Read more`
      : news1.description;

  return (
    <div
      className={classnames(
        "w-[270px] h-[300px] relative m-6 bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer box-border transform ",
        { "scale-x-105 scale-y-105": hovered }
      )}
      onMouseEnter={() => {
        setShowBackground(false);
        setHovered(true);
      }}
      onMouseLeave={() => {
        setShowBackground(true);
        setHovered(false);
      }}
      onClick={handleClick}
    >
      <img
        src={news1.urlToImage || defaultImageUrl}
        alt={news1.title}
        className={`w-full h-full object-cover shadow-lg ${
          showBackground ? "" : "opacity-30"
        }`}
      />
      <div className={`absolute bottom-0 left-0 right-0 p-6`}>
        <h3
          className={`text-2xl font-bold transition-all duration-700 ${
            hovered ? "text-gray-600 " : "text-white font-outline-4"
          } `}
        >
          {truncatedTitle}
        </h3>

        {!showBackground ? (
          <>
            <h2
              className={`text-xl text-gray-900 leading-tight transition-all duration-700 `}
            >
              {truncatedDescription}
            </h2>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default NewsCard;
