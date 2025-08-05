import React from 'react';

const ForexTradingInfo = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-5" style={{ color: '#FF7A00' }}>
          What is Forex Trading?
        </h2>

        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <img
                src="/icons/forex-question.svg"
                alt="What is Forex"
                height={64}
                className="mb-3"
                style={{
                  backgroundColor: '#FFEBD9',
                  borderRadius: '50%',
                  padding: '1rem',
                }}
              />
              <h5 className="fw-semibold mb-2">What is forex trading?</h5>
              <p className="text-muted mb-0">
                Forex trading has grown ever more popular with retail traders like you. But what exactly is forex? It’s the exchange of one currency for another — speculating on price movement to make potential gains.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <img
                src="/icons/forex-why.svg"
                alt="Why Trade Forex"
                height={64}
                className="mb-3"
                style={{
                  backgroundColor: '#FFEBD9',
                  borderRadius: '50%',
                  padding: '1rem',
                }}
              />
              <h5 className="fw-semibold mb-2">Why trade forex?</h5>
              <p className="text-muted mb-0">
                Find opportunities around the clock during market hours – with competitive spreads and no commissions – and see why forex is the most traded market in the world.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <img
                src="/icons/forex-how.svg"
                alt="How to Trade Forex"
                height={64}
                className="mb-3"
                style={{
                  backgroundColor: '#FFEBD9',
                  borderRadius: '50%',
                  padding: '1rem',
                }}
              />
              <h5 className="fw-semibold mb-2">How to trade forex</h5>
              <p className="text-muted mb-3">
                Want to know what a forex trade looks like? This section details how to place a forex trade on our platform – from choosing your pair to executing your strategy.
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

export default ForexTradingInfo;
