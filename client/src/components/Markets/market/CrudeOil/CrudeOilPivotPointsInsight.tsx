import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PivotPointsInsight = () => {
  return (
    <section style={{ backgroundColor: '#fff5ec', padding: '60px 0' }}>
      <Container>
        <h2
          className="fw-bold mb-4 text-center"
          style={{
            color: '#f24521',
            borderBottom: '3px solid #f24521',
            display: 'inline-block',
            paddingBottom: '5px',
          }}
        >
          US Crude Oil Insights
        </h2>

        <p className="text-center mb-5" style={{ color: '#333' }}>
          Pivot points are used to predict technical areas like support and resistance by averaging high, low, and close prices over a previous time period.
        </p>

        <Row className="mb-4 text-center">
          <Col><button className="btn btn-outline-dark">Dailys</button></Col>
          <Col><button className="btn btn-outline-dark">Weekly</button></Col>
          <Col><button className="btn btn-outline-dark">Monthly</button></Col>
        </Row>

        <Card style={{ backgroundColor: '#fff' }} className="shadow-sm border-0">
          <Card.Body>
            <Row>
              <Col md={4}>
                <h5 className="text-uppercase text-muted">Pivot Point</h5>
                <p className="fw-bold" style={{ color: '#f24521' }}>6689.6</p>
              </Col>
              <Col md={4}>
                <h5 className="text-uppercase text-muted">High</h5>
                <p className="fw-bold">6801.9</p>
              </Col>
              <Col md={4}>
                <h5 className="text-uppercase text-muted">Low</h5>
                <p className="fw-bold">6628.1</p>
              </Col>
            </Row>

            <hr />

            <Row>
              <Col md={4}>
                <h5 className="text-uppercase text-muted">Close</h5>
                <p className="fw-bold">6638.9</p>
              </Col>
              <Col md={4}>
                <h5 className="text-uppercase text-muted">Bid</h5>
                <p className="fw-bold">6690.2</p>
              </Col>
              <Col md={4}>
                <h5 className="text-uppercase text-muted">Offer</h5>
                <p className="fw-bold">6692.7</p>
              </Col>
            </Row>

            <hr />

            <Row>
              <Col md={4}>
                <h5 className="text-uppercase text-muted">Distance</h5>
                <p className="fw-bold text-danger">-0.6</p>
              </Col>
              <Col md={4}>
                <h5 className="text-uppercase text-muted">Last Updated</h5>
                <p className="fw-bold">7/18/2025 11:59:59 PM</p>
              </Col>
            </Row>

            <hr />

            <Row className="mt-4">
              <Col md={6}>
                <h5 className="text-uppercase" style={{ color: '#f24521' }}>Support Levels</h5>
                <ul className="list-unstyled">
                  <li><strong>S1:</strong> 6577.3</li>
                  <li><strong>S2:</strong> 6515.7</li>
                  <li><strong>S3:</strong> 6403.4</li>
                </ul>
              </Col>
              <Col md={6}>
                <h5 className="text-uppercase" style={{ color: '#f24521' }}>Resistance Levels</h5>
                <ul className="list-unstyled">
                  <li><strong>R1:</strong> 6751.2</li>
                  <li><strong>R2:</strong> 6863.5</li>
                  <li><strong>R3:</strong> 13727.0</li>
                </ul>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default PivotPointsInsight;
