//DOM Elements
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
// Hide Loading
function complete() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}


// Get Quotes From API
// let data = []
//Show New Quote
// let data = [];
function newQuote() {
    loading();
    
    // Pick A Random Quote From Quotes Array
    
    const quote = data[Math.floor(Math.random() * data.length)];
    console.log(quote);
    //Check quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    // Check If Author Field Is Blank And Replace It With 'Unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
    authorText.textContent = quote.author;
    }
    // Stop Loader, Show Quote
    complete();
   
}
    //Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}
// Event Listeners
twitterBtn.addEventListener('click', tweetQuote);
newQuoteBtn.addEventListener('click', newQuote);
// Get Quotes From API

async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        loading();
        const response = await fetch(apiUrl);
        data = await response.json();
        newQuote();
        // console.log(data);
        // return data;
    } catch (error) {
        console.log(error);
        
        // Catch Error Here
        
    }
}
getQuotes();