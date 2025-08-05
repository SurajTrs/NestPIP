import React from 'react';
import { FaRocket, FaUserShield, FaLightbulb, FaGlobe } from 'react-icons/fa';

const features = [
  {
    icon: <FaRocket style={{ color: '#f24521', fontSize: '2.5rem' }} />,
    title: 'Innovation Driven',
    description: 'We constantly evolve to provide cutting-edge tools for smarter trading.',
  },
  {
    icon: <FaUserShield style={{ color: '#2874a6', fontSize: '2.5rem' }} />,
    title: 'Secure & Regulated',
    description: 'Trade with confidence on a platform that puts your safety first.',
  },
  {
    icon: <FaLightbulb style={{ color: '#f1c40f', fontSize: '2.5rem' }} />,
    title: 'Smart Insights',
    description: 'Access real-time analytics and AI-powered market forecasts.',
  },
  {
    icon: <FaGlobe style={{ color: '#27ae60', fontSize: '2.5rem' }} />,
    title: 'Global Reach',
    description: 'We serve traders across 100+ countries with 24/5 support.',
  },
];

const PushingForward: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0' }} className="py-5">
      <div className="container">
        <h3
          className="text-center fw-bold mb-4"
          style={{ color: '#f24521', fontSize: '2rem' }}
        >
          Pushing Forward, Together
        </h3>

        <p
          className="mb-5 text-center text-muted"
          style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem' }}
        >
          At NestPip, we’re more than a trading platform — we’re a partner in your financial
          journey. We empower traders with the tools, trust, and technology to move forward
          with confidence.
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

export default PushingForward;
