import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WallStreetInsights: React.FC = () => {
  const pivotData = {
    "Pivot Point": "44631.2",
    High: "44815.5",
    Bid: "44281.5",
    Low: "44510.1",
    Offer: "44287.5",
    Close: "44568.0",
    Distance: "349.7",
    S1: "44446.9",
    S2: "44325.8",
    S3: "44141.4",
    R1: "44752.3",
    R2: "44936.6",
    R3: "89873.3",
    "Last Updated": "7/4/2025 11:59:59 PM",
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#FFF7E6" }}>
      <div className="container">
        <h2 className="fw-bold text-center mb-4" style={{ color: "#FF7A00" }}>
          Wall Street Insights – Pivot Points & Analytics
        </h2>

        <p className="text-muted mb-4 text-center">
          Pivot points are a key technical indicator for identifying future support and resistance zones. 
          If the price is trading above the pivot, it's considered 
          <span className="text-success fw-semibold"> bullish</span>; if it's below, it's seen as 
          <span className="text-danger fw-semibold"> bearish</span>.
        </p>

        <div className="row">
          <div className="col-md-6">
            <h5 className="fw-semibold mb-3">Daily Pivot Overview</h5>
            <ul className="list-group list-group-flush mb-4">
              {[
                "Pivot Point",
                "High",
                "Low",
                "Close",
                "Bid",
                "Offer",
                "Distance",
              ].map((key, idx) => (
                <li
                  key={idx}
                  className="list-group-item d-flex justify-content-between"
                  style={{ backgroundColor: "#FFF7E6", border: "none" }}
                >
                  <span className="fw-medium text-secondary">{key}</span>
                  <span className="fw-bold text-dark">
                    {pivotData[key as keyof typeof pivotData]}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-6">
            <h5 className="fw-semibold mb-3">Support & Resistance Levels</h5>
            <ul className="list-group list-group-flush mb-4">
              {["S1", "S2", "S3", "R1", "R2", "R3"].map((key, idx) => (
                <li
                  key={idx}
                  className="list-group-item d-flex justify-content-between"
                  style={{ backgroundColor: "#FFF7E6", border: "none" }}
                >
                  <span className="fw-medium text-secondary">{key}</span>
                  <span
                    className={`fw-bold ${
                      key.startsWith("S") ? "text-danger" : "text-success"
                    }`}
                  >
                    {pivotData[key as keyof typeof pivotData]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-muted mt-4">
          Last Updated:{" "}
          <span className="fw-semibold text-dark">
            {pivotData["Last Updated"]}
          </span>
        </p>
      </div>
    </section>
  );
};

export default WallStreetInsights;
