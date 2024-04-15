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



// Fonction pour afficher le slide actif dans les éléments existants
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


