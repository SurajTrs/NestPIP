import React from 'react';

const GoldAndSilverIntro: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-5" style={{ color: '#f24521' }}>
          What are Gold and Silver?
        </h2>

        <div className="row justify-content-center g-4">
          {/* Card 1: What is gold and silver trading */}
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center h-100 p-4 rounded-4 shadow-sm bg-white">
              <img
                src="/icons/gold-silver-what.svg"
                alt="What is Gold and Silver Trading"
                height={64}
                className="mb-3"
                style={{
                  backgroundColor: '#FFEBD9',
                  borderRadius: '50%',
                  padding: '1rem',
                }}
              />
              <h5 className="fw-semibold mb-2">What is gold and silver trading?</h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                Everything you need to know about the precious metals and the differences between them.
              </p>
            </div>
          </div>

          {/* Card 2: Why trade gold and silver */}
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center h-100 p-4 rounded-4 shadow-sm bg-white">
              <img
                src="/icons/gold-silver-why.svg"
                alt="Why Trade Gold and Silver"
                height={64}
                className="mb-3"
                style={{
                  backgroundColor: '#FFEBD9',
                  borderRadius: '50%',
                  padding: '1rem',
                }}
              />
              <h5 className="fw-semibold mb-2">Why trade gold and silver?</h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                Gold has historically been a safe haven asset in times of uncertainty. Learn the benefits of both gold and silver.
              </p>
            </div>
          </div>

          {/* Card 3: How to trade gold and silver */}
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center h-100 p-4 rounded-4 shadow-sm bg-white">
              <img
                src="/icons/gold-silver-how.svg"
                alt="How to Trade Gold and Silver"
                height={64}
                className="mb-3"
                style={{
                  backgroundColor: '#FFEBD9',
                  borderRadius: '50%',
                  padding: '1rem',
                }}
              />
              <h5 className="fw-semibold mb-2">How to trade gold and silver</h5>
              <p className="text-muted mb-3" style={{ fontSize: '0.95rem' }}>
                Want to know how to trade gold and silver using CFDs? This section walks you through the full process.
              </p>
              <a
                href="#open-account"
                className="btn btn-sm mt-2"
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

export default GoldAndSilverIntro;
