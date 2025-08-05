// components/RegulatedBroker.tsx
import React from 'react';

const RegulatedBroker: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: '#f24521',
        padding: '3rem 1rem',
      }}
    >
      <div className="container text-center">
        <h5 className="fw-bold mb-3" style={{ color: '#FF7A00' }}>
          Regulated Broker
        </h5>
        <p className="mb-4" style={{ fontSize: '1.1rem', color: '#333' }}>
          FOREX.com is authorized and regulated by the Cayman Islands Monetary Authority under the Securities Investment Business Law of the Cayman Islands (as revised) with License number{' '}
          <strong>25033</strong>.
        </p>

        <h2 className="fw-bold mb-4" style={{ color: '#333' }}>
          It is your world. Trade it.
        </h2>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a
            href="#login"
            className="btn btn-outline-dark px-4 py-2"
            style={{
              borderRadius: '12px',
              fontWeight: 500,
            }}
          >
            LOG IN
          </a>
          <a
            href="#open-account"
            className="btn px-4 py-2"
            style={{
              backgroundColor: '#FF7A00',
              color: '#fff',
              borderRadius: '12px',
              fontWeight: 500,
            }}
          >
            OPEN AN ACCOUNT
          </a>
        </div>
      </div>
    </section>
  );
};

export default RegulatedBroker;
