import React from "react";
import { useState, useEffect } from "react";
import SportsNewsCard from "../SportsNewsCard";
import Tri from "../../../Loaders/Triangle";

const LaLiga = () => {
  const [news, setNews] = useState(null);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "543fd8b79cmsh4cbb981fecd88b8p10e7a7jsn1fd444155ef9",
      "X-RapidAPI-Host": "sofasport.p.rapidapi.com",
    },
  };
  useEffect(() => {
    const searchNews = async () => {
      try {
        const response = await fetch(
          "https://sofasport.p.rapidapi.com/v1/unique-tournaments/media?unique_tournament_id=8",
          options
        );
        const results = await response.json();
        setNews(results.data);
      } catch (error) {
        console.error(error);
      }
    };
    // console.log(news);
    searchNews();
  }, []);
  return (
    <>
      <div>
        {news ? (
          news.map((news1) => (
            <SportsNewsCard news1={news1} className="w-1/4" />
          ))
        ) : (
          <Tri />
        )}
      </div>
    </>
  );
};

export default LaLiga;
