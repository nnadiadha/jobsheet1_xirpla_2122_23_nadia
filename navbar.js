// // When the user scrolls the page, execute myFunction
// window.onscroll = function () {
//   myFunction();
// };

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

//jees jlek (tru min)
const nav = document.getElementsByTagName("nav").item(0);
const PX = 450
document.addEventListener('scroll',()=>{
  console.log(this.scrollY);
  if(this.scrollY <= PX) nav.classList.remove("scrolled")
  if(this.scrollY >= PX) nav.classList.add("scrolled")
  if(this.scrollY >= 1300) nav.classList.remove("scrolled")
})
let arr = new Array("adsads","adsadasd","dasdasd");
let arr1 = ["janet","adha","nuT"]

function openAudio(){
  document.getElementById("audio").style.display = "block";
  document.getElementById("modal").style.display = "block";
  document.getElementById("audioo").style.display = "none";
}

function closeAudio(){
  document.getElementById("audio").style.display = "none";
  document.getElementById("modal").style.display = "none";
  document.getElementById("audioo").style.display = "block";
}

function openEdit() {
  document.getElementById("edit-profile").style.display = "block";
  document.getElementById("modal2").style.display = "block";
}

function closeEdit(){
  document.getElementById("edit-profile").style.display = "none";
  document.getElementById("modal2").style.display = "none";
}