import React from 'react';
import quotes from './quotes';
import '../../../styles/home/motivational-quote/motivational-quote.css';

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const loadQuote = () => {
  const randomNumber = generateRandomNumber(0, quotes.length - 1);
  return quotes[randomNumber];
};

function MotivationalQuote() {
  const [randomQuote, setRandomQuote] = React.useState(null);

  React.useEffect(() => {
    setRandomQuote(loadQuote());
  }, []);

  return (
    <div className="motivation">
      <div className="quote">{`"${randomQuote?.quote}"`}</div>
      <div className="author">{`- ${randomQuote?.author}`}</div>
    </div>
  );
}

export default MotivationalQuote;
