import React, { useContext } from "react";
import bookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import bookmarkFull from "../assets/icon-bookmark-full.svg";
import movie from "../assets/icon-category-movie.svg";
import tv from "../assets/icon-category-tv.svg";
import { Context } from "../context/context";

const MovieItem = ({ url, ranking, type, title, item }) => {
  const { addBookmark, bookmarkData } = useContext(Context);

  return (
    <div className="relative ">
      <div
        className="absolute bg-[#10141E] w-8 h-8 rounded-full flex items-center justify-center top-2 right-2  cursor-pointer z-50 "
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
        className="w-44  h-28 rounded-[8px] md:w-60 md:h-32 xl::w-76 xl:h-44 "
      />
      <div className="mt-4">
        <div className="flex items-center text-sm opacity-80">
          <p className="text-white">{ranking.toFixed(1)} -</p>
          <img
            src={type === "movie" ? movie : tv}
            className=" w-3 h-3 mr-2 ml-2"
          />
          <p className="text-white">- {type === "movie" ? "movie" : "tv"}</p>
        </div>
        <h2 className="text-white text-bold text-xl">
          {title.length > 14 ? title.slice(0, 12) + "..." : title}
        </h2>
      </div>
    </div>
  );
};

export default MovieItem;
