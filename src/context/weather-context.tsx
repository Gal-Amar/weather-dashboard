import React, { createContext, useState, ReactNode, useContext } from "react";

interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    humidity: number;
  };
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        avgtemp_c: number;
        condition: {
          text: string;
          icon: string;
        };
      };
      hour: Array<{
        time: string;
        temp_c: number;
        humidity: number;
        condition: {
          text: string;
          icon: string;
        };
      }>;
    }>;
  };
}

const WeatherContext = createContext<{
  weatherData: WeatherData | null;
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData | null>>;
}>({
  weatherData: null,
  setWeatherData: () => {},
});

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  return (
      <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
        {children}
      </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  return useContext(WeatherContext);
};