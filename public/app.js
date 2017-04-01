
$(document).ready(function(){$(".rollTo").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 1000);
    console.log(this);
});
});
