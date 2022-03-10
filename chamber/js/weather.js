const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Kanab&units=imperial&appid=bf69c19713fcaa80a4c9c98f9fb0dc7a';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject);
    const temperature = jsObject.main.temp.toFixed(0)
    const description = jsObject.weather[0].description;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#icon-desc').textContent = description;
    document.querySelector('#temperature').textContent = temperature;

    let temp = document.getElementById("temperature");
    let numberTemp = temperature
    temp.innerHTML = numberTemp
    let speed = document.getElementById("wind-speed");
    let numberSpeed = jsObject.wind.speed
    speed.innerHTML = numberSpeed
    let feelTemp = document.getElementById('feelTemp');
    if (meetsRequirements(numberSpeed, numberTemp)) {
        feelTemp.innerHTML = buildWC(numberSpeed, numberTemp);
        
    }
    else {
        feelTemp.innerHTML= "N/A"
    }
    
    
    
    
    function buildWC(speed, temp) {
        let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed,0.16);
        wc = wc.toFixed(1);
        return wc;
    }
    
    function meetsRequirements(speed, temp) {
    
        if (temp <=50 && speed >3) return true
        else return false
    }


    })

