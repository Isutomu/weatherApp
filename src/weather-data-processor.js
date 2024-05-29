export function getCurrentWeather(weatherData) {
  const temperature = {
    c: weatherData.current.temp_c,
    f: weatherData.current.temp_f,
  };
  const humidity = { humidity: weatherData.current.humidity };
  const condition = {
    text: weatherData.current.condition.text,
    icon: weatherData.current.condition.icon,
  };

  return { temperature, humidity, condition };
}

export function getHourlyForecast(weatherData) {
  const forecastData = weatherData.forecast.forecastday;
  return forecastData.forEach((day) =>
    day.hour.forEach((hour) => ({
      c: hour.temp_c,
      f: hour.temp_f,
    })),
  );
}

export function getDailyWeather(weatherData) {
  const forecastData = weatherData.forecast.forecastday;
  return forecastData.forEach((day) => ({
    c: day.day.avgtemp_c,
    f: day.day.avgtemp_f,
  }));
}
