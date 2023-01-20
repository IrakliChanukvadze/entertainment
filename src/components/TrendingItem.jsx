import React, { useContext } from "react";
import bookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import bookmarkFull from "../assets/icon-bookmark-full.svg";
import movie from "../assets/icon-category-movie.svg";
import tv from "../assets/icon-category-tv.svg";
import { Context } from "../context/context";

const TrendingItem = ({ url, ranking, type, title, item }) => {
  const { addBookmark, bookmarkData } = useContext(Context);
  return (
    <div className="relative w-[16rem]  h-44 md:w-[24rem]  md:h-60 xl:w-[30rem]  xl:h-72 ">
      <div
        className="absolute bg-black w-8 h-8 rounded-full flex items-center justify-center top-2 right-2  cursor-pointer z-50 "
        onClick={() => addBookmark(item, type)}
      >
        <img
          src={
            bookmarkData?.some((next) => next.id === item.id)
              ? bookmarkFull
              : bookmarkEmpty
          }
          alt="bookmark"
          className=" w-3 h-4"
        />
      </div>
      <img
        src={url}
        className="w-[16rem]  h-44 md:w-[24rem]  md:h-60 xl:w-[30rem]  xl:h-72  rounded-[8px] opacity-50 "
      />
      <div className="absolute left-4 bottom-4 ">
        <div className="flex items-center text-base opacity-80">
          <p className="text-white">{ranking.toFixed(1)} -</p>
          <img src={type === "movie" ? movie : tv} className=" w-3 h-3" />
          <p className="text-white">- {type === "movie" ? "movie" : "tv"}</p>
        </div>
        <h2 className="text-white text-bold text-2xl">
          {title.length > 14 ? title.slice(0, 12) + "..." : title}
        </h2>
      </div>
    </div>
  );
};

export default TrendingItem;
