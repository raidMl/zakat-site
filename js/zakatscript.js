function showIframe(){
    var a=document.getElementById('framediv');
    var b=document.getElementById('frame');

    a.style.display="block";
    b.style.display="block";
//     a.append('<div id="framediv">');
//     b.append('  <iframe id="frame" class="container "  name="frm" >');
 }
function hideIframe(){
    var a=document.getElementById('framediv');
    var b=document.getElementById('frame');
    // var c=document.getElementById('na3t');

    // c.pause();
    // b.remove();
    // a.remove();
// console.log(b.value)

    a.style.display="none";
    b.style.display="none";
   

}



// $(document).ready(function(){
// $("#closeVideo").click(function(){
// $('#framediv').hide();
//  $('#frame').hide();
// //  var bb=$('#na3t').attr("href").value="";
//  console.log(bb);


//     });
// });



function ValidateEmail(inputText)
{

	var a=document.getElementsByClassName('Forms');
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(a[0].value==""|| a[1].value==""){
	document.form1.text1.focus();

		a[0].value="";
		a[1].value="";
	
	
	
	document.getElementById("alertt").style.display="block" ;
	document.getElementById("alertt2").style.display="none" ;

	document.getElementById("alertmail").style.display="none" ;
	}

else if((inputText.value.match(mailformat))&& a[1].value!="")
{
		document.getElementById("alertt2").style.display="block" ;
	document.getElementById("alertt").style.display="none" ;

	document.getElementById("alertmail").style.display="none" ;
	
		a[0].value="";
		a[1].value="";
	}







else
{
	document.getElementById("alertt2").style.display="none" ;
	document.getElementById("alertt").style.display="none" ;

	document.getElementById("alertmail").style.display="block" ;
	a[0].value="";
	a[1].value="";
	

// return false;
}
}


// function send(){
// var a=document.getElementsByClassName('Forms');
// if(a[0].value==""|| a[1].value==""){




// document.getElementById("alertt").style.display="block" ;
// }
// else if(email==true){
// 	document.getElementById("alertt2").style.display="block" ;

// 	a[0].value="";
// 	a[1].value="";
// }

// else{

// a[0].value="";
// a[1].value="";}
// }

function closeAlert(){
	document.getElementById("alertt").style.display="none" ;
	document.getElementById("alertt2").style.display="none" ;
	document.getElementById("alertmail").style.display="none" ;


}
















// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}


/* Description: Custom JS file */

/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT(); // back to top button
};

window.onload = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.documentElement.scrollTop > 30) {
		document.getElementById("navbarExample").classList.add("top-nav-collapse");
	} else if ( document.documentElement.scrollTop < 30 ) {
		document.getElementById("navbarExample").classList.remove("top-nav-collapse");
	}
}

// Navbar on mobile
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
	});
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  	document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

// Hover on desktop
function toggleDropdown(e) {
	const _d = e.target.closest(".dropdown");
	let _m = document.querySelector(".dropdown-menu", _d);

	setTimeout(
		function () {
		const shouldOpen = _d.matches(":hover");
		_m.classList.toggle("show", shouldOpen);
		_d.classList.toggle("show", shouldOpen);

		_d.setAttribute("aria-expanded", shouldOpen);
		},
		e.type === "mouseleave" ? 300 : 0
	);
}

// On hover
const dropdownCheck = document.querySelector('.dropdown');

if (dropdownCheck !== null) { 
	document.querySelector(".dropdown").addEventListener("mouseleave", toggleDropdown);
	document.querySelector(".dropdown").addEventListener("mouseover", toggleDropdown);

	// On click
	document.querySelector(".dropdown").addEventListener("click", (e) => {
		const _d = e.target.closest(".dropdown");
		let _m = document.querySelector(".dropdown-menu", _d);
		if (_d.classList.contains("show")) {
			_m.classList.remove("show");
			_d.classList.remove("show");
		} else {
			_m.classList.add("show");
			_d.classList.add("show");
		}
	});
}


/* Rotating Text - Word Cycle */
var checkReplace = document.querySelector('.replace-me');
if (checkReplace !== null) { 
	var replace = new ReplaceMe(document.querySelector('.replace-me'), {
		animation: 'animated fadeIn',                       // Animation class or classes
		speed: 2000,                                        // Delay between each phrase in miliseconds
		separator: ',',                                     // Phrases separator
		hoverStop: false,                                   // Stop rotator on phrase hover
		clickChange: false,                                 // Change phrase on click
		loopCount: 'infinite',                              // Loop Count - 'infinite' or number
		autoRun: true,                                      // Run rotator automatically
		onInit: false,                                      // Function
		onChange: false,                                    // Function
		onComplete: false                                   // Function
	});
}
  

/* Card Slider - Swiper */
var cardSlider = new Swiper('.card-slider', {
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 3,
	spaceBetween: 70,
	breakpoints: {
		// when window is <= 767px
		767: {
			slidesPerView: 1
		},
		// when window is <= 991px
		991: {
			slidesPerView: 2,
			spaceBetween: 40
		}
	}
});


/* Back To Top Button */
// Get the button
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}

