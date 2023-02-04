import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import "./App.css";
import NewsCardContainer from "./components/NewsCardContainer";
import SearchBar from "./components/SearchBar";
import Business from "./components/NavbarComponents/Business";
import Entertainment from "./components/NavbarComponents/Entertainment";
import General from "./components/NavbarComponents/General";
import Health from "./components/NavbarComponents/Health";
import Science from "./components/NavbarComponents/Science";
import Sports from "./components/NavbarComponents/Sports";
import Technology from "./components/NavbarComponents/Technology";
import Footer from "./components/Footer";
import { FaSearch } from "react-icons/fa";
import backgroundImage from "./media/background.jpeg";

const API_URL = "https://newsapi.org/v2/everything";
const apiKey_SA = "58a6e0b58a6243b8900dc02ef32c8d03";
const apiKey_SG = "4eaa5190ac7844a787e3173728a3ae0f";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const searchInitialNews = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey_SG}`
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
        <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        <SearchBar
          setNews1={setNews}
          searchTerm1={searchTerm}
          setSearchTerm1={setSearchTerm}
        />

        {selectedTab === "" && <NewsCardContainer i={news} />}
        {selectedTab === "Business" && <Business />}
        {selectedTab === "Entertainment" && <Entertainment />}
        {selectedTab === "General" && <General />}
        {selectedTab === "Health" && <Health />}
        {selectedTab === "Science" && <Science />}
        {selectedTab === "Sports" && <Sports />}
        {selectedTab === "Technology" && <Technology />}

        <Footer />
      </div>
    </>
  );
};

export default App;
