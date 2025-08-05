import React from 'react';
import Image from 'next/image';

const features = [
  '✅ Professional Charting (more than 15 indicators and drawing tools)',
  '✅ Stay up to date on world events and market news.',
  '✅ Guaranteed Stop Loss—so you can relax',
  '✅ Order Entry with One Click—quick and easy',
  '✅ Support for mobile, web, and MT4 means you can trade anywhere.',
];

const NestpipToolsFeatures: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#fff7f0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Text Column */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              Nestpip Tools and Features for Forex Trading
            </h2>
            <ul className="list-unstyled" style={{ fontSize: '1rem', lineHeight: '2' }}>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <p style={{ fontSize: '1rem', marginTop: '1rem' }}>
              Use all of these tools on the Best Forex Trading Platform, which is great for both beginners and pros.
            </p>
          </div>

          {/* Right Image Column */}
          <div className="col-lg-6 text-center">
            <Image
              src="/images/tools-features.png" // Replace with actual path
              alt="Forex Trading Tools on Nestpip"
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

export default NestpipToolsFeatures;
