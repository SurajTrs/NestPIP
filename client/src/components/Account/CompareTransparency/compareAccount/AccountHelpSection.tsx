import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaCoins, FaChartLine, FaChartPie, FaNewspaper } from 'react-icons/fa';

const AccountHelpSection = () => {
  return (
    <section style={{ backgroundColor: '#fff5f0', padding: '4rem 0' }}>
      <Container>
        {/* Quiz Call-to-Action */}
        <div className="text-center mb-5">
          <h3 className="fw-bold mb-3" style={{ color: '#f24521' }}>
            Still not sure which account is best for you?
          </h3>
          <Button
            variant="danger"
            style={{
              backgroundColor: '#f24521',
              border: 'none',
              padding: '0.75rem 2rem',
              fontWeight: '600',
            }}
          >
            Take Our Quiz
          </Button>
        </div>

        {/* Interest Cards */}
        <Row className="g-4">
          <Col md={6} lg={3}>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <FaCoins size={40} color="#f24521" className="mb-3" />
                <Card.Title className="fw-semibold">Pricing and Charges</Card.Title>
                <Card.Text style={{ fontSize: '0.95rem' }}>
                  Rest assured that we are always clear and transparent about our trading costs.
                </Card.Text>
                <Button variant="link" style={{ color: '#f24521' }}>
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <FaChartLine size={40} color="#f24521" className="mb-3" />
                <Card.Title className="fw-semibold">Markets to Trade</Card.Title>
                <Card.Text style={{ fontSize: '0.95rem' }}>
                  Trade 80+ FX pairs, stock CFDs, indices, commodities, and more.
                </Card.Text>
                <Button variant="link" style={{ color: '#f24521' }}>
                  Explore Markets
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <FaChartPie size={40} color="#f24521" className="mb-3" />
                <Card.Title className="fw-semibold">Performance Analytics</Card.Title>
                <Card.Text style={{ fontSize: '0.95rem' }}>
                  Unearth insights about your trading performance with behavioral science.
                </Card.Text>
                <Button variant="link" style={{ color: '#f24521' }}>
                  View Analytics
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <FaNewspaper size={40} color="#f24521" className="mb-3" />
                <Card.Title className="fw-semibold">Market News</Card.Title>
                <Card.Text style={{ fontSize: '0.95rem' }}>
                  Educate your trading decisions with our analysis of the latest news.
                </Card.Text>
                <Button variant="link" style={{ color: '#f24521' }}>
                  Read News
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AccountHelpSection;
