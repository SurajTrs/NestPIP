import React from 'react';

const CryptoTradingInfo = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-5" style={{ color: '#f24521' }}>
          Understanding Cryptocurrencies
        </h2>

        <div className="row justify-content-center g-4">
          {/* What are cryptocurrencies? */}
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <img
                src="/icons/crypto-what.svg"
                alt="What are Cryptocurrencies"
                height={64}
                className="mb-3"
                style={{
                  backgroundColor: '#FFEBD9',
                  borderRadius: '50%',
                  padding: '1rem',
                }}
              />
              <h5 className="fw-semibold mb-2">What are cryptocurrencies?</h5>
              <p className="text-muted mb-0">
                First emerging in 2009, cryptocurrencies have revolutionized how we think about money. Learn what they are and how they work.
              </p>
            </div>
          </div>

          {/* Why start investing in crypto? */}
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <img
                src="/icons/crypto-why.svg"
                alt="Why Invest in Crypto"
                height={64}
                className="mb-3"
                style={{
                  backgroundColor: '#FFEBD9',
                  borderRadius: '50%',
                  padding: '1rem',
                }}
              />
              <h5 className="fw-semibold mb-2">Why invest in crypto?</h5>
              <p className="text-muted mb-0">
                Trade crypto CFDs to speculate on price movements without owning any actual coins — no wallet, no exchange, no hassle.
              </p>
            </div>
          </div>

          {/* How to invest in crypto */}
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <img
                src="/icons/crypto-how.svg"
                alt="How to Invest in Crypto"
                height={64}
                className="mb-3"
                style={{
                  backgroundColor: '#FFEBD9',
                  borderRadius: '50%',
                  padding: '1rem',
                }}
              />
              <h5 className="fw-semibold mb-2">How to invest in crypto</h5>
              <p className="text-muted mb-3">
                Explore what drives crypto prices and how to trade them effectively, even in volatile markets.
              </p>

              <a
                href="#open-account"
                className="btn btn-sm"
                style={{
                  backgroundColor: '#006400',
                  color: '#fff',
                  borderRadius: '10px',
                  padding: '0.5rem 1.5rem',
                  fontWeight: 500,
                }}
              >
                Open an Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoTradingInfo;
