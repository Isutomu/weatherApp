const requestUrl =
  'https://api.weatherapi.com/v1/forecast.json?key=9b93bbe006044026a03160236242305';

export default async function requestWeatherData(city, days = 3) {
  const response = await fetch(`${requestUrl}&q=${city}&days=${days}`, {
    mode: 'cors',
  });
  const weatherData = await response.json();
  return weatherData;
}
