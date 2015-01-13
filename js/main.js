$(function() {
    // Page transition
    $("body").css("display", "none");
    NProgress.start();
    
    $(".project").click(function(e) {
        e.preventDefault();
        linkLocation = this.href;
        $("body").animate({scrollTop : 0}, 500).fadeOut(500, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }

    $(window).load(function() {
        $("body").fadeIn(1000);
        NProgress.done();
    });

    // Animate the logo.
    $(document).scroll(function() {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 160,
            header = $("#index-nav");
            if (distanceY > shrinkOn) {
                header.addClass("resize-header");
            }
            else {
                header.removeClass("resize-header");
            }
    });

    // Detect mobile devices
    function is_touch_device() {
      return 'ontouchstart' in window // works on most browsers 
          || 'onmsgesturechange' in window; // works on ie10
    };

    if (is_touch_device()) {
        //Conditional script here
        $("figure").addClass("hovered");
    }
        
 
    


});