import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BellFill, Headset, Newspaper } from 'react-bootstrap-icons';

const supportItems = [
  {
    icon: <BellFill size={30} color="#f24521" />,
    title: 'FX Trade Signals',
    desc: 'Amp up your trading with real-time trade signals and analysis tools.',
  },
  {
    icon: <Headset size={30} color="#f24521" />,
    title: 'Relationship Manager',
    desc: 'Trained relationship managers are well-equipped to educate and bolster your trading acumen.',
  },
  {
    icon: <Newspaper size={30} color="#f24521" />,
    title: 'Market Analysis',
    desc: 'Stay informed with real-time market insights from our research team.',
  },
];

const SupportGuidance = () => {
  return (
    <section style={{ backgroundColor: '#fff4e5', padding: '4rem 0' }}>
      <Container>
        <h2 className="mb-4" style={{ color: '#f24521', fontWeight: '700' }}>
          Trade with support & guidance
        </h2>
        <Row>
          {supportItems.map((item, index) => (
            <Col key={index} md={12} className="mb-4">
              <Card
                className="border-0 shadow-sm p-3"
                style={{
                  backgroundColor: 'white',
                  borderLeft: `5px solid #f24521`,
                  borderRadius: '10px',
                }}
              >
                <div className="d-flex align-items-start">
                  <div className="me-3">{item.icon}</div>
                  <div>
                    <h5 style={{ color: '#f24521', fontWeight: '600' }}>{item.title}</h5>
                    <p className="text-muted mb-0">{item.desc}</p>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SupportGuidance;
