$(document).ready(function () {
	// ALL YOUR BASE EASTER EGG
	$(window).konami({
		cheat: function () {
			// ALL YOUR BASE ARE BELONG TO US
			$("#splash-head").html("MAIN SCREEN TURN ON");
			$("#my-icon").attr("src", "./assets/img/zerowing.png");
			$("#my-icon").attr("alt", "CATS");
			$("#my-icon").attr("title", "That's NOT me!");
			$("#splash-lead").html("All your base are belong to us.<br/>You have no chance to survive make your time.");
			
			// Then smooth scroll to splash page
		    $("body").animate({
	            scrollTop: 0
	        }, 500);
		}
	});
});