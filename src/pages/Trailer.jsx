import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import YouTube from "react-youtube";
import VideoPlayer from "../components/VideoPlayer";
import TrailerText from "../components/TrailerText";

const Trailer = () => {
  const { youtubeLinkData } = useContext(Context);
  return (
    <div className="w-[94%] ml-[3%] mt-20 md:mt-32 xl:mt-0">
      {youtubeLinkData?.videos?.results.length === 0 ? (
        <h2 className="text-white text-xl md:text-2xl xl:text-4xl text-center">
          Video will be added soon
        </h2>
      ) : (
        <VideoPlayer />
      )}
      <TrailerText />
    </div>
  );
};

export default Trailer;
