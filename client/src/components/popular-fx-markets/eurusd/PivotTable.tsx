import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type PivotData = Record<string, string>;

interface PivotTableProps {
  title: string;
  data: PivotData;
}

const PivotTable: React.FC<PivotTableProps> = ({ title, data }) => (
  <section className="bg-white rounded border border-warning p-4 mb-4 shadow-sm">
    <h2 className="h5 text-warning mb-3">{title}</h2>
    <div className="row row-cols-2 row-cols-md-3 g-3">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="d-flex justify-content-between border-bottom py-2">
          <span className="text-muted text-capitalize">{key.replace(/_/g, " ")}</span>
          <span className="fw-semibold text-dark">{value}</span>
        </div>
      ))}
    </div>
  </section>
);

const EURUSDPage: React.FC = () => {
  const [bid, setBid] = useState("1.17241");
  const [offer, setOffer] = useState("1.17256");
  const [dailyHigh, setDailyHigh] = useState<number | null>(null);
  const [dailyLow, setDailyLow] = useState<number | null>(null);
  const [prevClose, setPrevClose] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  useEffect(() => {
    const socket = new WebSocket(
      "wss://ws.twelvedata.com/v1/quotes/price?apikey=fba60fe5f065465795f66506e7df063b"
    );

    socket.onopen = () => {
      socket.send(JSON.stringify({ action: "subscribe", params: { symbols: "EUR/USD" } }));
    };

    socket.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      if (data.symbol === "EUR/USD") {
        if (data.bid) setBid(parseFloat(data.bid).toFixed(5));
        if (data.ask) setOffer(parseFloat(data.ask).toFixed(5));
        if (data.daily_high) setDailyHigh(parseFloat(data.daily_high));
        if (data.daily_low) setDailyLow(parseFloat(data.daily_low));
        if (data.prev_close) setPrevClose(parseFloat(data.prev_close));
        setLastUpdated(new Date().toLocaleTimeString());
      }
    };

    return () => socket.close();
  }, []);

  const pivotPoint =
    dailyHigh !== null && dailyLow !== null && prevClose !== null
      ? (dailyHigh + dailyLow + prevClose) / 3
      : null;

  const range = dailyHigh !== null && dailyLow !== null ? (dailyHigh - dailyLow) : null;

  const S1 = pivotPoint !== null && dailyHigh !== null ? 2 * pivotPoint - dailyHigh : null;
  const S2 = pivotPoint !== null && range !== null ? pivotPoint - range : null;
  const S3 = S2 !== null && range !== null ? S2 - range : null;

  const R1 = pivotPoint !== null && dailyLow !== null ? 2 * pivotPoint - dailyLow : null;
  const R2 = pivotPoint !== null && range !== null ? pivotPoint + range : null;
  const R3 = R2 !== null && range !== null ? R2 + range : null;

  const monthlyData: PivotData = {
    "Pivot Point": pivotPoint?.toFixed(5) || "--",
    High: dailyHigh?.toFixed(5) || "--",
    Bid: bid,
    Low: dailyLow?.toFixed(5) || "--",
    Offer: offer,
    Close: prevClose?.toFixed(5) || "--",
    Distance: pivotPoint !== null ? (parseFloat(bid) - pivotPoint).toFixed(5) : "--",
    S1: S1?.toFixed(5) || "--",
    S2: S2?.toFixed(5) || "--",
    S3: S3?.toFixed(5) || "--",
    R1: R1?.toFixed(5) || "--",
    R2: R2?.toFixed(5) || "--",
    R3: R3?.toFixed(5) || "--",
    "Last Updated": lastUpdated,
  };

  const isBullish = pivotPoint !== null && parseFloat(bid) > pivotPoint;

  return (
    <div className="container py-5" style={{ backgroundColor: "#fffdf7" }}>
      <h1 className="text-center mb-5 text-success fw-bold">
        EUR/USD Monthly Pivot Analysis
      </h1>

      <PivotTable title="Monthly Pivot Points (Dynamic)" data={monthlyData} />

      <div className="p-4 rounded border border-success bg-light-subtle text-success">
        <h4 className="fw-semibold mb-3">Technical Sentiment</h4>
        <p>
          Current bid <strong>{bid}</strong> is{" "}
          <strong>{isBullish ? "above" : "below"}</strong> the pivot point{" "}
          <strong>{pivotPoint?.toFixed(5) || "--"}</strong>, indicating a{" "}
          <span className={`fw-bold ${isBullish ? "text-success" : "text-danger"}`}>
            {isBullish ? "bullish" : "bearish"}
          </span>{" "}
          trend on the monthly timeframe.
        </p>
        <p>
          Immediate resistance: <strong>R1 ({monthlyData.R1})</strong>. Support to monitor:{" "}
          <strong>S1 ({monthlyData.S1})</strong>.
        </p>
      </div>
    </div>
  );
};

export default EURUSDPage;
