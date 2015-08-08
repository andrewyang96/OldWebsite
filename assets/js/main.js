// Must import bgimage.js, quotes.js, and quoteselector.js before

$(document).ready(function () {
    // Setup background image animations
    var bgi = new BGImage(BGIMAGES);
    setInterval(function () { bgi.switchImg(); }, 5000);
    
    // Make navbar opaque when scroll down
    changeNavbarBG();
    $(document).scroll(function (e) {
        changeNavbarBG();
    });

    // Firefox only: add additional CSS rules to html and body to fix scrolling behavior
    if (navigator.userAgent.indexOf("Firefox") != -1) {
        // html { overflow: hidden; height: 100%; }
        // body { overflow: auto; height: 100%; }
        $("html").css({
            overflow: "hidden",
            height: "100%"
        });
        $("body").css({
            overflow: "auto",
            height: "100%"
        });
    }
    
    // Smooth scroll on button clicks
    $(".btn-scroll2-home").click(function (e) {
        e.preventDefault();
        $("body").animate({
            scrollTop: 0
        }, 500);
    });
    $(".btn-scroll2-about").click(function (e) {
        e.preventDefault();
        $("body").animate({
            scrollTop: $("#about").offset().top
        }, 500);
    });
    $(".btn-scroll2-portfolio").click(function (e) {
        e.preventDefault();
        $("body").animate({
            scrollTop: $("#portfolio").offset().top
        }, 500);
    });
    $(".btn-scroll2-contact").click(function (e) {
        e.preventDefault();
        $("body").animate({
            scrollTop: $("#contact").offset().top
        }, 500);
    });
    
    // Blockquote background animations
    $("#quotes").mouseenter(function () {
        changeBlockquoteBG(true);
    }).mouseleave(function () {
        changeBlockquoteBG(false);
    });
    
    // Quote selection
    var qs = new QuoteSelector(QUOTES);
    changeQuote(qs);
    $("#quotes").data("mousedownInside", false);
    $("#quotes").mousedown(function (e) {
        $(this).data("mousedownInside", true);
    }).mouseup(function (e) {
        if ($(this).data("mousedownInside")) changeQuote(qs);
        $("#quotes").data("mousedownInside", false);
    });
});