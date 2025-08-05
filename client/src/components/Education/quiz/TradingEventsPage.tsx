import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';

const quizQuestions = [
  {
    question: "What’s your level of trading experience?",
    options: [
      'Never traded anything',
      'Have an investment portfolio (such as stocks or mutual funds)',
      'Traded leveraged products (such as forex trading)',
      'Regularly trade leveraged products (10+ times each year)'
    ]
  },
  {
    question: "What type of assets are you most interested in trading?",
    options: [
      'Forex',
      'Stocks',
      'Commodities',
      'Indices'
    ]
  },
  {
    question: "How do you usually make trading decisions?",
    options: [
      'News and fundamentals',
      'Technical analysis',
      'Social media and forums',
      'Gut feeling or intuition'
    ]
  },
  {
    question: "How often do you trade?",
    options: [
      'Rarely (once a month or less)',
      'Occasionally (a few times a month)',
      'Frequently (once a week)',
      'Daily'
    ]
  },
  {
    question: "What is your primary goal with trading?",
    options: [
      'Grow long-term wealth',
      'Supplement income',
      'Become a full-time trader',
      'Learn and experiment'
    ]
  }
];

const TradingEventsPage: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIndex: number, oIndex: number) => {
    setAnswers(prev => ({ ...prev, [qIndex]: oIndex }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== quizQuestions.length) {
      alert('Please answer all questions before submitting.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: '#fff3e9', color: '#000', padding: '3rem 0' }}>
      <Container>
        <h2 style={{ color: '#f24521', fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
          Trading Experience Quiz
        </h2>

        {quizQuestions.map((q, qIdx) => (
          <div key={qIdx} className="mb-5">
            <h5 style={{ color: '#f24521' }}>{`Question ${qIdx + 1}: ${q.question}`}</h5>
            <Row className="mt-3">
              {q.options.map((opt, oIdx) => {
                const isSelected = answers[qIdx] === oIdx;
                return (
                  <Col md={6} lg={3} key={oIdx} className="mb-3">
                    <Card
                      onClick={() => handleSelect(qIdx, oIdx)}
                      style={{
                        cursor: 'pointer',
                        border: isSelected ? '2px solid #f24521' : '1px solid #ccc',
                        backgroundColor: isSelected ? '#f24521' : '#fff',
                        color: isSelected ? '#fff' : '#000',
                        transition: 'all 0.2s ease-in-out',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: '0.5rem'
                      }}
                    >
                      <Card.Body style={{ textAlign: 'center', fontWeight: 500 }}>{opt}</Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        ))}

        <div className="text-center">
          <Button variant="danger" onClick={handleSubmit} style={{ backgroundColor: '#f24521', borderColor: '#f24521' }}>
            Submit Answers
          </Button>
        </div>

        {submitted && (
          <Alert variant="success" className="mt-4 text-center">
            Thank you for submitting the quiz! Your responses have been recorded.
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default TradingEventsPage;
