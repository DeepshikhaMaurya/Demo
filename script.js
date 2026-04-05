const apiKey = "YOUR_API_KEY_HERE";

function getWeather() {
  const city = document.getElementById("city").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("cityName").innerText = data.name;
      document.getElementById("temp").innerText = "Temperature: " + data.main.temp + "°C";
      document.getElementById("desc").innerText = "Weather: " + data.weather[0].description;
    })
    .catch(error => {
      alert("City not found!");
    });
}