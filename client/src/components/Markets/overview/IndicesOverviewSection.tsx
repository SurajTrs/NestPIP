import React from 'react';
import Image from 'next/image';

const IndicesOverviewSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center">

          {/* Left Text Content */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521', fontSize: '2rem' }}>
              Indices Trading: Keep an Eye on How the Global Market is Doing
            </h2>
            <p className="mb-4 text-muted lead">
              You can get a sense of how the whole market is feeling with just one trade by trading global indices like the S&P 500, NASDAQ 100, DAX 40, FTSE 100, and NIFTY 50.
            </p>

            <h5 className="fw-semibold mb-3" style={{ color: '#193c0bff' }}>Why You Should Trade Indices on Nestpip:</h5>
            <ul className="list-unstyled ps-3">
              <li className="mb-2">✅ Getting to know the biggest economies</li>
              <li className="mb-2">✅ Trade in both directions</li>
              <li className="mb-2">✅ Variety without making things too hard</li>
              <li className="mb-2">✅ Part of our all-in-one trading solution</li>
            </ul>

            <p className="mt-4 text-dark ">
              Nestpip is an easy-to-use online trading platform that has all of this.
            </p>
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <Image
              src="/images/indices-banner.png" // Replace with your actual image
              alt="Global Indices Trading"
              width={500}
              height={350}
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', borderRadius: '16px' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndicesOverviewSection;
