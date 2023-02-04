import React, { useState, useEffect } from "react";
import NewsCardContainer from "../NewsCardContainer";
import axios from "axios";

const Business = () => {
  const [news, setNews] = useState([]);
  const searchNews = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines/sources?category=science&apiKey=58a6e0b58a6243b8900dc02ef32c8d03`
    );
    const data = await response.json();
    setNews(data.articles);

    console.log(data.articles);
  };

  return (
    <>
      <NewsCardContainer i={news} />
    </>
  );
};

export default Business;
