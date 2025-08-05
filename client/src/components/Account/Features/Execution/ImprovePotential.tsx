import React from "react";

const ImprovePotential = () => {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#fff3ea" }}>
      <div className="container text-center">
        <h2 className="fw-bold text-uppercase mb-3" style={{ color: "#f24521" }}>
          Improve Your Potential
        </h2>
        <p className="text-muted mb-5">
          We’ve automated every aspect of the trade process with the goal of ensuring your trades are executed fast and at the price you expect – or better.
        </p>

        <div className="row gy-4 justify-content-center">
          {/* Metric 1 */}
          <div className="col-md-5">
            <div
              className="p-4 rounded-4 border border-2 shadow-sm"
              style={{ backgroundColor: "#ffe0d1", borderColor: "#f24521" }}
            >
              <h1 className="display-5 fw-bold" style={{ color: "#f24521" }}>68.12%</h1>
              <p className="text-secondary mb-0">% of limit orders price improved</p>
              <small className="text-muted">
                Limit orders executed at a price better than the requested price
              </small>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="col-md-5">
            <div
              className="p-4 rounded-4 border border-2 shadow-sm"
              style={{ backgroundColor: "#ffe0d1", borderColor: "#f24521" }}
            >
              <h1 className="display-5 fw-bold" style={{ color: "#f24521" }}>100%</h1>
              <p className="text-secondary mb-0">% of limit orders filled “at or better”</p>
              <small className="text-muted">
                Limit orders executed at the requested rate or better
              </small>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="col-md-5">
            <div
              className="p-4 rounded-4 border border-2 shadow-sm"
              style={{ backgroundColor: "#ffe0d1", borderColor: "#f24521" }}
            >
              <h1 className="display-5 fw-bold" style={{ color: "#f24521" }}>0.86</h1>
              <p className="text-secondary mb-0">
                Avg. price improvement (pips) per FX limit order
              </p>
              <small className="text-muted">
                Pip difference between requested and executed price of FX orders
              </small>
            </div>
          </div>

          {/* Metric 4 */}
          <div className="col-md-5">
            <div
              className="p-4 rounded-4 border border-2 shadow-sm"
              style={{ backgroundColor: "#ffe0d1", borderColor: "#f24521" }}
            >
              <h1 className="display-5 fw-bold" style={{ color: "#f24521" }}>0.004%</h1>
              <p className="text-secondary mb-0">
                Avg. price improvement (%) per non-FX limit order
              </p>
              <small className="text-muted">
                Percent difference between requested and executed price in non-FX markets
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovePotential;
