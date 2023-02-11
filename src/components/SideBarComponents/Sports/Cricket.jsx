import React from "react";
import { useState, useEffect } from "react";
import Tri from "../../Loaders/Triangle";
import CricketNewsCard from "./CricketNewsCard";

const apiKey_SO = "7c0a7dd7-a8bc-4bcf-abae-fd072b0cad28";
const apiKey_SA = "18d2c9e8-c16b-4db8-afca-1cc29a3eff3f";
const apiKey_AR = "7afdbe8c-5cb3-4a96-a989-2081645755a2";

const Cricket = () => {
  const [news, setNews] = useState(null);
  useEffect(() => {
    const searchNews = async () => {
      try {
        const response = await fetch(
          `https://api.cricapi.com/v1/currentMatches?apikey=${apiKey_SO}&offset=0`
        );
        const results = await response.json();
        setNews(results.data.slice(0, 20));
      } catch (error) {
        console.error(error);
      }
    };
    searchNews();
  }, []);
  return (
    <>
      <div>
        {news ? (
          news.map((news1) => (
            <CricketNewsCard news1={news1} className="w-1/4" />
          ))
        ) : (
          <Tri />
        )}
      </div>
    </>
  );
};

export default Cricket;
