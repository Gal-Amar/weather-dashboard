import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useWeather } from "@/context/weather-context.tsx";

const CurrentWeather: React.FC = () => {
  const { weatherData } = useWeather();

  if (!weatherData) {
    return null;
  }

  return (
      <Card className={' flex flex-row justify-center text-center'}>
        <CardHeader className={"flex justify-center "}>
          <CardTitle className={"leading-relaxed"}>Current Weather:</CardTitle>
        </CardHeader>
        <CardContent className={"flex flex-row gap-10 text-center"}>
          <div className="flex items-center justify-center">
            <div className={"pt-3"}>
              <p className="text-4xl font-bold">{weatherData.current.temp_c}°C</p>
              <p className="text-lg">{weatherData.current.condition.text}</p>
            </div>
            <img
                src={weatherData.current.condition.icon || "/placeholder.svg"}
                alt={weatherData.current.condition.text}
                className="w-16 h-16"
            />
          </div>
          <div className="mt-4">
            <p>Wind: {weatherData.current.wind_kph} km/h</p>
            <p>Humidity: {weatherData.current.humidity}%</p>
          </div>
        </CardContent>
      </Card>
  );
};

export default CurrentWeather;