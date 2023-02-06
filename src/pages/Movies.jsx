import { Pagination } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MovieItem from "../components/MovieItem";
import { Context } from "../context/context";
import Search from "../components/search";

const Movies = ({ type, data }) => {
  const {
    img_300,
    setCategory,
    page,
    setPage,
    fetchAll,
    searchContent,
    search,
  } = useContext(Context);
  const changePage = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    fetchAll(type, page);
    window.scroll(0, 0);
  }, [page]);

  const { pathname } = useLocation();
  setCategory(pathname.slice(1));

  searchContent?.length > 0
    ? searchContent?.map((item) => (
        <MovieItem
          key={item.id}
          item={item}
          url={`${img_300}${item.poster_path}`}
          ranking={item.vote_average}
          title={item.name || item.title}
          type={type}
          id={item.id}
        />
      ))
    : data?.map((item) => (
        <MovieItem
          key={item.id}
          item={item}
          url={`${img_300}${item.poster_path}`}
          ranking={item.vote_average}
          title={item.name || item.title}
          type={type}
          id={item.id}
        />
      ));

  const movies = search
    ? searchContent?.map((item) => (
        <MovieItem
          key={item.id}
          item={item}
          url={`${img_300}${item.poster_path}`}
          ranking={item.vote_average}
          title={item.name || item.title}
          type={type}
          id={item.id}
        />
      ))
    : data?.map((item) => (
        <MovieItem
          key={item.id}
          item={item}
          url={`${img_300}${item.poster_path}`}
          ranking={item.vote_average}
          title={item.name || item.title}
          type={type}
          id={item.id}
        />
      ));
  return (
    <div className="w-[94%] ml-[3%] mt-20 md:mt-32 xl:mt-0">
      <Search />
      <h2 className=" text-xl sm:text-2xl md:text-4xl text-white mb-8">
        {search
          ? `Found ${searchContent.length} ${
              type === "movie" ? "Movies" : "TV Series"
            } for ${search} `
          : `${type === "movie" ? "Movies" : "TV Series"}`}
      </h2>
      <div className="flex flex-wrap gap-10 justify-center md:justify-start">
        {movies}
      </div>

      <div className="w-full flex justify-center mt-10">
        <Pagination
          count={10}
          variant="outlined"
          page={page}
          onChange={changePage}
          sx={{
            color: "white",
            border: "none",
            "& .MuiPaginationItem-root": {
              color: "white",
              ml: "8px",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Movies;
