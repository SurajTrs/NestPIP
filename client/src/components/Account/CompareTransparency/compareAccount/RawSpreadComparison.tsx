import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const RawSpreadComparison = () => {
  return (
    <section style={{ backgroundColor: '#fff5f0', padding: '4rem 0' }}>
      <Container>
        <h2 className="fw-bold mb-5" style={{ color: '#f24521' }}>
          Account Features at a Glance
        </h2>

        <Table bordered responsive className="bg-white shadow-sm">
          <thead style={{ backgroundColor: '#f24521', color: 'white' }}>
            <tr>
              <th></th>
              <th className="text-center">Standard Account</th>
              <th className="text-center">RAW Spread Account</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Description</strong></td>
              <td>
                Offering traditional traders a wide range of markets with fully customizable web and mobile trading platforms
              </td>
              <td>
                For traders who are seeking ultra-tight spreads with fixed commissions
              </td>
            </tr>

            <tr>
              <td><strong>FX Spread</strong></td>
              <td>Variable spreads as low as 0.8</td>
              <td>Reduced spread (FX Majors as low as 0.0)</td>
            </tr>

            <tr>
              <td><strong>Platforms</strong></td>
              <td>
                Web<br />Mobile<br />Desktop
              </td>
              <td>
                Web<br />Mobile<br />Desktop<br />MetaTrader 5
              </td>
            </tr>

            <tr>
              <td><strong>Commissions</strong></td>
              <td>None (Your cost is the spread)</td>
              <td>$5 USD commission per $100k USD traded</td>
            </tr>

            <tr>
              <td><strong>Additional Features</strong></td>
              <td>
                Technical insights, market buzz and analyst views<br />
                Fully integrated calendar, Reuters news, FOREX.com research and account management<br />
                Performance Analytics tool to analyze trading behavior
              </td>
              <td>
                All the great features offered by other account types, plus the benefit of significantly reduced spreads
              </td>
            </tr>

            <tr>
              <td></td>
              <td className="text-center">
                <Button variant="outline-danger" style={{ borderColor: '#f24521', color: '#f24521' }}>
                  Open an Account
                </Button>
              </td>
              <td className="text-center d-flex flex-column gap-2">
                <Button variant="danger" style={{ backgroundColor: '#f24521', border: 'none' }}>
                  Open Raw Spread Account
                </Button>
                <Button variant="outline-secondary" style={{ color: '#f24521', borderColor: '#f24521' }}>
                  Open Raw Spread MT5 Account
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

export default RawSpreadComparison;
