import React from 'react';

const OverViewSection: React.FC = () => {
  return (
    <section className="overview-section py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: '2.4rem', color: '#f24521' }}>
            Forex Trading: The King of All Currency Markets
          </h2>
          <p className="lead text-muted mt-3">
            Forex, or foreign exchange, is the biggest and most liquid financial market in the world. You can trade more than 60 currency pairs with Nestpip, such as USD/INR, EUR/USD, GBP/JPY, and more.
          </p>
        </div>

        {/* Advantage vs Disadvantage Columns */}
        <div className="row g-4">
          {/* Left - Advantages */}
          <div className="col-md-6">
            <div className="p-4 bg-white shadow rounded h-100">
              <h4 className="fw-semibold text-success mb-4">Main Advantages</h4>
              <ul className="list-unstyled">
                <li className="mb-3">✅ Access to the market 24/5</li>
                <li className="mb-3">✅ Spreads are very small, starting at 0.0 pips</li>
                <li className="mb-3">✅ Quick execution and data in real time</li>
                <li className="mb-3">✅ Tools that are easy for beginners to use and help from experts</li>
              </ul>
            </div>
          </div>

          {/* Right - Disadvantages */}
          <div className="col-md-6">
            <div className="p-4 bg-white shadow rounded h-100">
              <h4 className="fw-semibold text-danger mb-4">Things to Keep in Mind</h4>
              <ul className="list-unstyled">
                <li className="mb-3">⚠️ High volatility can lead to rapid losses</li>
                <li className="mb-3">⚠️ Leverage increases both gains and risks</li>
                <li className="mb-3">⚠️ Economic news can cause sudden price movements</li>
                <li className="mb-3">⚠️ Requires consistent learning and risk management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Summary */}
        <div className="text-center mt-5">
          <p className="fs-5 text-dark">
            Nestpip online trading platform makes forex trading easy and accurate, making it perfect for day traders, swing traders, and long-term investors.
          </p>
          <a
            href="/open-account"
            className="btn btn-success btn-lg mt-3"
            style={{ padding: '0.6rem 2.2rem', borderRadius: '10px' }}
          >
            Start Forex Trading with Nestpip
          </a>
        </div>
      </div>
    </section>
  );
};

export default OverViewSection;
