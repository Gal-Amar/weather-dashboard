import Page from "./app/dashboard/page.tsx"
import {ThemeProvider} from "./context/theme-context.tsx";

function App() {
  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
         <Page />
      </ThemeProvider>
  )
}

export default App
