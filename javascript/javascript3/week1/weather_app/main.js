var input = document.getElementById("cityName");
var btn = document.getElementById("btn");
document.body.background = "backgroundImage.jpg";
//btn.addEventListener("click", "getWeatherUpdate()");

function getWeatherUpdate() {
    
    if (input.value === "") return alert("Please enter the city name!");   

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=44697308f76676fec9eedc92cd30b52c')
    .then(response => response.json())
    .then((response) => {
        /*console.log(response);
        console.log(response.name);
        console.log(response.main.temp);*/
        var currentWeather = document.getElementById("currentWeather");        
        currentWeather.innerHTML = "";

        var tempinK = response.main.temp - 273.15;
        var currentTemp = Math.round(tempinK);
        //console.log(currentTemp);

        var displayTemp = document.createElement("h1");
        displayTemp.setAttribute("id", "temp");
        displayTemp.innerHTML = currentTemp + "°C";
        currentWeather.appendChild(displayTemp);        

        var image = document.createElement("img");
        image.setAttribute("id", "image");        
        if (response.weather[0].main === "Clouds"){
            image.src = "icons/cloudy.png";
        }
        else if (response.weather[0].main === "Clear") {
            image.src = "icons/sunny.png";            
        }
        else if (response.weather[0].main === "Rain") {
            image.src = "icons/rain.png";            
        }
        currentWeather.appendChild(image);

        var description = document.createElement("p");
        description.setAttribute("id", "description");
        description.innerHTML = response.weather[0].description;
        currentWeather.appendChild(description);

        //console.log(response.weather[0].main);

        var city = document.createElement("h1");
        city.setAttribute("id", "city");
        var inputCity = input.value.charAt(0).toUpperCase() + input.value.slice(1);
        city.innerHTML = inputCity;
        currentWeather.appendChild(city);

        var today = new Date();
        var todayDate = document.createElement("p");
        todayDate.setAttribute("id", "date");
        todayDate.innerHTML = today;
        currentWeather.appendChild(todayDate);

        //console.log(currentWeather.childNodes.length);             
    });
}