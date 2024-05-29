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
      'avghumidity',
    ),
  );
}

export function getRecentHourlyForecast(
  weatherData,
  hours = 6,
  daysAdvance = 0,
) {
  const forecastData = getHourlyForecast(weatherData).flat();
  let currentHour;
  let hoursToReturn;
  if (daysAdvance) {
    currentHour = 23 * daysAdvance + 1;
    hoursToReturn = 24;
  } else {
    currentHour = new Date().getHours() + 1;
    hoursToReturn = hours;
  }

  const filteredForecast = [];
  for (let i = currentHour; i < currentHour + hoursToReturn; i += 1) {
    const forecastHourCopy = forecastData[i];
    forecastHourCopy.hour = i % 24;
    filteredForecast.push(forecastHourCopy);
  }

  return filteredForecast;
}
