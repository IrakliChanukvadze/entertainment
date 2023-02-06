import React, { useContext } from "react";
import { Context } from "../context/context";
import { NumericFormat } from "react-number-format";

const TrailerText = () => {
  const { youtubeLinkData, img_500 } = useContext(Context);
  console.log(youtubeLinkData);
  return (
    <div className="flex text-white mt-20 gap-10 flex-col uxs:flex-row py-4 mb-20">
      <img
        className="w-56 h-72 xl:w-64 xl:h-80 pl-10 uxs:pl-0"
        src={`${img_500}${youtubeLinkData?.poster_path}`}
      />
      <div className="flex flex-col justify-center gap-4 pl-10 uxs:pl-0 ">
        <h2 className="font-bold tracking-[3px] text-xl md:text-2xl xl:text-4xl opacity-100">
          {youtubeLinkData?.original_title || youtubeLinkData?.original_name}
        </h2>
        <h2 className="opacity-80">
          released year:{" "}
          {youtubeLinkData?.release_date?.slice(0, 4) ||
            youtubeLinkData?.first_air_date?.slice(0, 4)}
        </h2>
        {youtubeLinkData?.budget && (
          <h2 className="opacity-80">
            budget:{" "}
            <NumericFormat
              value={youtubeLinkData?.budget}
              className="bg-transparent"
              thousandSeparator={true}
              prefix={" $ "}
              contentEditable={false}
            />
          </h2>
        )}
        {youtubeLinkData?.revenue && (
          <h2 className="opacity-80">
            revenue:{" "}
            <NumericFormat
              value={youtubeLinkData?.revenue}
              className="bg-transparent"
              thousandSeparator={true}
              prefix={" $ "}
              contentEditable={false}
            />
          </h2>
        )}

        <h2 className="opacity-80">
          <div className="flex flex-wrap gap-2">
            genres:{"  "}
            {youtubeLinkData?.genres?.map((item) => (
              <span key={item.id} className="bg-gray-500 px-2   py-[1px]">
                {item.name}
              </span>
            ))}
          </div>
        </h2>
        {youtubeLinkData?.number_of_seasons && (
          <h2 className="opacity-80">
            seasons: {youtubeLinkData?.number_of_seasons}
          </h2>
        )}
        {youtubeLinkData?.number_of_episodes && (
          <h2 className="opacity-80">
            episodes: {youtubeLinkData?.number_of_episodes}
          </h2>
        )}

        <h2 className="opacity-80">
          total votes: {youtubeLinkData?.vote_count}
        </h2>
        <h2 className="opacity-80 ">
          average: {youtubeLinkData?.vote_average}
        </h2>
        <p className="opacity-80 w-[80%]">{youtubeLinkData.overview}</p>
      </div>
    </div>
  );
};

export default TrailerText;
