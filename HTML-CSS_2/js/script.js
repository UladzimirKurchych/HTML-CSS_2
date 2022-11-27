
$(document).ready(function(){
	$(function(){

$('.slider').slick({
	arrows: false,
	fade: true,
	autoplay: 3000
});



		$('.header-btn').on('click', function(){
			$('.menu').addClass('active');
		});
		
		$('.close-btn').on('click', function(){
			$('.menu').removeClass('active');
		});

		}); 
});

