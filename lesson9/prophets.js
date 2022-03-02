const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });




function displayProphets(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let prophetBirthplace = document.createElement('p');
    let prophetBirthdate = document.createElement('p');

    
    let prophetFullName = prophet.name + " " + prophet.lastname;
    let order = prophet.order;
    let altText = 'Portrait of' + ' ' + prophetFullName + ' '  + 'Latter-day President number' + ' ' + order ;
    

    h2.textContent = prophetFullName;

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', altText);
    portrait.setAttribute('loading', 'lazy');

    let dateOfBirth = 'Date of Birth:' + ' ' + prophet.birthdate;
    let birthPlace =  'Place of Birth:' + ' ' + prophet.birthplace;

    prophetBirthdate.textContent = dateOfBirth;
    prophetBirthplace.textContent = birthPlace;

    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(prophetBirthdate);
    card.appendChild(prophetBirthplace);

    cards.appendChild(card);
}