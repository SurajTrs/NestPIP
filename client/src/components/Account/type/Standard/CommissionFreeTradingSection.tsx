import React from 'react';
import Image from 'next/image';

const CommissionFreeTradingSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Text Column */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              Commission-Free Trading
            </h2>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              With NestPip’s standard forex trading account, you’ll never pay commission. You trade
              with transparent, low-cost spreads only. No hidden charges, no confusing fee schedules
              — just a clean trading environment where you keep more of your profits.
            </p>

            <ul className="list-unstyled mt-4" style={{ fontSize: '1rem', color: '#333' }}>
              <li className="mb-2 d-flex">
                <i className="fas fa-check-circle text-success me-2 mt-1" />
                Save more on every trade
              </li>
              <li className="mb-2 d-flex">
                <i className="fas fa-check-circle text-success me-2 mt-1" />
                Best choice for forex account for beginners
              </li>
              <li className="mb-2 d-flex">
                <i className="fas fa-check-circle text-success me-2 mt-1" />
                Ideal for daily and swing traders
              </li>
            </ul>
          </div>

          {/* Right Image Column */}
          <div className="col-lg-6 text-center">
            <Image
              src="/images/standardAccount.png"
              alt="Commission-Free Trading"
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

export default CommissionFreeTradingSection;
