const requestURL = "https://kyeguy00.github.io/wdd230/chamber/js/data.json";
const cards = document.querySelector('.cards');


fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['Businesses'];
        businesses.forEach(displayBusinesses);
    });



function displayBusinesses(business) {

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let image = document.createElement('img');
    let website = document.createElement('a');
    let phone = document.createElement('p');
    let address = document.createElement('p');
    

    let altText = business.name + " " + "icon";
    let websiteText = `${business.name} Website`;
    let websiteLink = business.website;
    
    

    h2.textContent = business.name;
    
    image.setAttribute('src', business.image);
    image.setAttribute('alt', altText);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('class', 'business-images');
    website.setAttribute("href", websiteLink);
    website.setAttribute("class", "website-link");
    website.textContent = websiteText;

    phone.textContent = `Phone: ${business.phone}`;
    phone.setAttribute("class", "phone-address");

    address.textContent = `Address: ${business.address}`;
    address.setAttribute("class", "phone-address");

   
    

    card.appendChild(h2);
    card.appendChild(image);
    card.appendChild(phone);
    card.appendChild(address);
    card.appendChild(website);

    cards.appendChild(card);
}