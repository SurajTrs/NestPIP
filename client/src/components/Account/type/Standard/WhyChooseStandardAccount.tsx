'use client';

import React from 'react';

const WhyChooseStandardAccount: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '4rem 0' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* RIGHT SIDE - TEXT */}
          <div className="col-md-6 order-md-2 order-1" style={{ color: '#333' }}>
            <h2 style={{ color: '#f24521', fontWeight: '700', marginBottom: '1.5rem' }}>
              Why Should You Choose Nestpip&apos;s Standard Trading Account?
            </h2>

            <h5 style={{ color: '#f24521', fontWeight: '600', marginTop: '1rem' }}>
              No Commissions on Trades
            </h5>
            <p>You don&apos;t have to pay commissions on your trades with Nestpip&apos;s Standard Account. That means:</p>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6', color: '#333' }}>
              <li>No surprises</li>
              <li>No extra costs</li>
              <li>Just trading that is clean and direct</li>
            </ul>

            <h5 style={{ color: '#f24521', fontWeight: '600', marginTop: '1.5rem' }}>
              Spreads That Are Competitive
            </h5>
            <p>We have very competitive spreads on all of the major instruments.</p>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6', color: '#333' }}>
              <li>The difference between EUR and USD is only 1.0 pips</li>
              <li>Access to major, minor, and rare pairs</li>
              <li>Prices that stay the same and backed by strong liquidity</li>
            </ul>

            <h5 style={{ color: '#f24521', fontWeight: '600', marginTop: '1.5rem' }}>
              MetaTrader 4 (MT4)
            </h5>
            <p>
              The most trusted platform for forex trading around the world. Our Standard Account works perfectly with MT4, so you can:
            </p>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6', color: '#333' }}>
              <li>Trade with confidence and accuracy</li>
              <li>Use Expert Advisors, indicators, and other powerful tools</li>
              <li>Access it easily from Web, Mobile, or Desktop devices</li>
            </ul>

            <h5 style={{ color: '#f24521', fontWeight: '600', marginTop: '1.5rem' }}>
              Different Ways to Use Leverage
            </h5>
            <p>
              We offer some of the best leverage options in forex trading:
            </p>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6', color: '#333' }}>
              <li>Easily adjust your position sizes</li>
              <li>Pick leverage levels that match your risk tolerance</li>
              <li>Trade more with less capital</li>
            </ul>
          </div>

          {/* LEFT SIDE - IMAGE */}
          <div className="col-md-6 order-md-1 order-2 text-center">
            <img
              src="/images/standard-account-illustration.png" // Replace with your actual image path
              alt="Standard Trading Account"
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseStandardAccount;
