import React, { useContext, useState } from "react";
import bookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import bookmarkFull from "../assets/icon-bookmark-full.svg";
import movie from "../assets/icon-category-movie.svg";
import tv from "../assets/icon-category-tv.svg";
import { Context } from "../context/context";
import { useNavigate } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";

const TrendingItem = ({ url, ranking, type, title, item, id }) => {
  const { addBookmark, bookmarkData, fetchSingleMovieLinkWithVideos } =
    useContext(Context);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="relative w-[16rem]  h-44 md:w-[24rem]  md:h-60 xl:w-[30rem]  xl:h-72  "
      onMouseLeave={() => {
        setHovered(false);
      }}
      onMouseEnter={() => {
        setHovered(true);
      }}
    >
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

      <AiFillPlayCircle
        size={70}
        className={`absolute  rounded-lg top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-50 text-white opacity-100   cursor-pointer ${
          hovered ? "block" : "hidden"
        }`}
        onClick={() => {
          fetchSingleMovieLinkWithVideos(id, type);
          navigate("/trailer");
        }}
      />
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
