import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaMoneyBillWave, FaChartLine, FaGlobe, FaShieldAlt, FaRobot, FaBalanceScale, FaWallet, FaPercentage, FaExchangeAlt, FaUserShield } from 'react-icons/fa';

const mt5Details = [
  {
    icon: <FaChartLine />,
    title: "Platform",
    desc: "MetaTrader 5 (MT5)",
  },
  {
    icon: <FaGlobe />,
    title: "Broker Type",
    desc: "MetaTrader forex broker (NDD/STP)",
  },
  {
    icon: <FaBalanceScale />,
    title: "Assets Available",
    desc: "Forex, Commodities, Indices, Crypto, and Stocks",
  },
  {
    icon: <FaWallet />,
    title: "Minimum Deposit",
    desc: "$100",
  },
  {
    icon: <FaPercentage />,
    title: "Spreads",
    desc: "Starting at 0.0 pips",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Commission",
    desc: "$0 on most accounts",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Execution Type",
    desc: "Market Execution",
  },
  {
    icon: <FaShieldAlt />,
    title: "Leverage",
    desc: "Up to 1:500 (location-based)",
  },
  {
    icon: <FaUserShield />,
    title: "Account Currencies",
    desc: "USD, EUR, INR, GBP",
  },
  {
    icon: <FaRobot />,
    title: "Expert Advisors (EAs)",
    desc: "Fully Supported",
  },
  {
    icon: <FaBalanceScale />,
    title: "Hedging & Scalping",
    desc: "Fully Supported",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Order Types",
    desc: "6 Pending Orders",
  },
];

const MT5AccountDetails = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#000', color: '#fff' }}>
      <Container>
        <h2 className="text-center mb-4" style={{ color: '#f24521' }}>
          Details About MT5 Accounts
        </h2>
        <Row>
          {mt5Details.map((detail, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0" style={{ backgroundColor: '#111' }}>
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="me-3"
                      style={{
                        fontSize: '1.8rem',
                        color: '#f24521',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {detail.icon}
                    </div>
                    <h5 className="mb-0" style={{ color: '#fff' }}>{detail.title}</h5>
                  </div>
                  <p className="text-light mb-0" style={{ fontSize: '0.95rem' }}>{detail.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MT5AccountDetails;
