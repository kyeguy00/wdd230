const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?q=Bethesda&units=imperial&appid=bf69c19713fcaa80a4c9c98f9fb0dc7a';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject);

    /* Current Temp */
    const temperature1 = jsObject.list[0].main.temp.toFixed(0)
    const description1 = jsObject.list[0].weather[0].description;
    const iconsrc1= `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
    document.querySelector('#weathericon').setAttribute('src', iconsrc1);
    document.querySelector('#icon-desc').textContent = description1;

    let temp1 = document.getElementById("temperature");
    let numberTemp1 = temperature1
    temp1.innerHTML = numberTemp1
    let speed1 = document.getElementById("humidity");
    let humidityfeel1 = jsObject.list[0].main.humidity.toFixed(0)
    speed1.innerHTML = humidityfeel1

        /* Tomorrow Temp */
    const temperature2 = jsObject.list[4].main.temp.toFixed(0)
    const description2 = jsObject.list[4].weather[0].description;
    const iconsrc2 = `https://openweathermap.org/img/w/${jsObject.list[4].weather[0].icon}.png`;
    const today = new Date();
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    document.querySelector('.weather-title2').textContent = `${tomorrow.toLocaleString('en-US', {
        day: 'numeric',
        month: 'long'
    })}`;
    document.querySelector('#weathericon2').setAttribute('src', iconsrc2);
    document.querySelector('#icon-desc2').textContent = description2;

    let temp2 = document.getElementById("temperature2");
    let numberTemp2 = temperature2
    temp2.innerHTML = numberTemp2
    let speed2 = document.getElementById("humidity2");
    let humidityfeel2 = jsObject.list[4].main.humidity.toFixed(0)
    speed2.innerHTML = humidityfeel2

    /* Day after tomorrow Temp */

    const temperature3 = jsObject.list[12].main.temp.toFixed(0)
    const description3 = jsObject.list[12].weather[0].description;
    const iconsrc3 = `https://openweathermap.org/img/w/${jsObject.list[12].weather[0].icon}.png`;
    const today3 = new Date();
    const tomorrow3 = new Date(today3)
    tomorrow3.setDate(tomorrow3.getDate() + 2)
    document.querySelector('.weather-title3').textContent = `${tomorrow3.toLocaleString('en-US', {
        day: 'numeric',
        month: 'long'
    })}`;
    document.querySelector('#weathericon3').setAttribute('src', iconsrc3);
    document.querySelector('#icon-desc3').textContent = description3;

    let temp3 = document.getElementById("temperature3");
    let numberTemp3 = temperature3
    temp3.innerHTML = numberTemp3
    let speed3 = document.getElementById("humidity3");
    let humidityfeel3 = jsObject.list[12].main.humidity.toFixed(0)
    speed3.innerHTML = humidityfeel3

    /* 2 Days after tomorrow Temp */

    const temperature4 = jsObject.list[20].main.temp.toFixed(0)
    const description4 = jsObject.list[20].weather[0].description;
    const iconsrc4 = `https://openweathermap.org/img/w/${jsObject.list[20].weather[0].icon}.png`;
    const today4 = new Date();
    const tomorrow4 = new Date(today4)
    tomorrow4.setDate(tomorrow4.getDate() + 3)
    document.querySelector('.weather-title4').textContent = `${tomorrow4.toLocaleString('en-US', {
        day: 'numeric',
        month: 'long'
    })}`;
    document.querySelector('#weathericon4').setAttribute('src', iconsrc4);
    document.querySelector('#icon-desc4').textContent = description4;

    let temp4 = document.getElementById("temperature4");
    let numberTemp4 = temperature4
    temp4.innerHTML = numberTemp4
    let speed4 = document.getElementById("humidity4");
    let humidityfeel4 = jsObject.list[20].main.humidity.toFixed(0)
    speed4.innerHTML = humidityfeel4
    })

const weatherAlert = 'https://api.openweathermap.org/data/2.5/onecall?lat=38.9807&lon=-77.1003&units=imperial&appid=bf69c19713fcaa80a4c9c98f9fb0dc7a'
const alert = document.querySelector('.alert');
fetch(weatherAlert)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject); 

    if (jsObject.alerts == null) {
       
    } else {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let span = document.createElement('span');


    h2.textContent = jsObject.alerts[0].event;
    h2.setAttribute('class', 'weatherEvent');
    
    p.textContent = jsObject.alerts[0].alert;
    p.setAttribute('class', 'weatherAlert');

    span.setAttribute('class', 'closeAlert');
    span.setAttribute('onclick', `this.parentElement.style.display='none';`)
    span.innerHTML = `&times;`
    
    card.appendChild(h2);
    card.appendChild(span);
    card.appendChild(p);
    
    
    
    alert.appendChild(card);
    
    }
    

})

