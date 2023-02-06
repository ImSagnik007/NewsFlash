import React from "react";
import NewsCard from "./NewsCard";
import "../App.css";
import LazyLoad from "react-lazy-load";
import DNA from "./Loaders/DNA";
import SearchBar from "./SearchBar";

const NewsCardContainer = ({ i }) => {
  return i?.length > 0 ? (
    <div className="w-full h-full justify-center items-center box-border flex flex-wrap -mx-4">
      {i.map((news1) => (
        <NewsCard news1={news1} className="w-1/4" />
      ))}
    </div>
  ) : (
    <DNA />
  );
};

export default NewsCardContainer;
