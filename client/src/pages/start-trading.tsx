'use client';
import React from 'react';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
import '../../styles/style.css';
import TopNavBar from './TopNavBar';
import MainNavbar from './MainNavbar';
import Footer from './Footer';

interface AccountType {
  title: string;
  subtitle?: string;
  features: string[];
  img: string;
  button: string;
  popular?: boolean;
}

const accountTypes: AccountType[] = [
  {
    title: 'Standard Account',
    subtitle: 'Most Popular',
    features: [
      'Trade 80+ FX pairs, stocks, commodities & more',
      'Web, mobile, and TradingView access',
      'Active Trader program eligibility',
      'Exclusive analytics & Reuters news',
    ],
    img: '/images/standard-account.png',
    button: 'Open Standard Account',
    popular: true,
  },
  {
    title: 'RAW Spread Account',
    features: [
      'Spreads from 0.0 on FX Majors',
      '$5 commission per $100k traded',
      'Fast execution & low latency',
      'Ideal for high-frequency traders',
    ],
    img: '/images/raw-spread.png',
    button: 'Open RAW Spread Account',
  },
  {
    title: 'MetaTrader 5 Account',
    features: [
      'Advanced charting tools & indicators',
      'More timeframes, economic calendar',
      'Trade FX, stocks, indices & more',
    ],
    img: '/images/mt5.png',
    button: 'Open MT5 Account',
  },
  {
    title: 'RAW Spread MT5 Account',
    features: [
      'Super-tight spreads as low as 0.0',
      'All MT5 features with RAW pricing',
    ],
    img: '/images/raw-mt5.png',
    button: 'Open RAW Spread MT5 Account',
  },
  {
    title: 'MetaTrader 4 Account',
    features: [
      '80+ forex pairs, gold, silver',
      'Expert advisors, EA trading',
      'Free VPS for qualifying traders',
    ],
    img: '/images/mt4.png',
    button: 'Open MT4 Account',
  },
];

const StartTrading: React.FC = () => {
  return (
    <>
      <TopNavBar />
      <MainNavbar />
      <div className="video-banner-container">
  <video
    className="video-banner"
    src="/videos/starttrading.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
  <div className="video-overlay">
   </div>
</div>
      <div className="container mt-5" style={{ backgroundColor: '#FFF7F0' }}>
        <section className="start-trading-modern py-5 text-dark">
          <div className="container px-4 px-md-5">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-primary">Start Trading with Nestpip</h2>
              <p className="lead text-secondary">Choose from a range of professional-grade account types</p>
            </div>

            {/* Account Cards stacked vertically */}
            <div className="account-list">
              {accountTypes.map((acc, i) => (
                <div
                  key={i}
                  className="account-card d-flex flex-column flex-md-row align-items-center p-4 mb-5 rounded shadow-sm"
                >
                  <div className="account-text flex-grow-1 pe-md-4">
                    <div className="d-flex align-items-center mb-2">
                      <h3 className="text-primary mb-0">{acc.title}</h3>
                      {acc.popular && (
                        <span className="badge bg-primary ms-3 py-1 px-2" style={{ fontSize: '0.85rem' }}>
                          Popular
                        </span>
                      )}
                    </div>
                    <ul className="mt-3 mb-0 text-dark">
                      {acc.features.map((f, idx) => (
                        <li key={idx} className="mb-2 d-flex align-items-center">
                          <FaCheckCircle className="me-2 text-success" /> {f}
                        </li>
                      ))}
                    </ul>
                    <Link href="#">
                      <span className="btn btn-primary mt-3 d-inline-block" role="button">
                        {acc.button}
                      </span>
                    </Link>
                  </div>
                  <div
                    className="account-img mt-4 mt-md-0 flex-shrink-0 text-center text-md-end"
                    style={{ minWidth: '320px' }}
                  >
                    <img
                      src={acc.img}
                      alt={acc.title}
                      className="img-fluid rounded"
                      style={{ maxHeight: '180px', objectFit: 'contain' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Demo & Special Accounts */}
            <div className="row mt-5">
              <div className="col-md-6 text-center text-md-start mb-4">
                <h5 className="text-primary">Not Ready Yet?</h5>
                <p className="text-secondary">Practice with $50,000 in virtual funds on a free demo account.</p>
                <Link href="#">
                  <span className="btn btn-outline-primary">Open Demo Account</span>
                </Link>
              </div>
              <div className="col-md-6 text-center text-md-start">
                <h5 className="text-primary">Other Account Options</h5>
                <p className="text-secondary mb-1">• Corporate / Partnership Accounts</p>
                <p className="text-secondary mb-3">• Joint Accounts</p>
                <Link href="#">
                  <span className="btn btn-outline-primary me-2">Open Corporate Account</span>
                </Link>
                <Link href="#">
                  <span className="btn btn-outline-primary">Open Joint Account</span>
                </Link>
              </div>
            </div>

            {/* Active Trader Program */}
            <div className="mt-5 pt-4 border-top text-center">
              <h3 className="text-primary mb-3">Active Trader Program</h3>
              <p className="text-secondary">Earn rebates, get VIP support, and lower your costs by up to 15%</p>
              <div className="row justify-content-center mt-4 text-start">
                <div className="col-md-4">
                  <h6 className="text-success fw-semibold">Multi-Asset Rebates</h6>
                  <p className="text-secondary small">Up to $50 per million traded on major markets.</p>
                </div>
                <div className="col-md-4">
                  <h6 className="text-success fw-semibold">VIP Support</h6>
                  <p className="text-secondary small">Dedicated relationship manager and strategy support.</p>
                </div>
                <div className="col-md-4">
                  <h6 className="text-success fw-semibold">Exclusive Benefits</h6>
                  <p className="text-secondary small">Early access to new features and premium events.</p>
                </div>
              </div>
              <Link href="#">
                <span className="btn btn-primary mt-4">Join Active Trader</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />

      <style jsx global>{`
        body,
        html,
        #__next {
          background-color: #FFF7F0 !important;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        /* Primary color (used for headings, buttons, badges) */
        .text-primary {
          color: #f24521 !important; /* Dark Green */
        }
        .bg-primary {
          background-color: #e52d26ff !important;
        }

        /* Secondary color (for descriptive text) */
        .text-secondary {
          color: #4a4a4a !important;
        }

        /* Buttons */
        .btn-primary {
          background-color: #f24521 !important;
          color: #fff !important;
          border: none !important;
          padding: 10px 25px;
          font-weight: 600;
          transition: background-color 0.3s ease;
          cursor: pointer;
          display: inline-block;
          border-radius: 6px;
        }
        .btn-primary:hover {
          background-color: #145b1b !important;
          color: #fff !important;
        }
        .btn-outline-primary {
          color: #0e3c12 !important;
          border: 1.5px solid #0e3c12 !important;
          padding: 8px 20px;
          font-weight: 600;
          transition: background-color 0.3s ease;
          cursor: pointer;
          display: inline-block;
          border-radius: 6px;
          text-decoration: none;
        }
        .btn-outline-primary:hover {
          background-color: #0e3c12 !important;
          color: #fff !important;
          text-decoration: none;
        }

      
        .account-card {
          background-color: #fce9d8ff;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(195, 94, 40, 0.92);
          color: #ce6054ff;
        }
        .account-text ul {
          padding-left: 20px;
          margin-bottom: 0;
        }
        .account-text ul li {
          margin-bottom: 0.6rem;
          font-size: 1rem;
        }

        @media (max-width: 767.98px) {
          .account-card {
            flex-direction: column !important;
          }
          .account-img {
            min-width: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export default StartTrading;
