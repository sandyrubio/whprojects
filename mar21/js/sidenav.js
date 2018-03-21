var navBtn = document.getElementById("navBtn");
var nav = document.getElementById("nav");
// target element be declared variable
// navBtn.style.color = "red";
// navBtn.style.fontSize = "32px";

navBtn.addEventListener("click", showNav);
function showNav(){
    navBtn.classList.toggle("active");
    nav.classList.toggle("viewNav");
}