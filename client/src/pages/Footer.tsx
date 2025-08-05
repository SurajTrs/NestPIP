'use client';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="py-5"style={{
    backgroundColor: '#ffffff',
    backgroundImage: 'url("/images/footerbg.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#000000',
    fontSize: '1rem',
  }}
    >
      <div className="container">
        <div className="row gy-4">
          {/* Left Column */}
          <div className="col-md-4">
            <h5 style={{ color: '#f24521', fontWeight: '600', marginBottom: '1rem' }}>
              Markets & Accounts
            </h5>
            <ul className="list-unstyled mb-4" style={{ lineHeight: '1.7' }}>
              <li>Range of Markets</li>
              <li>Trading Accounts</li>
              <li>Trading Platforms</li>
              <li>Trading Costs</li>
              <li>Margin Requirements</li>
            </ul>

            <h5 style={{ color: '#f24521', fontWeight: '600', marginBottom: '1rem' }}>
              I WOULD LIKE TO
            </h5>
            <ul className="list-unstyled" style={{ lineHeight: '1.7' }}>
              <li>Compare Accounts</li>
              <li>Compare Platforms</li>
              <li>Fund My Account</li>
              <li>Withdraw Funds</li>
              <li>Download Platforms</li>
              <li>Download TradingView</li>
            </ul>
          </div>

          {/* Middle Column */}
          <div className="col-md-4">
            <h5 style={{ color: '#f24521', fontWeight: '600', marginBottom: '1rem' }}>
              I WOULD LIKE TO LEARN ABOUT
            </h5>
            <ul className="list-unstyled mb-4" style={{ lineHeight: '1.7' }}>
              <li>Financial Transparency</li>
              <li>Trading Instruments</li>
              <li>Trading Strategies</li>
              <li>Managing Risk</li>
            </ul>

            <p>
              <a
                href="mailto:support@nestpip.com"
                style={{ color: '#f24521', textDecoration: 'none', fontWeight: '600' }}
              >
                Need help? Contact us
              </a>
            </p>

            <h5 style={{ color: '#f24521', fontWeight: '600', marginTop: '2rem', marginBottom: '1rem' }}>
              CONNECT
            </h5>
            <div className="d-flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                style={{
                  color: '#f24521',
                  fontSize: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1.5px solid #f24521',
                  textDecoration: 'none',
                }}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                style={{
                  color: '#f24521',
                  fontSize: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1.5px solid #f24521',
                  textDecoration: 'none',
                }}
              >
                <i className="fab fa-youtube"></i>
              </a>
              <img
                src="/assets/partofstonex-dark-no-padding.png"
                alt="Part of StoneX"
                style={{ height: '32px', objectFit: 'contain', marginLeft: '12px' }}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-4">
            <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: '1.5' }}>
              Please note that foreign exchange and other leveraged trading involves significant risk of loss. It is
              not suitable for all investors and you should make sure you understand the risks involved, seeking
              independent advice if necessary.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: '1.5' }}>
              The products and services available to you at FOREX.com will depend on your location and on which of its
              regulated entities holds your account.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: '1.5' }}>
              NESTPIP.com is a trading name of GAIN Global Markets Inc. which is authorized and regulated by the Cayman
              Islands Monetary Authority under the Securities Investment Business Law of the Cayman Islands (License
              number 25033).
            </p>
            <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: '1.5' }}>
              GAIN Global Markets Inc. has its principal place of business at 30 Independence Blvd, Suite 300 (3rd floor),
              Warren, NJ 07059, USA, and is a wholly-owned subsidiary of StoneX Group Inc.
            </p>
          </div>
        </div>

        {/* Bottom Row for Legal */}
        <div className="row mt-5 pt-3 border-top" style={{ borderColor: '#FF7A00' }}>
          <div className="col text-center" style={{ fontSize: '0.8rem', color: '#999' }}>
            © NESTPIP.COM 2025 &nbsp; | &nbsp; TERMS AND POLICIES &nbsp; | &nbsp; SITEMAP &nbsp; | &nbsp; STONEX
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
