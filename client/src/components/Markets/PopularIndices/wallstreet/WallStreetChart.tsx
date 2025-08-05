import React, { useEffect, useState } from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import Button from "react-bootstrap/Button";

const WallStreetChart: React.FC = () => {
  const price = 44309.5;
  const prevClose = 44216.5;
  const change = ((price - prevClose) / prevClose) * 100;

  const high = 44381.0;
  const low = 44025.0;

  const spread = 5.0;
  const buyPrice = (price + spread).toFixed(1);
  const sellPrice = (price - spread).toFixed(1);

  const [lastUpdated, setLastUpdated] = useState<string>("--:--:--");

  useEffect(() => {
    const time = new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    setLastUpdated(time);
  }, []);

  return (
    <div className="w-full bg-[#fff7ee] py-5">
      <div className="mx-auto max-w-screen-xl bg-white rounded-2xl shadow-lg border border-orange-200 overflow-hidden">
        <div className="text-center py-4 bg-orange-100 text-orange-700 font-bold text-2xl rounded-top">
          Wall Street (US30) Live Chart
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Chart */}
          <div className="col-span-3 p-4">
            <div style={{ height: "600px", width: "100%" }}>
              <AdvancedRealTimeChart
                symbol="OANDA:US30USD"
                theme="light"
                locale="en"
                allow_symbol_change={false}
                hide_side_toolbar={false}
                autosize
                withdateranges
                style="1"
                container_id="wallstreet_chart_container"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-1 bg-orange-50 p-4 border-start border-orange-200">
            <div className="text-center font-semibold text-lg mb-3 text-orange-800">
              Market Summary
            </div>

            <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded border border-warning shadow-sm mb-4">
              <div className="text-center">
                <div className="text-secondary small">SELL</div>
                <div className="text-success fw-bold fs-5">{sellPrice}</div>
              </div>
              <div
                className="vr mx-4"
                style={{ height: "40px", backgroundColor: "#f9d9aa" }}
              ></div>
              <div className="text-center">
                <div className="text-secondary small">BUY</div>
                <div className="text-danger fw-bold fs-5">{buyPrice}</div>
              </div>
            </div>

            <div className="flex justify-between text-2xl mb-3">
              <span className="bg-green-100 px-2 rounded">{sellPrice}</span>
              <span className="bg-red-100 px-2 rounded">{buyPrice}</span>
            </div>

            <p className="mb-1">
              LOW: <strong>{low.toFixed(1)}</strong>
            </p>
            <p className="mb-1">
              HIGH: <strong>{high.toFixed(1)}</strong>
            </p>

            <p
              className={`mb-3 font-semibold ${
                change < 0 ? "text-danger" : "text-success"
              }`}
            >
              CHANGE: {change.toFixed(2)}%
            </p>

            <p className="text-sm text-muted text-center mb-3">
              Last updated at: {lastUpdated}
            </p>

            <Button variant="success" className="w-100 mb-2">
              Start Trading
            </Button>
            <Button variant="outline-primary" className="w-100">
              Try a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallStreetChart;
