import React from 'react';
import { Container, Accordion, Button, } from 'react-bootstrap';

const faqs = [
  {
    question: 'How do I download the FOREX.com mobile app on my device?',
    answer: (
      <>
        To download the FOREX.com app on your iOS or Android device, search for FOREX.com in your app store or use the links below:
        <ul className="mt-2">
          <li>
            <a href="#" style={{ color: '#f24521', textDecoration: 'underline' }}>
              Download FOREX.com iPhone app
            </a>
          </li>
          <li>
            <a href="#" style={{ color: '#f24521', textDecoration: 'underline' }}>
              Download FOREX.com Android app
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    question: 'Do I have to have an account to use the FOREX.com mobile app?',
    answer:
      'Yes, you’ll need to sign up for a live account or a demo account to access the FOREX.com mobile app. Getting an account is free, quick, and easy.',
  },
  {
    question: 'What alerts are available on the mobile apps?',
    answer:
      'Price-based alerts and trade notifications can be sent to you via email and push notifications.',
  },
  {
    question: 'What markets can I trade on the FOREX.com app?',
    answer:
      'You can trade 80+ FX pairs, stock CFDs, indices, commodities, and more. View our full range of markets.',
  },
];

const FAQSection = () => {
  return (
    <section style={{ background: '#fff4e5', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center mb-4" style={{ color: '#f24521', fontWeight: 'bold' }}>
          Frequently Asked Questions
        </h2>

        <Accordion defaultActiveKey="0" flush>
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index} className="mb-3 border rounded shadow-sm">
              <Accordion.Header>
                <strong style={{ color: '#000' }}>{faq.question}</strong>
              </Accordion.Header>
              <Accordion.Body>
                <div style={{ color: '#333' }}>{faq.answer}</div>
                <div className="mt-3 d-flex gap-2">
                  <Button size="sm" variant="outline-success">Yes</Button>
                  <Button size="sm" variant="outline-danger">No</Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        <div className="text-center mt-5">
          <p style={{ fontWeight: 500 }}>
            If you have more questions, visit the{' '}
            <a href="#" style={{ color: '#f24521', textDecoration: 'underline' }}>
              Mobile Trading FAQ section
            </a>{' '}
            or{' '}
            <a href="#" style={{ color: '#f24521', textDecoration: 'underline' }}>
              start a chat with our support team
            </a>.
          </p>
          <Button variant="danger" style={{ backgroundColor: '#f24521', borderColor: '#f24521' }}>
            See all platform tutorials
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
