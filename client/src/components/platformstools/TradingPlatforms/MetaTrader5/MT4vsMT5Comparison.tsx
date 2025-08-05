import React from 'react';

const MT4vsMT5Comparison: React.FC = () => {
  return (
    <>
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-4" style={{ color: '#f24521' }}>
          Which Is Better for You, MT4 or MT5?
        </h2>

        <div className="table-responsive">
          <table className="table table-bordered table-striped text-center align-middle">
            <thead style={{ backgroundColor: '#f24521', color: '#fff' }}>
              <tr>
                <th>Feature</th>
                <th>MT4</th>
                <th>MT5</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: '#fff' }}>
              <tr>
                <td>Timeframes</td>
                <td>9</td>
                <td>21</td>
              </tr>
              <tr>
                <td>Pending Orders</td>
                <td>4</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Built-In Indicators</td>
                <td>30</td>
                <td>38+</td>
              </tr>
              <tr>
                <td>Market Depth</td>
                <td>❌</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Hedging</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Strategy Tester</td>
                <td>Single-Threaded</td>
                <td>Multi-Threaded</td>
              </tr>
              <tr>
                <td>Economic Calendar</td>
                <td>❌</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Multi-Asset Trading Support</td>
                <td>Limited</td>
                <td>Full Support</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <section
      className="py-4 px-3 my-4 rounded"
      style={{
        backgroundColor: '#ffcea8ff',
        color: 'black',
        maxWidth: '800px',
        margin: '2rem auto',
        fontSize: '1rem',
        fontWeight: '500',
        boxShadow: '0 4px 15px rgba(242, 69, 33, 0.4)',
      }}
    >
      <p>
        <strong>Are you already using MetaTrader 4?</strong> Many traders now prefer MT5 because it processes orders faster, has more tools, and supports advanced order types. However, if you wish to continue using MetaTrader 4, NestPip remains the best broker choice for your trading needs.
      </p>
    </section>
    </>
  );
};

export default MT4vsMT5Comparison;
