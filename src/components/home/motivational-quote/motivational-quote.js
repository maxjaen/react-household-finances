import React from 'react';
import quotes from './quotes';
import '../../../styles/home/motivational-quote/motivational-quote.css';

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function MotivationalQuote() {
  const randomNumber = generateRandomNumber(0, quotes.length - 1);
  const randomQuote = quotes[randomNumber];

  const random = () => {
    return (
      <div className="motivation">
        <div className="quote">{`"${randomQuote.quote}"`}</div>
        <div className="author">{`- ${randomQuote.author}`}</div>
      </div>
    );
  };

  return random();
}

export default MotivationalQuote;
