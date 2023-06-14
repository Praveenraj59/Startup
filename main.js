(function($) { // Begin jQuery
    $(function() { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
  })(jQuery); // end jQuery

         //Carousel

$('.scren-owl').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:9000,
  margin:50,
  responsiveClass:true,
 
 responsive:{
      0:{
          items:1,
          nav:false,
          dots:false
      },
      700:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:false,
          loop:true,
      },
      1400:{
          items:3,
          nav:true,
          loop:true,
      }
  }

})
