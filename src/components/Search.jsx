import React, { useState, useContext, useEffect } from "react";
import searchIcon from "../assets/icon-search.svg";
import { Context } from "../context/context";

const Search = () => {
  const { category, fetchSearch, search, setSearch } = useContext(Context);

  useEffect(() => {
    fetchSearch();
  }, [search, category]);

  return (
    <div className="flex my-9  ">
      <img src={searchIcon} className="w-5 h-5 mr-5" />
      <input
        className="flex-1 h-5 bg-[#10141e] border-b-2 border-[#10141e] text-white pl-1 focus:outline-none focus:border-[#5A698F]   "
        placeholder={`search for ${
          category === "movie"
            ? "movie"
            : category === "tv"
            ? "tv"
            : category === "bookmark"
            ? "bookmarked shows"
            : "movies or TV series"
        }`}
        type="text"
        value={search}
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
