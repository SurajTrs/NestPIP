import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {
  LayoutDashboard,
  TrendingUp,
  CalendarClock,
  LineChart,
  PenTool,
  Sliders,
} from 'lucide-react';

const WebAppTools = () => {
 

  const chartFeatures = [
    {
      icon: <LayoutDashboard color="#f24521" size={32} />,
      title: 'Trade from charts',
      description:
        'Create new orders directly from the charts and click and drag to edit existing orders.',
    },
    {
      icon: <TrendingUp color="#f24521" size={32} />,
      title: 'Over 80 technical indicators',
      description:
        'Use a wealth of customizable indicators that can be saved to templates to match your trading styles or needs.',
    },
    {
      icon: <CalendarClock color="#f24521" size={32} />,
      title: '14 time intervals',
      description:
        'Home in on trading patterns with time frames ranging from one-minute to monthly.',
    },
    {
      icon: <LineChart color="#f24521" size={32} />,
      title: 'Multiple chart types',
      description:
        'Choose from a variety of chart styles and select what information you see.',
    },
    {
      icon: <PenTool color="#f24521" size={32} />,
      title: 'Over 50 drawing tools',
      description:
        'Plan your next trade with customizable charting and drawing tools.',
    },
    {
      icon: <Sliders color="#f24521" size={32} />,
      title: 'Personalize your workspace',
      description:
        'Tailor everything from the indicators to the drawing tools and save it as a template.',
    },
  ];

  return (
    <section style={{ backgroundColor: '#fff3e6', padding: '4rem 0' }}>
      <Container>
      
       

        <h3 className="text-center mb-4" style={{ color: '#f24521' }}>
          Advanced Charts from TradingView
        </h3>
        <Row className="g-4 mb-4">
          {chartFeatures.map((feature, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 border-0 shadow-sm p-4 text-center">
                <div className="mb-3">{feature.icon}</div>
                <h5 className="text-dark">{feature.title}</h5>
                <p className="text-secondary">{feature.description}</p>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <Button
            variant="danger"
            style={{ backgroundColor: '#f24521', border: 'none' }}
          >
            Discover more trading tools
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default WebAppTools;
