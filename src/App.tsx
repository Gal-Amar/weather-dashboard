import Page from "./app/dashboard/page.tsx"
import {ThemeProvider} from "./context/theme-context.tsx";
import {WeatherProvider} from "@/context/weather-context.tsx";

function App() {
  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <WeatherProvider>
            <Page />
          </WeatherProvider>
      </ThemeProvider>
  )
}

export default App
