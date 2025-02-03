import { useEffect, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "./ui/button.tsx";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {useWeather} from "../context/weather-context.tsx";
import {cn} from "../lib/utils.ts";

const cities = [
    { value: "new_york", label: "New York, USA" },
    { value: "london", label: "London, UK" },
    { value: "tokyo", label: "Tokyo, Japan" },
    { value: "paris", label: "Paris, France" },
    { value: "sydney", label: "Sydney, Australia" },
    { value: "dubai", label: "Dubai, UAE" },
    { value: "berlin", label: "Berlin, Germany" },
    { value: "toronto", label: "Toronto, Canada" },
    { value: "rome", label: "Rome, Italy" },
    { value: "hong_kong", label: "Hong Kong, China" },
];

export function CitySelect() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const { setWeatherData } = useWeather();

    useEffect(() => {
        if (!value) return;

        const fetchWeather = async () => {
            try {
                const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
                const response = await fetch(
                    `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${value}&days=5`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch weather data");
                }

                const data = await response.json();
                setWeatherData(data);
                console.log("Weather Data:", data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchWeather();
    }, [value, setWeatherData]);

    return (
        <div className="flex flex-row gap-4 items-center justify-center ">
            <h4 className="font-bold">Please select city to show the weather</h4>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between border shadow-md border-gray-600 rounded-lg"
                    >
                        {value
                            ? cities.find((city) => city.value === value)?.label
                            : "Select City"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Search City..." />
                        <CommandList>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup>
                                {cities.map((city) => (
                                    <CommandItem
                                        key={city.value}
                                        value={city.value}
                                        onSelect={(currentValue: React.SetStateAction<string>) => {
                                            setValue(currentValue === value ? "" : currentValue);
                                            setOpen(false);
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === city.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {city.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}