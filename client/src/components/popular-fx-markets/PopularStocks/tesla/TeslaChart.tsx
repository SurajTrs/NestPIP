'use client';

import React from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import Button from 'react-bootstrap/Button';

const TeslaChart: React.FC = () => {
  const price = 267.12;
  const prevClose = 263.85;
  const change = ((price - prevClose) / prevClose) * 100;

  const high = 270.0;
  const low = 261.0;

  const spread = 0.5;
  const buyPrice = (price + spread).toFixed(2);
  const sellPrice = (price - spread).toFixed(2);

  const lastUpdated = new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className="w-full bg-[#f0f6ff] py-5">
      <div className="mx-auto max-w-screen-xl bg-white rounded-2xl shadow-lg border border-blue-200 overflow-hidden">
        <div className="text-center py-4 bg-blue-100 text-blue-800 font-bold text-2xl rounded-top">
          Tesla (TSLA) Live Chart
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4">
         
          <div className="col-span-3 p-4">
            <div style={{ height: "600px", width: "100%" }}>
              <AdvancedRealTimeChart
                symbol="NASDAQ:TSLA"
                theme="light"
                locale="en"
                allow_symbol_change={false}
                hide_side_toolbar={false}
                autosize
                withdateranges
                style="1"
                container_id="tesla_chart_container"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-1 bg-blue-50 p-4 border-start border-blue-200">
            <div className="text-center font-semibold text-lg mb-3 text-blue-800">
              Market Summary
            </div>

            <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded border border-primary shadow-sm mb-4">
              <div className="text-center">
                <div className="text-secondary small">SELL</div>
                <div className="text-success fw-bold fs-5">${sellPrice}</div>
              </div>
              <div
                className="vr mx-4"
                style={{ height: "40px", backgroundColor: "#b3d4fc" }}
              ></div>
              <div className="text-center">
                <div className="text-secondary small">BUY</div>
                <div className="text-danger fw-bold fs-5">${buyPrice}</div>
              </div>
            </div>

            <div className="flex justify-between text-2xl mb-3">
              <span className="bg-green-100 px-2 rounded">${sellPrice}</span>
              <span className="bg-red-100 px-2 rounded">${buyPrice}</span>
            </div>

            <p className="mb-1">
              LOW: <strong>${low.toFixed(2)}</strong>
            </p>
            <p className="mb-1">
              HIGH: <strong>${high.toFixed(2)}</strong>
            </p>

            <p
              className={`mb-3 font-semibold ${
                change < 0 ? "text-danger" : "text-success"
              }`}
            >
              CHANGE: {change.toFixed(2)}%
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

export default TeslaChart;
