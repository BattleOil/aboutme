function SetAboutMe(num) {
  let val = num+'%';
  document.getElementById("aboutme").style.msTransform = `translateY(${val})`; // IE9 
  document.getElementById("aboutme").style.transform = `translateY(${val})`;
}
