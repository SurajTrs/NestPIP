import React from 'react';
import Image from 'next/image';

const GBPUSDBenefitsSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
                <div className="col-lg-6 text-center">
            <Image
              src="/images/gbpusd-benefits.png"
              alt="Benefits of Trading GBP/USD"
              width={520}
              height={320}
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </div>
          {/* LEFT TEXT COLUMN */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              Benefits of Trading GBP/USD
            </h2>

            <ul className="list-unstyled" style={{ fontSize: '1rem', color: '#333' }}>
              <li className="mb-3 d-flex">
                <i className="fas fa-check-circle text-success me-2 mt-1" />
                <span><strong>High Liquidity:</strong> Millions of trades occur daily, enabling fast execution and minimal slippage.</span>
              </li>
              <li className="mb-3 d-flex">
                <i className="fas fa-check-circle text-success me-2 mt-1" />
                <span><strong>Predictable Volatility:</strong> GBP/USD moves steadily and quickly — ideal for short-term trading strategies.</span>
              </li>
              <li className="mb-3 d-flex">
                <i className="fas fa-check-circle text-success me-2 mt-1" />
                <span><strong>Easy-to-Understand Market Structure:</strong> Well-known price patterns and consistent reactions to news make it beginner-friendly.</span>
              </li>
              <li className="mb-3 d-flex">
                <i className="fas fa-check-circle text-success me-2 mt-1" />
                <span><strong>Effective for Risk Control:</strong> Frequently used in hedging due to its predictable response to economic/political events.</span>
              </li>
              <li className="mb-3 d-flex">
                <i className="fas fa-check-circle text-success me-2 mt-1" />
                <span><strong>Strong Technical Patterns:</strong> Clear chart formations make GBP/USD a favorite for technical traders.</span>
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE COLUMN */}
      
        </div>
      </div>
    </section>
  );
};

export default GBPUSDBenefitsSection;
