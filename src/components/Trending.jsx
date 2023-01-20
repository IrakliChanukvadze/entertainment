import React, { useContext, useState, useEffect } from "react";
import { Context } from "../context/context";
import TrendingItem from "./TrendingItem";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Trending = () => {
  const { trending, img_500 } = useContext(Context);
  const [hovered, setHovered] = useState(false);
  const [num, setNum] = useState(2);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1300) {
        setNum(Math.floor(window.innerWidth / 600));
      } else if (window.innerWidth > 767) {
        setNum(Math.floor(window.innerWidth / 450));
      } else {
        setNum(Math.floor(window.innerWidth / 275));
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const allTrending = trending?.map((item, index) => (
    <Slide key={item.id} index={index}>
      <TrendingItem
        item={item}
        url={`${img_500}${item.poster_path}`}
        ranking={item.vote_average}
        title={item.name || item.title}
        type={item.media_type}
      />
    </Slide>
  ));
  return (
    <div
      className="h-60 md:h-80 relative w-full"
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <h2 className=" text-xl sm:text-2xl md:text-4xl text-white mb-4">
        Trending
      </h2>
      <div className="relative h-44 md:h-60 xl:h-72">
        <CarouselProvider
          naturalSlideWidth={480}
          naturalSlideHeight={280}
          totalSlides={20}
          visibleSlides={num}
          isPlaying={true}
          interval={2000}
        >
          <Slider>{allTrending}</Slider>
          {hovered && (
            <div className="absolute left-0 top-0 h-full bg-black opacity-60 flex items-center justify-center">
              <ButtonBack>
                <AiOutlineArrowLeft className="w-16 h-16 text-white " />
              </ButtonBack>
            </div>
          )}
          {hovered && (
            <div className="absolute right-0 top-0 h-full bg-black flex items-center justify-center opacity-60">
              <ButtonNext>
                <AiOutlineArrowRight className="w-16 h-16 text-white  " />
              </ButtonNext>
            </div>
          )}
        </CarouselProvider>
      </div>
    </div>
  );
};

export default Trending;
