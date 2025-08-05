import React from 'react';
import Image from 'next/image';

const StandardAccountSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Text Column */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              The standard account: simple, flexible control of your trading
            </h2>
            <p style={{ fontSize: '1rem',color:'fff' }}>
              Our most popular account comes with clear, transparent pricing and superior trade execution speeds on a powerful, fully capable platform with a highly customizable layout.
            </p>
            <p style={{ fontSize: '1rem' }}>
              With no hidden fees, your only trading cost is the spread.
            </p>
          </div>

          {/* Right Image Column */}
          <div className="col-lg-6 text-center">
            <Image
              src="/images/standardAccount.png"
              alt="Standard Account Platform Preview"
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

export default StandardAccountSection;
