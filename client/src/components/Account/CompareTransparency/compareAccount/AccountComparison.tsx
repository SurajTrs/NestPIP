import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const AccountComparison = () => {
  return (
    <section style={{ backgroundColor: '#fff5f0', padding: '4rem 0' }}>
      <Container>
        <h2 className="fw-bold mb-5" style={{ color: '#f24521' }}>
          Account Features at a Glance
        </h2>

        <Table bordered responsive className="bg-white shadow">
          <thead style={{ backgroundColor: '#f24521', color: 'white' }}>
            <tr>
              <th></th>
              <th className="text-center">Standard Account</th>
              <th className="text-center">MetaTrader Account</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Description</strong></td>
              <td>
                Offering traditional traders a wide range of markets with fully customizable web and mobile trading platforms
              </td>
              <td>
                The popular platform preferred by many veteran traders (MT4 and MT5 both offered with FOREX.com)
              </td>
            </tr>

            <tr>
              <td><strong>FX Spread</strong></td>
              <td>Variable spreads as low as 0.8</td>
              <td>Variable spreads as low as 1.0</td>
            </tr>

            <tr>
              <td><strong>Platforms</strong></td>
              <td>
                Web<br />Mobile<br />Desktop<br />TradingView
              </td>
              <td>
                Web (MT5 only)<br />Mobile<br />Desktop
              </td>
            </tr>

            <tr>
              <td><strong>Commissions</strong></td>
              <td>None (Your cost is the spread)</td>
              <td>None (Your cost is the spread)</td>
            </tr>

            <tr>
              <td><strong>Markets</strong></td>
              <td>
                Forex<br />Indices<br />Commodities<br />Cryptocurrencies<br />Stock CFDs<br />ETFs
              </td>
              <td>
                Forex<br />Indices<br />Commodities<br />Stock CFDs (MT5 only)
              </td>
            </tr>

            <tr>
              <td><strong>Additional Features</strong></td>
              <td>
                Technical insights, market buzz and analyst views<br />
                Integrated calendar, Reuters news, FOREX.com research and account management<br />
                Performance Analytics tool to analyze trading behavior
              </td>
              <td>
                Technical insights, market buzz and analyst views<br />
                Integrated calendar, Reuters news, FOREX.com research and account management<br />
                Added technical indicators, timeframes, and stock CFDs on MT5
              </td>
            </tr>

            <tr>
              <td></td>
              <td className="text-center">
                <Button variant="outline-danger" style={{ borderColor: '#f24521', color: '#f24521' }}>
                  Open an Account
                </Button>
              </td>
              <td className="text-center">
                <Button variant="danger" style={{ backgroundColor: '#f24521', border: 'none' }}>
                  Open an MT5 Account
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>

        <div className="text-center mt-4">
          <Button variant="outline-secondary" style={{ color: '#f24521', borderColor: '#f24521' }}>
            Or Try a Demo Account
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default AccountComparison;
