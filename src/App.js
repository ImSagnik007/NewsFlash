import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { FaSearch } from "react-icons/fa";

import "./App.css";

const API_URL = "https://newsapi.org/v2/everything";
const apiKey = "58a6e0b58a6243b8900dc02ef32c8d03";

const App = () => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchNews = async (title) => {
    const response = await fetch(
      `${API_URL}?q=${title}&sortBy=popularity&apiKey=${apiKey}`
    );
    const data = await response.json();

    setNews(data.articles);
    console.log(data.articles);
  };

  const searchInitialNews = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=58a6e0b58a6243b8900dc02ef32c8d03`
    );
    const data = await response.json();

    setNews(data.articles);
    console.log(data.articles);
  };

  useEffect(() => {
    searchInitialNews();
  }, []);

  return (
    <div className="app">
      <h1>NewsFlash</h1>

      <div className="search">
        <input
          placeholder="Search for any news"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch onClick={() => searchNews(searchTerm)} />
      </div>

      {news?.length > 0 ? (
        <div className="container">
          {news.map((news1) => (
            <NewsCard news1={news1} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No news found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
