import React from 'react';
import { FaUserCheck, FaWallet, FaChartLine } from 'react-icons/fa';

const TradingStepsDisclaimer: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', color: '#014421' }}>
      <div className="container py-4">
        <div className="row text-center g-4">
          <div className="col-12 col-md-4 d-flex flex-column align-items-center">
            <FaUserCheck size={28} className="mb-2" />
            <div>
              <strong>Apply</strong>
              <div style={{ fontSize: '0.95rem' }}>for a trading account</div>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex flex-column align-items-center">
            <FaWallet size={28} className="mb-2" />
            <div>
              <strong>Fund</strong>
              <div style={{ fontSize: '0.95rem' }}>easily and securely</div>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex flex-column align-items-center">
            <FaChartLine size={28} className="mb-2" />
            <div>
              <strong>Trade</strong>
              <div style={{ fontSize: '0.95rem' }}>our full range of markets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingStepsDisclaimer;
