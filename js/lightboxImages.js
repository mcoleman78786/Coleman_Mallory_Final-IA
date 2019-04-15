// (() => {
	// console.log('Javascript is linked up!! ');
	// debugger;



const 	imagesBox       = document.querySelectorAll('.eventHold'),
		img             = document.querySelector('.lightimage'),
		lightbox        = document.querySelector('.lightboxImages'),
		closelightBlock = document.querySelector('.closeLightBlock');
		// add queryselecor all to "eventHold" which is the target .
		// "img and .lightimage is the image class that we are grabbing for the lightbox"
		// lightbox & .lightboxImages is the seleciton class that will grab all the images
		// .closeLightBox is the top right image cornter button and we are trying to make the lightbox disappear after it is pressed

		
		imagesBox.forEach(box => {
	    box.addEventListener("click", function(e) {
	    	// this function is grapping each box 

		let g = this.className.split(" ")[0],
		newImage = this.className.split(" ")[1];

		img.src = `images/${newImage}.jpg`;
		// This is where js is going to try and grab the image

		lightbox.classList.add('show-lightboxImage');
		// this is the lightbox which is adding lightboximages
	});

});

	function hideLightbox() {

		lightbox.classList.remove('show-lightboxImage');
		// Remove lightbox when closelightblock is clicked

	}

closelightBlock.addEventListener('click', hideLightbox);
// This is going to close the lightbox



