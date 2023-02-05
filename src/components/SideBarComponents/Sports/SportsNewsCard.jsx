import React from "react";

const SportsNewsCard = ({ news1 }) => {
  return (
    <>
      <div>
        <h2>{news1.title}</h2>
        <a href={news1.url} target="_blank" rel="noreferrer">
          Watch it on youtube
        </a>
      </div>
    </>
  );
};

export default SportsNewsCard;
