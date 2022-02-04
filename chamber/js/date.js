const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();
const datefield = document.querySelector("date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<div>${fulldate}</div>`;

const today = new Date()
let day_of_week;
day_of_week = today.getDay();
let message1;

// if (day_of_week >= 1 && day_of_week <= 5) 
if (day_of_week >= 1 && day_of_week <=2) {
    message1 = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}

document.querySelector("#message1").textContent = message1