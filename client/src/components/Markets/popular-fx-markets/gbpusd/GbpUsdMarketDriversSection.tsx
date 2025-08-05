import React from 'react';
import Image from 'next/image';

const GbpUsdMarketDriversSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT – TEXT */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521', fontSize: '2rem' }}>
              What Moves the GBP/USD Market?
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#333' }}>
              To trade GBP/USD effectively, it is crucial to understand the economic and political forces influencing both the UK and the US.
            </p>

            <ul className="list-unstyled mt-4" style={{ fontSize: '1rem', color: '#444' }}>
              <li className="mb-3 d-flex">
                <i className="fas fa-angle-double-right text-primary me-2 mt-1" />
                <strong>Interest Rates:</strong> Rate hikes by the BoE or Fed often boost their respective currencies by attracting investors.
              </li>
              <li className="mb-3 d-flex">
                <i className="fas fa-angle-double-right text-primary me-2 mt-1" />
                <strong>Economic Data:</strong> Reports on GDP, inflation, employment, and consumer spending influence currency sentiment.
              </li>
              <li className="mb-3 d-flex">
                <i className="fas fa-angle-double-right text-primary me-2 mt-1" />
                <strong>Political Stability:</strong> Brexit updates, elections, and policy shifts can create sharp price movements.
              </li>
              <li className="mb-3 d-flex">
                <i className="fas fa-angle-double-right text-primary me-2 mt-1" />
                <strong>Global Sentiment:</strong> Risk appetite across global markets can push investors toward or away from GBP or USD.
              </li>
            </ul>

            <p className="mt-4" style={{ fontSize: '1rem', color: '#333' }}>
              Nestpip keeps you ahead with <strong>real-time market news</strong>, <strong>live forex signals</strong>, and a built-in
              <strong> economic calendar</strong> — all designed to help you trade GBP/USD with insight and confidence.
            </p>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="col-lg-6 text-center">
            <Image
              src="/images/gbp-usd-factors.png" // 🔁 Replace with actual image
              alt="GBP/USD Market Factors"
              width={520}
              height={340}
              className="img-fluid rounded shadow"
              style={{ maxHeight: '380px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GbpUsdMarketDriversSection;
