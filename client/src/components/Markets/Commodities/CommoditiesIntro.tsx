import React from 'react';

const CommoditiesIntro = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-5" style={{ color: '#FF7A00' }}>
          What are Commodities?
        </h2>

        <div className="row justify-content-center g-4">
          {/* Card 1: What are commodities */}
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center h-100 p-4 rounded-4 shadow-sm bg-white">
              <img
                src="/icons/commodity-what.svg"
                alt="What are Commodities"
                height={64}
                className="mb-3"
                style={{
                  backgroundColor: '#FFEBD9',
                  borderRadius: '50%',
                  padding: '1rem',
                }}
              />
              <h5 className="fw-semibold mb-2">What are commodities?</h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                Everything you need to know about popular commodities like gold, oil, coffee and more – including how to trade them.
              </p>
            </div>
          </div>

          {/* Card 2: Why trade commodities */}
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center h-100 p-4 rounded-4 shadow-sm bg-white">
              <img
                src="/icons/commodity-why.svg"
                alt="Why Trade Commodities"
                height={64}
                className="mb-3"
                style={{
                  backgroundColor: '#FFEBD9',
                  borderRadius: '50%',
                  padding: '1rem',
                }}
              />
              <h5 className="fw-semibold mb-2">Why trade commodities?</h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                Gold has historically been a safe haven asset in times of market uncertainty. Learn more about the benefits of gold and other commodities.
              </p>
            </div>
          </div>

          {/* Card 3: How to trade commodities */}
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center h-100 p-4 rounded-4 shadow-sm bg-white">
              <img
                src="/icons/commodity-how.svg"
                alt="How to Trade Commodities"
                height={64}
                className="mb-3"
                style={{
                  backgroundColor: '#FFEBD9',
                  borderRadius: '50%',
                  padding: '1rem',
                }}
              />
              <h5 className="fw-semibold mb-2">How to trade commodities</h5>
              <p className="text-muted mb-3" style={{ fontSize: '0.95rem' }}>
                Want to know how to trade oil using CFDs? This section breaks down every aspect of your first trade.
              </p>
              
            </div>
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
    </section>
  );
};

export default CommoditiesIntro;
