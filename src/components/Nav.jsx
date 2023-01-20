import React, { useState, useContext } from "react";
import home from "../assets/icon-nav-home.svg";
import tv from "../assets/icon-nav-tv-series.svg";
import categoryTv from "../assets/icon-category-tv.svg";
import movies from "../assets/icon-nav-movies.svg";
import categoryMovie from "../assets/icon-category-movie.svg";
import bookmark from "../assets/icon-nav-bookmark.svg";
import bookmarkFull from "../assets/icon-bookmark-full.svg";
import bookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import profile from "../assets/image-avatar.png";
import logo from "../assets/logo.svg";
import categoryHome from "../assets/category-home.png";
import { Link } from "react-router-dom";
import { Context } from "../context/context";

const Nav = () => {
  const { setCategory, category, bookmarkData } = useContext(Context);
  return (
    <div className="w-full bg-[#161D2F] h-14 fixed  flex justify-center gap-6  items-center z-[5000] opacity-100 md:h-20 md:w-[94vw] md:ml-[3vw] md:mt-6 md:gap-8  xl:flex-col xl:h-[94vh]  xl:w-32 xl:justify-start xl:pt-32 ">
      <img
        src={logo}
        className="w-6 h-5 absolute md:w-8 md:h-6 left-6 xl:left-12 xl:top-6 "
      />
      <Link to="/entertainment">
        <img
          src={category === "all" ? categoryHome : home}
          className="w-4 h-4 md:w-5 md:h-5 "
          onClick={() => setCategory("all")}
        />
      </Link>
      <Link to="/movie">
        <img
          src={category === "movie" ? categoryMovie : movies}
          className="w-4 h-4 md:w-5 md:h-5 "
          onClick={() => setCategory("movie")}
        />
      </Link>
      <Link to="/tv">
        <img
          src={category === "tv" ? categoryTv : tv}
          className="w-4 h-4 md:w-5 md:h-5 "
          onClick={() => setCategory("tv")}
        />
      </Link>
      <Link to="/bookmark">
        <img
          src={
            category != "bookmark"
              ? bookmark
              : bookmarkData.length > 0
              ? bookmarkFull
              : bookmarkEmpty
          }
          className="w-4 h-4 md:w-5 md:h-5 "
          onClick={() => setCategory("bookmark")}
        />
      </Link>

      <img
        src={profile}
        className="w-6 h-6 absolute right-6  md:w-8 md:h-8 xl:bottom-6 xl:right-11 xl:w-10 xl:h-10"
      />
    </div>
  );
};

export default Nav;
