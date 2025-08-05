'use client';

import React from 'react';
import Image from 'next/image';

const ActiveTraderSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* Left Image */}
          <div className="col-12 col-md-6 text-center">
            <Image
              src="/assets/active-trader-banner.png"
              alt="Active Trader"
              width={600}
              height={400}
              className="img-fluid rounded-4 shadow-sm"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

          {/* Right Content */}
          <div className="col-12 col-md-6">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521' }}>
              Lower your trading costs by up to 15%
            </h2>
            <p className="text-muted fs-5 mb-4">
              Earn cash rebates and access other exclusive benefits with the <strong>Active Trader</strong> program.
            </p>

            {/* Functional Benefits */}
            <div className="mb-4">
              <h5 className="fw-semibold mb-2" style={{ color: '#00365A' }}>Functional Benefits</h5>
              <p className="text-muted mb-2">
                Multi-asset rebates on FX, Indices, Commodities, Metals, cryptocurrencies and Equities — up to <strong>$50 per million traded</strong>.
              </p>
              <p className="text-muted">
                Get <strong>bank fees on wire transfers reimbursed</strong>.
              </p>
            </div>

            {/* White Glove Service */}
            <div className="d-flex align-items-start mb-3">
              <Image
                src="/icons/headset-blue.svg"
                alt="Headset Icon"
                width={36}
                height={36}
                className="me-3 flex-shrink-0"
              />
              <div>
                <h6 className="fw-semibold mb-1">White Glove Service</h6>
                <p className="text-muted mb-0">
                  One-on-one guidance from relationship managers to help develop and maintain your trading strategy.
                </p>
              </div>
            </div>

            {/* Red Carpet Rollout */}
            <div className="d-flex align-items-start">
              <Image
                src="/icons/vip-access-red.svg"
                alt="VIP Icon"
                width={36}
                height={36}
                className="me-3 flex-shrink-0"
              />
              <div>
                <h6 className="fw-semibold mb-1">Red Carpet Rollout</h6>
                <p className="text-muted mb-0">
                  VIP access to exclusive events and early previews of new products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActiveTraderSection;
