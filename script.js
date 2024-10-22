let nav = document.querySelector(".nav")
let bbt = document.querySelector(".bbt")
window.onscroll = function() {scrollFunction()};
function showMenu(){
    nav.style.display="flex"
}
function hideMenu(){
    nav.style.display="none"
}
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btt.style.display = "inline-flex";
  } else {
    btt.style.display = "none";
  }
}