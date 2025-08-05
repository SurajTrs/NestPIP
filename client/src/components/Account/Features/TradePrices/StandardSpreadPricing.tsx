import React from 'react';
import { Container, Table, Row, Col, Button } from 'react-bootstrap';

const StandardSpreadPricing = () => {
  const spreads = [
    { pair: 'AUD/CAD', typical: '2.4', low: '1.8' },
    { pair: 'AUD/CHF', typical: '2.2', low: '1.8' },
    { pair: 'AUD/CNH', typical: '16.3', low: '1.5' },
    { pair: 'AUD/JPY', typical: '2.1', low: '1.5' },
    { pair: 'AUD/NOK', typical: '38.7', low: '2' },
    { pair: 'AUD/NZD', typical: '5.2', low: '4.4' },
    { pair: 'AUD/PLN', typical: '20.2', low: '2.5' },
    { pair: 'AUD/SGD', typical: '8.3', low: '0.8' },
    { pair: 'AUD/USD', typical: '1.4', low: '1.1' },
    { pair: 'CAD/CHF', typical: '2.5', low: '2' },
    { pair: 'CAD/JPY', typical: '3.7', low: '3' },
    { pair: 'CAD/NOK', typical: '36.7', low: '2' },
  ];

  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '4rem 0' }}>
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold text-center" style={{ color: '#f24521' }}>
              Standard Spread Pricing — No Commissions
            </h2>
            <p className="text-center text-secondary small">
              Last Updated: Monday, June 30, 2025 | EST
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10}>
            <Table responsive bordered hover className="text-center shadow-sm" style={{ backgroundColor: '#ffffff', borderRadius: '12px' }}>
              <thead style={{ backgroundColor: '#006400', color: '#ffffff' }}>
                <tr>
                  <th>Currency Pair</th>
                  <th>Typical Spread</th>
                  <th>As Low As</th>
                </tr>
              </thead>
              <tbody>
                {spreads.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.pair}</td>
                    <td>{item.typical}</td>
                    <td>{item.low}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div className="text-muted small mt-4">
              Spreads can fluctuate based on volatility, liquidity, and market conditions. 
              <br />
              “Typical” reflects the median spread, and “As Low As” reflects the minimum during the most recent full calendar month. 
              <br />
              Trading not available on USD/RUB and EUR/RUB pairs. See <a href="#" style={{ color: '#f24521' }}>Ruble update</a>.
            </div>
          </Col>
        </Row>

        <div className="text-center mt-5">
          <Button
            href="#open-standard"
            style={{
              backgroundColor: '#f24521',
              border: 'none',
              padding: '0.75rem 2rem',
              borderRadius: '12px',
              fontWeight: 600,
            }}
          >
            Open a Standard Account
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default StandardSpreadPricing;
