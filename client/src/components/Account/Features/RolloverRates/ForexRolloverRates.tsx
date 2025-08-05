import React from "react";

const rolloverData = [
  { name: "USD/CAD", long: "0.47", short: "-0.48" },
  { name: "USD/JPY", long: "1.08", short: "-1.09" },
  { name: "EUR/USD", long: "-0.77", short: "0.76" },
  { name: "GBP/USD", long: "-0.06", short: "0.06" },
  { name: "AUD/USD", long: "-0.08", short: "0.08" },
];

const ForexRolloverRates = () => {
  return (
    <section style={{ backgroundColor: "#fff3ea", padding: "4rem 0" }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-4" style={{ color: "#f24521" }}>
          FOREX.com Rollover Rates
        </h2>
        <p className="text-center text-muted mb-4">
          At FOREX.com, you earn or pay rollovers at a competitive price.
        </p>

        <div className="d-flex justify-content-center mb-3">
          <button className="btn me-2" style={{ backgroundColor: "#f24521", color: "white" }}>
            Forex
          </button>
          <button className="btn" style={{ border: `1px solid #f24521`, color: "#f24521" }}>
            Metals
          </button>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered text-center shadow-sm rounded">
            <thead style={{ backgroundColor: "#ffe0d1" }}>
              <tr>
                <th>Name</th>
                <th>Long</th>
                <th>Short</th>
              </tr>
            </thead>
            <tbody>
              {rolloverData.map((pair, index) => (
                <tr key={index}>
                  <td className="fw-bold">{pair.name}</td>
                  <td>{pair.long}</td>
                  <td>{pair.short}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-3">
          <button className="btn btn-outline-dark px-4" style={{ color: "#f24521", borderColor: "#f24521" }}>
            Show more
          </button>
        </div>

        <p className="text-muted mt-4" style={{ fontSize: "0.95rem" }}>
          Indicative Pricing updated <strong>5:28:10 PM</strong><br />
          <strong>Note:</strong> USD/RUB and EUR/RUB are currently unavailable for trading. See service updates.
          <br />
          Rollover rates displayed are based on a 10K position and estimated from the previous rollover rate and
          number of days being rolled (e.g., Wednesdays typically roll for three days to account for the weekend). Rollovers may also vary due to month-end or holidays.
        </p>
      </div>
    </section>
  );
};

export default ForexRolloverRates;
