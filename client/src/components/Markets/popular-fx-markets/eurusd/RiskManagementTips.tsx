import React from 'react';
import Image from 'next/image';

const tips = [
  "✅ Don't risk more than 1–2% on each trade.",
  '✅ Set the right levels for stop-loss and take-profit.',
  '✅ Be aware of economic events, like the ECB and FOMC.',
  '✅ Before you go live, practice with a demo account.',
];

const RiskManagementTips: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#fff7f0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Text Column */}
          <div className="col-lg-6 order-lg-2">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              Tips for Managing Risk with EUR/USD
            </h2>
            <ul className="list-unstyled" style={{ fontSize: '1rem', lineHeight: '2' }}>
              {tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>

          {/* Right Image Column */}
          <div className="col-lg-6 order-lg-1 text-center">
            <Image
              src="/images/risk-management.png" // Replace with your actual image path
              alt="Risk Management Tips"
              width={500}
              height={300}
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskManagementTips;
