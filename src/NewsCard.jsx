import React from "react";

const NewsCard = ({ news1 }) => {
  return (
    <div className="movie">
      <div>
        <p>{news1.publishedAt.substring(0, 10)}</p>
        <p>{news1.publishedAt.substring(11, 19)}</p>
      </div>
      <div>
        <a href={news1.url} target="_blank" rel="noopener noreferrer">
          <img
            src={
              news1.urlToImage == null
                ? "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
                : news1.urlToImage
            }
            alt={news1.title}
          />
        </a>
      </div>
      <div>
        <span>{news1.title}</span>
        {/* <h3>{news1.descripton}</h3> */}
      </div>
    </div>
  );
};

export default NewsCard;
