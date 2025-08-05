import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDollarSign, FaPoundSign, FaClock } from 'react-icons/fa';

const ForexExplained = () => {
  return (
    <section style={{ backgroundColor: '#f24521', color: 'white', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="fw-bold mb-4">Forex explained</h2>

            <div className="d-flex align-items-center mb-3">
              <div
                className="me-3 p-2 rounded-circle"
                style={{
                  backgroundColor: 'white',
                  color: '#f24521',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FaDollarSign />
                <FaPoundSign style={{ marginLeft: '2px' }} />
              </div>
              <div>
                <strong>A quick snapshot of FX</strong>
                <p className="mb-0 small">
                  Forex trading is the act of speculating on the movement of exchange prices by buying one currency while simultaneously selling another.
                </p>
              </div>
            </div>

            <div className="mb-3">
              <strong>Markets — There’s no larger market</strong>
              <p className="mb-0 small">
                With an average turnover in excess of $7.5 trillion a day*, currency prices are constantly fluctuating – creating endless trading opportunities in the world’s most traded market.
                <br />
                <small>*According to BIS</small>
              </p>
            </div>

            <div className="d-flex align-items-center mb-4">
              <div
                className="me-3 p-2 rounded-circle"
                style={{
                  backgroundColor: 'white',
                  color: '#00365A',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FaClock />
              </div>
              <div>
                <strong>Forex never sleeps</strong>
                <p className="mb-0 small">
                  As a globally traded market, the foreign exchange market is open 24 hours a day, five days a week (Sunday 5PM to Friday 5PM).
                </p>
              </div>
            </div>

            <Button
              href="#open-account"
              style={{
                backgroundColor: '#006400',
                border: 'none',
                padding: '0.75rem 2rem',
                borderRadius: '12px',
                fontWeight: 600,
              }}
            >
              Open an Account
            </Button>
          </Col>

          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/assets/forex-explained-banner.png"
              alt="Forex Market Visual"
              className="img-fluid rounded-4 shadow"
              style={{ maxWidth: '90%' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ForexExplained;
