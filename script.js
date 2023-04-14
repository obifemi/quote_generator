//DOM Elements
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');





// Get Quotes From API
// let data = []
//Show New Quote
// let data = [];
function newQuote() {
    // Pick A Random Quote From Quotes Array
    
    const quote = data[Math.floor(Math.random() * data.length)];
    console.log(quote);
    quoteText.textContent = quote.text;
    authorText.textContent = quotek.author;
}
// Get Quotes From API

async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
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