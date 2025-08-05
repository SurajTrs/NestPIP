'use client';

import React from 'react';

const cryptocurrencies = [
  { name: 'BTC/USD', full: 'Bitcoin / US Dollar', icon: '/icons/bitcoin.svg' },
  { name: 'ETH/USD', full: 'Ethereum / US Dollar', icon: '/icons/ethereum.svg' },
  { name: 'XRP/USD', full: 'Ripple / US Dollar', icon: '/icons/ripple.svg' },
  { name: 'LTC/USD', full: 'Litecoin / US Dollar', icon: '/icons/litecoin.svg' },
  { name: 'ADA/USD', full: 'Cardano / US Dollar', icon: '/icons/cardano.svg' },
];

const CryptoRange: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
          Popular Cryptocurrency Pairs on Nestpip
        </h2>
        <p className="text-muted mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
          Nestpip offers competitive trading conditions for popular crypto vs fiat pairs. These assets have high liquidity and volatility, ideal for intraday traders and scalpers.
        </p>

        <div className="row justify-content-center g-4">
          {cryptocurrencies.map((crypto, index) => (
            <div className="col-6 col-md-2" key={index}>
              <div
                className="p-3 rounded-4 shadow-sm h-100 d-flex flex-column align-items-center"
                style={{ backgroundColor: '#ffffff' }}
              >
                <img
                  src={crypto.icon}
                  alt={crypto.name}
                  height={48}
                  className="mb-2"
                  style={{
                    backgroundColor: '#FFEBD9',
                    borderRadius: '50%',
                    padding: '0.6rem',
                  }}
                />
                <h6 className="fw-semibold mb-1">{crypto.name}</h6>
                <p className="small text-muted mb-0">{crypto.full}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CryptoRange;
