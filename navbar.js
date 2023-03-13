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
// const book = document.getElementById("bookmark").item(0);
// document.addEventListener('scroll',()=>{
//   if(this.scrollY <= PX) book.classList.remove("bookmarkscrolled")
//   if(this.scrollY >= PX) book.classList.add("bookmarkscrolled")
//   if(this.scrollY >= PX) book.classList.remove("bookmark")
// })