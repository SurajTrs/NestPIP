'use client';

import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

const rebateData = [
  {
    asset: 'FOREX',
    requirements: ['USD $10m - $25m', '$25m - $50m', '$50m - $100m', '$100m - $250m', '$250m - $500m', '$500m+'],
    payouts: ['$2/m', '$3/m', '$4/m', '$6/m', '$8/m', '$10/m'],
  },
  {
    asset: 'INDICES',
    requirements: ['USD $10m - $25m', '$25m - $50m', '$50m - $100m', '$100m - $250m', '$250m - $500m', '$500m+'],
    payouts: ['$1/m', '$2/m', '$3/m', '$4/m', '$5/m', '$6/m'],
  },
  {
    asset: 'COMMODITIES',
    requirements: ['USD $1m - $5m', '$5m - $10m', '$10m - $25m', '$25m - $50m', '$50m - $100m', '$100m+'],
    payouts: ['$5/m', '$7/m', '$10/m', '$15/m', '$20/m', '$25/m'],
  },
  {
    asset: 'METALS',
    requirements: ['USD $1m - $5m', '$5m - $10m', '$10m - $25m', '$25m - $50m', '$50m - $100m', '$100m+'],
    payouts: ['$1/m', '$3/m', '$5/m', '$10/m', '$12/m', '$15/m'],
  },
  {
    asset: 'CRYPTOCURRENCIES',
    requirements: ['USD $50K - $100K', '$100K - $250K', '$250K - $500K', '$500K - $1m', '$1m - $1.5m', '$1.5m+'],
    payouts: ['$10/m', '$15/m', '$20/m', '$30/m', '$40/m', '$50/m'],
  },
  {
    asset: 'EQUITIES',
    requirements: ['USD $1m - $5m', '$5m - $10m', '$10m - $25m', '$25m - $50m', '$50m - $100m', '$100m+'],
    payouts: ['$10/m', '$15/m', '$20/m', '$30/m', '$40/m', '$50/m'],
  },
];

const CashRebateTiers: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#000000', padding: '4rem 0' }}>
      <Container>
        <Row className="mb-4 text-center">
          <Col>
            <h2 className="fw-bold" style={{ color: '#f24521' }}>
              Reward yourself the more you trade
            </h2>
            <p className="text-white fs-5 mt-3">
              As an Active Trader client, you can earn cash rebates on your monthly trade volume.
              Our new and improved scheme means you automatically receive monthly cash rebates
              when you trade the minimum for each asset class in a calendar month.
            </p>
          </Col>
        </Row>

        <Table responsive bordered hover className="text-center text-white">
          <thead style={{ backgroundColor: '#f24521', color: '#fff' }}>
            <tr>
              <th>Asset</th>
              <th colSpan={6}>Trading Requirements</th>
            </tr>
            <tr>
              <th></th>
              {[1, 2, 3, 4, 5, 6].map((level) => (
                <th key={level}>Level {level}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rebateData.map((row, idx) => (
              <tr key={`req-${idx}`}>
                <td><strong>{row.asset}</strong></td>
                {row.requirements.map((req, i) => (
                  <td key={i}>{req}</td>
                ))}
              </tr>
            ))}
            <tr style={{ backgroundColor: '#1a1a1a' }}>
              <td colSpan={7} className="fw-bold text-black text-center">
                Payouts (per million)
              </td>
            </tr>
            {rebateData.map((row, idx) => (
              <tr key={`pay-${idx}`}>
                <td><strong>{row.asset}</strong></td>
                {row.payouts.map((pay, i) => (
                  <td key={i}>{pay}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>

        <Row className="text-center mt-4">
          <Col>
            <Button variant="outline-light" size="lg">
              See Details
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CashRebateTiers;
