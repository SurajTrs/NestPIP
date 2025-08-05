'use client';

import React from 'react';
import { Container, Table } from 'react-bootstrap';

const comparisonData = [
  {
    feature: 'Ownership of Asset',
    nestpip: 'No',
    exchange: 'Yes',
  },
  {
    feature: 'Short Selling Allowed',
    nestpip: 'Yes',
    exchange: 'Rare',
  },
  {
    feature: 'Leverage',
    nestpip: 'Yes (Up to 1:2)',
    exchange: 'Usually No',
  },
  {
    feature: 'Regulation & Safety',
    nestpip: 'High',
    exchange: 'Varies (often unregulated)',
  },
  {
    feature: '24/7 Trading',
    nestpip: 'Yes',
    exchange: 'Yes',
  },
  {
    feature: 'Execution Speed',
    nestpip: 'Fast',
    exchange: 'Moderate',
  },
  {
    feature: 'Asset Variety',
    nestpip: '30+ Cryptos',
    exchange: 'Depends on exchange',
  },
  {
    feature: 'Withdraw Coins',
    nestpip: 'No (CFD Only)',
    exchange: 'Yes',
  },
];

const CryptoTradingComparison: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center mb-4 fw-bold" style={{ color: '#f24521' }}>
          Forex Crypto Trading vs Traditional Crypto Exchanges
        </h2>

        <div className="table-responsive">
          <Table bordered hover className="text-center align-middle shadow-sm" style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden' }}>
            <thead style={{ backgroundColor: '#f24521', color: 'white' }}>
              <tr>
                <th>Feature</th>
                <th>Nestpip (CFD)</th>
                <th>Traditional Exchange</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map(({ feature, nestpip, exchange }, idx) => (
                <tr key={idx}>
                  <td className="fw-semibold text-start" style={{ padding: '1rem' }}>{feature}</td>
                  <td style={{ padding: '1rem' }}>{nestpip}</td>
                  <td style={{ padding: '1rem' }}>{exchange}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <p className="text-center mt-4" style={{ color: '#333', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
          <strong>Forex crypto trading</strong> with Nestpip is ideal for short-term traders, technical analysts, and those looking to <strong>speculate on price movements</strong> without owning the actual tokens.
        </p>
      </Container>
    </section>
  );
};

export default CryptoTradingComparison;
