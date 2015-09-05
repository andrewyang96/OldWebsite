$(document).ready(function () {
	// Preload audio
	var duckArmyAudio = new Audio("./assets/duckarmy.mp3");

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

	// DUCK ARMY EASTER EGG
	$(window).konami({
		code: [68, 85, 67, 75, 65, 82, 77, 89],
		cheat: function () {
			// DUX
			$("#splash-head").html("DUCK ARMY");
			$("#my-icon").attr("src", "./assets/img/evilduck.jpg");
			$("#my-icon").attr("alt", "Evil Duck");
			$("#my-icon").attr("title", "That's NOT me!");
			$("#splash-lead").html("HOOOOOOOOOOOOOOOOOOOONK!!");

			// Then smooth scroll to splash page
			$("body").animate({
	            scrollTop: 0
	        }, 500);

			// Finally play audio
			duckArmyAudio.play();
		}
	});
});