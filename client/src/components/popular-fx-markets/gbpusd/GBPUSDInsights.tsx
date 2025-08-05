import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GBPUSDInsights = () => {
  const pivotData = {
    PivotPoint: '1.36548',
    High: '1.36813',
    Bid: '1.36302',
    Low: '1.36349',
    Offer: '1.36321',
    Close: '1.36482',
    Distance: '0.00246',
    S1: '1.36283',
    S2: '1.36084',
    S3: '1.35819',
    R1: '1.36747',
    R2: '1.37012',
    R3: '2.74024',
    LastUpdated: '7/4/2025 11:59:59 PM',
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7E6' }}>
      <div className="container">
        <div className="row mb-4">
          <div className="col text-center">
            <h2 className="fw-bold mb-3" style={{ color: '#FF7A00' }}>
              GBP/USD Pivot Insights
            </h2>
            <p className="text-muted mb-0">
              Pivot points are used by traders to identify potential support and resistance levels.
              If the market trades above the pivot, it is considered <strong className="text-success">bullish</strong>; if below, <strong className="text-danger">bearish</strong>.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* Left Summary Table */}
          <div className="col-md-6">
            <div className="bg-white rounded-3 shadow border border-warning p-4 h-100">
              <h5 className="mb-4 text-success fw-semibold">Pivot Summary</h5>
              <ul className="list-group list-group-flush">
                {[
                  ['Pivot Point', pivotData.PivotPoint],
                  ['High', pivotData.High],
                  ['Low', pivotData.Low],
                  ['Bid', pivotData.Bid],
                  ['Offer', pivotData.Offer],
                  ['Close', pivotData.Close],
                  ['Distance', pivotData.Distance],
                ].map(([label, value], idx) => (
                  <li key={idx} className="list-group-item px-0 bg-white d-flex justify-content-between">
                    <span className="text-muted">{label}</span>
                    <span className="fw-semibold">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="bg-white rounded-3 shadow border border-warning p-4 h-100">
              <h5 className="mb-4 text-primary fw-semibold">Support & Resistance</h5>
              <div className="row row-cols-2 g-3">
                {[
                  ['S1', pivotData.S1],
                  ['R1', pivotData.R1],
                  ['S2', pivotData.S2],
                  ['R2', pivotData.R2],
                  ['S3', pivotData.S3],
                  ['R3', pivotData.R3],
                ].map(([level, val], idx) => (
                  <div key={idx} className="col d-flex justify-content-between">
                    <span className="text-muted">{level}</span>
                    <span className="fw-semibold">{val}</span>
                  </div>
                ))}
              </div>

              <div className="text-end text-muted small mt-4">
                Last Updated: {pivotData.LastUpdated}
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col text-center">
            <p className="text-muted">
              View interactive charts and performance analytics using our integrated TradingView platform.
            </p>
            <a
              href="#"
              className="btn btn-outline-success px-4 py-2 fw-semibold"
            >
              OPEN GBP/USD CHART
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GBPUSDInsights;
