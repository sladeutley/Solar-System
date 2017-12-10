var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

var el = document.getElementById("planets");
/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

planetsToDom = planets.forEach(function(item){
    el.innerHTML += `${item} <br>`;
})

// Use the map method to create a new array where the first letter of each planet is capitalized

let planetsCapitalized = planets.map((item) =>
    item.charAt(0).toUpperCase() + item.slice(1)  
);
el.innerHTML += planetsCapitalized;
el.innerHTML += "<br>";

// Use the filter method to create a new array that contains planets with the letter 'e'
let arrayWithE = planets.filter((item) => 
    item.includes("e"));
el.innerHTML += arrayWithE;
el.innerHTML += `<br>`
// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

let reducify = words.reduce((a, b) => `${a} ${b.toString() }`);
// let reducify = words.reduce((a, b) => a + " " + b.toString() + " ");
el.innerHTML += `${reducify}.`;