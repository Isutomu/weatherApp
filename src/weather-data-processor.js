function getHourlyForecast(weatherData) {
  const forecastData = weatherData.forecast.forecastday;
  return forecastData.forEach((day) =>
    day.hour.forEach((hour) => ({
      c: hour.temp_c,
      f: hour.temp_f,
    })),
  );
}

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

export function getRecentHourlyForecast(weatherData, hours = 6) {
  const forecastData = [...getHourlyForecast(weatherData)];
  const currentHour = new Date().getHours();

  const filteredForecast = [];
  for (let i = currentHour + 1; i <= currentHour + hours; i += 1) {
    const forecastHourCopy = forecastData[i];
    forecastHourCopy.hour = i % 24;
    filteredForecast.push(forecastHourCopy);
  }

  return filteredForecast;
}

export function getDailyWeather(weatherData) {
  const forecastData = weatherData.forecast.forecastday;
  return forecastData.forEach((day) => ({
    c: day.day.avgtemp_c,
    f: day.day.avgtemp_f,
  }));
}
