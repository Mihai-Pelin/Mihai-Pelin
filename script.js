// Cache the DOM
var button = document.getElementById("button");
var body = document.getElementById("body");
var nume = document.getElementById("nume");
var prenume = document.getElementById("prenume");
var img = document.getElementById("imagine");
var asteptari = document.getElementById("asteptari");
var an = document.getElementById("AnNastere");

//Constants
const date = new Date ();
var year = date.getFullYear();

// Add eventListener
button.addEventListener("click", AltaViata);
an.addEventListener("mouseover", displayAge);

function displayAge()
{
an.innerHTML = year - an.innerHTML;
}


function AltaViata()
{
	nume.innerHTML = "Functie: Senior Java Dev"
	prenume.innerHTML = "Loc de muna: la birou"
	asteptari.innerHTML = "Experienta: <ol> <li>7 luni</li></ol>"
	img.src = "IMG_1324.jpg"
	img.style.width = "300"
	img.style.height = "225"
	img.style.border = " 10px solid #839758"
	img.style.opacity = "0.8"
	body.style.backgroundColor = "#cfc4b6"

}

