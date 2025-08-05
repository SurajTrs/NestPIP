import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const charges = [
  { title: 'Spreads', content: 'Spreads are the difference between the bid and ask price. They vary by asset class and market volatility.' },
  { title: 'Commission', content: 'Some accounts and products include a commission, which is a fixed cost per trade.' },
  { title: 'Potential further adjustments', content: 'Market conditions or liquidity may lead to further cost adjustments in pricing.' },
  { title: 'Rollovers and financing adjustments', content: 'These are interest charges or credits for holding positions overnight based on interest rate differentials.' },
  { title: 'Dividend adjustments', content: 'Applied when holding CFD positions on indices or equities over ex-dividend dates.' },
  { title: 'Inactivity fees', content: 'Accounts with no trading activity for a defined period may incur an inactivity fee.' },
  { title: 'Back to base', content: 'Currency conversions may apply when your account currency differs from the traded instrument.' },
  { title: 'Borrowing costs', content: 'Applicable when shorting instruments like stocks, where shares must be borrowed.' },
  { title: 'Commodity basis adjustment', content: 'Adjustments made to CFD commodity prices to align with futures market pricing.' },
];

const DirectCharges = () => {
  return (
    <section style={{ backgroundColor: '#fff4ef', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center mb-4" style={{ color: '#f24521' }}>Direct Charges</h2>
        <Accordion defaultActiveKey="0">
          {charges.map((item, idx) => (
            <Accordion.Item eventKey={String(idx)} key={idx}>
              <Accordion.Header>
                <span style={{ color: '#f24521', fontWeight: '500' }}>{item.title}</span>
              </Accordion.Header>
              <Accordion.Body>{item.content}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default DirectCharges;
