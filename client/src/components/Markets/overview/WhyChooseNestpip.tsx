import React from 'react';

const features = [
  {
    title: 'Extensive Platform',
    description: '500+ of the best trading platforms available at your fingertips.',
  },
  {
    title: 'One Account, All Markets',
    description: 'Access Forex, Crypto, Stocks, Indices, Commodities with a single account.',
  },
  {
    title: 'Multi-Platform Access',
    description: 'Trade seamlessly on MT4, mobile, and web platforms.',
  },
  {
    title: 'Competitive Pricing',
    description: 'Low spreads and quick execution for maximized trading efficiency.',
  },
  {
    title: 'Safe & Regulated',
    description: 'Robust infrastructure ensuring safety and regulation compliance.',
  },
  {
    title: '24/7 Customer Support',
    description: 'Always-on customer service to assist your trading journey.',
  },
  {
    title: 'Free Demo Account',
    description: 'Practice and perfect your skills with a risk-free demo account.',
  },
  {
    title: 'Easy Deposits & Withdrawals',
    description: 'Fast and simple account funding and withdrawals anytime.',
  },
];

const CheckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    style={{ marginRight: '12px', flexShrink: 0 }}
  >
    <circle cx="12" cy="12" r="12" fill="#06a93aff" />
    <path
      d="M17 8L10.5 14.5L7 11"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WhyChooseNestpipCards: React.FC = () => {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: '#FFF7F0', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
      aria-labelledby="why-choose-heading"
    >
      <div className="container">
        {/* Heading */}
        <h2
          id="why-choose-heading"
          className="fw-bold text-center mb-5"
          style={{ color: '#f24521', fontSize: '2.8rem', letterSpacing: '0.05em' }}
        >
          Why Choose Nestpip?
        </h2>

        {/* Cards Row */}
        <div className="row g-4">
          {features.map(({ title, description }, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div
                className="card h-100 shadow-sm"
                style={{
                  borderRadius: '14px',
                  border: 'none',
                  backgroundColor: '#fff',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(242, 69, 33, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                }}
              >
                <div className="card-body d-flex flex-column">
                  <h5
                    className="card-title d-flex align-items-center"
                    style={{ color: '#f24521', fontWeight: 700 }}
                  >
                    <CheckIcon />
                    {title}
                  </h5>
                  <p className="card-text mt-3 text-muted" style={{ flexGrow: 1, fontSize: '1rem', lineHeight: 1.5 }}>
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <p
          className="text-center mt-5 fw-semibold"
          style={{ color: '#2e6c1eff', fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}
        >
          Nestpip all-in-one trading solution makes your journey smart, simple, and rewarding,
          whether you are a forex fan or a crypto explorer.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseNestpipCards;
