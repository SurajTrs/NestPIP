import React, { useState } from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is an Expert Advisor (EA)?',
    answer:
      'An Expert Advisor (EA) is an automated trading program that runs on MetaTrader platforms to execute trades or provide analytics based on pre-set rules.',
  },
  {
    question: 'Can I run multiple EAs at once?',
    answer:
      'Yes, MetaTrader allows you to run multiple EAs simultaneously. For example, one can automate trading while another enhances chart visuals.',
  },
  {
    question: 'Do EAs work when my computer is off?',
    answer:
      'No. EAs run locally and stop when your computer is turned off or disconnected. To avoid this, consider EA VPS hosting.',
  },
  {
    question: 'Are EAs supported on mobile or web versions?',
    answer:
      'No, EAs are not compatible with MetaTrader mobile or web platforms. They only work on the desktop application.',
  },
];

const FaqSection = () => {
  const [activeKey, setActiveKey] = useState<string | null>('0');

  const toggleKey = (key: string) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <section style={{ backgroundColor: '#000', color: '#fff', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center mb-4" style={{ color: '#f24521' }}>
          Frequently Asked Questions
        </h2>
        <Accordion activeKey={activeKey}>
          {faqs.map((faq, index) => (
            <Card
              key={index}
              style={{
                backgroundColor: '#111',
                color: '#fff',
                border: '1px solid #f24521',
                marginBottom: '1rem',
              }}
            >
              <Accordion
                as={Card.Header}
                eventKey={index.toString()}
                onClick={() => toggleKey(index.toString())}
                style={{
                  backgroundColor: '#111',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  color: '#f24521',
                }}
              >
                {faq.question}
                {activeKey === index.toString() ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </Accordion>
              <Accordion.Collapse eventKey={index.toString()}>
                <Card.Body style={{ backgroundColor: '#1a1a1a', color: '#fff3e9' }}>
                  {faq.answer}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default FaqSection;
