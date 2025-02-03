import { AppSidebar } from "../../components/app-sidebar";

import { CitySelect } from "../../components/city-select.tsx";
import WeatherCards from "../../components/weather-cards.tsx";
import {useWeather} from "../../context/weather-context.tsx";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "../../components/ui/sidebar.tsx";
import {ThemeToggle} from "../../components/theme-toggle.tsx";
import HumidityChart from "@/components/humidity-chart.tsx";
import CurrentWeather from "@/components/current-weather.tsx";
import {useEffect} from "react";

export default function Page() {
  const {weatherData} = useWeather()
  useEffect(() => {

  }, [weatherData]);
  return (

        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1 hover:bg-amber-50" size={"icon"}/>
                <ThemeToggle />
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              <div className="grid grid-rows-[auto_auto] gap-4">
                <div className="rounded-xl bg-muted/50 p-4">
                  <CitySelect />
                </div>
                {weatherData &&
                    <div className={"flex flex-col gap-2 p-4 rounded-xl"}>
                      <div className="rounded-xl bg-muted/50 p-4">
                        < CurrentWeather />
                      </div>
                      <div className="rounded-xl bg-muted/50 p-4">
                        <WeatherCards  />
                      </div>
                      <div className="rounded-xl bg-muted/50 p-4">
                        <HumidityChart />
                      </div>
                    </div>
                }
              </div>
            </div>
          </SidebarInset>
        </SidebarProvider>
  );
}