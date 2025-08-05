import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Smartphone, BarChart2, SlidersHorizontal } from 'lucide-react';

const MobileTools = () => {
  const tools = [
    {
      icon: <Smartphone color="#f24521" size={32} />,
      title: 'Clear interface',
      description:
        'Find a market to trade with ease and build custom watchlists to monitor your favorite markets.',
    },
    {
      icon: <BarChart2 color="#f24521" size={32} />,
      title: 'Performance Analytics',
      description:
        'Improve your decision-making with the analysis tool that reviews your specific trading habits and behaviors.',
    },
    {
      icon: <SlidersHorizontal color="#f24521" size={32} />,
      title: 'Choose your theme',
      description:
        'Switch between light and dark visual design.',
    },
  ];

  return (
    <section style={{ backgroundColor: '#fff3e6', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ color: '#f24521' }}>
          Mobile Tools
        </h2>
        <Row className="g-4">
          {tools.map((tool, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 border-0 shadow-sm p-4 text-center">
                <div className="mb-3">{tool.icon}</div>
                <h5 className="text-dark">{tool.title}</h5>
                <p className="text-secondary">{tool.description}</p>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Button variant="danger" style={{ backgroundColor: '#f24521', border: 'none' }}>
            Discover more trading tools
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default MobileTools;
