function ShowAboutMe() {
  document.getElementById("aboutme").style.msTransform = "translateY(0%)"; // IE9 
  document.getElementById("aboutme").style.transform = "translateY(0%)";
}
function CloseAboutMe() {
  document.getElementById("aboutme").style.msTransform = "translateY(100%)"; // IE9 
  document.getElementById("aboutme").style.transform = "translateY(100%)";
}
