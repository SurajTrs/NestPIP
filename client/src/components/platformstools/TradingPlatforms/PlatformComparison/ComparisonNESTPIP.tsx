import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

const ComparisonNESTPIP = () => {
  return (
    <section style={{ backgroundColor: '#fff', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center mb-4" style={{ color: '#f24521' }}>
          NESTPIP.com and MetaTrader Platforms Compared
        </h2>
        <p className="text-center mb-5">
          Compare our proprietary FOREX.com trading platform with MetaTrader 5 and choose what suits you best.
        </p>
        <Table responsive bordered hover>
          <thead style={{ backgroundColor: '#f24521', color: 'white' }}>
            <tr>
              <th>Features</th>
              <th>NESTPIP.com Platforms</th>
              <th>MetaTrader 5 (MT5)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Supported Devices</strong></td>
              <td>Web, Mobile, Desktop</td>
              <td>Web (MT5 only), Mobile, Desktop</td>
            </tr>
            <tr>
              <td><strong>Markets</strong></td>
              <td>5500+ (Forex, Indices, Crypto, Commodities, Stock CFDs, ETFs)</td>
              <td>500+ (Forex, Indices, Commodities, Stock CFDs, ETFs)</td>
            </tr>
            <tr>
              <td><strong>Charting</strong></td>
              <td>TradingView charts, 80+ indicators, in-chart trading</td>
              <td>MT5 charting, 38+ indicators, 21 timeframes</td>
            </tr>
            <tr>
              <td><strong>Tools</strong></td>
              <td>Reuters News, Performance Analytics, Custom Watchlists</td>
              <td>FX Blue Suite, EA Hosting, MetaTrader Market</td>
            </tr>
            <tr>
              <td><strong>Order Types</strong></td>
              <td>Multiple types, one-click trading</td>
              <td>Multiple types, one-click trading</td>
            </tr>
            <tr>
              <td><strong>Automation</strong></td>
              <td>Manual & chart-based orders</td>
              <td>Expert Advisors (EA) + VPS Hosting</td>
            </tr>
            <tr>
              <td><strong>Search & Navigation</strong></td>
              <td>Custom watchlists, in-platform analytics</td>
              <td>Enhanced MT5 search, 15+ custom indicators</td>
            </tr>
            <tr>
              <td><strong>Accounts Supported</strong></td>
              <td>Standard, RAW Pricing</td>
              <td>Standard, RAW Pricing</td>
            </tr>
          </tbody>
        </Table>

        <Row className="mt-5 text-center">
          <Col md={6} className="mb-3">
            <Button variant="outline-danger" href="#open-forex" style={{ borderColor: '#f24521', color: '#f24521' }}>
              Open NESTPIP.com Account
            </Button>
          </Col>
          <Col md={6}>
            <Button variant="danger" href="#open-mt5" style={{ backgroundColor: '#f24521', border: 'none' }}>
              Open MT5 Account
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ComparisonNESTPIP;
