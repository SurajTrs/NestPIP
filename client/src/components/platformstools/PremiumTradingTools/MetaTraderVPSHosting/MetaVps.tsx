import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaChartLine, FaClock, FaCogs, FaEdit, FaServer, FaCheckCircle, FaGlobe } from 'react-icons/fa';

const BenefitsSection = () => {
  return (
    <section style={{ backgroundColor: '#ffffff', color: '#ffffff', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ color: '#f24521' }}>Benefits of Expert Advisors</h2>

        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <Card style={{ backgroundColor: '#ffffff', border: '1px solid #f24521' }}>
              <Card.Body>
                <FaChartLine size={32} color="#f24521" className="mb-3" />
                <Card.Title style={{ color: '#f24521' }}>Analyze the market tick-by-tick</Card.Title>
                <Card.Text>Track the market in real time and identify trading opportunities automatically.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card style={{ backgroundColor: '#ffffff', border: '1px solid #f24521' }}>
              <Card.Body>
                <FaClock size={32} color="#f24521" className="mb-3" />
                <Card.Title style={{ color: '#f24521' }}>Forex never sleeps</Card.Title>
                <Card.Text>Trigger trades and orders automatically, based on your pre-set parameters.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card style={{ backgroundColor: '#ffffff', border: '1px solid #f24521' }}>
              <Card.Body>
                <FaCogs size={32} color="#f24521" className="mb-3" />
                <Card.Title style={{ color: '#f24521' }}>Money management limits</Card.Title>
                <Card.Text>Customize your trade sizes, stop loss, and risk preferences.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card style={{ backgroundColor: '#ffffff', border: '1px solid #f24521' }}>
              <Card.Body>
                <FaEdit size={32} color="#f24521" className="mb-3" />
                <Card.Title style={{ color: '#f24521' }}>Custom indicators</Card.Title>
                <Card.Text>Create your own indicators or enhance existing ones for better decision-making.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center my-5">
          <h3 style={{ color: '#f24521' }}>Try MT5 Risk-Free</h3>
        </div>

        <h2 className="text-center mb-4" style={{ color: '#f24521' }}>Who Qualifies for MetaTrader VPS Hosting?</h2>

        <Row className="justify-content-center">
          <Col md={10}>
            <Card style={{ backgroundColor: '#f24521', color: '#fff3e9', border: '1px solid #f24521' }}>
              <Card.Body>
                <Card.Text>
                  To qualify for free EA VPS hosting, you must maintain a minimum of <strong>$5,000</strong> in your account and complete at least <strong>10 round trip mini lots</strong> per calendar month.
                  <br /><br />
                  Your eligibility is re-evaluated monthly. Accounts that do not meet the requirements will lose access to Expert Advisor Hosting.
                  <br /><br />
                  VPS Hosting is provided by <strong>Liquidity Connect</strong>.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h3 className="mt-5 mb-4 text-center" style={{ color: '#f24521' }}>MT4 Expert Advisor VPS Hosting Request</h3>
        <Row className="justify-content-center">
          <Col md={6}>
            <form>
              <input
                type="email"
                placeholder="Email Address"
                className="form-control mb-3"
                required
                style={{ backgroundColor: '#ffffff', border: '1px solid #f24521', color: '#fff' }}
              />
              <input
                type="text"
                placeholder="Username"
                className="form-control mb-3"
                required
                style={{ backgroundColor: '#ffffff', border: '1px solid #f24521', color: '#fff' }}
              />
              <Button variant="danger" style={{ backgroundColor: '#f24521', border: 'none', width: '100%' }}>
                Submit Request
              </Button>
            </form>
          </Col>
        </Row>

        <h2 className="text-center my-5" style={{ color: '#f24521' }}>Benefits of MetaTrader VPS Hosting</h2>

        <Row>
          <Col md={6} lg={3} className="mb-4">
            <Card style={{ backgroundColor: '#111', color: '#fff3e9', border: '1px solid #f24521' }}>
              <Card.Body className="text-center">
                <FaServer size={32} color="#f24521" className="mb-3" />
                <Card.Title style={{ color: '#f24521' }}>Dedicated server</Card.Title>
                <Card.Text>Run EAs with minimal interruption and maximum uptime.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3} className="mb-4">
            <Card style={{ backgroundColor: '#111', color: '#fff3e9', border: '1px solid #f24521' }}>
              <Card.Body className="text-center">
                <FaCogs size={32} color="#f24521" className="mb-3" />
                <Card.Title style={{ color: '#f24521' }}>Pre-installed software</Card.Title>
                <Card.Text>MetaTrader comes pre-installed for your convenience.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3} className="mb-4">
            <Card style={{ backgroundColor: '#111', color: '#fff3e9', border: '1px solid #f24521' }}>
              <Card.Body className="text-center">
                <FaCheckCircle size={32} color="#f24521" className="mb-3" />
                <Card.Title style={{ color: '#f24521' }}>Easy to manage</Card.Title>
                <Card.Text>Upload, edit, and manage EAs securely and quickly.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3} className="mb-4">
            <Card style={{ backgroundColor: '#111', color: '#fff3e9', border: '1px solid #f24521' }}>
              <Card.Body className="text-center">
                <FaGlobe size={32} color="#f24521" className="mb-3" />
                <Card.Title style={{ color: '#f24521' }}>Access from anywhere</Card.Title>
                <Card.Text>Use your VPS from any OS or browser globally.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-5">
          <Button style={{ backgroundColor: '#f24521', border: 'none', marginRight: '1rem' }}>
            Open an MT5 Account
          </Button>
          <Button variant="outline-light">Log In</Button>
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;
