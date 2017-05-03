$(document).ready(function() {
    $(".rollTo").click(function() {
        var myLink = $(this).find('a').attr('href')
        console.log(myLink)
        $('html, body').animate({
            scrollTop: $(myLink).offset().top
        }, 1000);
        console.log(this);
    });

     $(".owl-slider").owlCarousel({
         autoPlay: 7000, //Set AutoPlay to 3 seconds
         items: 3,
         itemsDesktop: [1199, 3],
         itemsDesktopSmall: [979, 3]

     });
     $("a[rel^='prettyPhoto']").prettyPhoto();
});
