import React from 'react';

const MarketCardBanner: React.FC = () => {
  const cards = [
    {
      img: '/icons/stocks.svg',
      alt: 'Stocks',
      title: 'Stocks & CFDs',
      desc: 'Access thousands of stocks, gold, oil, and crypto CFDs on a single platform.',
    },
    {
      img: '/icons/spreads.svg',
      alt: 'Spreads',
      title: 'Tight Spreads',
      desc: 'Trade major FX pairs with spreads as low as 0.0 and minimal commissions.',
    },
    {
      img: '/icons/commissions.svg',
      alt: 'Commissions',
      title: 'Low Commissions',
      desc: 'Enjoy transparent pricing with zero hidden fees and competitive rates.',
    },
  ];

  return (
    <section className="market-banner-section py-5 position-relative">
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <h2 className="text-center fw-bold mb-5 text-orange display-5">
          More Markets, Better Terms
        </h2>

        <div className="row justify-content-center">
          {cards.map(({ img, alt, title, desc }, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div className="d-flex align-items-start bg-white p-4 rounded shadow-sm h-100">
                <img
                  src={img}
                  alt={alt}
                  height={48}
                  className="me-3"
                  style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.1))' }}
                />
                <div>
                  <h5 className="fw-bold mb-2 text-orange">{title}</h5>
                  <p className="text-muted m-0">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-orange px-4 py-2 rounded-pill mx-2 fw-semibold">
            Start Trading
          </button>
          <button className="btn btn-outline-light border-orange text-orange px-4 py-2 rounded-pill mx-2 fw-semibold">
            Try a Demo Account
          </button>
        </div>
      </div>

      {/* Optional background pattern or image */}
      <div className="market-banner-bg position-absolute top-0 start-0 w-100 h-100" />
      
      <style jsx>{`
        .market-banner-section {
          background: linear-gradient(to right, #ffe8dc, #fff4eb);
          position: relative;
          overflow: hidden;
        }
        .text-orange {
          color: #f24521;
        }
        .btn-orange {
          background-color: #f24521;
          color: white;
          border: none;
          transition: 0.3s;
        }
        .btn-orange:hover {
          background-color: #d13818;
        }
        .border-orange {
          border: 2px solid #f24521;
        }
        .market-banner-bg {
          background-image: url('/images/market-pattern.png');
          background-size: cover;
          background-position: center;
          opacity: 0.05;
          z-index: 0;
        }
      `}</style>
    </section>
  );
};

export default MarketCardBanner;
