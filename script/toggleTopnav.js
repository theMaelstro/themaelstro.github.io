function toggleTopnav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  
  var dropdown = document.getElementById("download-container");
  if (dropdown.style.display === "block"){
	dropdown.style.display = "none";
  }
}