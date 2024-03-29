$.preloadImages = function(images) {
    for (var i = 0; i < images.length; i++) {
        $("<img />").attr("src", images[i]);
    }
};

var BGIMAGES = [
    "./assets/img/bg/splash1.jpg",
    "./assets/img/bg/splash2.jpg",
    "./assets/img/bg/splash3.jpg",
    "./assets/img/bg/splash4.jpg"
];

function BGImage(bgimgs) {
    this.bgimgs = bgimgs;
    this.limit = this.bgimgs.length;
    if (!this.limit) throw "Length of bgimgs must be greater than 0";
    this.count = 0;
    var self = this;
    // Preload Images
    $.preloadImages(this.bgimgs);
    // Initialize
    $(".animated-bg").css({
        "background-image": 'url("' + this.bgimgs[0] + '")'
    });
    
    BGImage.prototype.switchImg = function () {
        self.count += 1;
        self.count %= self.limit;
        var url = self.bgimgs[self.count];
        $(".animated-bg").css({
            "background-image": 'url("' + url + '")'
        });
    };
};

var changeNavbarBG = function () {
    if ($(window).scrollTop() == 0) {
        // At top, make transparent
        $(".navbar-default").css({
            background: "rgba(231,231,231,0.5)"
        });
    } else {
        // Scrolled down, make opaque
        $(".navbar-default").css({
            background: "rgba(94,94,119,1)"
        });
    }
};