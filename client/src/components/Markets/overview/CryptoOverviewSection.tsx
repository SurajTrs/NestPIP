import React from 'react';
import Image from 'next/image';

const CryptoOverviewSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center">

          {/* Left Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <Image
              src="/images/crypto-banner.png" // Replace with your actual image path
              alt="Crypto Trading Illustration"
              width={500}
              height={350}
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', borderRadius: '16px' }}
            />
          </div>

          {/* Right Text */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521', fontSize: '2rem' }}>
              Crypto Trading: Access to Digital Assets 24/7
            </h2>
            <p className="mb-4 text-muted lead">
              Cryptocurrencies are not just a fad; they are a chance to make money in the long run.
              You can trade a lot of different assets online with Nestpip, including Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), and more.
            </p>

            <h5 className="fw-semibold mb-3" style={{ color: '#f24521'}}>Features of Crypto Trading:</h5>
            <ul className="list-unstyled ps-3">
              <li className="mb-2">✅ Access to the market 24/7</li>
              <li className="mb-2">✅ High volatility means a chance to make money</li>
              <li className="mb-2">✅ No need for separate wallets for crypto</li>
              <li className="mb-2">✅ Advanced charting and technical analysis</li>
            </ul>

            <p className="mt-4 text-dark">
              Nestpip online trading platform makes crypto trading easier and safer than ever before.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CryptoOverviewSection;
