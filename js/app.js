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
	$('.propertylists').click(function(){

		// $(this).addClass('activeitems');
		$(this).addClass('activeitems').siblings().removeClass('activeitems');

		let ftvalue = $(this).attr('data-filter');
		// console.log(ftvalue);

		if(ftvalue === 'all'){
			$('.filters').show("slide",500);
		}else{
			$('.filters').hide();

			$('.filters').not('.'+ftvalue).hide("slide",500);
			$('.filters').filter('.'+ftvalue).show("slide",500);
		}

	});


	lightbox.option({
      	showImageNumberLabel:false
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