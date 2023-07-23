// Function to fetch a random quote from the API
async function getRandomQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    return data;
}

// Function to display the quote and author on the page with fade-in animation
function displayQuote(quote) {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');

    // Apply a random background color for each quote
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;

    // Fade-out the quote box
    const quoteBox = document.getElementById('quote-box');
    quoteBox.classList.remove('show');
    setTimeout(() => {
        quoteElement.textContent = `"${quote.content}"`;
        authorElement.textContent = `- ${quote.author}`;

        // Center the quote and author text vertically and horizontally
        const quoteContainer = document.getElementById('quote-container');
        quoteContainer.style.display = 'flex';
        quoteContainer.style.flexDirection = 'column';
        quoteContainer.style.justifyContent = 'center';
        quoteContainer.style.alignItems = 'center';

        // Fade-in the quote box with the new quote
        quoteBox.classList.add('show');
    }, 500); // Wait for the fade-out transition to complete (0.5 seconds)

    // Update the tweet button with the new quote
    const tweetButton = document.getElementById('tweet-quote');
    tweetButton.href = `https://twitter.com/intent/tweet?text="${quote.content}" - ${quote.author}`;
}

// Function to get a new random quote and display it
async function getNewQuote() {
    const quote = await getRandomQuote();
    displayQuote(quote);
}

// Add event listener to the "New Quote" button
document.getElementById('new-quote').addEventListener('click', getNewQuote);

// Display a random quote on page load
getNewQuote();
