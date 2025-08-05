import React from 'react';
import Image from 'next/image';

const NestPipMt5BrokerInfo: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center gy-5 gx-4">
          {/* TEXT LEFT */}
          <div className="col-lg-6 order-2 order-lg-1">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521', fontSize: '1.9rem' }}>
              NestPip Is Your MetaTrader Forex Broker for the Best Trade
            </h2>
            <p className="mb-3 text-dark">
              NestPip is more than just a broker; we are your partner in success.
              Thousands of traders trust us as the top broker for MetaTrader 4 and MT5 for several key reasons:
            </p>
            <ul className="list-unstyled ps-3 text-dark mb-3">
              <li className="mb-2">
                ✅ <strong>Regulation That Is Trusted:</strong> NestPip follows strict rules to protect client funds and ensure full transparency.
              </li>
              <li className="mb-2">
                ✅ <strong>Real Access to the Market:</strong> Enjoy smart order routing and No Dealing Desk (NDD) execution with real-time pricing.
              </li>
              <li className="mb-2">
                ✅ <strong>Fast and Cheap:</strong> Zero commissions, ultra-tight spreads, and lightning-fast execution—perfect for scalping and high-frequency trades.
              </li>
            </ul>
            <p className="text-dark">
              <strong>MetaTrader Account Leverage:</strong> Trade with flexibility using leverage up to <strong>1:500</strong>, allowing smart control over your risk-to-reward ratio.
            </p>
          </div>

          {/* IMAGE RIGHT */}
          <div className="col-lg-6 order-1 order-lg-2 text-center">
            <Image
              src="/images/mt5-trading-platform.png"
              alt="MetaTrader 5 Trading Platform"
              width={500}
              height={350}
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NestPipMt5BrokerInfo;
