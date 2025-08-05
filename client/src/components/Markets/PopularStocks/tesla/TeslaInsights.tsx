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

const TeslaInsights: React.FC = () => {
  const [bid] = useState("321.820");
  const [offer] = useState("321.840");
  const [dailyHigh] = useState<number | null>(321.105);
  const [dailyLow] = useState<number | null>(310.515);
  const [prevClose] = useState<number | null>(310.705);
  const [lastUpdated, setLastUpdated] = useState<string>("--");

  useEffect(() => {
    setLastUpdated("7/15/2025 8:00:00 PM"); // Static for now; replace with dynamic if needed
  }, []);

  const pivotPoint =
    dailyHigh !== null && dailyLow !== null && prevClose !== null
      ? (dailyHigh + dailyLow + prevClose) / 3
      : null;




  const pivotData: PivotData = {
    "Pivot Point": "314.108",
    High: "321.105",
    Bid: bid,
    Low: "310.515",
    Offer: offer,
    Close: "310.705",
    Distance: pivotPoint !== null ? (parseFloat(bid) - pivotPoint).toFixed(3) : "--",
    S1: "307.111",
    S2: "303.518",
    S3: "296.521",
    R1: "317.701",
    R2: "324.698",
    R3: "649.396", // unusual value – please double-check
    "Last Updated": lastUpdated,
  };

  const isBullish = pivotPoint !== null && parseFloat(bid) > pivotPoint;

  return (
    <main className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold" style={{ color: "#f24521" }}>
          Tesla Motors Monthly Pivot Analysis
        </h1>
        <p className="text-muted">
          View technical pivot points and key price levels for Tesla Motors (TSLA)
        </p>
      </div>

      <PivotTable title="Tesla Motors Pivot Points" data={pivotData} />

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

export default TeslaInsights;
