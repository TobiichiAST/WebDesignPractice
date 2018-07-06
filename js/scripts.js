
$(document).ready(function() {
    setTimeout(function(){
		$('body').addClass('loaded');
	}, 500);
    setTimeout(function(){
		$('#loader-wrapper').css({ zIndex: '0' });
	}, 500);
	setTimeout(function(){
		$('#loader-wrapper').css({ display: 'none' });
	}, 800);
 
});

//$(document).ready means when the page loads
$(document).ready(function () {
	$('.toshow h1').delay(800).animate({'opacity':'1'},1200);
	$('.toshow p').delay(1200).animate({'opacity':'1'},1200);
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    $('.topnav-background-transform').toggleClass('topnav-background-transform-active');
    if (x.className == "topnav") {
        x.className += " responsive";
        $(".topnav.responsive a:not(:first-child)").each(function(i) {
		    $(this).delay(100 * i).css('display', 'inline-block').hide().fadeIn(200);
		});

    } else {
        x.className = "topnav";
        $(".topnav a:not(:first-child):not(:last)").each(function(i) {
		    $(this).delay(100 * i).fadeOut(200);
		});
    }
}