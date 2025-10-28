# Weather Dashboard

A responsive weather dashboard built with React and the OpenWeather API, allowing users to search for any city and view real-time weather data, forecasts, and additional atmospheric information.

## Features
- Search functionality for any city worldwide
- Display of real-time weather data (temperature, humidity, wind speed, pressure, UV index)
- 5-day forecast with dynamic icons and temperature ranges
- Responsive design
- Error handling for invalid inputs and failed API responses

## Technologies Used
- React.js – Frontend framework
- Axios – API requests
- OpenWeather API – Weather data source
- CSS/Flexbox/Grid – Styling and layout
- Vercel – Deployment platform

## Setup Guide

1. Clone the Repository
   bash
   git clone https://github.com/your-username/weather-dashboard.git
   

2. Navigate to the Project Directory
   bash
   cd weather-dashboard
   

3. Install Dependencies
   bash
   npm install
   

4. Set Up Environment Variables
   Create a .env file in the project root and add your API key:
   bash
   REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
   

5. Start the Development Server
   bash
   npm start
   
   The app will open automatically at http://localhost:3000.

6. Build for Production (Optional)
   bash
   npm run build
   

## Deployment (Vercel)
- Push the project to GitHub.
- Connect the repository to [Vercel](https://vercel.com/).
- Add environment variables in the Vercel dashboard.
- Deploy directly from the main branch.

## Usage
- Enter a city name in the search bar to view current weather details.
- Explore the 5-day forecast and additional weather metrics.

## License
This project is licensed under the MIT License. Feel free to modify and distribute it for educational or personal use
