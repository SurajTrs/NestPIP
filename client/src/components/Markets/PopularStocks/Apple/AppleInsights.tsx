import React, { useEffect, useState } from "react";

type PivotData = Record<string, string>;

interface PivotTableProps {
  title: string;
  data: PivotData;
}

const PivotTable: React.FC<PivotTableProps> = ({ title, data }) => (
  <section className="bg-white rounded shadow p-4 border border-warning mb-4">
    <h2 className="h5 mb-4 fw-bold" style={{ color: "#f24521" }}>
      {title}
    </h2>
    <div className="row">
      {Object.entries(data).map(([key, value]) => (
        <div
          key={key}
          className="col-6 col-md-4 mb-2 d-flex justify-content-between border-bottom pb-1"
        >
          <span className="text-muted text-capitalize">{key.replace(/_/g, " ")}</span>
          <strong className="text-dark">{value}</strong>
        </div>
      ))}
    </div>
  </section>
);

const AppleInsights: React.FC = () => {
  const [bid] = useState("211.075");
  const [offer] = useState("211.075");
  const [dailyHigh] = useState<number | null>(211.880);
  const [dailyLow] = useState<number | null>(208.975);
  const [prevClose] = useState<number | null>(209.040);
  const [lastUpdated, setLastUpdated] = useState<string>("--");

  useEffect(() => {
    setLastUpdated("7/15/2025 8:00:00 PM");
  }, []);

  const pivotPoint =
    dailyHigh !== null && dailyLow !== null && prevClose !== null
      ? (dailyHigh + dailyLow + prevClose) / 3
      : null;

  const pivotData: PivotData = {
    "Pivot Point": pivotPoint ? pivotPoint.toFixed(3) : "--",
    High: "211.880",
    Bid: bid,
    Low: "208.975",
    Offer: offer,
    Close: "209.040",
    Distance: pivotPoint !== null ? (parseFloat(bid) - pivotPoint).toFixed(3) : "--",
    S1: "208.050",
    S2: "207.060",
    S3: "205.145",
    R1: "210.955",
    R2: "212.870",
    R3: "425.740",
    "Last Updated": lastUpdated,
  };

  const isBullish = pivotPoint !== null && parseFloat(bid) > pivotPoint;

  return (
    <main className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold" style={{ color: "#f24521" }}>
          Apple Inc Monthly Pivot Analysis
        </h1>
        <p className="text-muted">
          View technical pivot points and key price levels for Apple Inc (AAPL)
        </p>
      </div>

      <PivotTable title="Apple Inc Pivot Points" data={pivotData} />

      <div
        className="alert border border-warning text-dark"
        style={{ backgroundColor: "#ffe6d9" }}
      >
        <h5 className="alert-heading fw-bold">Technical Sentiment</h5>
        <p className="mb-2">
          Current bid <strong>{bid}</strong> is{" "}
          <strong>{isBullish ? "above" : "below"}</strong> the pivot point{" "}
          <strong>{pivotPoint ? pivotPoint.toFixed(3) : "--"}</strong>, indicating a{" "}
          <span className={isBullish ? "text-success fw-bold" : "text-danger fw-bold"}>
            {isBullish ? "bullish" : "bearish"}
          </span>{" "}
          sentiment on the monthly chart.
        </p>
        <p>
          Resistance to watch: <strong>R1 ({pivotData.R1})</strong>. Key support:{" "}
          <strong>S1 ({pivotData.S1})</strong>.
        </p>
      </div>
    </main>
  );
};

export default AppleInsights;
