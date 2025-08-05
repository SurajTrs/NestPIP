import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UsdJpyInsights: React.FC = () => {
  const pivotData = {
    "Pivot Point": "144.578",
    High: "144.988",
    Bid: "145.737",
    Low: "144.185",
    Offer: "145.752",
    Close: "144.560",
    Distance: "-1.159",
    S1: "144.168",
    S2: "143.775",
    S3: "143.364",
    R1: "144.971",
    R2: "145.381",
    R3: "290.763",
    "Last Updated": "7/4/2025 11:59:59 PM",
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#FFF7E6" }}>
      <div className="container">
        <h2 className="fw-bold text-center mb-4" style={{ color: "#FF7A00" }}>
          USD/JPY Insights – Pivot Points & Analytics
        </h2>

        <p className="text-muted mb-4 text-center">
          Pivot points are a technical indicator used to predict potential
          support and resistance levels. If the price trades above the pivot,
          it's seen as <span className="text-success fw-semibold">bullish</span>. Below the pivot is
          considered <span className="text-danger fw-semibold">bearish</span>.
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
                  <span className="fw-bold text-dark">{pivotData[key as keyof typeof pivotData]}</span>
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

export default UsdJpyInsights;
