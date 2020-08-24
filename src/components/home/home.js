import React from 'react';
import AccountOverview from './account-overview/account-overview';
import MotivationalQuote from './motivational-quote/motivation';

function Home() {
  return (
    <div className="home">
      <div className="top-center"></div>
      <div className="block-center">
        <AccountOverview />
      </div>
      <div className="block-bottom">
        <MotivationalQuote />
      </div>
    </div>
  );
}

export default Home;
