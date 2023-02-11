import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../App.css";
import Tri from "./Loaders/Triangle";

const API_URL = "https://newsapi.org/v2/everything";

const apiKey_SA = "58a6e0b58a6243b8900dc02ef32c8d03";
const apiKey_SG = "4eaa5190ac7844a787e3173728a3ae0f";

const SearchBar = ({ setNews1, searchTerm1, setSearchTerm1 }) => {
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();

    setLoading(true);

    const response = await fetch(
      `${API_URL}?q=${searchTerm1}&sortBy=popularity&apiKey=${apiKey_SA}`
    );
    const data = await response.json();
    setNews1(data.articles);

    setLoading(false);
  };
  return (
    <>
      <div
        className="w-8/10 mt-8 mr-8 mb-8 ml-8 px-6 py-7 flex align-center items-center rounded-3xl bg-[#1f2123] justify-between"
        style={{ borderRadius: "3rem" }}
      >
        <form onSubmit={handleSearch} className="w-full">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm1}
            onChange={(event) => setSearchTerm1(event.target.value)}
            className="flex-1 outline-none text-[#a1a1a1] bg-[#1f2123] pr-4 text-xl w-full"
          />
        </form>
        <button
          className="bg-[#1f2123] text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
          onClick={handleSearch}
        >
          <FaSearch />
        </button>
      </div>
      {loading && <Tri />}
    </>
  );
};

export default SearchBar;
