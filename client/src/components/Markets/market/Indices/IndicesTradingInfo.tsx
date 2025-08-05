import React from 'react';

const IndicesTradingInfo = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-5" style={{ color: '#FF7A00' }}>
          What are Indices?
        </h2>

        <div className="row justify-content-center g-4">
          {/* What are indices? */}
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <img
                src="/icons/indices-what.svg"
                alt="What are Indices"
                height={64}
                className="mb-3"
                style={{
                  backgroundColor: '#FFEBD9',
                  borderRadius: '50%',
                  padding: '1rem',
                }}
              />
              <h5 className="fw-semibold mb-2">What are indices?</h5>
              <p className="text-muted mb-0">
                Discover everything you need to know about stock indices, including how to trade them and which markets are available to you.
              </p>
            </div>
          </div>

          {/* Why trade indices? */}
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <img
                src="/icons/indices-why.svg"
                alt="Why Trade Indices"
                height={64}
                className="mb-3"
                style={{
                  backgroundColor: '#FFEBD9',
                  borderRadius: '50%',
                  padding: '1rem',
                }}
              />
              <h5 className="fw-semibold mb-2">Why trade indices?</h5>
              <p className="text-muted mb-0">
                Trading indices enables you to get exposure to an entire economy or sector with one single position, instead of opening multiple trades across several companies.
              </p>
            </div>
          </div>

          {/* How to trade indices */}
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <img
                src="/icons/indices-how.svg"
                alt="How to Trade Indices"
                height={64}
                className="mb-3"
                style={{
                  backgroundColor: '#FFEBD9',
                  borderRadius: '50%',
                  padding: '1rem',
                }}
              />
              <h5 className="fw-semibold mb-2">How to trade indices</h5>
              <p className="text-muted mb-3">
                Want to know how to trade an index using CFDs? This section breaks down every aspect of your first trade.
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

export default IndicesTradingInfo;
