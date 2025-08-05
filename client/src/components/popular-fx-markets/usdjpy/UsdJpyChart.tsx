import React, { useEffect, useState } from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { Button } from "react-bootstrap";
import _ from "lodash";

type ForexData = {
  symbol: string;
  price?: string;
  daily_high?: string;
  daily_low?: string;
  prev_close?: string;
};

const UsdJpyChartWithSidebar: React.FC = () => {
  const [price, setPrice] = useState<number | null>(null);
  const [high, setHigh] = useState<number | null>(null);
  const [low, setLow] = useState<number | null>(null);
  const [prevClose, setPrevClose] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [flashBuy, setFlashBuy] = useState(false);
  const [flashSell, setFlashSell] = useState(false);

  const spread = 0.017; // Approx. 1.7 pips for USD/JPY
  const buyPrice = price !== null ? (price + spread).toFixed(3) : "--";
  const sellPrice = price !== null ? (price - spread).toFixed(3) : "--";
  const change =
    price !== null && prevClose !== null
      ? ((price - prevClose) / prevClose) * 100
      : null;

  useEffect(() => {
    const socket = new WebSocket(
      "wss://ws.twelvedata.com/v1/quotes/price?apikey=fba60fe5f065465795f66506e7df063b"
    );

    socket.onopen = () => {
      socket.send(
        JSON.stringify({ action: "subscribe", params: { symbols: "USD/JPY" } })
      );
    };

    socket.onmessage = (msg: MessageEvent) => {
      const data: ForexData = JSON.parse(msg.data);

      if (data.symbol === "USD/JPY" && data.price) {
        const newPrice = _.toNumber(data.price);

        if (newPrice !== price) {
          setFlashBuy(true);
          setFlashSell(true);
          setTimeout(() => {
            setFlashBuy(false);
            setFlashSell(false);
          }, 300);
        }

        setPrice(newPrice);
        setHigh(_.toNumber(data.daily_high));
        setLow(_.toNumber(data.daily_low));
        setPrevClose(_.toNumber(data.prev_close));

        const formattedTime = new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        setLastUpdated(formattedTime);
      }
    };

    return () => {
      socket.close();
    };
  }, [price]);

  return (
    <div className="w-full bg-[#fff7ee] py-5">
      <div className="mx-auto max-w-screen-xl bg-white rounded-2xl shadow-lg border border-orange-200 overflow-hidden">
        <div className="text-center py-4 bg-orange-100 text-orange-700 font-bold text-2xl rounded-top">
          USD/JPY Live Chart
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Chart */}
          <div className="col-span-3 p-4">
            <div style={{ height: "600px", width: "100%" }}>
              <AdvancedRealTimeChart
                symbol="FX:USDJPY"
                theme="light"
                locale="en"
                allow_symbol_change={false}
                hide_side_toolbar={false}
                autosize
                withdateranges
                style="1"
                container_id="usdjpy_chart_container"
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
              <span
                className={`transition duration-300 ${
                  flashSell ? "bg-green-100 px-1 rounded" : ""
                }`}
              >
                {sellPrice}
              </span>
              <span
                className={`transition duration-300 ${
                  flashBuy ? "bg-red-100 px-1 rounded" : ""
                }`}
              >
                {buyPrice}
              </span>
            </div>

            <p className="mb-1">
              LOW: <strong>{low !== null ? low.toFixed(3) : "--"}</strong>
            </p>
            <p className="mb-1">
              HIGH: <strong>{high !== null ? high.toFixed(3) : "--"}</strong>
            </p>

            {change !== null && (
              <p
                className={`mb-3 font-semibold ${
                  change < 0 ? "text-danger" : "text-success"
                }`}
              >
                CHANGE: {change.toFixed(4)}%
              </p>
            )}

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

export default UsdJpyChartWithSidebar;
