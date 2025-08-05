import React, { useState } from 'react';
import { Container, Row, Col, Table, Form } from 'react-bootstrap';

const markets = [
  { name: 'USD/CAD', buy: 1.36778, pipValue: 0.07, margin: 5.0 },
  { name: 'USD/JPY', buy: 147.2, pipValue: 0.07, margin: 5.0 },
  { name: 'EUR/USD', buy: 1.16893, pipValue: 0.10, margin: 5.84 },
  { name: 'GBP/USD', buy: 1.34837, pipValue: 0.10, margin: 6.74 },
  { name: 'AUD/USD', buy: 0.6519, pipValue: 0.10, margin: 3.26 },
  { name: 'CAD/JPY', buy: 107.543, pipValue: 0.07, margin: 3.65 },
];

const PipCalculator = () => {
  const [contractSize, setContractSize] = useState<number>(1000);
  const [baseCurrency, setBaseCurrency] = useState<string>('USD');
  const [leverage, setLeverage] = useState<number>(100);

  return (
    <section style={{ backgroundColor: '#fff', padding: '4rem 0' }}>
      <Container>
        <Row className="mb-4">
          <Col md={12} className="text-center">
            <h2 style={{ color: '#f24521', fontWeight: 'bold' }}>How much is a pip worth?</h2>
            <p className="text-muted">
              Use this tool to calculate how much you will make or lose per pip on your chosen trade,
              plus how much margin to deposit.
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={4} sm={12}>
            <Form.Group controlId="baseCurrency">
              <Form.Label><strong>Base Currency</strong></Form.Label>
              <Form.Select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
                {['USD', 'EUR', 'GBP', 'CAD', 'JPY'].map((cur) => (
                  <option key={cur} value={cur}>{cur}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={4} sm={12}>
            <Form.Group controlId="contractSize">
              <Form.Label><strong>Contract Size</strong></Form.Label>
              <Form.Control
                type="number"
                min={100}
                step={100}
                value={contractSize}
                onChange={(e) => setContractSize(Number(e.target.value))}
              />
            </Form.Group>
          </Col>

          <Col md={4} sm={12}>
            <Form.Group controlId="leverage">
              <Form.Label><strong>Leverage</strong></Form.Label>
              <Form.Select value={leverage} onChange={(e) => setLeverage(Number(e.target.value))}>
                {[10, 20, 50, 100, 200, 400].map((lev) => (
                  <option key={lev} value={lev}>{lev}:1</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <h5 className="mb-3">Most Popular Markets</h5>
            <div style={{ overflowX: 'auto' }}>
              <Table bordered responsive hover>
                <thead>
                  <tr style={{ backgroundColor: '#f24521', color: 'white' }}>
                    <th>Market</th>
                    <th>Buy</th>
                    <th>Pip Value</th>
                    <th>Required Margin</th>
                  </tr>
                </thead>
                <tbody>
                  {markets.map((market, idx) => (
                    <tr key={idx}>
                      <td>{market.name}</td>
                      <td>{market.buy}</td>
                      <td>{market.pipValue}</td>
                      <td>{market.margin}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <p className="text-muted mt-4" style={{ fontSize: '0.9rem' }}>
              Neither NESTPIP.com nor its affiliates will be held responsible for the reliability or accuracy of this data.
              The service is provided in good faith; however, there are no explicit or implicit warranties of accuracy.
              The user agrees not to hold FOREX.com or any of its affiliates, liable for trading decisions that are based
              on the pip & margin calculators from this website.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PipCalculator;
