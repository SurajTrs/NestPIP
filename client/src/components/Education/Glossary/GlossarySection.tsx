import React, { useState } from 'react';
import { Container, Form,  } from 'react-bootstrap';

const glossaryData: { [key: string]: string[] } = {
  A: ['Ask Price - The lowest price a seller is willing to accept for an asset.', 'Arbitrage - The simultaneous buying and selling of an asset to profit from a price difference.'],
  B: ['Bear Market - A market condition where prices are falling.', 'Bid Price - The highest price a buyer is willing to pay for an asset.'],
  C: ['Candlestick Chart - A chart type used to show price movements.', 'CFD (Contract for Difference) - A financial derivative allowing traders to speculate on asset price movements.'],
  D: ['Day Trading - Buying and selling financial instruments within the same trading day.'],
  E: ['Equity - Ownership of assets that may have debts or other liabilities attached to them.'],
  F: ['Forex - The global currency exchange market.', 'Fundamental Analysis - Analyzing financial statements and economic data to forecast asset movements.'],
  G: ['Gap - A break between prices on a chart that occurs when the price moves sharply up or down.'],
  H: ['Hedge - An investment made to reduce the risk of adverse price movements.'],
  I: ['Index - A statistical measure of the performance of a group of assets.', 'IPO - Initial Public Offering, the first sale of stock by a private company to the public.'],
  J: ['Jobless Claims - A report indicating the number of people filing for unemployment.'],
  K: ['KYC (Know Your Customer) - A process of verifying the identity of clients.'],
  L: ['Liquidity - The ease with which an asset can be converted into cash.'],
  M: ['Margin - The money borrowed from a broker to trade.', 'Market Order - An order to buy or sell immediately at the current market price.'],
  N: ['NAV - Net Asset Value, used to value mutual funds.', 'NFP - Non-Farm Payrolls, a key economic indicator in the US.'],
  O: ['Open Interest - The total number of open derivative contracts.'],
  P: ['Pip - The smallest price move in a currency pair.', 'Portfolio - A collection of financial investments.'],
  Q: ['Quantitative Easing - A monetary policy used by central banks to stimulate the economy.'],
  R: ['Resistance - A price level where selling pressure is expected to be strong.', 'Risk Management - Strategies to minimize potential losses.'],
  S: ['Spread - The difference between the bid and ask price.', 'Stop Loss - An order placed to sell a security when it reaches a certain price.'],
  T: ['Take Profit - An order that closes a trade once a certain profit level is reached.', 'Technical Analysis - Analyzing price charts and indicators to forecast movements.'],
  U: ['Underlying Asset - The financial asset upon which a derivative’s value is based.'],
  V: ['Volatility - A statistical measure of the dispersion of returns.'],
  W: ['Whipsaw - A condition where a security’s price heads in one direction but then moves quickly in the opposite direction.'],
  X: ['XD - Ex-dividend date, the day on which a stock begins trading without the value of its next dividend payment.'],
  Y: ['Yield - The income return on an investment.'],
  Z: ['Zero-Coupon Bond - A bond that doesn’t pay interest but is traded at a deep discount.']
};

const GlossaryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredGlossary = Object.entries(glossaryData).reduce((acc, [letter, terms]) => {
    const filteredTerms = terms.filter(term =>
      term.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredTerms.length > 0) acc[letter] = filteredTerms;
    return acc;
  }, {} as typeof glossaryData);

  return (
    <div style={{ backgroundColor: '#fff3e9', color: '#000', padding: '3rem 0' }}>
      <Container>
        <h2 style={{ color: '#f24521', fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
          Glossary of Trading Terms
        </h2>
        <Form.Group controlId="search" className="mb-4">
          <Form.Control
            type="text"
            placeholder="Search the Glossary"
            value={searchTerm}
            onChange={handleSearch}
            style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #ccc' }}
          />
        </Form.Group>

        {Object.entries(filteredGlossary).map(([letter, terms]) => (
          <div key={letter} className="mb-4">
            <h4 style={{ color: '#f24521' }}>{letter}</h4>
            <ul>
              {terms.map((term, idx) => (
                <li key={idx} style={{ marginBottom: '0.5rem' }}>{term}</li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default GlossaryPage;
