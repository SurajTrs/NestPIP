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

const NvidiaInsights: React.FC = () => {
  const [bid] = useState("129.820");
  const [offer] = useState("129.850");
  const [dailyHigh] = useState<number | null>(132.300);
  const [dailyLow] = useState<number | null>(125.440);
  const [prevClose] = useState<number | null>(126.860);
  const [lastUpdated, setLastUpdated] = useState<string>("--");

  useEffect(() => {
    setLastUpdated("7/18/2025 11:59:59 PM");
  }, []);

  const pivotPoint =
    dailyHigh !== null && dailyLow !== null && prevClose !== null
      ? (dailyHigh + dailyLow + prevClose) / 3
      : null;

  const pivotData: PivotData = {
    "Pivot Point": pivotPoint ? pivotPoint.toFixed(3) : "--",
    High: "132.300",
    Bid: bid,
    Low: "125.440",
    Offer: offer,
    Close: "126.860",
    Distance: pivotPoint !== null ? (parseFloat(bid) - pivotPoint).toFixed(3) : "--",
    S1: "124.580",
    S2: "122.300",
    S3: "118.860",
    R1: "130.140",
    R2: "133.580",
    R3: "135.860",
    "Last Updated": lastUpdated,
  };

  const isBullish = pivotPoint !== null && parseFloat(bid) > pivotPoint;

  return (
    <main className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold" style={{ color: "#f24521" }}>
          NVIDIA Corp Monthly Pivot Analysis
        </h1>
        <p className="text-muted">
          View technical pivot points and key price levels for NVIDIA Corp (NVDA)
        </p>
      </div>

      <PivotTable title="NVIDIA Corp Pivot Points" data={pivotData} />

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

export default NvidiaInsights;
