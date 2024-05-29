export default function createWeatherVisualizer(
  weatherData,
  elemClass,
  temperatureUnit = 'c',
) {
  const weatherWidget = document.createElement('article');
  weatherWidget.classList.add(elemClass, 'weather-widget');

  const icon = document.createElement('img');
  icon.src = weatherData.condition.icon;
  weatherWidget.appendChild(icon);

  const temperature = document.createElement('span');
  temperature.textContent = `${weatherData[temperatureUnit]} ${temperatureUnit.toUpperCase()}`;
  weatherWidget.appendChild(temperature);

  const humidity = document.createElement('span');
  humidity.textContent = `${weatherData.hr}%`;
  weatherWidget.appendChild(humidity);

  const description = document.createElement('span');
  description.textContent = weatherData.condition.text;
  weatherWidget.appendChild(description);

  return weatherWidget;
}
