$(document).ready(function(){
	// variables
	var menuButton = $("#headerHamburger");
	var menuList = $("#headerMenuContainer");
	var contactButton = $(".contactButton");
	var contactContainer = $("#contactContainer");


	//menu button show/hide
	menuButton.click(function(){
		if (menuList.is(":visible")) {
			menuList.fadeOut('1000');
			menuList.hide('slow');


		}
		else {
			menuList.fadeIn('1000');
			menuList.show();
		}
	});

	//contact menu show/hide
	contactButton.click(function(){
		if (contactContainer.is(":visible")) {
			contactContainer.fadeOut('1000');
			contactContainer.hide('slow');
		}
		else {
			contactContainer.fadeIn('1000');
			contactContainer.show('');
		}
	});

});


// Slideshow Carousel
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slide");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 2 seconds
}

// Modal popup

// Get the modal
var modal = document.getElementById('contactus-popup');

// Get the button that opens the modal
var btn = document.getElementById("contactus-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
