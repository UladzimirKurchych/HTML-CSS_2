
$(document).ready(function(){
	$(function(){

		$('.header-btn').on('click', function(){
			$('.menu').addClass('active');
		});
		
		$('.close-btn').on('click', function(){
			$('.menu').removeClass('active');
		});

		}); 
});

