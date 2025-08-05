import React from 'react';
import { FaSearchDollar, FaChartLine, FaGem } from 'react-icons/fa';

const PreciousMetalsFeatures: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row text-center justify-content-center">
          {/* Feature 1 */}
          <div className="col-md-4 mb-4">
            <div className="p-4 h-100 rounded-4 shadow-sm bg-white">
              <FaSearchDollar size={40} color="#f24521" className="mb-3" />
              <h5 className="fw-bold mb-2" style={{ color: '#f24521' }}>
                Deep Liquidity & Tighter Pricing
              </h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                Trade spot Gold with greater confidence thanks to highly competitive spreads.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-4 mb-4">
            <div className="p-4 h-100 rounded-4 shadow-sm bg-white">
              <FaChartLine size={40} color="#f24521" className="mb-3" />
              <h5 className="fw-bold mb-2" style={{ color: '#f24521' }}>
                Advanced TradingView Charts
              </h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                Leverage powerful charts with 80+ indicators, 14 timeframes & rich insights.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-md-4 mb-4">
            <div className="p-4 h-100 rounded-4 shadow-sm bg-white">
              <FaGem size={40} color="#f24521" className="mb-3" />
              <h5 className="fw-bold mb-2" style={{ color: '#f24521' }}>
                Access Multiple Metals
              </h5>
              <p className="text-muted mb-0" style={{ fontSize: '0.95rem' }}>
                Trade Gold, Silver, and Platinum from a global leader in precious metals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreciousMetalsFeatures;
