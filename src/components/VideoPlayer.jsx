import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import YouTube from "react-youtube";

const VideoPlayer = () => {
  const { youtubeLinkData, img_300 } = useContext(Context);
  const [videoId, setVideoId] = useState("");
  const [videoWidth, setVideoWidth] = useState("");
  const [videoHeight, setVideoHeight] = useState("");

  useEffect(() => {
    const resizeListener = () => {
      if (window.innerWidth > 1280) {
        setVideoWidth("800px");
        setVideoHeight("384px");
      } else if (window.innerWidth > 1008) {
        setVideoWidth("700px");
        setVideoHeight("384px");
      } else if (window.innerWidth > 768) {
        setVideoWidth("500px");
        setVideoHeight("350px");
      } else if (window.innerWidth > 600) {
        setVideoWidth("450px");
        setVideoHeight("300px");
      } else if (window.innerWidth > 500) {
        setVideoWidth("400px");
        setVideoHeight("280px");
      } else if (window.innerWidth > 400) {
        setVideoWidth("320px");
        setVideoHeight("240px");
      } else {
        setVideoWidth("280px");
        setVideoHeight("210px");
      }
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
  useEffect(() => {
    (() => {
      if (window.innerWidth > 1280) {
        setVideoWidth("800px");
        setVideoHeight("384px");
      } else if (window.innerWidth > 1008) {
        setVideoWidth("700px");
        setVideoHeight("384px");
      } else if (window.innerWidth > 768) {
        setVideoWidth("500px");
        setVideoHeight("350px");
      } else if (window.innerWidth > 600) {
        setVideoWidth("450px");
        setVideoHeight("300px");
      } else if (window.innerWidth > 500) {
        setVideoWidth("400px");
        setVideoHeight("280px");
      } else if (window.innerWidth > 400) {
        setVideoWidth("320px");
        setVideoHeight("240px");
      } else {
        setVideoWidth("280px");
        setVideoHeight("210px");
      }
    })();
  }, []);

  return (
    <div className="text-white ">
      <div className="flex flex-col md:flex-row h-auto ">
        <div className="w-full md:w-[70%] xl:w-[80%] flex justify-center items-center">
          <YouTube
            videoId={videoId}
            opts={{ width: videoWidth, height: videoHeight }}
          />
        </div>
        <div className="flex flex-row justify-center mt-20 md:mt-0  md:justify-start flex-wrap md:flex-nowrap md:flex-col overflow-auto h-36 md:h-96 md:w-[30%] xl:w-[20%] gap-4 scrollbar-thin scrollbar-track-black scrollbar-thumb-gray-500 scrollbar-h-20 scrollbar-rounded-8">
          {youtubeLinkData?.videos?.results.map((item) => (
            <div
              className="flex flex-col h-32 w-auto justify-center md:h-auto md:flex-row  gap-4 cursor-pointer hover:bg-black py-2 "
              key={item.id}
              onClick={() => {
                setVideoId(item.key);
              }}
            >
              <img
                src={`${img_300}${youtubeLinkData.backdrop_path}`}
                className="w-28 aspect-video"
              />
              <button>
                - {item.type.length > 7 ? item.type.slice(0, 7) : item.type}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
