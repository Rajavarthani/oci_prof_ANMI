const apiKey = 'your_openweathermap_api_key'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
            } else {
                displayWeather(data);
            }
        })
        .catch(error => alert("Error fetching weather data"));
}

function displayWeather(data) {
    const cityName = data.name;
    const temperature = data.main.temp + '°C';
    const weatherDescription = data.weather[0].description;
    const humidity = 'Humidity: ' + data.main.humidity + '%';
    const windSpeed = 'Wind Speed: ' + data.wind.speed + ' m/s';

    document.getElementById('cityName').innerText = cityName;
    document.getElementById('temperature').innerText = temperature;
    document.getElementById('weatherDescription').innerText = weatherDescription;
    document.getElementById('humidity').innerText = humidity;
    document.getElementById('windSpeed').innerText = windSpeed;

    document.getElementById('weatherResult').style.display = 'block';
}
