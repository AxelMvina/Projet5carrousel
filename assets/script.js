const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Fonction pour afficher le slide actif dans les éléments existants
function showSlideInBanner(slide) {
    const bannerImg = document.querySelector('.banner-img');
    const bannerText = document.querySelector('#banner p');
	const dots = document.querySelectorAll('.dot');

    bannerImg.src = slide.image;
    bannerImg.alt = "Banner Print-it";
    bannerText.innerHTML = slide.tagLine;

	const currentIndex = slides.findIndex(s => s === slide);
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

function initCarousel() {
    const prevSlideButton = document.querySelector('.arrow_left');
    const nextSlideButton = document.querySelector('.arrow_right');

    let currentIndex = 0;

    //Affichage initial du premier slide
    showSlideInBanner(slides[currentIndex]);

    //clic sur le bouton précédent
    prevSlideButton.addEventListener('click', function() {
        currentIndex = currentIndex - 1;
        if  (currentIndex  === -1) {
            currentIndex = slides.length -1
        }
        showSlideInBanner(slides[currentIndex]);
    });

    //clic sur le bouton suivant
    nextSlideButton.addEventListener('click', function() {
        currentIndex = currentIndex + 1;
        if (currentIndex > slides.length -1){
            currentIndex = 0
        }
        showSlideInBanner(slides[currentIndex]);
    });
}

// Initialisation du carrousel
initCarousel();
