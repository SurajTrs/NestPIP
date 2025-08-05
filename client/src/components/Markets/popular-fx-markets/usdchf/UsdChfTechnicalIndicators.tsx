import React from 'react';
import Image from 'next/image';

const UsdChfTechnicalIndicators: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT – IMAGE */}
          <div className="col-lg-6 text-center order-lg-1 mb-4 mb-lg-0">
            <Image
              src="/images/usd-chf-technical-indicators.png" // Replace with your actual image path
              alt="Technical Indicators for USD/CHF"
              width={500}
              height={350}
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </div>

          {/* RIGHT – TEXT */}
          <div className="col-lg-6 order-lg-2">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              Keep an Eye on These Technical Indicators
            </h2>
            <ul style={{ fontSize: '1rem', color: '#333', paddingLeft: '1rem' }}>
              <li><strong>Moving Averages (MA):</strong> Find patterns across different timeframes.</li>
              <li><strong>Relative Strength Index (RSI):</strong> Identify overbought or oversold conditions.</li>
              <li><strong>MACD:</strong> Analyze momentum changes.</li>
              <li><strong>Fibonacci Retracements:</strong> Detect price pullback levels.</li>
              <li><strong>Volume Analysis:</strong> Spot breakouts and reversals.</li>
            </ul>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              Nestpip platform includes all these features, so you can always trade accurately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsdChfTechnicalIndicators;
