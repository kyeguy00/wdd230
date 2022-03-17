const requestURL = "https://kyeguy00.github.io/wdd230/chamber/js/data.json";
const cards = document.querySelector('.cards');


fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject) {

        const businesses = jsonObject['Businesses'];
        const randomBusiness = businesses[Math.floor(Math.random() * 4) + 0];
        const randomBusiness2 = businesses[Math.floor(Math.random() * 4) + 4];
        const randomBusiness3 = businesses[Math.floor(Math.random() * 4) + 8];
        
        
        document.querySelector('.spotlight-1-header').textContent = randomBusiness.name;
        document.querySelector('.spotlight-1-image').setAttribute("src", randomBusiness.image)
        document.querySelector('.spotlight-1-phone').textContent = (`Phone: ${randomBusiness.phone}`)
        document.querySelector('.spotlight-1-address').textContent = (`Address: ${randomBusiness.address}`)

        document.querySelector('.spotlight-2-header').textContent = randomBusiness2.name;
        document.querySelector('.spotlight-2-image').setAttribute("src", randomBusiness2.image)
        document.querySelector('.spotlight-2-phone').textContent = (`Phone: ${randomBusiness2.phone}`)
        document.querySelector('.spotlight-2-address').textContent = (`Address: ${randomBusiness2.address}`)
        
        document.querySelector('.spotlight-3-header').textContent = randomBusiness3.name;
        document.querySelector('.spotlight-3-image').setAttribute("src", randomBusiness3.image)
        document.querySelector('.spotlight-3-phone').textContent = (`Phone: ${randomBusiness3.phone}`)
        document.querySelector('.spotlight-3-address').textContent = (`Address: ${randomBusiness3.address}`)
    });




