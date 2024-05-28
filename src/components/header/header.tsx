import {
  FaLocationArrow as ArrowIcon,
  FaCloudRain as RainIcon,
  FaCloudSun as CloudIcon,
} from "react-icons/fa";

import { Props } from "./";
import { date } from "./../../services";

const Header = ({ detail, loading }: Props) => {

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

  return (
    <>
      {!loading && (
        <div>
          <div className="h-24 bg-[#48484a] text-white flex items-center justify-center font-semibold text-2xl">
            <a
              href="https://openweathermap.org/city/112931"
              className="border-b-2 border-solid border-orange-600 pb-3"
              target="_blank"
              rel="noreferrer"
            >
              Openweathermap link
            </a>
          </div>
          <div className="flex items-start justify-between mt-6 w-full max-w-[920px] mx-auto">
            <div>
              <div>
                <span className="mr-2 text-orange-600 text-sm">
                  {date.today},
                </span>
                <span className="text-orange-600 text-sm">
                  {date.hours}:{date.minutes}
                </span>
              </div>
              <div>
                <span className="text-gray-700 text-2xl font-medium">
                  {detail.name},
                </span>
                <span className="text-gray-700 text-2xl ml-1.5 font-medium">
                  {detail?.sys?.country}
                </span>
              </div>
              <div className="mt-8 flex items-center justify-start">
                {detail?.weather?.length > 0 &&
                  handleIcon(detail.weather[0].main)}
                <div className="mr-1 text-4xl text-gray-800">
                  <span className="mr-0.2">
                    {Math.ceil(detail?.main?.temp)}
                  </span>
                  <span>°C</span>
                </div>
              </div>
              <div className="text-sm text-gray-800 font-semibold mt-2">
                <span className="mr-1.5">Feels like</span>
                <span>{detail?.main?.feels_like}</span>
                <span className="mr-1">°C.</span>
                {detail?.weather?.length > 0 && (
                  <span className="mr-1.5">
                    {detail?.weather[0]?.description}.
                  </span>
                )}
                <span>Gentle Breeze</span>
              </div>
              <div className="border-l border-solid border-orange-600 pl-5 mt-2 w-full max-w-[350px]">
                <div className="flex items-center justify-between">
                  <div className="basis-1/2 flex items-center justify-start text-sm">
                    <ArrowIcon className="fill-gray-800 rotate-[60deg] mr-2 w-3" />
                    <span>{detail?.wind?.speed}</span>
                    <span className="ml-2">m/s WNW</span>
                  </div>
                  <div className="basis-1/2">
                    <span>{detail?.main?.pressure}</span>
                    <span className="ml-2">hPa</span>
                  </div>
                </div>
                <div className="flex items-center justify-start text-sm">
                  <div className="basis-1/2">
                    <span>Humidity:</span>
                    <span className="ml-2">{detail?.main?.humidity}</span>
                  </div>
                  <div className="basis-1/2">
                    <span>Visibility:</span>
                    <span className="ml-2">{(detail?.visibility) / 1000}0km</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && <div>Loading ...</div>}
    </>
  );
};

export default Header;
