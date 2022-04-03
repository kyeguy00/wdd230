const url = "https://kyeguy00.github.io/wdd230/Temple-Inn/js/temples.json";
const cards = document.querySelector(".cards");

fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
    const temples = jsObject["Temples"];
    console.log(jsObject["Temples"]);
    temples.forEach(displayTemples);
  });

function displayTemples(temple, index) {
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let email = document.createElement("a");
  let phone = document.createElement("p");
  let address = document.createElement("p");
  let closures = document.createElement("p");
  let history = document.createElement("p");
  let ordinances = document.createElement("p");
  let services = document.createElement("p");
  let session = document.createElement("p");
  let like = document.createElement("button");

  h2.textContent = temple.name;
  phone.textContent = `Phone: ${temple.phone}`;
  address.textContent = `Address: ${temple.address}`;
  email.textContent = `Email: ${temple.email}`;
  closures.textContent = `Closure Dates: ${temple.closures}`;
  history.textContent = `History: ${temple.history}`;
  ordinances.textContent = `Ordinance Schedule: ${temple.ordinances}`;
  services.textContent = `Offered Services: ${temple.services}`;
  session.textContent = `Session Schedule: ${temple.session}`;
  like.textContent = `Like 👍`;

  h2.setAttribute("class", "temple-name");
  phone.setAttribute("class", "phone-number");
  email.setAttribute("class", "email");
  if (localStorage.getItem(`isLiked${index + 1}`)) {
    like.setAttribute("id", `likeClicked`);
  } else {
    like.setAttribute("id", `like${index + 1}`);
  }
  like.setAttribute("class", "like");
  like.addEventListener("click", () => clickCounter(temple.name));

  closures.setAttribute("class", "closures");
  history.setAttribute("class", "history");
  closures.setAttribute("class", "closures");
  closures.setAttribute("class", "closures");

  card.appendChild(h2);
  card.appendChild(phone);
  card.appendChild(address);
  card.appendChild(email);
  card.appendChild(closures);
  card.appendChild(history);
  card.appendChild(ordinances);
  card.appendChild(services);
  card.appendChild(session);
  card.appendChild(like);

  cards.appendChild(card);
}

function clickCounter(templeName) {
  if (templeName == "San Diego California Temple") {
    if (!localStorage.isLiked1) {
      localStorage.isLiked1 = true;
      document.getElementById(`like1`).id = "likeClicked";
    }
  }

  if (templeName == "Bountiful Utah Temple") {
    if (!localStorage.isLiked2) {
      localStorage.isLiked2 = true;
      document.getElementById("like2").id = "likeClicked";
    }
  }

  if (templeName == "Jordan River Utah Temple") {
    if (!localStorage.isLiked3) {
      localStorage.isLiked3 = true;
      document.getElementById("like3").id = "likeClicked";
    }
  }

  if (templeName == "Detroit Michigan Temple") {
    if (!localStorage.isLiked4) {
      localStorage.isLiked4 = true;
      document.getElementById("like4").id = "likeClicked";
    }
  }
}
