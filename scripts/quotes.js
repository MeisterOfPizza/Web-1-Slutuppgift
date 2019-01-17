var quotes = JSON.parse(data);
var quoteIndex = 0;

function nextQuote(move) {
    quoteIndex += move;

    if (quoteIndex < 0) {
        quoteIndex = quotes.length - 1;
    } else if (quoteIndex == quotes.length) {
        quoteIndex = 0;
    }

    document.getElementById("quote").innerHTML = quotes[quoteIndex].quote;
    document.getElementById("quotee").innerHTML = quotes[quoteIndex].quotee;
}