import React from 'react';
import Image from 'next/image';

const CommoditiesOverviewSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center">

          {/* Left Text */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521', fontSize: '2rem' }}>
              Trading in Commodities: Real Assets, Real Chances
            </h2>
            <p className="mb-4 text-muted lead">
              To take advantage of global economic trends, trade real-world assets like precious metals and energy commodities. Nestpip lets you trade:
            </p>

            <ul className="list-unstyled ps-3 mb-4">
              <li>✅ Gold (XAU/USD)</li>
              <li>✅ XAG/USD Silver</li>
              <li>✅ Brent Oil and WTI Crude</li>
              <li>✅ Natural Gas</li>
            </ul>

            <h5 className="fw-semibold mb-3" style={{ color: '#f24521'}}>Important Points:</h5>
            <ul className="list-unstyled ps-3">
              <li className="mb-2">✅ CFD trading means you do not own the actual asset</li>
              <li className="mb-2">✅ Protect yourself from inflation and economic crises</li>
              <li className="mb-2">✅ Quick order processing</li>
              <li className="mb-2">✅ Part of our best trading platform</li>
            </ul>

            <p className="mt-4 text-dark">
              Nestpip all-in-one trading solution makes it easy, quick, and safe to trade commodities.
            </p>
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <Image
              src="/images/commodities-banner.png" // Replace with your own image path
              alt="Commodities Trading Illustration"
              width={500}
              height={350}
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderRadius: '16px' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommoditiesOverviewSection;
