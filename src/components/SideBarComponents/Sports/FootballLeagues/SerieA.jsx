import React from "react";
import { useState, useEffect } from "react";
import FootballNewsCard from "../FootballNewsCard";
import Tri from "../../../Loaders/Triangle";

const apiKey_AR = "6dcc36f686msh40ba53b28ada5d1p1300c0jsn483767e97d25";
const apiKey_SA = "543fd8b79cmsh4cbb981fecd88b8p10e7a7jsn1fd444155ef9";
const apiKey_SG = "92d922663fmshee7216999bd1f87p1efd81jsn516d82657ca9";

const SerieA = () => {
  const [news, setNews] = useState(null);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey_AR,
      "X-RapidAPI-Host": "sofasport.p.rapidapi.com",
    },
  };
  useEffect(() => {
    const searchNews = async () => {
      try {
        const response = await fetch(
          "https://sofasport.p.rapidapi.com/v1/unique-tournaments/media?unique_tournament_id=23",
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
            <FootballNewsCard news1={news1} className="w-1/4" />
          ))
        ) : (
          <Tri />
        )}
      </div>
    </>
  );
};

export default SerieA;
