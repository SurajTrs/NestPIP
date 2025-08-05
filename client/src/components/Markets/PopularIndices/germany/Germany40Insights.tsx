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

const Germany40Insights: React.FC = () => {
  const [bid] = useState("18400.50");
  const [offer] = useState("18405.75");
  const [dailyHigh] = useState<number | null>(18520.80);
  const [dailyLow] = useState<number | null>(18210.40);
  const [prevClose] = useState<number | null>(18350.90);
  const [lastUpdated, setLastUpdated] = useState<string>("--");

  useEffect(() => {
    setLastUpdated(new Date().toLocaleTimeString());
    // WebSocket live feed can be added here if available.
  }, []);

  const pivotPoint =
    dailyHigh !== null && dailyLow !== null && prevClose !== null
      ? (dailyHigh + dailyLow + prevClose) / 3
      : null;

  const range = dailyHigh !== null && dailyLow !== null ? dailyHigh - dailyLow : null;

  const S1 = pivotPoint !== null && dailyHigh !== null ? 2 * pivotPoint - dailyHigh : null;
  const S2 = pivotPoint !== null && range !== null ? pivotPoint - range : null;
  const S3 = S2 !== null && range !== null ? S2 - range : null;

  const R1 = pivotPoint !== null && dailyLow !== null ? 2 * pivotPoint - dailyLow : null;
  const R2 = pivotPoint !== null && range !== null ? pivotPoint + range : null;
  const R3 = R2 !== null && range !== null ? R2 + range : null;

  const pivotData: PivotData = {
    "Pivot Point": pivotPoint?.toFixed(2) || "--",
    High: dailyHigh?.toFixed(2) || "--",
    Bid: bid,
    Low: dailyLow?.toFixed(2) || "--",
    Offer: offer,
    Close: prevClose?.toFixed(2) || "--",
    Distance: pivotPoint !== null ? (parseFloat(bid) - pivotPoint).toFixed(2) : "--",
    S1: S1?.toFixed(2) || "--",
    S2: S2?.toFixed(2) || "--",
    S3: S3?.toFixed(2) || "--",
    R1: R1?.toFixed(2) || "--",
    R2: R2?.toFixed(2) || "--",
    R3: R3?.toFixed(2) || "--",
    "Last Updated": lastUpdated,
  };

  const isBullish = pivotPoint !== null && parseFloat(bid) > pivotPoint;

  return (
    <main className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold" style={{ color: "#f24521" }}>
          Germany 40 Monthly Pivot Analysis
        </h1>
        <p className="text-muted">Live dynamic pivot points with sentiment insights</p>
      </div>

      <PivotTable title="Germany 40 Pivot Points" data={pivotData} />

      <div
        className="alert border border-warning text-dark"
        style={{ backgroundColor: "#ffe6d9" }}
      >
        <h5 className="alert-heading fw-bold">Technical Sentiment</h5>
        <p className="mb-2">
          Current bid <strong>{bid}</strong> is{" "}
          <strong>{isBullish ? "above" : "below"}</strong> the pivot point{" "}
          <strong>{pivotPoint ? pivotPoint.toFixed(2) : "--"}</strong>, indicating a{" "}
          <span className={isBullish ? "text-success fw-bold" : "text-danger fw-bold"}>
            {isBullish ? "bullish" : "bearish"}
          </span>{" "}
          trend on the monthly timeframe.
        </p>
        <p>
          Resistance to watch: <strong>R1 ({pivotData.R1})</strong>. Key support:{" "}
          <strong>S1 ({pivotData.S1})</strong>.
        </p>
      </div>
    </main>
  );
};

export default Germany40Insights;
