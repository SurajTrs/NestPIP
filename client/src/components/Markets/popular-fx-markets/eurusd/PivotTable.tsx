import React, { useEffect, useState } from "react";

type PivotData = Record<string, string>;

interface PivotTableProps {
  title: string;
  data: PivotData;
}

const PivotTable: React.FC<PivotTableProps> = ({ title, data }) => (
  <section className="bg-white rounded shadow p-4 border border-warning mb-4">
    <h2 className="h5 mb-4 text-orange fw-bold">{title}</h2>
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

const PivotTablePage: React.FC = () => {
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

    return () => {
      socket.close();
    };
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
    <main className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-orange">EUR/USD Monthly Pivot Analysis</h1>
        <p className="text-muted">Live dynamic pivot points with sentiment insights</p>
      </div>

      <PivotTable title="Monthly Pivot Points (Live)" data={monthlyData} />

      <div className="alert border border-warning bg-warning-subtle text-dark">
        <h5 className="alert-heading fw-bold">Technical Sentiment</h5>
        <p className="mb-2">
          Current bid <strong>{bid}</strong> is{" "}
          <strong>{isBullish ? "above" : "below"}</strong> the pivot point{" "}
          <strong>{pivotPoint ? pivotPoint.toFixed(5) : "--"}</strong>, indicating a{" "}
          <span className={isBullish ? "text-success fw-bold" : "text-danger fw-bold"}>
            {isBullish ? "bullish" : "bearish"}
          </span>{" "}
          trend on the monthly timeframe.
        </p>
        <p>
          Immediate resistance to watch: <strong>R1 ({monthlyData.R1})</strong>. First support:{" "}
          <strong>S1 ({monthlyData.S1})</strong>.
        </p>
      </div>
    </main>
  );
};

export default PivotTablePage;
