(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Hide navbar when modals trigger
    $('.portfolio-modal').on('show.bs.modal', function(e) {
        $('.navbar').addClass('d-none');
    })
    $('.portfolio-modal').on('hidden.bs.modal', function(e) {
        $('.navbar').removeClass('d-none');
    })


    var setprofil=function(i) {
        var type_profil="pro";
        if(i==1)type_profil="perso";

        if (type_profil == 'perso') $(".services_pro").innerHTLM = "";
        if (type_profil == 'pro') $(".services_perso").innerHTML = "";

        $(".iframe_tester").src = "https://shifumixweb.appspot.com/tutoriel.html?screens=1&size=150&ihm=" + type_profil;
        $(".profil").classList.toggle("invisible");
    };


})(jQuery); // End of use strict
