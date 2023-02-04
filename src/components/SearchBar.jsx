import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../App.css";
import Loading from "./Loading";

const API_URL = "https://newsapi.org/v2/everything";
const apiKey = "58a6e0b58a6243b8900dc02ef32c8d03";

const SearchBar = ({ setNews1, searchTerm1, setSearchTerm1 }) => {
  // const [loading, setLoading] = useState(true);
  const searchNews = async (title) => {
    const response = await fetch(
      `${API_URL}?q=${title}&sortBy=popularity&apiKey=${apiKey}`
    );
    const data = await response.json();
    setNews1(data.articles);
    // setLoading(false);
    console.log(data.articles);
  };
  const enterToSearch=(key)=>{
    if(key.code=="Enter"){
      searchNews(searchTerm1)
    }
  };
  // if (loading) {
  //     return <Loading />;
  //   }

  return (
    <div className="search h-16">
      <input
        className="flex-1 outline-none "
        placeholder="Search for any news"
        value={searchTerm1}
        onChange={(e) => setSearchTerm1(e.target.value)}
        onKeyDown={enterToSearch}
      />
      <FaSearch className=" cursor-pointer h-5 w-5 text-[#a1a1a1]" onClick={() => searchNews(searchTerm1)} />
    </div>
  );
};

export default SearchBar;
