import React from 'react';
import Image from 'next/image';

const StocksOverviewSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center">

     
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <Image
              src="/images/stocks-banner.png" // Replace with your actual image path
              alt="Stock Trading Illustration"
              width={500}
              height={350}
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderRadius: '16px' }}
            />
          </div>
          

         
          <div className="col-md-6">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521', fontSize: '2rem' }}>
              Stock CFDs – Buy and Sell Shares of Global Companies
            </h2>
            <p className="mb-4 text-muted lead">
              You can trade on the price changes of big companies like Apple, Amazon, Tesla, Meta, and Microsoft without actually owning any shares.
            </p>

            <h5 className="fw-semibold mb-3" style={{ color: '#f24521'}}>Stock CFD Trading has the following features:</h5>
            <ul className="list-unstyled ps-3">
              <li className="mb-2">✅ More than 100 stocks from around the world</li>
              <li className="mb-2">✅ You can trade both short and long positions</li>
              <li className="mb-2">✅ Strategies based on earnings and news</li>
              <li className="mb-2">✅ Full help through Nestpip online trading platform</li>
            </ul>

            <p className="mt-4 text-dark">
              It is never been easier or cheaper to get into the stock market.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StocksOverviewSection;
