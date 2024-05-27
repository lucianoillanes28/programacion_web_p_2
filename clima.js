async function obtenerClima(ciudad) {
  const apiKey = '3f763bf9c2c24626b1f14105242105'; // Reemplaza 'tu_api_key' con tu clave de API
  const apiUrlActual = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${ciudad}&aqi=no`;
  const apiUrlPronostico = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${ciudad}&days=10&aqi=no&alerts=no`;

  try {
      const respuestaActual = await fetch(apiUrlActual);
      if (!respuestaActual.ok) {
          throw new Error('Error en la solicitud: ' + respuestaActual.status);
      }
      const datosActual = await respuestaActual.json();
      actualizarClima(datosActual);

      const respuestaPronostico = await fetch(apiUrlPronostico);
      if (!respuestaPronostico.ok) {
          throw new Error('Error en la solicitud: ' + respuestaPronostico.status);
      }
      const datosPronostico = await respuestaPronostico.json();
      actualizarPronostico(datosPronostico);

  } catch (error) {
      console.error('Error al obtener el clima:', error);
  }
}

function actualizarClima(datos) {
  document.getElementById('location').textContent = `Clima Actual en ${datos.location.name}, ${datos.location.country}`;
  document.getElementById('temperature').textContent = datos.current.temp_c;
  document.getElementById('feels-like').textContent = datos.current.feelslike_c;
  document.getElementById('humidity').textContent = datos.current.humidity;
  document.getElementById('condition').textContent = datos.current.condition.text;
  document.getElementById('wind').textContent = datos.current.wind_kph;
  document.getElementById('pressure').textContent = datos.current.pressure_mb;
  document.getElementById('precipitation').textContent = datos.current.precip_mm;
  document.getElementById('visibility').textContent = datos.current.vis_km;
  document.getElementById('uv-index').textContent = datos.current.uv;
  document.getElementById('condition-description').textContent = datos.current.condition.text;
  document.getElementById('weather-icon').src = 'https:' + datos.current.condition.icon;

  // Agregar clase al contenedor principal según la condición climática
  var weatherContainer = document.querySelector('.weather-container');
  weatherContainer.classList.remove('sunny', 'rainy', 'partly-cloudy'); // Eliminar clases anteriores
  if (datos.current.condition.text.toLowerCase().includes('rain')) {
      weatherContainer.classList.add('rainy');
  } else if (datos.current.condition.text.toLowerCase().includes('sun')) {
      weatherContainer.classList.add('sunny');
  } else if (datos.current.condition.text.toLowerCase().includes('partly cloudy')) {
      weatherContainer.classList.add('partly-cloudy');
  }
}

function actualizarPronostico(datos) {
  const forecastContainer = document.getElementById('forecast-container');
  const forecastTitle = document.getElementById('forecast-title');
  forecastContainer.innerHTML = ''; // Limpiar el contenido anterior

  datos.forecast.forecastday.forEach(dia => {
      const forecastDay = document.createElement('div');
      forecastDay.className = 'forecast-day';

      const date = new Date(dia.date).toLocaleDateString();
      const condition = dia.day.condition.text;
      const icon = dia.day.condition.icon;
      const maxTemp = dia.day.maxtemp_c;
      const minTemp = dia.day.mintemp_c;

      forecastDay.innerHTML = `
          <h3>${date}</h3>
          <img src="https:${icon}" alt="${condition}">
          <p>${condition}</p>
          <p>Máx: ${maxTemp}°C</p>
          <p>Min: ${minTemp}°C</p>
      `;

      forecastContainer.appendChild(forecastDay);
  });

  forecastTitle.style.display = 'block'; // Mostrar el título del pronóstico
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('city-form');
  form.addEventListener('submit', event => {
      event.preventDefault();
      const ciudad = document.getElementById('city-input').value;
      obtenerClima(ciudad);
  });
});
