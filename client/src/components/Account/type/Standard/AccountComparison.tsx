'use client';

import React from 'react';

const AccountComparison: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0', color: '#014421' }}>
      <div className="container">
        {/* Heading */}
        <h2 className="fw-bold text-center mb-4" style={{ fontSize: '1.8rem' }}>
          <span style={{ color: '#f24521' }}>ACCOUNT COMPARISON</span><br />
          Compare Trading Accounts
        </h2>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr style={{ backgroundColor: '#FFEDDC' }}>
                <th className="text-start">Feature</th>
                <th style={{ color: '#f24521' }}>Standard Account</th>
                <th style={{ color: '#f24521' }}>Pro Account</th>
                <th style={{ color: '#f24521' }}>ECN Account</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-start fw-semibold">Min Deposit</td>
                <td>$100</td>
                <td>$1,000</td>
                <td>$5,000</td>
              </tr>
              <tr>
                <td className="text-start fw-semibold">Spread</td>
                <td>From 0.8 pips</td>
                <td>From 0.4 pips</td>
                <td>From 0.0 pips</td>
              </tr>
              <tr>
                <td className="text-start fw-semibold">Commission</td>
                <td>$0</td>
                <td>$3 per lot</td>
                <td>$6 per lot</td>
              </tr>
              <tr>
                <td className="text-start fw-semibold">Execution</td>
                <td>Market</td>
                <td>Market</td>
                <td>ECN</td>
              </tr>
              <tr>
                <td className="text-start fw-semibold">Leverage</td>
                <td>Up to 1:500</td>
                <td>Up to 1:300</td>
                <td>Up to 1:200</td>
              </tr>
              <tr>
                <td className="text-start fw-semibold">Trading Platforms</td>
                <td>MT4, MT5, Web</td>
                <td>MT4, MT5</td>
                <td>MT5, ECN Web</td>
              </tr>
              <tr>
                <td className="text-start fw-semibold">Best For</td>
                <td>Beginners &amp; Intermediates</td>
                <td>Active Traders</td>
                <td>Algo &amp; Institutional Traders</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Description */}
        <div className="mt-4 text-center px-md-5">
          <p className="lead mb-0" style={{ fontSize: '1rem', color: '#014421' }}>
            The <strong>standard forex trading account</strong> is best suited for those who want simplicity, affordability, and flexibility — all in one reliable account.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AccountComparison;
