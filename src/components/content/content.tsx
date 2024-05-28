import { useCallback } from "react";
import {
  FaLocationArrow as ArrowIcon,
  FaCloudRain as RainIcon,
  FaCloudSun as CloudIcon,
} from "react-icons/fa";

import { Props } from "./";
import { date } from "./../../services";

const Content = ({ daily, loading }: Props) => {
  const handleIcon = (main: string) => {
    switch (main) {
      case "Rain":
        return <RainIcon className="w-6 h-6 mr-2" />;

      case "Clear":
        return <div className="w-6 h-6 rounded-full bg-orange-600 mr-2" />;

      case "Clouds":
        return <CloudIcon className="w-6 h-6 mr-2" />;

      default:
        return <div className="w-6 h-6 rounded-full bg-orange-600 mr-2" />;
    }
  };

  const renderDaily = useCallback(
    () =>
      daily?.map((day, index) => (
        <div key={index} className="flex items-center justify-between mt-1.5">
          <div className="text-gray-700 text-sm font-normal">
            <span>{date.dayOfWeek},</span>
            <span className="ml-1">{date.month}</span>
            <span className="ml-1">{date.day}</span>
          </div>
          <div className="text-sm text-gray-700 font-normal flex items-center justify-start">
            {handleIcon(day?.weather[0].main)}
            <span className="mr-0.5">{Math.ceil(day.temp.max)}</span>
            <span className="mr-0.5">/</span>
            <span className="mr-1">{Math.ceil(day.temp.min)}</span>
            <span>°C</span>
          </div>
          <div className="flex items-center justify-start text-sm text-gray-700 font-normal">
            <ArrowIcon className="fill-gray-800 rotate-[60deg] mr-2 w-3" />
            <span>{day.wind_speed}</span>
            <span className="ml-2">m/s WNW</span>
          </div>
          <div className="text-sm text-gray-700 font-normal">
            <span>Humidity</span>
            <span className="ml-2">{day.humidity}</span>
          </div>
          <div>
            <span>{day?.weather[0]?.description}</span>
          </div>
        </div>
      )),
    [daily]
  );

  return (
    <>
      {!loading && (
        <div className="w-full max-w-[920px] mx-auto mt-10">
          <span className="text-lg font-semibold">7-day forecast</span>
          <>{renderDaily()}</>
        </div>
      )}
      {loading && "loading ..."}
    </>
  );
};

export default Content;
