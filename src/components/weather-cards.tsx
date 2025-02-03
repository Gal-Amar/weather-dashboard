import React from "react";
import { Card, CardContent } from "./ui/card";
import { useWeather } from "../context/weather-context.tsx";

const WeatherCards: React.FC = () => {
    const { weatherData } = useWeather(); // Destructure correctly
    if (!weatherData) {
        return <p className={"flex justify-center"}>The weather will appear here once you select a city.</p>; // Provide a fallback
    }

    return (
        <div className="p-4 flex flex-col">
            <h1 className="text-2xl font-bold mb-4">
                5-Day Weather Forecast for {weatherData.location.name}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-full">
                {weatherData.forecast.forecastday.slice(0, 5).map((day) => (
                    <Card key={day.date} className="overflow-hidden ">
                        <CardContent className="p-4">
                            <h2 className="text-lg font-semibold mb-2 text-center">
                                {new Date(day.date).toLocaleDateString("en-US", {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric",
                                })}
                            </h2>
                            <img
                                src={day.day.condition.icon || "/placeholder.svg"}
                                alt={day.day.condition.text}
                                className="w-16 h-16 mx-auto mb-2"
                            />
                            <p className="text-center text-sm mb-2">{day.day.condition.text}</p>
                            <p className="text-center font-bold">{day.day.avgtemp_c.toFixed(1)}°C</p>
                            <div className="text-xs text-center mt-2">
                                <p>High: {day.day.maxtemp_c.toFixed(1)}°C</p>
                                <p>Low: {day.day.mintemp_c.toFixed(1)}°C</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default WeatherCards;