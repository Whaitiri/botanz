$(document).ready(function(){
	// variables
	var menuButton = $("#headerHamburger");
	var menuList = $("#headerMenuContainer");
	var contactButton = $(".contactButton");
	var contactContainer = $("#contactus-popup");
	var contactClose = $(".close");


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
		contactContainer.fadeIn('1000');
		contactContainer.show('');
		if (menuList.is(":visible")) {
			menuList.fadeOut('1000');
			menuList.hide('slow');
		}
	});

	contactClose.click(function(){
		contactContainer.fadeOut('1000');
		contactContainer.hide('slow');
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


$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