/**
* Template Name: Arsha - v4.1.0
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
	"use strict";
  
	/**
	 * Easy selector helper function
	 */
	const select = (el, all = false) => {
	  el = el.trim()
	  if (all) {
		return [...document.querySelectorAll(el)]
	  } else {
		return document.querySelector(el)
	  }
	}
  
	/**
	 * Easy event listener function
	 */
	const on = (type, el, listener, all = false) => {
	  let selectEl = select(el, all)
	  if (selectEl) {
		if (all) {
		  selectEl.forEach(e => e.addEventListener(type, listener))
		} else {
		  selectEl.addEventListener(type, listener)
		}
	  }
	}
  
	/**
	 * Easy on scroll event listener 
	 */
	const onscroll = (el, listener) => {
	  el.addEventListener('scroll', listener)
	}
  
	/**
	 * Navbar links active state on scroll
	 */
	let navbarlinks = select('#navbar .scrollto', true)
	const navbarlinksActive = () => {
	  let position = window.scrollY + 200
	  navbarlinks.forEach(navbarlink => {
		if (!navbarlink.hash) return
		let section = select(navbarlink.hash)
		if (!section) return
		if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
		  navbarlink.classList.add('active')
		} else {
		  navbarlink.classList.remove('active')
		}
	  })
	}
	window.addEventListener('load', navbarlinksActive)
	onscroll(document, navbarlinksActive)
  
	/**
	 * Scrolls to an element with header offset
	 */
	const scrollto = (el) => {
	  let header = select('#header')
	  let offset = header.offsetHeight
  
	  let elementPos = select(el).offsetTop
	  window.scrollTo({
		top: elementPos - offset,
		behavior: 'smooth'
	  })
	}
  
	/**
	 * Toggle .header-scrolled class to #header when page is scrolled
	 */
	let selectHeader = select('#header')
	if (selectHeader) {
	  const headerScrolled = () => {
		if (window.scrollY > 100) {
		  selectHeader.classList.add('header-scrolled')
		} else {
		  selectHeader.classList.remove('header-scrolled')
		}
	  }
	  window.addEventListener('load', headerScrolled)
	  onscroll(document, headerScrolled)
	}
  
	/**
	 * Back to top button
	 */
	let backtotop = select('.back-to-top')
	if (backtotop) {
	  const toggleBacktotop = () => {
		if (window.scrollY > 100) {
		  backtotop.classList.add('active')
		} else {
		  backtotop.classList.remove('active')
		}
	  }
	  window.addEventListener('load', toggleBacktotop)
	  onscroll(document, toggleBacktotop)
	}
  
	/**
	 * Mobile nav toggle
	 */
	on('click', '.mobile-nav-toggle', function(e) {
	  select('#navbar').classList.toggle('navbar-mobile')
	  this.classList.toggle('bi-list')
	  this.classList.toggle('bi-x')
	})
  
	/**
	 * Mobile nav dropdowns activate
	 */
	on('click', '.navbar .dropdown > a', function(e) {
	  if (select('#navbar').classList.contains('navbar-mobile')) {
		e.preventDefault()
		this.nextElementSibling.classList.toggle('dropdown-active')
	  }
	}, true)
  
	/**
	 * Scrool with ofset on links with a class name .scrollto
	 */
	on('click', '.scrollto', function(e) {
	  if (select(this.hash)) {
		e.preventDefault()
  
		let navbar = select('#navbar')
		if (navbar.classList.contains('navbar-mobile')) {
		  navbar.classList.remove('navbar-mobile')
		  let navbarToggle = select('.mobile-nav-toggle')
		  navbarToggle.classList.toggle('bi-list')
		  navbarToggle.classList.toggle('bi-x')
		}
		scrollto(this.hash)
	  }
	}, true)
  
	/**
	 * Scroll with ofset on page load with hash links in the url
	 */
	window.addEventListener('load', () => {
	  if (window.location.hash) {
		if (select(window.location.hash)) {
		  scrollto(window.location.hash)
		}
	  }
	});
  
	/**
	 * Preloader
	 */
	let preloader = select('#preloader');
	if (preloader) {
	  window.addEventListener('load', () => {
		preloader.remove()
	  });
	}
  
	/**
	 * Initiate  glightbox 
	 */
	const glightbox = GLightbox({
	  selector: '.glightbox'
	});
  
	/**
	 * Skills animation
	 */
	let skilsContent = select('.skills-content');
	if (skilsContent) {
	  new Waypoint({
		element: skilsContent,
		offset: '80%',
		handler: function(direction) {
		  let progress = select('.progress .progress-bar', true);
		  progress.forEach((el) => {
			el.style.width = el.getAttribute('aria-valuenow') + '%'
		  });
		}
	  })
	}
  
	/**
	 * Porfolio isotope and filter
	 */
	window.addEventListener('load', () => {
	  let portfolioContainer = select('.portfolio-container');
	  if (portfolioContainer) {
		let portfolioIsotope = new Isotope(portfolioContainer, {
		  itemSelector: '.portfolio-item'
		});
  
		let portfolioFilters = select('#portfolio-flters li', true);
  
		on('click', '#portfolio-flters li', function(e) {
		  e.preventDefault();
		  portfolioFilters.forEach(function(el) {
			el.classList.remove('filter-active');
		  });
		  this.classList.add('filter-active');
  
		  portfolioIsotope.arrange({
			filter: this.getAttribute('data-filter')
		  });
		  portfolioIsotope.on('arrangeComplete', function() {
			AOS.refresh()
		  });
		}, true);
	  }
  
	});
  
	/**
	 * Initiate portfolio lightbox 
	 */
	const portfolioLightbox = GLightbox({
	  selector: '.portfolio-lightbox'
	});
  
	/**
	 * Portfolio details slider
	 */
	new Swiper('.portfolio-details-slider', {
	  speed: 400,
	  loop: true,
	  autoplay: {
		delay: 5000,
		disableOnInteraction: false
	  },
	  pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	  }
	});
  
	/**
	 * Animation on scroll
	 */
	window.addEventListener('load', () => {
	  AOS.init({
		duration: 1000,
		easing: "ease-in-out",
		once: true,
		mirror: false
	  });
	});
  
  })()


