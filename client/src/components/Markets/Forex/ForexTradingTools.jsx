import React from 'react';

const ForexTradingTools = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">

        <div
          className="alert alert-warning text-center fw-semibold mb-5"
          style={{
            backgroundColor: '#FFEBD9',
            border: '1px solid #FF7A00',
            color: '#333',
          }}
        >
          Indicative Pricing updated <strong>21:24:43</strong> &nbsp;|&nbsp;
          <strong>USD/RUB</strong> and <strong>EUR/RUB</strong> are currently unavailable for trading.
          &nbsp;<a href="#" style={{ color: '#FF7A00', textDecoration: 'underline' }}>See Ruble update</a>.<br />
          <small>
            Spreads will vary based on market conditions, including volatility, available liquidity, and other factors.
            Typical spreads may not be available for Managed Accounts and accounts referred by an Introducing Broker.
          </small>
        </div>

        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#FF7A00' }}>Forex Trading Tools</h2>
          <p className="text-muted fs-5">
            We offer sophisticated trading tools, competitive spreads and exceptional execution quality on over 80 currency pairs.
          </p>
        </div>


        <div className="row justify-content-center g-4">

          <div className="col-md-6">
            <div className="p-4 bg-white rounded-4 shadow-sm h-100 text-center">
              <div
                className="d-flex justify-content-center align-items-center mb-3"
                style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#FFEBD9',
                  borderRadius: '50%',
                  margin: '0 auto',
                }}
              >
                <img src="/icons/converter-icon.svg" alt="Currency Converter" height={30} />
              </div>
              <h5 className="fw-semibold mb-2">Currency Converter</h5>
              <p className="text-muted">
                Calculate the foreign exchange rates of FX currency pairs using our free currency converter.
              </p>
              <a
                href="#"
                className="btn"
                style={{
                  backgroundColor: '#FF7A00',
                  color: '#fff',
                  borderRadius: '10px',
                  padding: '0.5rem 1.5rem',
                  fontWeight: 500,
                }}
              >
                Try currency converter
              </a>
            </div>
          </div>

         
          <div className="col-md-6">
            <div className="p-4 bg-white rounded-4 shadow-sm h-100 text-center">
              <div
                className="d-flex justify-content-center align-items-center mb-3"
                style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#FFEBD9',
                  borderRadius: '50%',
                  margin: '0 auto',
                }}
              >
                <img src="/icons/calculator-icon.svg" alt="Margin Calculator" height={30} />
              </div>
              <h5 className="fw-semibold mb-2">Margin & Pip Calculator</h5>
              <p className="text-muted">
                Use our free pip value calculator to estimate your potential profits or losses before you start trading a currency pair.
              </p>
              <a
                href="#"
                className="btn"
                style={{
                  backgroundColor: '#FF7A00',
                  color: '#fff',
                  borderRadius: '10px',
                  padding: '0.5rem 1.5rem',
                  fontWeight: 500,
                }}
              >
                Use margin pip calculator
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForexTradingTools;
