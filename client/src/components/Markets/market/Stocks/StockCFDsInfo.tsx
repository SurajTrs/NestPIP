import React from 'react';

const StockCFDsInfo = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-5" style={{ color: '#f24521' }}>
          Stock CFDs Explained
        </h2>

        <div className="row justify-content-center g-4">
          {/* What are Stock CFDs? */}
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <img
                src="/icons/stocks-what.svg"
                alt="What are Stock CFDs"
                height={64}
                className="mb-3"
                style={{
                  backgroundColor: '#FFEBD9',
                  borderRadius: '50%',
                  padding: '1rem',
                }}
              />
              <h5 className="fw-semibold mb-2">Stock CFDs explained</h5>
              <p className="text-muted mb-0">
                If you want to profit from a company’s performance, then trading stock CFDs is the way to do it. Learn how they work and what to expect.
              </p>
            </div>
          </div>

          {/* Why trade stock CFDs? */}
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <img
                src="/icons/stocks-why.svg"
                alt="Why Trade Stock CFDs"
                height={64}
                className="mb-3"
                style={{
                  backgroundColor: '#FFEBD9',
                  borderRadius: '50%',
                  padding: '1rem',
                }}
              />
              <h5 className="fw-semibold mb-2">Why trade stock CFDs?</h5>
              <p className="text-muted mb-0">
                Stocks are among the most popular assets for traders. With CFDs, you can trade rising and falling prices without owning the underlying asset.
              </p>
            </div>
          </div>

          {/* How to trade stock CFDs */}
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <img
                src="/icons/stocks-how.svg"
                alt="How to Trade Stock CFDs"
                height={64}
                className="mb-3"
                style={{
                  backgroundColor: '#FFEBD9',
                  borderRadius: '50%',
                  padding: '1rem',
                }}
              />
              <h5 className="fw-semibold mb-2">How to trade stock CFDs</h5>
              <p className="text-muted mb-3">
                Want to learn to trade stocks with CFDs? This guide covers how to profit from both rising and falling markets.
              </p>

              <a
                href="#stock-cfd-learn"
                className="btn btn-sm"
                style={{
                  backgroundColor: '#006400',
                  color: '#fff',
                  borderRadius: '10px',
                  padding: '0.5rem 1.5rem',
                  fontWeight: 500,
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockCFDsInfo;
