import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CommoditiesTicker = () => {
  const instruments = [
    { name: 'Coffee C', price: 30764.7, change: -22.5, percent: -0.07 },
    { name: 'Cotton No 2', price: 6927.8, change: 14.5, percent: 0.21 },
    { name: 'Sugar No 11', price: 1685.9, change: 0.0, percent: 0.0 },
    { name: 'UK Crude Oil', price: 6918.7, change: 25.0, percent: 0.36 },
    { name: 'US Crude Oil', price: 6690.2, change: 17.5, percent: 0.26 },
  ];

  const getColor = (value: number) => {
    if (value > 0) return '#28a745'; // green
    if (value < 0) return '#dc3545'; // red
    return '#6c757d'; // gray
  };

  return (
    <section className="py-4" style={{ backgroundColor: '#fff6f3' }}>
      <div className="container">
        <h5 className="mb-4 fw-bold" style={{ color: '#f24521', textDecoration: 'underline' }}>
          Search the Instruments
        </h5>

        <div className="row g-3">
          {instruments.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3"
            >
              <div
                className="p-3 rounded shadow-sm h-100"
                style={{
                  backgroundColor: '#fff0e9',
                  borderLeft: `5px solid ${getColor(item.change)}`,
                }}
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="fw-semibold">{item.name}</span>
                  <span className="fw-bold text-dark">{item.price.toFixed(1)}</span>
                </div>
                <div className="d-flex justify-content-between small">
                  <span style={{ color: getColor(item.percent) }}>
                    {item.percent > 0 ? '+' : ''}
                    {item.percent.toFixed(2)}%
                  </span>
                  <span style={{ color: getColor(item.change) }}>
                    {item.change > 0 ? '+' : ''}
                    {item.change.toFixed(3)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommoditiesTicker;
