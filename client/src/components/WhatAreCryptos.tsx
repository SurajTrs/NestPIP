import React from 'react';

const WhatAreCryptos = () => {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: '#FF7A00',
        color: '#fff',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <h2 className="fw-bold text-center mb-5">What Are Cryptocurrencies?</h2>

        <div className="row align-items-center">
          {/* Left Cards */}
          <div className="col-md-4 d-flex flex-column gap-4">
            <div className="bg-white text-dark p-4 rounded shadow-sm">
              <h6 className="fw-bold mb-2">Decentralized Currency</h6>
              <p className="mb-0 small">
                Unlike traditional currencies, cryptocurrencies are decentralized, with no central authority.
              </p>
            </div>
            <div className="bg-white text-dark p-4 rounded shadow-sm">
              <h6 className="fw-bold mb-2">Blockchain Technology</h6>
              <p className="mb-0 small">
                Most cryptos use blockchain, enabling fast, transparent, and secure peer-to-peer transactions.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="col-md-4 text-center my-4 my-md-0">
            <img
              src="/assets/crypto-explained.png"
              alt="Cryptocurrency Visual"
              className="img-fluid rounded-4 shadow"
              style={{ maxWidth: '85%', height: 'auto' }}
            />
          </div>

          {/* Right Cards */}
          <div className="col-md-4 d-flex flex-column gap-4">
            <div className="bg-white text-dark p-4 rounded shadow-sm">
              <h6 className="fw-bold mb-2">Limited Supply</h6>
              <p className="mb-0 small">
                Cryptos are mined electronically and often have a capped supply, like Bitcoin 21M limit.
              </p>
            </div>
            <div className="bg-white text-dark p-4 rounded shadow-sm">
              <h6 className="fw-bold mb-2">Growing Market</h6>
              <p className="mb-0 small">
                Since Bitcoin 2009 launch, the crypto market has grown to over $1 trillion in value.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-5">
          <a
            href="#"
            className="btn"
            style={{
              backgroundColor: '#006400',
              color: '#fff',
              padding: '0.75rem 2rem',
              borderRadius: '12px',
              fontWeight: 600,
            }}
          >
            Discover What Are Cryptos
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatAreCryptos;
