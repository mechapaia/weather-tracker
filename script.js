document.getElementById('getWeatherBtn').onclick = async () => {
    
    // constructing the url required to fetch information from openweathermap
    const city = document.getElementById('cityInput').value;
    const apiKey = '4ceccafa76eb5aef29d8ab3726796fb8';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        // collecting response from openweathermap, then 
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        
        // turning json data into js object
        const data = await response.json();

        // passing data into displayWeather function
        displayWeather(data);
    } catch (error) {
        // displaying error incase any occur during this process
        document.getElementById('weatherInfo').innerHTML = `<p>${error.message}</p>`;
    }
};

const displayWeather = (data) => {
    // writing the data collected in a proper format
    document.getElementById('weatherInfo').innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
};

// changing class name to allow change in theme
document.getElementById('themeToggle').onclick = () => {
    document.body.classList.toggle('dark');
};

// clearing the input and output when home is clicked
document.getElementById('home').onclick = () => {
    document.getElementById('weatherInfo').innerHTML = '';
    document.getElementById('cityInput').value = '';
};
