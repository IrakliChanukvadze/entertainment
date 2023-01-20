import React, { useContext } from "react";
import { Context } from "../context/context";
import MovieItem from "../components/MovieItem";
import { useLocation } from "react-router-dom";
import Search from "../components/search";

const Bookmark = () => {
  const { bookmarkData, img_300, setCategory, search, bookmarkSearch } =
    useContext(Context);
  const { pathname } = useLocation();
  setCategory(pathname.slice(1));
  const allBookmarks = search
    ? bookmarkSearch.map((item) => (
        <MovieItem
          key={item.id}
          item={item}
          url={`${img_300}${item.poster_path}`}
          ranking={item.vote_average}
          title={item.name || item.title}
          type={item.type}
        />
      ))
    : bookmarkData?.map((item) => (
        <MovieItem
          key={item.id}
          item={item}
          url={`${img_300}${item.poster_path}`}
          ranking={item.vote_average}
          title={item.name || item.title}
          type={item.type}
        />
      ));

  return (
    <div className="w-[94%] ml-[3%] mt-20 md:mt-32 xl:mt-0">
      <Search />
      <h2 className=" text-xl sm:text-2xl md:text-4xl text-white mb-8">
        {search
          ? `Found ${bookmarkSearch.length} results in Bookmark`
          : "Bookmarked"}
      </h2>
      {bookmarkData?.length > 0 ? (
        <div className="flex flex-wrap gap-10 justify-center md:justify-start">
          {allBookmarks}
        </div>
      ) : (
        <h2 className=" text-xl text-white mb-8">Your bookmark is empty</h2>
      )}
    </div>
  );
};

export default Bookmark;
