$(function(){

    var $window       = $(window);


    $window.on('scroll', function(){

        var scrollTop = $window.scrollTop();

        if( scrollTop >= 260 ){
            $('header .guru-search-bar').addClass('active');
        } else{
            $('header .guru-search-bar').removeClass('active');
        }

    });


    $('.has-sub-menu').on('click', function(){

        $(this).find('.sub-menu').fadeToggle('fast');

    });

	
	
	
	
});


