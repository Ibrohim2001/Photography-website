const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const auto = false;
const intervalTime = 4000;
let slideInterval;
const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.nav_menu');
const openBtn = document.querySelector('.menu_open_btn');
const closeBtn = document.querySelector('.menu_close_btn');

const nextSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if(current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  }
  else {
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if(current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  }
  else {
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

next.addEventListener('click', e => {
  e.preventDefault();
  nextSlide();
  if(auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  e.preventDefault();
  if(auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

if(auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}

// menu buttons
openBtn.addEventListener('click', () => {
  console.log("hello");
    navMenu.classList.add('nav_expand');
    closeBtn.style.display = 'inline-block';
    openBtn.style.display = 'none'
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('nav_expand');
  closeBtn.style.display = 'none';
  openBtn.style.display = 'inline-block'
});

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
};

// let slideIndex = 0;
// showSlides(); // call showslide method

// function showSlides()
// {
// 	let i;

// 	// get the array of divs' with classname image-sliderfade
// 	var slides = document.querySelector(".image-sliderfade");
	
// 	// get the array of divs' with classname dot
// 	// var dots = document.getElementsByClassName("dot");

// 	for (i = 0; i < slides.length; i++) {
// 		// initially set the display to
// 		// none for every image.
// 		slides[i].style.display = "none";
// 	}

// 	// increase by 1, Global variable
// 	slideIndex++;

// 	// check for boundary
// 	if (slideIndex > slides.length)
// 	{
// 		slideIndex = 1;
// 	}

// 	for (i = 0; i < dots.length; i++) {
// 		dots[i].className = dots[i].className.
// 							replace(" active", "");
// 	}

// 	slides[slideIndex - 1].style.display = "block";
// 	dots[slideIndex - 1].className += " active";

// 	// Change image every 2 seconds
// 	setTimeout(showSlides, 2000);
// }
