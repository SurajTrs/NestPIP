import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const IdentifyTrends = () => {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#fff' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h4 style={{ color: '#f24521' }}>Identify Trends</h4>
            <p>
              Identify trading patterns using chart time intervals ranging from one-minute through to daily or monthly time frames.
              Quickly zero in on an area of interest using the <strong>“zoom region”</strong> feature.
            </p>

            <h4 style={{ color: '#f24521' }} className="mt-4">Multiple Chart Types</h4>
            <p>
              Choose from a variety of chart styles, customize what information you see, and the look of the trend lines.
            </p>
          </Col>

          <Col md={6} className="text-center">
            <img
              src="/images/chart-analysis.png"
              alt="Chart Analysis"
              className="img-fluid"
              style={{ maxHeight: '350px' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IdentifyTrends;
