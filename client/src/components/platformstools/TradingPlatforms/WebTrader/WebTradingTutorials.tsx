import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPlay, FaEye } from 'react-icons/fa';

const tutorials = [
  {
    title: 'Web Trader - Introduction to web trading',
    duration: '02:40',
    views: 42,
  },
  {
    title: 'Web Trader - Web trading overview',
    duration: '01:05',
    views: 3,
  },
  {
    title: 'Web Trader - Introducing technical analysis',
    duration: '01:24',
    views: 84,
  },
];

const WebTradingTutorials = () => {
  return (
    <section style={{ backgroundColor: '#fff4e5', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center fw-bold mb-4" style={{ color: '#f24521' }}>
          Web Trading Platform tutorials
        </h2>
        <p className="text-center text-muted mb-5">
          Find out how our Web Trading Platform works with these short and informative video guides.
        </p>
        <Row className="g-4">
          {tutorials.map((video, index) => (
            <Col md={12} key={index}>
              <Card className="flex-row align-items-center shadow-sm border-0 p-3">
                <div
                  style={{
                    backgroundColor: '#f24521',
                    color: 'white',
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    marginRight: '1rem',
                  }}
                >
                  <FaPlay />
                </div>
                <div>
                  <h5 className="mb-1 fw-semibold" style={{ color: '#f24521' }}>
                    {video.title}
                  </h5>
                  <small className="text-muted d-block mb-1">
                    ⏱ {video.duration}
                  </small>
                  <small className="text-muted">
                    <FaEye className="me-1" /> {video.views} views
                  </small>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WebTradingTutorials;
