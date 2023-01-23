import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import "./App.css";
import NewsCardContainer from "./components/NewsCardContainer";
import SearchBar from "./components/SearchBar";
import { FaSearch } from "react-icons/fa";
import backgroundImage from "./media/background.jpeg";

const API_URL = "https://newsapi.org/v2/everything";
const apiKey = "58a6e0b58a6243b8900dc02ef32c8d03";

const App = () => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const searchNews = async (title) => {
    if (loading) {
      return <Loading />;
    }
    const response = await fetch(
      `${API_URL}?q=${title}&sortBy=popularity&apiKey=${apiKey}`
    );
    const data = await response.json();

    setNews(data.articles);
    setLoading(false);
    console.log(data.articles);
  };

  const searchInitialNews = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=58a6e0b58a6243b8900dc02ef32c8d03`
    );
    const data = await response.json();

    setNews(data.articles);
    setLoading(false);
    console.log(data.articles);
  };

  useEffect(() => {
    searchInitialNews();
  }, []);

  if (loading) {
    return <Loading />;
  }

  // console.log(news);

  return (
    <>
      <div className="flex justify-center items-center flex-col box-border bg-center bg-fixed">
        <Navbar />

        <SearchBar
          setNews1={setNews}
          searchTerm1={searchTerm}
          setSearchTerm1={setSearchTerm}
        />

        <NewsCardContainer i={news} />
      </div>
    </>
  );
};

export default App;
