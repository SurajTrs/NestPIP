import React from 'react';

const RawVsStandardTable: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '3rem 1rem' }}>
      <div className="container">
        <h2 className="fw-bold mb-4" style={{ color: '#f24521', textAlign: 'center' }}>
          Raw Spread Account vs. Standard Account
        </h2>

        <div style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '1.1rem',
              color: '#000',
              backgroundColor: 'white',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <thead style={{ backgroundColor: '#f24521', color: 'white' }}>
              <tr>
                <th style={{ padding: '12px 20px', textAlign: 'left' }}>Feature</th>
                <th style={{ padding: '12px 20px', textAlign: 'left' }}>Raw Spread Account</th>
                <th style={{ padding: '12px 20px', textAlign: 'left' }}>Standard Account</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  feature: 'Spread',
                  raw: 'From 0.0 pips',
                  standard: 'From 1.0 pips',
                },
                {
                  feature: 'Commission',
                  raw: 'Yes (Low, Fixed)',
                  standard: 'No',
                },
                {
                  feature: 'Pricing',
                  raw: 'Directly from Liquidity Providers',
                  standard: 'Markup by the broker',
                },
                {
                  feature: 'Great for',
                  raw: 'Professional and high-frequency traders',
                  standard: 'People who are new to trading and those who do it on the side',
                },
                {
                  feature: 'Clarity',
                  raw: 'High',
                  standard: 'Moderate',
                },
                {
                  feature: 'Execution',
                  raw: 'No Dealing Desk',
                  standard: 'Standard',
                },
              ].map(({ feature, raw, standard }, idx) => (
                <tr
                  key={idx}
                  style={{
                    backgroundColor: idx % 2 === 0 ? '#fff3e6' : 'white',
                    borderBottom: '1px solid #f0c1a1',
                  }}
                >
                  <td style={{ padding: '12px 20px', fontWeight: '600' }}>{feature}</td>
                  <td style={{ padding: '12px 20px' }}>{raw}</td>
                  <td style={{ padding: '12px 20px' }}>{standard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default RawVsStandardTable;
