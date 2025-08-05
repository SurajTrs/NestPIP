import React from 'react';
import { FaLock, FaChartLine, FaMobileAlt, FaUserTie } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaLock style={{ color: '#2874a6', fontSize: '2.5rem' }} />,
    title: 'Secure Trading',
    description: 'Trade confidently on a platform that uses bank-grade encryption and global regulation.',
  },
  {
    icon: <FaChartLine style={{ color: '#27ae60', fontSize: '2.5rem' }} />,
    title: 'Real-Time Data',
    description: 'Get instant access to live market data with no delays or hidden fees.',
  },
  {
    icon: <FaMobileAlt style={{ color: '#f24521', fontSize: '2.5rem' }} />,
    title: 'Mobile Ready',
    description: 'Trade anywhere with powerful iOS & Android apps built for active traders.',
  },
  {
    icon: <FaUserTie style={{ color: '#8e44ad', fontSize: '2.5rem' }} />,
    title: 'Expert Support',
    description: 'Get help when you need it with 24/5 dedicated support from market specialists.',
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0' }} className="py-5">
      <div className="container">
        <h3
          className="text-center fw-bold mb-4"
          style={{ color: '#f24521', fontSize: '2rem' }}
        >
          Benefits of Trading with Us
        </h3>

        <p
          className="mb-5 text-center text-muted"
          style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem' }}
        >
          From cutting-edge tools to unmatched security and support — here’s why thousands of traders choose us.
        </p>

        <div className="row justify-content-center">
          {benefits.map(({ icon, title, description }, i) => (
            <div key={i} className="col-md-6 col-lg-3 mb-4">
              <div
                className="p-4 rounded"
                style={{
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  height: '100%',
                }}
              >
                <div className="mb-3">{icon}</div>
                <h5 className="fw-bold mb-2" style={{ color: '#f24521' }}>
                  {title}
                </h5>
                <p className="text-muted mb-0">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
