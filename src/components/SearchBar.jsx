import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../App.css";
import Loading from "./Loaders/Bar";

const API_URL = "https://newsapi.org/v2/everything";

const apiKey_SA = "58a6e0b58a6243b8900dc02ef32c8d03";
const apiKey_SG = "4eaa5190ac7844a787e3173728a3ae0f";

const SearchBar = ({ setNews1, searchTerm1, setSearchTerm1 }) => {
  // const [loading, setLoading] = useState(true);
  const searchNews = async (title) => {
    const response = await fetch(
      `${API_URL}?q=${title}&sortBy=popularity&apiKey=${apiKey_SG}`
    );
    const data = await response.json();
    setNews1(data.articles);
    // setLoading(false);
    console.log(data.articles);
  };
  const enterToSearch = (key) => {
    if (key.code == "Enter") {
      searchNews(searchTerm1);
    }
  };
  // if (loading) {
  //     return <Loading />;
  //   }

  return (
    <div
      className="w-1/2 mt-24 mr-8 mb-8 ml-8 px-6 py-7 flex align-center items-center rounded-3xl bg-[#1f2123]"
      style={{ borderRadius: "3rem" }}
    >
      <input
        className="flex-1 outline-none text-[#a1a1a1] bg-[#1f2123] pr-4 font-medium"
        placeholder="Search for any news"
        value={searchTerm1}
        onChange={(e) => setSearchTerm1(e.target.value)}
        onKeyDown={enterToSearch}
      />
      <FaSearch
        className=" cursor-pointer h-5 w-5 text-[#a1a1a1]"
        onClick={() => searchNews(searchTerm1)}
      />
    </div>
  );
};

export default SearchBar;
