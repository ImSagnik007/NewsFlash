import React, { useState, useEffect } from "react";
import NewsCardContainer from "../NewsCardContainer";
import axios from "axios";

const apiKey_SA = "58a6e0b58a6243b8900dc02ef32c8d03";
const apiKey_SG = "4eaa5190ac7844a787e3173728a3ae0f";

const Entertainment = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const searchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=58a6e0b58a6243b8900dc02ef32c8d03`
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
