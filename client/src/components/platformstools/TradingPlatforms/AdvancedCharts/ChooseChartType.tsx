import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ChooseChartType = () => {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#fff' }}>
      <Container>
        <Row className="align-items-center flex-md-row-reverse">
          <Col md={6}>
            <h4 style={{ color: '#f24521' }}>Choose Your Chart Type</h4>
            <p>
              Plan your next trade with customizable charting and over 50 drawing tools, complete with handy undo and redo buttons.
            </p>

            <h4 style={{ color: '#f24521' }} className="mt-4">Customization Features</h4>
            <p>
              Tailor everything to your liking, from the indicators and visibility options, and save it as a template.
            </p>
          </Col>

          <Col md={6} className="text-center">
            <img
              src="/images/chart-tools.png"
              alt="Chart Tools"
              className="img-fluid"
              style={{ maxHeight: '350px' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseChartType;
