let apiQuotes = [];

// Show New Quote
const newQuote = () => {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log("random quote", quote);
};

// Get Quotes from API
const getQuotes = async () => {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

  try {
    const response = await fetch(apiUrl);
    console.log("response", response);
    apiQuotes = await response.json();
    console.log("apiQuotes", apiQuotes);
    // console.log("apiQuotes", apiQuotes[12]);
    newQuote();
  } catch (error) {
    //Catch Error Here
  }
};

// On Load
getQuotes();
