import React from 'react';

const OverviewGetStarted: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: '#FFF7F0',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
      className="py-5"
    >
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2
            style={{
              color: '#f24521',
              fontSize: '2.8rem',
              fontWeight: '700',
              letterSpacing: '0.05em',
            }}
          >
            Get Started with Nestpip
          </h2>
          <p
            className="lead mx-auto"
            style={{
              maxWidth: '700px',
              color: '#185234',
              fontSize: '1.25rem',
              lineHeight: 1.6,
            }}
          >
            It is time to make smart trades. Start your financial journey with Nestpip. It is quick,
            safe, and gives you access to markets all over the world.
          </p>
        </div>

        {/* Single Card Containing Three Steps */}
        <div
          className="card shadow-sm mb-5"
          style={{
            borderRadius: '16px',
            backgroundColor: '#f24521',
            maxWidth: '960px',
            margin: '0 auto',
            padding: '2rem',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            color: '#fff',
          }}
        >
          <div className="row text-center">
            {[
              { step: 'Sign Up', desc: 'Quick and free to sign up' },
              { step: 'Practice', desc: 'Use the demo account with no risk' },
              { step: 'Trade Live', desc: 'Put money in your account and start trading' },
            ].map(({ step, desc }, idx) => (
              <div key={idx} className="col-12 col-md-4 mb-4 mb-md-0">
                <div>
                  <div
                    className="display-5 fw-bold mb-3"
                    style={{ color: '#fff' }}
                  >
                    {idx + 1}
                  </div>
                  <h5 className="fw-semibold" style={{ color: '#fff' }}>{step}</h5>
                  <p className="mb-0" style={{ fontSize: '1rem', color: '#ffece6' }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a
            href="/open-account"
            className="btn btn-light btn-lg fw-bold px-4"
            style={{
              borderRadius: '30px',
              minWidth: '180px',
              color: '#fff',
              backgroundColor:'#137e27ff',
              boxShadow: '0 4px 12px rgba(8, 81, 21, 0.4)',
            }}
          >
            Start Trading Now
          </a>
          <a
            href="/demo-account"
            className="btn btn-outline-light btn-lg fw-bold px-4"
            style={{
              borderRadius: '30px',
              minWidth: '180px',
              borderWidth: '2px',
              color: '#f24521',
              borderColor: '#f24521',
            }}
          >
            Try a Free Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default OverviewGetStarted;
