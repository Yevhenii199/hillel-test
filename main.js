const apiKey = "YOUR_API_KEY";
const city = "YOUR_CITY";

async function fetchWeatherData() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=kyiv&appid=4b66898d580ed04e385257389199fb2f
&units=metric`
  );
  const data = await response.json();

  document.getElementById("date").textContent = new Date().toDateString();
  document.getElementById("temp").textContent = `${Math.round(data.main.temp)}°C`;
  document.getElementById("feels-like").textContent = `Feels Like: ${Math.round(
    data.main.feels_like
  )}°C`;
  document.getElementById("condition").textContent =
    data.weather[0].description.charAt(0).toUpperCase() +
    data.weather[0].description.slice(1);
  document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
  document.getElementById("pressure").textContent = `Pressure: ${data.main.pressure} hPa`;
  document.getElementById("wind").textContent = `Wind: ${data.wind.speed} km/h ${
    data.wind.deg
  }°`;
  document.getElementById("last-updated").textContent = `Last Updated: ${new Date().toLocaleTimeString()}`;
}

document.getElementById("refresh-btn").addEventListener("click", fetchWeatherData);

// Initialize on load
fetchWeatherData();