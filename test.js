//retrieve place on page
let h1Element = document.getElementById("greeting");
console.log(h1Element.innerHTML);
//get day of the week
const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let d= new Date();
let dayOfWeek = weekday[d.getDay()];

//display day on page
let h2Element = document.createElement("h2");
h2Element = "Happy" + dayOfWeek + "!";
document.body.appendChild(h2Element);

