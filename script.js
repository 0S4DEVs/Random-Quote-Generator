const quotes = [  "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",  "The way to get started is to quit talking and begin doing. -Walt Disney",  "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",  "Life is what happens when you're busy making other plans. -John Lennon",  "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",  "In the end, it's not the years in your life that count. It's the life in your years. -Abraham Lincoln",  "The only way to do great work is to love what you do. -Steve Jobs",  "Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison",  "If you want to live a happy life, tie it to a goal, not to people or things. -Albert Einstein",  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller"];

function generateQuote() {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    document.getElementById("quote").innerHTML = quote;
  }
  
  generateQuote();
  document.getElementById("new-quote").addEventListener("click", generateQuote);  