import React, { useContext } from "react";
import { Context } from "../context/context";
import MovieItem from "./MovieItem";

const MainMovieContainer = () => {
  const { trending, img_300 } = useContext(Context);

  const allMovies = trending?.map((item) => (
    <MovieItem
      key={item.id}
      item={item}
      url={`${img_300}${item.poster_path}`}
      ranking={item.vote_average}
      title={item.name || item.title}
      type={item.media_type}
    />
  ));

  return (
    <div className="w-full  mt-14 ">
      <h2 className=" text-xl sm:text-2xl md:text-4xl text-white mb-4">
        Recommended for you
      </h2>
      <div className="flex flex-wrap gap-10 justify-center md:justify-start">
        {allMovies}
      </div>
    </div>
  );
};

export default MainMovieContainer;
