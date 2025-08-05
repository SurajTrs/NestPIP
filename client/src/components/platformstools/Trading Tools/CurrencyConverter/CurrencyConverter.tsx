'use client';

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

type CurrencyOption = {
  code: string;
  name: string;
  flag: string;
};

type MarketInstrument = {
  name: string;
  buy: string;
  change: string;
};

const currencies: CurrencyOption[] = [
  { code: 'USD', name: 'United States Dollar', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺' },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' },
  { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭' },
  { code: 'CNH', name: 'Chinese Yuan', flag: '🇨🇳' },
  { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵' },
  { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬' },
  { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳' },
  { code: 'NOK', name: 'Norwegian Krone', flag: '🇳🇴' },
  { code: 'SEK', name: 'Swedish Krona', flag: '🇸🇪' },
  { code: 'PLN', name: 'Polish Złoty', flag: '🇵🇱' },
  { code: 'MXN', name: 'Mexican Peso', flag: '🇲🇽' },
  { code: 'ZAR', name: 'South African Rand', flag: '🇿🇦' },
  { code: 'THB', name: 'Thai Baht', flag: '🇹🇭' },
];

const instruments: MarketInstrument[] = [
  { name: 'USD/CAD', buy: '1.3692', change: '-0.26%' },
  { name: 'USD/JPY', buy: '147.282', change: '-1.03%' },
  { name: 'EUR/USD', buy: '1.16897', change: '0.57%' },
  { name: 'GBP/USD', buy: '1.34867', change: '0.58%' },
  { name: 'AUD/USD', buy: '0.65268', change: '0.30%' },
];

// Mock rates — in real use, fetch from a live API like exchangerate.host or openexchangerates
const mockRates: Record<string, number> = {
  'EURUSD': 1.17,
  'USDEUR': 0.8547,
  'USDJPY': 147.282,
  'JPYUSD': 0.00679,
  'GBPUSD': 1.34867,
  'USDGBP': 0.7416,
  'AUDUSD': 0.65268,
  'USDAUD': 1.531,
};

const CurrencyConverterWithMarket: React.FC = () => {
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState<number>(1);
  const [converted, setConverted] = useState<number>(0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const rateKey = `${fromCurrency}${toCurrency}`;
    const rate = mockRates[rateKey] || 1;
    setConverted(parseFloat((amount * rate).toFixed(4)));
  }, [fromCurrency, toCurrency, amount]);

  const tradingViewSymbol = `FX:${fromCurrency}${toCurrency}`;
  const filteredInstruments = instruments.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section style={{ backgroundColor: '#fff3e6', padding: '3rem 0' }}>
      <Container fluid>
        <h2 className="text-center mb-5 fw-bold text-danger">Currency Converter & Market Prices</h2>
        <Row>
          {/* Market Prices */}
          <Col lg={3} className="mb-4">
            <Form.Control
              type="text"
              placeholder="🔍 Search instruments"
              className="mb-3 shadow-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {filteredInstruments.map((item, idx) => (
              <Card key={idx} className="mb-3 shadow-sm border-0 rounded-3">
                <Card.Body className="py-2 px-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0 fw-semibold text-dark">{item.name}</h6>
                    <span className={`fw-semibold ${item.change.startsWith('-') ? 'text-danger' : 'text-success'}`}>
                      {item.change}
                    </span>
                  </div>
                  <div className="text-muted small">Buy: {item.buy}</div>
                </Card.Body>
              </Card>
            ))}
            <div className="text-muted text-center small mt-3">Indicative Pricing updated 23:01:11</div>
          </Col>

          {/* Converter + Chart */}
          <Col lg={9}>
            <Row className="mb-4">
              <Col md={4} className="mb-3">
                <Form.Label className="fw-bold">From</Form.Label>
                <Form.Select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="shadow-sm"
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.flag} {currency.code}
                    </option>
                  ))}
                </Form.Select>
              </Col>

              <Col md={4} className="mb-3">
                <Form.Label className="fw-bold">To</Form.Label>
                <Form.Select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="shadow-sm"
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.flag} {currency.code}
                    </option>
                  ))}
                </Form.Select>
              </Col>

              <Col md={4} className="mb-3">
                <Form.Label className="fw-bold">Amount</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="number"
                    min={0}
                    step="any"
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                    className="shadow-sm"
                  />
                </InputGroup>
              </Col>
            </Row>

            <div className="text-center mb-4">
              <h4 className="fw-bold">
                {amount} {fromCurrency} ={' '}
                <span className="text-success">{converted} {toCurrency}</span>
              </h4>
            </div>

            <div style={{ height: '500px', borderRadius: '10px', overflow: 'hidden' }}>
              <iframe
                title="TradingView Forex Chart"
                src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=${tradingViewSymbol}&interval=60&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=F1F3F6&studies=[]&theme=light&style=1&timezone=Etc/UTC&withdateranges=1&hidevolume=1`}
                width="100%"
                height="100%"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>

        {/* Disclaimer */}
        <Row className="mt-5">
          <Col>
            <p className="text-muted small text-center px-2">
              <strong>Disclaimer:</strong> Neither FOREX.com nor its affiliates will be held responsible for the
              reliability or accuracy of this data. This service is provided for informational purposes only.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CurrencyConverterWithMarket;
