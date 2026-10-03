$(document).ready(function(){
	// console.log('jquery');

	// Start Back to Top
	$('.btn-backtotops').hide();
	$(window).scroll(function(){

		var getscrolltop = $(this).scrollTop();

		// console.log(getscrolltop);

		if(getscrolltop >= 350){
			$('.btn-backtotops').fadeIn(1000)
		}else{
			$('.btn-backtotops').fadeOut(1000);
		}
	});
	// Start Back to Top


	// Start Nav Bar
	$(window).scroll(function(){

		let position = $(this).scrollTop();

		// console.log(position);

		if(position >= 200){
			$('.navbar').addClass('navmenus')
		}else{
			$('.navbar').removeClass('navmenus');
		}
	});


	$('.navbuttons').click(function(){
		$('.navbuttons').toggleClass('crossxs');
	})

	// End Nav Bar


	
	// Start Property Section
	$('.propertylists').click(function () {
		$(this).addClass('activeitems')
			.siblings().removeClass('activeitems');

		const ftvalue = $(this).attr('data-filter');

		if (ftvalue === 'all') {
			$('.filters').stop(true, true).fadeIn(300);
		} else {
			$('.filters').stop(true, true).each(function () {
				const matches = $(this).hasClass(ftvalue);

				if (matches) {
					$(this).fadeIn(300);
				} else {
					$(this).fadeOut(300);
				}
			});
		}
	});

	lightbox.option({
		showImageNumberLabel: false
	});
	// End Property Section

	// Start Adv Section

	$(window).scroll(function(){
		var getscrolltt = $(this).scrollTop();
		if (getscrolltt >= 900) {
			$('.advimages').addClass("fromleft")
			$('.advtext').addClass("fromright")
		}else{
			$('.advimages').removeClass("fromleft")
			$('.advtext').removeClass("fromright")
		}
	})

	//End Adv Section

	/*Start Footer Section*/

	const getyear = $("#getyear");
	const getfullyear = new Date().getFullYear();
	getyear.text(getfullyear);

	/*End Footer Section*/





	
});
