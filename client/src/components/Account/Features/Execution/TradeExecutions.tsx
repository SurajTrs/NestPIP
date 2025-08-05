import React from "react";

const TradeExecutions = () => {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#fff3ea" }}>
      <div className="container text-center">
        {/* Section Header */}
        <h2 className="fw-bold text-uppercase mb-3" style={{ color: "#f24521" }}>
          Exceptional Trade Executions
        </h2>
        <p className="text-muted mb-5">
          Fast trade execution is critical to your success, and we challenge ourselves every day to deliver the best experience.
        </p>

        <div className="row justify-content-center gy-4">
          {/* Trade Execution Percentage */}
          <div className="col-md-5">
            <div
              className="p-4 rounded-4 border border-2 shadow-sm"
              style={{ backgroundColor: "#ffe0d1", borderColor: "#f24521" }}
            >
              <h1 className="display-4 fw-bold" style={{ color: "#f24521" }}>100%</h1>
              <p className="text-secondary mb-0">
                % of trades executed in less than 1 second
              </p>
              <small className="text-muted">
                Includes all valid trade and order requests, excluding MetaTrader platform**
              </small>
            </div>
          </div>

          {/* Average Execution Speed */}
          <div className="col-md-5">
            <div
              className="p-4 rounded-4 border border-2 shadow-sm"
              style={{ backgroundColor: "#ffe0d1", borderColor: "#f24521" }}
            >
              <h1 className="display-4 fw-bold" style={{ color: "#f24521" }}>0.003 secs</h1>
              <p className="text-secondary mb-0">Average execution speed</p>
              <small className="text-muted">
                Elapsed time between order receipt and execution
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeExecutions;
