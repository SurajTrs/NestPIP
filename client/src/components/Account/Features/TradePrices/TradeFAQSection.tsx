import React from 'react';
import { Container, Accordion, Button } from 'react-bootstrap';

const FAQSection = () => {
  return (
    <section style={{ backgroundColor: '#FFF4E6', padding: '4rem 0' }}>
      <Container>
        <h2 className="fw-bold mb-5" style={{ color: '#f24521' }}>
          Frequently Asked Questions
        </h2>

        <Accordion defaultActiveKey="0" flush>
          {/* FAQ Item 1 */}
          <Accordion.Item eventKey="0">
            <Accordion.Header style={{ color: '#f24521', fontWeight: '700' }}>
              Does FOREX.com charge commissions?
            </Accordion.Header>
            <Accordion.Body style={{ color: '#f24521', fontSize: '1.05rem' }}>
              <p>
                FOREX.com only charges commissions on our RAW Pricing account, which allows trading on spreads as tight as 0.0, with a $5 commission per 100K USD traded.
              </p>
              <div className="d-flex gap-3">
                <Button
                  size="sm"
                  style={{
                    backgroundColor: '#f24521',
                    border: 'none',
                    fontWeight: 600,
                    padding: '0.25rem 1.25rem',
                  }}
                >
                  Yes
                </Button>
                <Button
                  size="sm"
                  variant="outline-danger"
                  style={{ fontWeight: 600 }}
                >
                  No
                </Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* FAQ Item 2 */}
          <Accordion.Item eventKey="1">
            <Accordion.Header style={{ color: '#f24521', fontWeight: '700' }}>
              What is a spread?
            </Accordion.Header>
            <Accordion.Body style={{ color: '#f24521', fontSize: '1.05rem' }}>
              <p>
                When a price for a market is quoted, you will actually see two prices. The first price, sometimes referred to as the bid, is the sell price and the second price is the buy price, often referred to as the ask. The difference between the sell and buy price is called the spread. FOREX.com is compensated via the spread.
              </p>
              <p>
                More information on our accounts. <br />
                Trading account comparison.
              </p>
              <div className="d-flex gap-3">
                <Button
                  size="sm"
                  style={{
                    backgroundColor: '#f24521',
                    border: 'none',
                    fontWeight: 600,
                    padding: '0.25rem 1.25rem',
                  }}
                >
                  Yes
                </Button>
                <Button
                  size="sm"
                  variant="outline-danger"
                  style={{ fontWeight: 600 }}
                >
                  No
                </Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <p className="mt-4" style={{ color: '#f24521', fontSize: '1.05rem' }}>
          If you have more questions, visit the Pricing and Fees FAQ section or start a chat with our support team.
        </p>
      </Container>
    </section>
  );
};

export default FAQSection;
