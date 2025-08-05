import React from 'react';
import Image from 'next/image';

const WhyUseNestpipMt5: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* LEFT – IMAGE */}
          <div className="col-lg-6 order-lg-1 text-center">
            <Image
              src="/images/mt5-why-nestpip.png" // Replace with your actual image path
              alt="Why Use NestPip with MetaTrader 5"
              width={500}
              height={350}
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </div>

          {/* RIGHT – TEXT */}
          <div className="col-lg-6 order-lg-2">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              Why Should You Use NestPip with MT5?
            </h2>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              MetaTrader 5 is the next generation platform that will help you trade faster, analyze better, and carry out trades more quickly. Deep liquidity, tight spreads, and smooth order processing make the MT5 experience better with NestPip.
            </p>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              We are a MetaTrader forex broker that values honesty and technology. We make sure that your trades are done correctly, with no re-quotes or conflicts of interest.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyUseNestpipMt5;
