import React, { useState } from 'react';
import { Container, Row, Col, Table, Button, Nav } from 'react-bootstrap';

type RolloverCategory = 'Forex' | 'Metals';

type RolloverItem = {
  name: string;
  long: string;
  short: string;
};

const rolloverData: Record<RolloverCategory, RolloverItem[]> = {
  Forex: [
    { name: 'USD/CAD', long: '0.47', short: '-0.48' },
    { name: 'GBP/USD', long: '-0.06', short: '0.06' },
    { name: 'AUD/USD', long: '-0.08', short: '0.08' },
    { name: 'EUR/USD', long: '-0.10', short: '0.11' },
    { name: 'USD/JPY', long: '0.15', short: '-0.16' },
  ],
  Metals: [
    { name: 'Gold', long: '-0.25', short: '0.24' },
    { name: 'Silver', long: '-0.18', short: '0.19' },
    { name: 'Platinum', long: '-0.12', short: '0.14' },
  ],
};

const RolloverRates = () => {
  const [activeTab, setActiveTab] = useState<RolloverCategory>('Forex');
  const [showAll, setShowAll] = useState(false);

  const handleSelect = (selectedKey: string | null) => {
    if (selectedKey === 'Forex' || selectedKey === 'Metals') {
      setActiveTab(selectedKey);
      setShowAll(false); // reset on tab switch
    }
  };

  const visibleData = showAll
    ? rolloverData[activeTab]
    : rolloverData[activeTab].slice(0, 3);

  return (
    <section style={{ backgroundColor: '#fff4ef', padding: '4rem 0' }}>
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="text-center" style={{ color: '#f24521' }}>Rollover Rates</h2>
            <p className="text-center text-muted">
              Rollovers are typically the interest charged or earned for holding positions overnight.
              We strive to keep your trading costs low by sourcing institutional rollover rates and passing them to you at a competitive price.
              You can earn or pay when a rollover is applied to your position. Rollovers are only applied to open trades at <strong>5pm ET</strong>.
              <br /><br />
              <strong>Note:</strong> Other brokers may calculate rolls continuously, raising your trading costs.
              To learn more,{' '}
              <a href="#" style={{ color: '#f24521', textDecoration: 'underline' }}>
                read our rollover FAQs
              </a>.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Col md={8}>
            <Nav
              variant="tabs"
              activeKey={activeTab}
              onSelect={handleSelect}
              className="justify-content-center flex-nowrap overflow-auto"
              role="tablist"
            >
              {(['Forex', 'Metals'] as RolloverCategory[]).map((tab) => (
                <Nav.Item key={tab}>
                  <Nav.Link
                    eventKey={tab}
                    style={{
                      color: activeTab === tab ? '#f24521' : '#333',
                      fontWeight: activeTab === tab ? 'bold' : 'normal',
                    }}
                    role="tab"
                    aria-selected={activeTab === tab}
                  >
                    {tab}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            {visibleData.length > 0 ? (
              <Table striped bordered responsive hover>
                <thead style={{ backgroundColor: '#f24521', color: 'white' }}>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Long</th>
                    <th scope="col">Short</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleData.map((item, index) => (
                    <tr key={`${activeTab}-${index}`}>
                      <td>{item.name}</td>
                      <td>{item.long}</td>
                      <td>{item.short}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <p className="text-center">
                Rollover data for <strong>{activeTab}</strong> is currently unavailable.
              </p>
            )}

            {rolloverData[activeTab].length > 3 && (
              <div className="text-end mt-3">
                <Button
                  variant="outline-dark"
                  size="sm"
                  style={{ borderColor: '#f24521', color: '#f24521' }}
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? 'Show less' : 'Show more'}
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RolloverRates;
