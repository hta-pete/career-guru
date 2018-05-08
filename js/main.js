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

    var quill = new Quill('#cg-editor-container', {
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline'] 
        ]
      },
      placeholder: 'Enter the details of this job',
      theme: 'snow'  // or 'bubble'
    });

		
	
});


