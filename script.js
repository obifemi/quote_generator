// Get Quotes From API
// let data = []
//Show New Quote
function newQuote() {
    // Pick A Random Quote From Quotes Array
    const quote = data[Math.floor(Math.random() * data.length)];
    // Check If Author Field Is Blank And Replace It With 'Unknown'
    // if (!quote.author) {
    //     quote.author = 'Unknown';
    // }
    // // Check Quote Length To Determine Styling
    // if (quote.text.length > 120) {
    //     quoteText.classList.add('long-quote');
    // } else {
    //     quoteText.classList.remove('long-quote');
    // }
    // // Set Quote, Hide Loader
    // quoteText.textContent = quote.text;
    // completeQuote.textContent = quote.text;
    // loader.hidden = true;
    console.log(quote);
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
        
        // Catch Error Here
        
    }
}
getQuotes();