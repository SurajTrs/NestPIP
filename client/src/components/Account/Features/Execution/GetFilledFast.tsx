import React from "react";

const GetFilledFast = () => {
  return (
    <section style={{ backgroundColor: "#fff3ea", padding: "4rem 0" }}>
      <div className="container text-center">
        <h2 className="fw-bold text-uppercase mb-3" style={{ color: "#f24521" }}>
          Get Filled, Fast
        </h2>
        <p className="text-muted mb-5">
          Speed, price and access to liquidity – we’ve got you covered.
        </p>

        <div
          className="mx-auto p-4 rounded-4 border border-2 shadow-sm"
          style={{ maxWidth: "500px", backgroundColor: "#ffe0d1", borderColor: "#f24521" }}
        >
          <h1 className="display-4 fw-bold" style={{ color: "#f24521" }}>100%</h1>
          <p className="text-secondary mb-1">% of trades successfully executed</p>
          <small className="text-muted">
            Includes all valid trade and orders received by the system, excluding those entered on the MetaTrader platform**
          </small>
        </div>
      </div>
    </section>
  );
};

export default GetFilledFast;
