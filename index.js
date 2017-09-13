//window.addEventListener("load, init")

var b1 = document.getElementById("b1");
var c1 = document.getElementById("con1");

var b2 = document.getElementById("b2");
var c2 = document.getElementById("con2");

var b3 = document.getElementById("b3");
var c3 = document.getElementById("con3");


function disp(bx, cx) {
	bx.style.backgroundColor = "white";
	cx.style.display = "flex" ;
}
function hide(bx, cx) {
	bx.style.backgroundColor = "black";
	cx.style.display = "none";
}

function a(){
	disp(b1, c1);
}
function b(){
	hide(b1, c1);
}

function c(){
	disp(b2, c2);
}
function d(){
	hide(b2, c2);
}

function e(){
	disp(b3, c3);
}
function f(){
	hide(b3, c3);
}


b1.addEventListener("mouseover", a);
b1.addEventListener("mouseout", b);

b2.addEventListener("mouseover", c);
b2.addEventListener("mouseout", d);

b3.addEventListener("mouseover", e);
b3.addEventListener("mouseout", f);

var imageGallery = [
  "img/show/1.JPG",      
  "img/show/2.JPG",
  "img/show/3.JPG",
  "img/show/4.JPG",
  "img/show/5.JPG",
  "img/show/6.JPG",
  "img/show/7.JPG",
  "img/show/8.JPG",
  "img/show/9.JPG",
  "img/show/10.JPG",
  "img/show/11.JPG",
  "img/show/12.JPG",
  "img/show/13.JPG",
  "img/show/14.JPG",
  "img/show/15.JPG",
];

var count = 0;
var total = imageGallery.length - 1;

function next() {
 count++ ;
  if(count > total) count = 0
   
  document.getElementById("galleryjs").src = imageGallery[count] ;
}

function Play() {
  setInterval(next, 10000);
}

Play();

var gal = document.getElementById("galleryjs");
gal.addEventListener("click", next);