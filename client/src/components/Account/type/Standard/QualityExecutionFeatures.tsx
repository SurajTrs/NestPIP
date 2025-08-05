import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import {  FaCoins, FaChartBar, FaChartLine } from 'react-icons/fa6';

const features = [
  {
    icon: <FaCheckCircle size={36} color="#014421" />,
    title: 'Backed by quality execution and transparent pricing',
    description:
      'When you’re ready to seize opportunity, you can count on our world-leading and automated execution technology to get the job done.',
  },
  {
    icon: <FaCoins size={36} color="#014421" />,
    title: 'FINANCIAL STRENGTH AND SECURITY',
    description:
      'With our substantial capital resources from being part of the StoneX Group, we have the power to innovate and push the industry forward.',
  },
  {
    icon: <FaChartBar size={36} color="#014421" />,
    title: 'OUR PRICING',
    description:
      'Learn about our price improvement technology that can save you money.',
  },
  {
    icon: <FaChartLine size={36} color="#014421" />,
    title: 'TRADING TOOLS & TRADE MARGINS',
    description:
      'Our fully automated trade process helps ensure your trades execute as fast as possible at the best available price. When the market moves in your favor, our trading technology automatically passes along the savings by executing your trade at a better price.',
  },
];

const QualityExecutionFeatures: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0', color: '#014421' }}>
      <div className="container">
        {/* Intro */}
        <div className="mb-5 text-center">
          <h2 className="fw-bold" style={{ fontSize: '1.8rem', color:'#f24521'}}>
            Backed by quality execution and transparent pricing
          </h2>
          <p className="mt-3 fs-5">
            When you’re ready to seize opportunity, you can count on our world-leading and automated execution technology to get the job done.
          </p>
        </div>

        <div className="row g-4">
          {features.map(({ icon, title, description }, idx) => (
            <div key={idx} className="col-md-6 d-flex align-items-start gap-3">
              <div>{icon}</div>
              <div>
                <h5 className="fw-bold" style={{ color: '#014421' }}>
                  {title}
                </h5>
                <p className="mb-0" style={{ color: '#014421' }}>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityExecutionFeatures;
