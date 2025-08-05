import React from 'react';

const AccountRawSpread: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '4rem 0' }}>
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Left Side Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/images/raw-spread-account.png"
              alt="Raw Spread Account"
              className="img-fluid rounded-4 shadow-sm"
              style={{ maxHeight: '500px' }}
            />
          </div>

          {/* Right Side Content */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              What is an Account with a Raw Spread?
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#000' }}>
              You have found the best forex raw spread account if that is what you are looking for.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#000' }}>
              A raw spread account is a type of trading account that lets traders see the real prices on the interbank market. This means that spreads start at 0.0 pips, and the broker does not add any extra fees. Instead, traders pay a set fee for each trade.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#000' }}>
              This type of account is great for professional traders who need to be accurate and keep their costs low. You can trade with confidence and compete with the best liquidity providers at <strong>Nestpip</strong> because we give you direct access to them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountRawSpread;
