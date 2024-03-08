const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

searchBtn.addEventListener("click", () => {
    const city = searchBox.value;
    const url = `http://api.weatherapi.com/v1/current.json?key=9c07ce3ae1fd4fa4a31162146240703&q=${city}`;
    
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
        document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°c";
        document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";

        
        const weatherCondition = data.current.condition.text;

        
        if (weatherCondition === "Cloudy") {
            weatherIcon.src = "images/clouds.png";
        } else if (weatherCondition === "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (weatherCondition === "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (weatherCondition === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (weatherCondition === "Mist") {
            weatherIcon.src = "images/mist.png";
        } else if (weatherCondition === "Snow") {
            weatherIcon.src = "images/snow.png";
        }
    })
    .catch((error) => {
        console.log("Error fetching data:", error);
    });
});
