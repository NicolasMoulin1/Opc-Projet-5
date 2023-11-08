const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let index = 0 
let lastImage = slides.length -1
let firstImage = 0

const elementImg = document.querySelector(".banner-img")
const title = document.querySelector("#title")

for (var i = 0; i < slides.length; i++) {
	const dotElement = document.createElement("span")
	dotElement.className = "dot"
    document.querySelector(".dots").appendChild(dotElement)
	if (i === index) {
		dotElement.classList.add("dot_selected")
	}
}

let dots = document.querySelectorAll(".dots .dot") 

function renderImage(index) {
	elementImg.setAttribute("src", 'assets/images/slideshow/' + slides[index].image)
	title.innerHTML = slides[index].tagLine
}

renderImage(0)

document.querySelector("#arrow_left").addEventListener("click", () => {
	dots[index].classList.remove("dot_selected")
	index --
	if (index < firstImage) {
		index = lastImage
	}
	renderImage(index)
	dots[index].classList.add("dot_selected")
	console.log("Click on left")
})

document.querySelector("#arrow_right").addEventListener("click", () => {
	dots[index].classList.remove("dot_selected")
	index ++
	if (index > lastImage) {
		index = firstImage
	}
	renderImage(index)
	dots[index].classList.add("dot_selected")
	console.log("click on right")
})

