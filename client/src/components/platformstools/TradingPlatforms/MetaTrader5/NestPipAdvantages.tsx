import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NestPipAdvantages: React.FC = () => {
  const advantages = [
    { label: 'Regulation', value: '✅ Trusted framework' },
    { label: 'Execution Speed', value: '✅ Millisecond latency' },
    { label: 'Commission-Free Trading', value: '✅ Yes' },
    { label: 'MetaTrader Account Leverage', value: '✅ Up to 1:500' },
    { label: '24/5 Support', value: '✅ Multilingual team' },
    { label: 'MT4/MT5 Access', value: '✅ Both platforms supported' },
    { label: 'Expert Advisor Friendly', value: '✅ Fully supported' },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <Container>
        <Row className="align-items-center g-5 flex-lg-row-reverse">
          {/* RIGHT – TEXT */}
          <Col lg={6}>
            <h2 className="fw-bold mb-4" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              NestPip Advantages
            </h2>
            <ul style={{ fontSize: '1rem', color: '#333', paddingLeft: '1rem' }}>
              {advantages.map(({ label, value }, idx) => (
                <li key={idx} className="mb-3">
                  <strong>{label}:</strong> <span>{value}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '1rem', color: '#333', marginTop: '2rem' }}>
              Our clients around the world consistently rate us as the best broker for MetaTrader 4 and MT5 because we offer everything they need in one place: flexibility, tools, and trust.
            </p>
          </Col>

          {/* LEFT – IMAGE */}
          <Col lg={6} className="text-center">
            <img
              src="/images/nestpip-advantages.png" // Replace with your actual image path
              alt="NestPip Advantages"
              className="img-fluid rounded shadow"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NestPipAdvantages;
