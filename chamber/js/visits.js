
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");


let lastVisit = Number(window.localStorage.getItem("last-visit"));



let newDate = Date.now();


localStorage.setItem("last-visit", newDate);

let difference = newDate - lastVisit;

let daysLastVisit = difference / (1000 * 60 * 60 * 24);

console.log(Math.floor(daysLastVisit));

if (lastVisit !== 0) {
visitsDisplay.textContent = Math.floor(daysLastVisit);
} else {
visitsDisplay.textContent = "This is your first visit!"
}