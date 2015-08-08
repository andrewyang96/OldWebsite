var changeBlockquoteBG = function (mouseover) {
    // Requires jQuery.color plugin
    if (mouseover) {
        $("#quotes").animate({
            "background-color": "#aaa"
        }, 200);
    } else {
        $("#quotes").animate({
            "background-color": "rgba(160,160,160,0.8)"
        }, 200);
    }
};

var randInt = function (max) {
    return Math.floor(Math.random() * max);
};

function QuoteSelector(quotes) {
    this.quotes = quotes;
    if (this.quotes.length <= 1) throw "Lengths of quote list must be more than one."
    this.currQuoteIdx = null;
    var self = this;
    QuoteSelector.prototype.nextQuote = function () {
        if (this.currQuoteIdx == null) {
            // No need to remove currently selected quote
            var nextIdx = randInt(this.quotes.length);
            this.currQuoteIdx = nextIdx;
            return this.quotes[nextIdx];
        } else {
            var nextIdx = randInt(this.quotes.length-1);
            // Avoid off-by-one errors in some cases
            if (nextIdx >= this.currQuoteIdx) nextIdx += 1;
            this.currQuoteIdx = nextIdx;
            return this.quotes[nextIdx];
        }
    };
}

var changeQuote = function (qs) {
    var newQuote = qs.nextQuote();
    $("#quotes p").html(newQuote.quote);
    $("#quotes footer").html(newQuote.author);
};