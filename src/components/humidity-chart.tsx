import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import {Tooltip} from "@radix-ui/react-tooltip"
import {CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis} from "recharts";
import {useWeather} from "@/context/weather-context.tsx";


const HumidityChart: React.FC = () => {
    const { weatherData } = useWeather();
    if (!weatherData) {
        return <p className={"flex justify-center"}>The weather will appear here once you select a city.</p>;
    }
    const chartData = weatherData?.forecast.forecastday.flatMap((forecastDay) =>
        forecastDay.hour.map((hour) => ({
            time: `${forecastDay.date} ${hour.time.split(" ")[1]}`,
            humidity: hour.humidity,
        }))
    );
    console.log("chartData", chartData);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Humidity Forecast</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
        )
}

export default HumidityChart