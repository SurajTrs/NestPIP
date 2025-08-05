import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const TradingEventsPage = () => {
  const sessions = [
    {
      day: 'MONDAY',
      title: 'Weekly Technical Outlook',
      time: 'Mondays from 12:30-1:30pm UTC',
      description:
        'Join Sr. Technical Strategist Michael Boutros for a live virtual event highlighting key technical levels and setups he’s tracking this week.',
      register: '#',
      watch: '#',
    },
    {
      day: 'TUESDAY',
      title: 'Forex Price Action',
      time: 'Tuesdays from 3-4pm UTC',
      description:
        'Join Sr. Strategist James Stanley for a live virtual event focusing on price action across macro markets with the aim of devising strategy.',
      register: '#',
      watch: '#',
    },
    {
      day: 'WEDNESDAY',
      title: 'Forex Economic Events',
      time: 'Wednesdays from 2-2:30pm UTC',
      description:
        'Join Strategist David Song for real-time coverage of key macroeconomic developments that may impact financial markets.',
      register: '#',
      watch: '#',
    },
    {
      day: 'THURSDAY',
      title: 'Commodities Outlook',
      time: 'Bi-weekly. Thursdays 6-6:20am UTC',
      description:
        'Join Razan Hilal for a 20-minute live virtual event analyzing Gold, Oil, and Silver from both long-term and short-term perspectives.',
      register: '#',
      watch: '#',
    },
    {
      day: 'THURSDAY',
      title: 'Foundations of Forex Trading',
      time: 'Thursdays from 11pm-12pm UTC',
      description:
        'This ongoing series is tailored to those with some experience trading forex looking to improve their knowledge of specific areas of technical analysis.',
      register: '#',
    },
    {
      day: 'FRIDAY',
      title: 'Live NFP Coverage',
      time: 'First Friday of the month from 12-1pm UTC',
      description:
        'Join Head of Market Research Matt Weller during the release of the US Non-Farm Payroll report for instant analysis of the numbers and what they may mean for the markets.',
      register: '#',
    },
  ];

  const experts = [
    'RAZAN HILAL',
    'JAMES STANLEY',
    'MICHAEL BOUTROS',
    'DAVID SONG',
    'MATTHEW WELLER',
  ];

  return (
    <div style={{ backgroundColor: '#fff3e9', color: '#000', padding: '3rem 0' }}>
      <Container>
        <h2 style={{ color: '#f24521', fontSize: '2.5rem', marginBottom: '2rem' }}>Weekly Trading Events</h2>
        <Row>
          {sessions.map((session, idx) => (
            <Col md={6} lg={4} className="mb-4" key={idx}>
              <Card style={{ backgroundColor: '#fff', color: '#000', height: '100%', border: '1px solid #f24521' }}>
                <Card.Body>
                  <Card.Title style={{ color: '#f24521', fontSize: '1.25rem' }}>{session.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{session.time}</Card.Subtitle>
                  <Card.Text style={{ fontSize: '0.95rem' }}>{session.description}</Card.Text>
                  <Button variant="outline-dark" size="sm" href={session.register} className="me-2">
                    Register Here
                  </Button>
                  {session.watch && (
                    <Button variant="outline-dark" size="sm" href={session.watch}>
                      Watch Last Weeks Show
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Daily Market Update */}
        <section className="my-5">
          <h3 style={{ color: '#f24521' }}>Daily Market Update with Matt Weller</h3>
          <p>
            NESTPIP.com Global Head of Research Matt Weller breaks down the key news you need to know ahead of the
            US Open, as well as taking a closer look at the chart of a key market each day.
          </p>
        </section>

        {/* Experts */}
        <section style={{ backgroundColor: '#fff', color: '#000', padding: '2rem', borderRadius: '1rem' }}>
          <h4 style={{ color: '#f24521' }}>Meet the Experts</h4>
          <Row>
            {experts.map((expert, i) => (
              <Col md={4} lg={2} key={i} className="text-center mb-3">
                <div style={{ borderRadius: '50%', backgroundColor: '#f24521', width: 80, height: 80, margin: '0 auto' }}></div>
                <p className="mt-2 mb-0">{expert}</p>
                <a href="#" style={{ color: '#f24521' }}>Follow on X</a>
              </Col>
            ))}
          </Row>
        </section>

        {/* Disclaimer */}
        <section className="mt-5">
          <p style={{ fontSize: '0.875rem', color: '#333' }}>
            The information on this web site is not targeted at the general public of any particular country... [truncated for brevity]
          </p>
        </section>
      </Container>
    </div>
  );
};

export default TradingEventsPage;