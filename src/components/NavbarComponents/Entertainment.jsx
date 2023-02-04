import React, { useState, useEffect } from "react";
import NewsCardContainer from "../NewsCardContainer";
import axios from "axios";

const Entertainment = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const searchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?sources=entertainment-weekly&apiKey=58a6e0b58a6243b8900dc02ef32c8d03`
        );
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    searchNews();
  }, []);
  return (
    <>
      <NewsCardContainer i={news} />
    </>
  );
};

export default Entertainment;
