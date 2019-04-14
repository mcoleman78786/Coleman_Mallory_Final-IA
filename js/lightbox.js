
const 	projectBox 	= document.querySelectorAll('.eventHold'),
		img = document.querySelector('.lightimage'),
		lightbox = document.querySelector('.lightbox'),
		closelightBlock = document.querySelector('.closeLightBlock');

projectBox.forEach(box => {
	box.addEventListener("click", function(e) {

		let i = this.className.split(" ")[0],
		newImage = this.className.split(" ")[1];

		img.src = `images/${newImage}.jpg`;

		lightbox.classList.add('show-lightBox');
	});

});


	function hideLightbox() {

		lightbox.classList.remove('show-lightBox');

	}

closelightBlock.addEventListener('click', hideLightbox);