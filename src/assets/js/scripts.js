$(document).ready(function() {
    "use strict";

    $(".h-menu").clone().prependTo(".mobile-menu");

    $(".menu-trigger").click(function(){
    	$(this).toggleClass("active");
    	$(".mobile-menu").slideToggle();
    });

    document.getElementById('vid').play();


});