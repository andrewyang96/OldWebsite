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

    // Make icon borders change color upon hover
    var changeMyIconBorder = function (mouseover) {
        // Requires jQuery.color plugin
        if (mouseover) {
            $("#my-icon").animate({
                "border-color": "#rgba(255,255,255,0.6)"
            }, 200);
        } else {
            $("#my-icon").animate({
                "border-color": "rgba(231,231,231,0.3)"
            }, 200);
        }
    };
    $("#my-icon").mouseenter(function () {
        changeMyIconBorder(true);
    }).mouseleave(function () {
        changeMyIconBorder(false);
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
    $(".btn-scroll2-experience").click(function (e) {
        e.preventDefault();
        $("body").animate({
            scrollTop: $("#experience").offset().top
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

    // Portfolio grid item background animations
    var changePortfolioItemBG = function (mouseover, self) {
        // Requires jQuery.color plugin
        if (mouseover) {
            $(self).animate({
                "background-color": "rgba(160,160,160,0.8)"
            }, 100);
        } else {
            $(self).animate({
                "background-color": "transparent"
            }, 100);
        }
    };
    $(".portfolio-grid a .portfolio-item").mouseenter(function () {
        changePortfolioItemBG(true, this);
    }).mouseleave(function () {
        changePortfolioItemBG(false, this);
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