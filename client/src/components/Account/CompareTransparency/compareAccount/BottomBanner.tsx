import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const BottomBanner = () => {
  return (
    <section style={{ backgroundColor: '#f24521', color: 'white', padding: '5rem 0' }}>
      <Container>
        <Row className="align-items-center text-center">
          <Col>
            <h1 className="display-5 fw-bold mb-4">It is your world. Trade it.</h1>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Button
                variant="light"
                className="px-4 py-2 fw-semibold"
                style={{ color: '#f24521', borderRadius: '30px' }}
              >
                Log In
              </Button>
              <Button
                variant="outline-light"
                className="px-4 py-2 fw-semibold"
                style={{ borderRadius: '30px' }}
              >
                Open an Account
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BottomBanner;
