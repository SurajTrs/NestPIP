'use client';

import React from 'react';

const accountFeatures = [
  { feature: 'Minimum Deposit', description: '$100' },
  { feature: 'Spreads', description: 'Starting from 0.8 pips' },
  { feature: 'Commission', description: '$0' },
  { feature: 'Leverage', description: 'Up to 1:500' },
  { feature: 'Trading Instruments', description: '80+ FX pairs, commodities, indices' },
  { feature: 'Platforms', description: 'MT4, MT5, WebTrader' },
  { feature: 'Execution Type', description: 'Market Execution' },
  { feature: 'Minimum Trade Size', description: '0.01 lots' },
  { feature: 'Account Base Currencies', description: 'USD, EUR, INR' },
  { feature: 'Margin Call / Stop Out', description: '80% / 50%' },
];

const AccountFeaturesSection: React.FC = () => {
  return (
    <section
      className="account-features-section position-relative"
      style={{
        backgroundColor: '#fff3eb', // light orange background
        padding: '5rem 0',
        overflow: 'hidden',
        color: '#222', 
      }}
    >
      <div className="container position-relative">
        <div className="text-center mb-5">
          <h2
            className="fw-bold mb-3"
            style={{ fontSize: '2rem', color: '#f24521' }} // orange heading
          >
            Key Features of the NestPip Standard Forex Trading Account
          </h2>
          <p className="lead" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Every feature of our standard forex trading account is designed to give traders more
            flexibility, lower costs, and greater access to global markets.
          </p>
        </div>

        <div className="table-responsive">
          <table
            className="table"
            style={{ fontSize: '1.05rem', color: '#000' }}
          >
            <tbody>
              {accountFeatures.map((item, index) => (
                <tr key={index}>
                  <td
                    className="fw-semibold"
                    style={{
                      padding: '1rem',
                      width: '45%',
                      backgroundColor: '#f24521',
                      borderRadius: '8px 0 0 8px',
                    }}
                  >
                    {item.feature}
                  </td>
                  <td
                    style={{
                      padding: '1rem',
                      backgroundColor: '#fff',
                      borderRadius: '0 8px 8px 0',
                    }}
                  >
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AccountFeaturesSection;
