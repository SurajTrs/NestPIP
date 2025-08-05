import React from 'react';

const reasons = [
  'Real interbank pricing with no markup',
  'The best commission structure in the business',
  'Lightning-fast execution',
  'Professional account managers available 24/5',
  'Traders who meet the requirements can get into funded programs',
  'The environment is safe and fully regulated',
];

const BestReasonRawSpread: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '3rem 1rem' }}>
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Left Text Content */}
          <div className="col-md-6 order-md-1 order-2">
            <h2 style={{ color: '#f24521' }} className="fw-bold mb-4">
              The Best Reason to Choose Nestpip&apos;s Raw Spread Account
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#000', marginBottom: '1.5rem' }}>
              There are a lot of brokers that offer raw spread accounts, but very few are as open, quick, and helpful as Nestpip.
            </p>

            <ul style={{ color: '#000', fontSize: '1.05rem', paddingLeft: '1.2rem' }}>
              {reasons.map((reason, idx) => (
                <li key={idx} style={{ marginBottom: '0.7rem' }}>
                  {reason}
                </li>
              ))}
            </ul>

            <p style={{ color: '#000', marginTop: '1.5rem', fontSize: '1.1rem' }}>
              Nestpip helps you grow every step of the way, whether you run your own business or work for a prop firm.
            </p>
          </div>

          {/* Right Image */}
          <div className="col-md-6 order-md-2 order-1 mb-4 mb-md-0">
            <img
              src="/images/raw-spread-account.png"
              alt="Raw Spread Account Benefits"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestReasonRawSpread;
