import React from 'react';
import Image from 'next/image';

const UsdChfPriceFactors: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT – TEXT */}
          <div className="col-lg-6 order-lg-1">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              What Causes the Price of USD/CHF to Go Up and Down?
            </h2>
            <ul style={{ fontSize: '1rem', color: '#333', paddingLeft: '1rem' }}>
              <li><strong>Interest Rates:</strong> The Federal Reserve and Swiss National Bank (SNB) set rates impacting the USD/CHF.</li>
              <li><strong>Risk Sentiment:</strong> Investors move from USD to CHF during global uncertainty.</li>
              <li><strong>Economic Indicators:</strong> GDP, CPI, employment data, and trade balance affect currency strength.</li>
              <li><strong>Central Bank Statements:</strong> Official comments on inflation and policy guide market moves.</li>
              <li><strong>Geopolitical Events:</strong> Trade disputes, conflicts, or global crises drive safe-haven demand for CHF.</li>
            </ul>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              At Nestpip, we put all this data at your fingertips so you can make confident trading decisions — exactly what the Best Forex Trading Platform should do.
            </p>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="col-lg-6 order-lg-2 text-center">
            <Image
              src="/images/usd-chf-price-factors.png" // Replace with your actual image path
              alt="Factors affecting USD/CHF price"
              width={500}
              height={350}
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsdChfPriceFactors;
