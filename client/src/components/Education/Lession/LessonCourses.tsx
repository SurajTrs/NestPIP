import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const allCourses = [
  {
    title: 'Introduction to financial markets',
    level: 'Beginner',
    time: '4.5-minute read',
    description:
      'Financial markets are how people and companies buy and sell assets: currencies, commodities, stocks, indices, cryptos, and more.',
  },
  {
    title: 'Non-farm payroll (NFP)',
    level: 'Intermediate',
    time: '4-minute read',
    description:
      'The non-farm payrolls report (NFP) is a significant market event each month. Here we examine what it is and how it can affect your forex trading.',
  },
  {
    title: 'Tips for forex trading beginners',
    level: 'Beginner',
    time: '3-minute read',
    description:
      'Before you start something new, begin with the fundamentals. Let’s look at trading tips every trader should consider before trading currency pairs.',
  },
  {
    title: 'How to trade CFDs',
    level: 'Beginner',
    time: '6.5-minute read',
    description:
      'Interested in CFD trading? Follow this step-by-step guide and get started today. Learn what contracts for difference (CFDs) are, how to trade CFDs and more.',
  },
  {
    title: 'ABCD pattern',
    level: 'Advanced',
    time: '4.5-minute read',
    description:
      'Fibonacci ratios aren\'t just useful for identifying support and resistance levels. They also form the basis of some key chart patterns, including the ABCD pattern.',
  },
  {
    title: 'Introduction to technical analysis charts',
    level: 'Intermediate',
    time: '3-minute read',
    description:
      'Charts are an essential part of any technical trader’s toolkit. Let’s examine how they work, the key types of chart and how to read price action at a glance.',
  },
  {
    title: 'Understanding technical analysis',
    level: 'Intermediate',
    time: '4-minute read',
    description:
      'Some traders define themselves by how they find their opportunities. In this course, we’re going to cover one of the most popular methods – technical analysis.',
  },
  {
    title: 'What is forex?',
    level: 'Beginner',
    time: '4-minute read',
    description:
      'The foreign exchange market – also known as forex or FX – is the world’s most traded market.',
  },
  {
    title: 'Market gaps and slippage',
    level: 'Beginner',
    time: '2.5-minute read',
    description:
      'Market gaps and slippage are two of the biggest risks you’ll regularly encounter when trading.',
  },
  {
    title: 'Consumer Price Index (CPI)',
    level: 'Intermediate',
    time: '3.5-minute read',
    description:
      'Inflation is a crucial factor in economics and plays a key part in fundamental analysis. Learn inflation, hyperinflation, and deflation.',
  },
  {
    title: 'Trading forex',
    level: 'Beginner',
    time: '7.5-minute read',
    description:
      'When you trade forex, you’re buying or selling a currency pair – such as EUR/USD, GBP/USD or USD/JPY.',
  },
  {
    title: 'Introduction to fundamental analysis',
    level: 'Intermediate',
    time: '3-minute read',
    description:
      'In this course, we’re going to cover everything you need to know about fundamental analysis – one of the two main research methods.',
  },
];

const LessonCourses = () => {
  const [filter, setFilter] = useState('All');

  const filteredCourses =
    filter === 'All'
      ? allCourses
      : allCourses.filter((course) => course.level === filter);

  return (
    <section style={{ backgroundColor: '#fff3e9', padding: '4rem 0' }}>
      <Container>
        <h2 style={{ color: '#f24521' }} className="mb-4">
          Online Trading Courses
        </h2>
        <p className="text-dark mb-4">
          Build your trading knowledge with our interactive courses, covering everything from how the markets work, to complex technical strategies.
        </p>

        <div className="mb-4">
          <Button
            variant={filter === 'All' ? 'dark' : 'outline-dark'}
            className="me-2 mb-2"
            onClick={() => setFilter('All')}
          >
            Show All Lessons
          </Button>
          <Button
            variant={filter === 'Advanced' ? 'dark' : 'outline-dark'}
            className="me-2 mb-2"
            onClick={() => setFilter('Advanced')}
          >
            Advanced
          </Button>
          <Button
            variant={filter === 'Beginner' ? 'dark' : 'outline-dark'}
            className="me-2 mb-2"
            onClick={() => setFilter('Beginner')}
          >
            Beginner
          </Button>
          <Button
            variant={filter === 'Intermediate' ? 'dark' : 'outline-dark'}
            className="mb-2"
            onClick={() => setFilter('Intermediate')}
          >
            Intermediate
          </Button>
        </div>

        <Row>
          {filteredCourses.map((course, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title style={{ color: '#f24521' }}>{course.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {course.level} &middot; {course.time}
                  </Card.Subtitle>
                  <Card.Text className="text-dark">{course.description}</Card.Text>
                  <Button variant="outline-dark" size="sm">
                    Start Course
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LessonCourses;
