import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const XAUUSDInsights: React.FC = () => {
  const pivotData = {
    PivotPoint: '3335.36',
    High: '3345.14',
    Bid: '3375.16',
    Low: '3323.72',
    Offer: '3376.04',
    Close: '3337.22',
    Distance: '-39.80',
    S1: '3325.59',
    S2: '3313.94',
    S3: '3304.17',
    R1: '3347.00',
    R2: '3356.78',
    R3: '6713.55',
    LastUpdated: '7/4/2025 11:59:59 PM',
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7E6' }}>
      <div className="container">
        <div className="row mb-4">
          <div className="col text-center">
            <h2 className="fw-bold mb-3" style={{ color: '#FF7A00' }}>
              XAU/USD Pivot Insights
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

          {/* Right Support & Resistance */}
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
              OPEN XAU/USD CHART
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XAUUSDInsights;
