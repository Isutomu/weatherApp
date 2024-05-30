import './style/reset.css';
import './style/common.css';
import './style/weather-widgets.css';

import populateForecast from './populate-forecast.js';

async function updateForecast(unit) {
  const city = document.querySelector('#city-input').value;
  if (city) {
    const forecastContainer = document.querySelector('#weather-container');
    forecastContainer.innerHTML = '';

    forecastContainer.style.visibility = 'hidden';
    document.querySelector('.loading').style.visibility = 'visible';
    await populateForecast({ city, days: 3, hours: 6, unit });
    forecastContainer.style.visibility = 'visible';
    document.querySelector('.loading').style.visibility = 'hidden';
  }
}

function handleUnitChange(unit) {
  updateForecast(unit);
}

document
  .querySelector('#search-btn')
  .addEventListener('click', () => updateForecast('f'));
document
  .querySelector('button.temperature.c')
  .addEventListener('click', () => handleUnitChange('c'));
document
  .querySelector('button.temperature.f')
  .addEventListener('click', () => handleUnitChange('f'));
