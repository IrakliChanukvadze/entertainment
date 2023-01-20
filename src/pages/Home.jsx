import React, { useContext } from "react";
import MainMovieContainer from "../components/MainMovieContainer";
import MovieItem from "../components/MovieItem";
import Search from "../components/search";
import Trending from "../components/Trending";
import { Context } from "../context/context";

const Home = ({ type }) => {
  const { searchContent, img_300, search } = useContext(Context);

  const searchRes = searchContent?.map((item) => (
    <MovieItem
      key={item.id}
      item={item}
      url={`${img_300}${item.poster_path}`}
      ranking={item.vote_average}
      title={item.name || item.title}
      type={type && "tv"}
    />
  ));

  return (
    <div className="w-[94%] ml-[3%] mt-20 md:mt-32 xl:mt-0">
      <Search />
      {search ? (
        <>
          <h2 className=" text-4xl text-white mb-8">
            {`Found ${searchContent.length} Trending for ${search} `}
          </h2>
          <div className="flex flex-wrap gap-10 justify-center md:justify-start">
            {searchRes}
          </div>
        </>
      ) : (
        <>
          <Trending />
          <MainMovieContainer />
        </>
      )}
    </div>
  );
};

export default Home;
