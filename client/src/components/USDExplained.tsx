import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EURUSDExplained = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7E6' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left: Text Section */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4" style={{ color: '#FF7A00' }}>
              Forex Explained
            </h2>

            <ul className="list-group list-group-flush mb-4">
              {[
                'What is Forex?',
                'How to trade Forex',
                'Why trade Forex?',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="list-group-item border-0 ps-0"
                  style={{ backgroundColor: '#FFF7E6' }}
                >
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <span className="text-dark fw-medium">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted mb-3">
              If you have more questions, visit the{' '}
              <a href="#" className="text-decoration-none text-success fw-semibold">
                Forex Trading FAQ
              </a>{' '}
              section or start a{' '}
              <a href="#" className="text-decoration-none text-success fw-semibold">
                Chat with our support team
              </a>.
            </p>

            <p className="text-muted mb-4">
              Looking to learn more about forex trading? Visit our{' '}
              <a href="#" className="text-decoration-none text-success fw-semibold">
                Trading Academy
              </a>{' '}
              and use our resources to become market-ready.
            </p>

            <a
              href="#"
              className="btn btn-success px-4 py-2 fw-semibold"
              style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}
            >
              JOIN OUR COURSE
            </a>
          </div>

          {/* Right: Image */}
          <div className="col-md-6 text-center">
            <img
              src="https://via.placeholder.com/500x300.png?text=Forex+Webtrader+Platform"
              alt="Forex Webtrader Platform"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EURUSDExplained;
