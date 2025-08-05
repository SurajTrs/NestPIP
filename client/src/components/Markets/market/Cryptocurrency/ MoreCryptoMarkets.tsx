import React from 'react';
import { FaBitcoin, FaEthereum, FaCoins } from 'react-icons/fa';

const MoreCryptoMarkets: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#f24521', color: '#333' }}>
      <div className="container">
        <h2
          className="fw-bold mb-4"
          style={{ color: '#f24521', fontSize: '2.5rem' }}
        >
          Explore More in Crypto
        </h2>
        <div className="row g-4">
          {/* Bitcoin */}
          <div className="col-md-4 d-flex align-items-start">
            <div
              style={{
                flex: '0 0 60px',
                marginRight: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <FaBitcoin size={40} color="#007BFF" aria-hidden="true" />
            </div>
            <div style={{ flex: '1 1 auto' }}>
              <h5 className="fw-semibold" style={{ fontSize: '1.5rem' }}>
                Bitcoin (BTC)
              </h5>
              <p className="text-muted" style={{ fontSize: '1.125rem' }}>
                The world’s first and most popular cryptocurrency, known for high volatility and strong market influence.
              </p>
              <a
                href="/crypto/bitcoin"
                className="fw-semibold"
                style={{ color: '#006400', fontSize: '1.125rem' }}
              >
                TRADE BITCOIN
              </a>
            </div>
          </div>

          {/* Ethereum */}
          <div className="col-md-4 d-flex align-items-start">
            <div
              style={{
                flex: '0 0 60px',
                marginRight: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <FaEthereum size={40} color="#007BFF" aria-hidden="true" />
            </div>
            <div style={{ flex: '1 1 auto' }}>
              <h5 className="fw-semibold" style={{ fontSize: '1.5rem' }}>
                Ethereum (ETH)
              </h5>
              <p className="text-muted" style={{ fontSize: '1.125rem' }}>
                A leading altcoin powering smart contracts and DeFi, with wide developer and enterprise adoption.
              </p>
              <a
                href="/crypto/ethereum"
                className="fw-semibold"
                style={{ color: '#006400', fontSize: '1.125rem' }}
              >
                TRADE ETHEREUM
              </a>
            </div>
          </div>

          {/* Altcoins */}
          <div className="col-md-4 d-flex align-items-start">
            <div
              style={{
                flex: '0 0 60px',
                marginRight: '1.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <FaCoins size={40} color="#007BFF" aria-hidden="true" />
            </div>
            <div style={{ flex: '1 1 auto' }}>
              <h5 className="fw-semibold" style={{ fontSize: '1.5rem' }}>
                Other Cryptos
              </h5>
              <p className="text-muted" style={{ fontSize: '1.125rem' }}>
                Explore CFDs on altcoins like Ripple (XRP), Litecoin (LTC), and more to diversify your portfolio.
              </p>
              <a
                href="/crypto/altcoins"
                className="fw-semibold"
                style={{ color: '#006400', fontSize: '1.125rem' }}
              >
                EXPLORE ALTCOINS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreCryptoMarkets;
