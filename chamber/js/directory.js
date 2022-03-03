const requestURL = "https://github.com/kyeguy00/wdd230/blob/5c686b2cd9cf5fc1335e189d05f499e51c652fc6/chamber/js/data.json";
const cards = document.querySelector('.cards');


fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['businesses'];
        displayProphets.forEach(displayBusinesses);
    })



function displayBusinesses(business) {

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let image = document.createElement('img');
    let phone = document.createElement('p');
    let address = document.createElement('p');

    h2.textContent = prophet.name

    card.appendChild(h2);
}