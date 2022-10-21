window.onscroll = function() {navbarLock()};

var header = document.getElementById("myTopnav");
var sticky = header.offsetTop;

function navbarLock() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}