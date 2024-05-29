import requestWeatherData from './weather-api-handler.js';
import * as dataProcessor from './weather-data-processor.js';
import createWeatherVisualizer from './weather-widget.js';

function createFocusedDaily(weatherData) {
  const forecast = dataProcessor.getCurrentWeather(weatherData);
  return createWeatherVisualizer(
    forecast,
    'focused-daily-weather',
    'Today',
    'c',
  );
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
    createWeatherVisualizer(
      dailyWeather,
      'hourly-weather',
      `${String(dailyWeather.hour).padStart(2, '0')}:00`,
      'c',
    ),
  );
}

export default async function populateForecast({ city, days, hours }) {
  const weatherData = await requestWeatherData(city, days);

  const focusedContainer = document.createElement('div');
  focusedContainer.classList.add('weather-focused');
  focusedContainer.appendChild(createFocusedDaily(weatherData));

  // container.append(...createDaily(weatherData));

  const hourContainer = document.createElement('div');
  hourContainer.classList.add('weather-hourly-container');
  hourContainer.append(...createHourly(weatherData, hours));
  focusedContainer.appendChild(hourContainer);

  document.querySelector('#weather-container').appendChild(focusedContainer);
}
