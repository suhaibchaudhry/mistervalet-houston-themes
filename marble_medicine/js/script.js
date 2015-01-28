/*jshint jquery:true */
/*global $:true */

var $ = jQuery.noConflict();

$(document).ready(function($) {
	"use strict";

	/* global google: false */

	/*-------------------------------------------------*/
	/* =  portfolio isotope
	/*-------------------------------------------------*/

	var winDow = $(window);
		// Needed variables
		var $container=$('#isotope-container');
		var $filter=$('.filter');

		try{
			$container.imagesLoaded( function(){
				$container.trigger('resize');				

				$('.triggerAnimation').waypoint(function() {
					var animation = $(this).attr('data-animate');
					$(this).css('opacity', '');
					$(this).addClass("animated " + animation);

				},
					{
						offset: '75%',
						triggerOnce: true
					}
				);
				
			});
		} catch(err) {
		}

		winDow.bind('resize', function(){
			var selector = $filter.find('a.active').attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {
			}
			return false;
		});
		
	// 	// Isotope Filter 
	// 	$filter.find('a').click(function(){
	// 		var selector = $(this).attr('data-filter');

	// 		try {
	// 			$container.isotope({ 
	// 				filter	: selector,
	// 				animationOptions: {
	// 					duration: 750,
	// 					easing	: 'linear',
	// 					queue	: false,
	// 				}
	// 			});
	// 		} catch(err) {

	// 		}
	// 		return false;
	// 	});


	// var filterItemA	= $('.filter li a');

	// 	filterItemA.on('click', function(){
	// 		var $this = $(this);
	// 		if ( !$this.hasClass('active')) {
	// 			filterItemA.removeClass('active');
	// 			$this.addClass('active');
	// 		}
	// 	});

	/*-------------------------------------------------*/
	/* =  browser detect
	/*-------------------------------------------------*/
	try {
		$.browserSelector();
		// Adds window smooth scroll on chrome.
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	}
	
	/*-------------------------------------------------*/
	/* =  Animated content
	/*-------------------------------------------------*/

	try {
		/* ================ ANIMATED CONTENT ================ */
        if ($(".animated")[0]) {
            $('.animated').css('opacity', '0');
        }
        $('.view-blog .view-content').css('opacity', '0');
        $('.triggerAnimation').waypoint(function() {
            var animation = $(this).attr('data-animate');
            $(this).css('opacity', '');
            $(this).addClass("animated " + animation);

        },
                {
                    offset: '75%',
                    triggerOnce: true
                }
        );
        $('.view-blog .view-content').waypoint(function() {
					var animation = 'fadeInUp';
					$(this).css('opacity', '');
					$(this).addClass("animated " + animation);

				},
					{
						offset: '75%',
						triggerOnce: true
					}
				);
	} catch(err) {

	}
	
	/*-------------------------------------------------*/
	/* =  Scroll to TOP
	/*-------------------------------------------------*/

	var animateTopButton = $('.go-top'),
		htmBody = $('html, body');
		
	animateTopButton.click(function(){
	htmBody.animate({scrollTop: 0}, 'slow');
		return false;
	});

	/*-------------------------------------------------*/
	/* =  remove animation in mobile device
	/*-------------------------------------------------*/
	if ( winDow.width() < 992 ) {
		$('div.triggerAnimation').removeClass('animated');
		$('div.triggerAnimation').removeClass('triggerAnimation');
	}

	/*-------------------------------------------------*/
	/* =  Search animation
	/*-------------------------------------------------*/
	
	var searchElement = $('header#navbar ul.navbar-right > li.last');
	searchElement.html('<a href="#" class="open-search"><i class="fa fa-search"></i></a>' +
								'<form class="form-search" action="/search/node/" method="post">' +
									'<input type="search" placeholder="Search:" name="keys">' +
									'<button type="submit">' +
										'<i class="fa fa-search"></i>' +
									'</button>' +
								'</form>');
	var searchToggle = $('.open-search'),
		inputAnime = $(".form-search"),
		body = $('body');
	searchToggle.on('click', function(event){
		event.preventDefault();

		if ( !inputAnime.hasClass('active') ) {
			inputAnime.addClass('active');
		} else {
			inputAnime.removeClass('active');			
		}
	});

	body.on('click', function(){
		inputAnime.removeClass('active');
	});

	var elemBinds = $('.open-search, .form-search');
	elemBinds.bind('click', function(e) {
		e.stopPropagation();
	});

	$('#search-block-form button[type=submit]').html('<i class="fa fa-search"></i>');
	/*-------------------------------------------------*/
	/* =  fullwidth carousell
	/*-------------------------------------------------*/
	
	var fullCarousell = $(".view-portfolio .owl-wrapper-outer");			

	var prevButton = $('.buttons a.owl-prev'),
		nextButton = $('.buttons a.owl-next');

		prevButton.live('click', function(e) {
			e.preventDefault();
			fullCarousell.trigger('owl.prev');
			blogcarousel.trigger('owl.prev');
			portfolio2rows.trigger('owl.prev');
			fivecarousel.trigger('owl.prev');
			membercarousel.trigger('owl.prev');
		});

		nextButton.on('click', function(e) {
			e.preventDefault();
			fullCarousell.trigger('owl.next');
			blogcarousel.trigger('owl.next');
			portfolio2rows.trigger('owl.next');
			fivecarousel.trigger('owl.next');
			membercarousel.trigger('owl.prev');
		});

	var blogcarousel = $(".view-blog .owl-wrapper-outer");
	var membercarousel = $(".view-team-member .owl-wrapper-outer");
	try {
		var portfolio2rows = $('#owl-portfolio2');
		portfolio2rows.owlCarousel({
			navigation : true,
			afterInit : function(elem){
				var that = this;
				that.owlControls.appendTo(elem);
			},
			items: 4,
			itemsDesktop: [1199, 3],
			itemsDesktopSmall: [979, 2],
			itemsTablet: [768, 1],
			itemsTabletSmall: false,
			itemsMobile: [479, 1]
		});
	} catch(err) {		
	}
	
	try {
		var fivecarousel = $("#owl-portfolio3");
		fivecarousel.owlCarousel({
			navigation : true,
			afterInit : function(elem){
				var that = this;
				that.owlControls.appendTo(elem);
			},
			items: 5,
			itemsDesktop: [1199, 5],
			itemsDesktopSmall: [979, 3],
			itemsTablet: [768, 2],
			itemsTabletSmall: false,
			itemsMobile: [479, 1]
		});
	} catch(err) {

	}

	/*-------------------------------------------------*/
	/* =  flexslider
	/*-------------------------------------------------*/
	try {

		var SliderPost = $('.flexslider');

		SliderPost.flexslider({
			slideshowSpeed: 3000,
			easing: "swing"
		});
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Contact Map
	/* ---------------------------------------------------------------------- */
	var contact = {"lat":"41.8744661", "lon":"-87.6614312"}; //Change a map coordinate here!

	try {
		var mapContainer = $('.map');
		var pathToTheme = Drupal.settings.basePath + "sites/all/themes/" + Drupal.settings.ajaxPageState.theme;
    var image = pathToTheme + '/images/marker.png';
		mapContainer.gmap3({
			action: 'addMarker',
			marker:{
				options:{					
					icon : new google.maps.MarkerImage(image)
				}
			},
			latLng: [contact.lat, contact.lon],
			map:{
				center: [contact.lat, contact.lon],
				zoom: 15
				},
			},
			{action: 'setOptions', args:[{scrollwheel:false}]}
		);
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	magnific-popup
	/* ---------------------------------------------------------------------- */

	try {
		// Example with multiple objects
		$('.zoom').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Bootstrap tabs
	/* ---------------------------------------------------------------------- */
	
	var tabId = $('.nav-tabs a');
	try{		
		tabId.click(function (e) {
			e.preventDefault();
			$(this).tab('show');
		});
	} catch(err) {
	}
	
	/*-------------------------------------------------*/
	/* = slider Testimonial
	/*-------------------------------------------------*/

	var slidertestimonial = $('.bxslider');
	try{		
		slidertestimonial.bxSlider({
			mode: 'horizontal'
		});
	} catch(err) {
	}

	/*-------------------------------------------------*/
	/* = skills animate
	/*-------------------------------------------------*/

	try{

		var skillBar = $('.skills-box');
		skillBar.appear(function() {

			var animateElement = $(".meter > p");
			animateElement.each(function() {
				$(this)
					.data("origWidth", $(this).width())
					.width(0)
					.animate({
						width: $(this).data("origWidth")
					}, 1200);
			});

		});
	} catch(err) {
	}

	/*-------------------------------------------------*/
	/* =  count increment
	/*-------------------------------------------------*/
	try {
		$('.statistic-post').appear(function() {
			$('.timer').countTo({
				speed: 4000,
				refreshInterval: 60,
				formatter: function (value, options) {
					return value.toFixed(options.decimals);
				}
			});
		});
	} catch(err) {

	}

	/*-------------------------------------------------*/
	/* =  parallax
	/*-------------------------------------------------*/
	
	try{
		$('.parallax').appear(function() {
			$.stellar({
				horizontalScrolling: false,
				verticalOffset: 0,
				parallaxBackgrounds: true
			});
		});
		$('.parallax .view-content').appear(function() {
			$.stellar({
				horizontalScrolling: false,
				verticalOffset: 0,
				parallaxBackgrounds: true
			});
		});
		
	} catch(err) {
	}

	/* ---------------------------------------------------------------------- */
	/*	Accordion
	/* ---------------------------------------------------------------------- */
	var clickElem = $('a.accord-link');

	clickElem.on('click', function(e){
		e.preventDefault();

		var $this = $(this),
			parentCheck = $this.parents('.accord-elem'),
			accordItems = $('.accord-elem'),
			accordContent = $('.accord-content');
			
		if( !parentCheck.hasClass('active')) {

			accordContent.slideUp(400, function(){
				accordItems.removeClass('active');
			});
			parentCheck.find('.accord-content').slideDown(400, function(){
				parentCheck.addClass('active');
			});

		} else {

			accordContent.slideUp(400, function(){
				accordItems.removeClass('active');
			});

		}
	});

	/* ---------------------------------------------------------------------- */
	/*	Contact Form
	/* ---------------------------------------------------------------------- */

	var submitContact = $('#submit_contact'),
		message = $('#msg');

	submitContact.on('click', function(e){
		e.preventDefault();

		var $this = $(this);
		
		$.ajax({
			type: "POST",
			url: 'contact.php',
			dataType: 'json',
			cache: false,
			data: $('#contact-form').serialize(),
			success: function(data) {

				if(data.info !== 'error'){
					$this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
					message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				} else {
					message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				}
			}
		});
	});

	/* ---------------------------------------------------------------------- */
	/*	Flicker
	/* ---------------------------------------------------------------------- */
	jQuery('.flickr').jflickrfeed({
      limit: 9,
      qstrings: {
          id: '48847465@N03'
      },
      itemTemplate:
          '<li>' +
              '<a href="{{image_b}}" title="{{title}}"><img src="{{image_s}}" alt="{{title}}"/></a>' +
              '</li>'
  },
  function(data) {
      jQuery('.flickr a').magnificPopup({
          type: 'image',

          gallery: {
              enabled: true
          },
          image: {
              markup: '<div class="mfp-figure">'+
                  '<div class="mfp-close"></div>'+
                  '<div class="mfp-img"></div>'+
                  '<div class="mfp-bottom-bar">'+
                  '<div class="mfp-title"></div>'+
                  '<div class="mfp-counter"></div>'+
                  '</div>'+
                  '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

              cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.

              titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
              // Or the function that should return the title. For example:
              // titleSrc: function(item) {
              //   return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
              // }

              verticalFit: true, // Fits image in area vertically

              tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
          }

      });
  });
	
});