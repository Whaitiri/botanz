$(document).ready(function(){
	// variables
	var menuButton = $("#headerHamburger");
	var menuList = $("#headerMenuList");
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