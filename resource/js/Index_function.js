function SetAboutMe(num) {
  let val = num + '%';
  document.getElementById("aboutme").style.msTransform = `translateY(${val})`; // IE9 
  document.getElementById("aboutme").style.transform = `translateY(${val})`;
}
function SetClosePosition() {
  var w = window.innerWidth;
  var fr = 0;
  if(w>2000){fr=(w-2000)/2;}else{fr=0;}
  document.getElementById('CloseAboutme').style.right = `${fr}px`;
}
document.getElementById("CloseAboutme").onload = SetClosePosition()
