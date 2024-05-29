import requestWeatherData from './weather-api-handler.js';
import * as dataProcessor from './weather-data-processor.js';
import createWeatherVisualizer from './weather-widget.js';

function createFocusedDaily(weatherData) {
  const forecast = dataProcessor.getCurrentWeather(weatherData);
  return createWeatherVisualizer(forecast, 'focused-daily-weather', 'c');
}

function createDaily(weatherData) {
  const forecast = dataProcessor.getDailyWeather(weatherData).slice(1);
  return forecast.map((dailyWeather) =>
    createWeatherVisualizer(dailyWeather, 'daily-weather', 'c'),
  );
}

function createHourly(weatherData, hours) {
  const forecast = dataProcessor
    .getRecentHourlyForecast(weatherData, hours)
    .slice(1);
  return forecast.map((dailyWeather) =>
    createWeatherVisualizer(dailyWeather, 'hourly-weather', 'c'),
  );
}

export default async function populateForecast({ city, days, hours }) {
  const container = document.querySelector('#weather-container');
  const weatherData = await requestWeatherData(city, days);

  container
    .querySelector('.weather-focused')
    .prepend(createFocusedDaily(weatherData));
  container.append(...createDaily(weatherData));
  container
    .querySelector('.weather-hourly-container')
    .append(...createHourly(weatherData, hours));
}
