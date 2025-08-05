import React from 'react';
import { FaTachometerAlt, FaChartBar, FaCogs, FaBolt } from 'react-icons/fa';

const features = [
  {
    icon: <FaTachometerAlt style={{ color: '#f24521', fontSize: '2.5rem' }} />,
    title: 'Lightning Execution',
    description: 'Experience ultra-fast trade execution with minimal slippage.',
  },
  {
    icon: <FaChartBar style={{ color: '#27ae60', fontSize: '2.5rem' }} />,
    title: 'Advanced Charting',
    description: 'Use multi-timeframe analysis and indicators for precise decisions.',
  },
  {
    icon: <FaCogs style={{ color: '#8e44ad', fontSize: '2.5rem' }} />,
    title: 'Custom Workspaces',
    description: 'Configure your platform to match your unique trading workflow.',
  },
  {
    icon: <FaBolt style={{ color: '#f1c40f', fontSize: '2.5rem' }} />,
    title: 'Power Tools',
    description: 'From one-click trading to depth-of-market views, dominate the market.',
  },
];

const ActiveTrader: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0' }} className="py-5">
      <div className="container">
        <h3
          className="text-center fw-bold mb-4"
          style={{ color: '#f24521', fontSize: '2rem' }}
        >
          Built for Active Traders
        </h3>

        <p
          className="mb-5 text-center text-muted"
          style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem' }}
        >
          Whether you’re scalping, day trading, or executing complex strategies — our platform
          gives you the edge with performance, reliability, and precision.
        </p>

        <div className="row justify-content-center">
          {features.map(({ icon, title, description }, i) => (
            <div key={i} className="col-md-6 col-lg-3 mb-4">
              <div
                className="d-flex align-items-start p-3 rounded"
                style={{
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  height: '100%',
                }}
              >
                <div className="me-3">{icon}</div>
                <div>
                  <h5 className="fw-bold mb-1" style={{ color: '#f24521' }}>
                    {title}
                  </h5>
                  <p className="text-muted mb-0">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActiveTrader;
