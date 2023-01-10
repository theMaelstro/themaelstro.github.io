// Get text for modal view caption.
var modalCaptionText = document.getElementById("modal-caption");

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");	// Get slides (containers)
  let dots = document.getElementsByClassName("gallery-thumb");
  let images = document.getElementsByClassName("slide-image");	// Get slide images to fill modal data.
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-slide", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-slide";
  images[slideIndex-1].onclick = function(){
    modal.style.display = "block";
    modalImg.src = images[slideIndex-1].src;
    modalCaptionText.innerHTML = images[slideIndex-1].alt;
  }
  captionText.innerHTML = dots[slideIndex-1].alt;
  // Update slide number.
  document.getElementById('slide-number').innerHTML = slideIndex + " | " + slides.length;
}

dots = document.getElementsByClassName("gallery-thumb");
   for (i = 0; i < dots.length; i++) {
    if (dots[i].className.search("active-slide") != -1) {
    	img = dots[i];
    }
  }

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modal-image");


// Get the <span> element that modal-closes the modal
var span = document.getElementsByClassName("modal-close")[0];

// When the user clicks on <span> (x), modal-close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
modal.onclick = function() { 
  modal.style.display = "none";
}