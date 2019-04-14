
const 	projectBox 	= document.querySelectorAll('.eventHold'),
		bigImg = document.querySelector('.lightimage'),
		lightbox = document.querySelector('.lightbox'),
		closeLB = document.querySelector('.lightbox-close');

projectBox.forEach(box => {
	box.addEventListener("click", function(e) {

		let i = this.className.split(" ")[0],
		newImage = this.className.split(" ")[1];

		bigImg.src = `images/${newImage}.jpg`;

		lightbox.classList.add('show-lightBox');
	});

});


	function hideLightbox() {

		lightbox.classList.remove('show-lightBox');

	}

closeLB.addEventListener('click', hideLightbox);