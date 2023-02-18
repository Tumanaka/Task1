$(function() {
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();
		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		nav.removeClass("show");

		$("html,body").animate({
			scrollTop: elementOffset - 70
		}, 700);

	});

	let nav = $("#nav");
	
	let slider = $("#reviewsSlider");
	slider.slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  fade: true,
		  arrows: false,
		  dots: true
		});



});