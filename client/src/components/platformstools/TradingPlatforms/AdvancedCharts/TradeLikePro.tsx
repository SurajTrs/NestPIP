import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaChartBar, FaDollarSign, FaCogs } from 'react-icons/fa';

const TradeLikePro = () => {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#fff' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ color: '#f24521' }}>
          Trade the markets like a professional
        </h2>

        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <div className="mb-3 text-center">
                  <FaDollarSign size={40} color="#f24521" />
                </div>
                <Card.Title className="text-center" style={{ color: '#f24521' }}>
                  Spot and seize opportunity
                </Card.Title>
                <Card.Text className="text-center">
                  Easily place trades, view positions and orders on the charts. Use drag-and-drop order modification.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <div className="mb-3 text-center">
                  <FaChartBar size={40} color="#f24521" />
                </div>
                <Card.Title className="text-center" style={{ color: '#f24521' }}>
                  Analysis amplified
                </Card.Title>
                <Card.Text className="text-center">
                  Choose from over 80 indicators, advanced drawing tools, and 10 chart types.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <div className="mb-3 text-center">
                  <FaCogs size={40} color="#f24521" />
                </div>
                <Card.Title className="text-center" style={{ color: '#f24521' }}>
                  Smart personalization
                </Card.Title>
                <Card.Text className="text-center">
                  Create layouts that are responsive to device and browser size. Don’t waste time readjusting.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-5">
          <Button
            href="#"
            style={{ backgroundColor: '#f24521', border: 'none' }}
            size="lg"
          >
            VIEW OUR PLATFORM TUTORIALS
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default TradeLikePro;
