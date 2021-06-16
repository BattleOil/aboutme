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
function ChangeAnimation() {
  document.getElementById("line1").style.msTransform = `rotate(45deg) translate(20px, -50px)`; // IE9 
  document.getElementById("line1").style.transform = `rotate(45deg) translate(20px, -50px)`;
  document.getElementById("line2").style.msTransform = `rotate(-45deg) translate(-50px, 20px)`; // IE9 
  document.getElementById("line2").style.transform = `rotate(-45deg) translate(-50px, 20px)`;
}

function ResetAnimation() {
  document.getElementById("line1").style.msTransform = `rotate(0deg) translate(0px, 0px)`; // IE9 
  document.getElementById("line1").style.transform = `rotate(0deg) translate(0px, 0px)`;
  document.getElementById("line2").style.msTransform = `rotate(0deg) translate(0px, 0px)`; // IE9 
  document.getElementById("line2").style.transform = `rotate(0deg) translate(0px, 0px)`;
}

