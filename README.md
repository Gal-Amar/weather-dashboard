# Weather Dashboard

A weather dashboard application that displays current weather information and forecasts for a selected city. The app shows real-time data such as temperature, humidity, and weather conditions, and presents hourly and daily forecasts using a clean and responsive UI.

## Features

- **Current Weather**: Displays the current temperature, humidity, wind speed, and weather condition (e.g., sunny, cloudy, rainy).
- **Daily Forecast**: Displays daily high, low, and average temperatures for up to 5 days.
- **Responsive Design**: The dashboard is mobile-friendly and adjusts to different screen sizes.
- **Dynamic City Selection**: Users can search for and select a city to view the weather data.

## Installation

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure that you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (Node package manager)

### Environment Variables
To run this project locally, you need to define certain environment variables in a .env file at the root of the project. 
```VITE_WEATHER_API_KEY=your_api_key_here```

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Gal-Amar/weather-dashboard.git
   cd weather-dashboard
   
2. Create a .env file and add your API key inside it.

3. run ```npm install``` to download dependencies

4. run ```vite``` to start the program