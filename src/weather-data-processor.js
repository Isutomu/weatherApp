function generateForecastInstance(
  forecastData,
  identifierCelsius,
  identifierFahrenheit,
  identifierHumidity,
) {
  return {
    c: forecastData[identifierCelsius],
    f: forecastData[identifierFahrenheit],
    hr: forecastData[identifierHumidity],
    condition: forecastData.condition,
  };
}

function getHourlyForecast(weatherData) {
  const forecastData = weatherData.forecast.forecastday;
  return forecastData.map((day) =>
    day.hour.map((hour) =>
      generateForecastInstance(hour, 'temp_c', 'temp_f', 'humidity'),
    ),
  );
}

export function getCurrentWeather(weatherData) {
  return generateForecastInstance(
    weatherData.current,
    'temp_c',
    'temp_f',
    'humidity',
  );
}

export function getDailyWeather(weatherData) {
  const forecastData = weatherData.forecast.forecastday;

  return forecastData.map((forecast) =>
    generateForecastInstance(
      forecast.day,
      'avgtemp_c',
      'avgtemp_f',
      'avgtemphumidity',
    ),
  );
}

export function getRecentHourlyForecast(weatherData, hours = 6) {
  const forecastData = getHourlyForecast(weatherData).flat();
  const currentHour = new Date().getHours();

  const filteredForecast = [];
  for (let i = currentHour + 1; i <= currentHour + hours; i += 1) {
    const forecastHourCopy = forecastData[i];
    forecastHourCopy.hour = i % 24;
    filteredForecast.push(forecastHourCopy);
  }

  return filteredForecast;
}
