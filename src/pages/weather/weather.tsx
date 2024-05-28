import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./../../store";
import { weatherSlice } from "./";
import { WeatherHeader, WeatherContent } from "./../../components";



enum TEHRAN_DETAIL {
  id = 112931,
  lon = 51.4215,
  lat = 35.6944,
}

const Weather = () => {
  const dispatch = useAppDispatch();
  const { daily, detail, loadingDaily, loadingDetail } = useAppSelector(
    weatherSlice.selectedWeatherState
  );

  useEffect(() => {
    dispatch(weatherSlice.fetchCityWeather(TEHRAN_DETAIL.id));
  }, []);

  useEffect(() => {
    dispatch(
      weatherSlice.fetchDailyWeather({
        lat: TEHRAN_DETAIL.lat,
        lon: TEHRAN_DETAIL.lon,
      })
    );
  }, []);

  return (
    <>
      <WeatherHeader detail={detail} loading={loadingDetail} />
      <WeatherContent daily={daily} loading={loadingDaily} />
    </>
  );
};

export default Weather;
