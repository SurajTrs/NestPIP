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

const ForexChartWithSidebar: React.FC = () => {
  const [price, setPrice] = useState<number | null>(null);
  const [high, setHigh] = useState<number | null>(null);
  const [low, setLow] = useState<number | null>(null);
  const [prevClose, setPrevClose] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [flashBuy, setFlashBuy] = useState(false);
  const [flashSell, setFlashSell] = useState(false);

  const spread = 0.00012;
  const buyPrice = price !== null ? (price + spread).toFixed(5) : "--";
  const sellPrice = price !== null ? (price - spread).toFixed(5) : "--";
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
        JSON.stringify({ action: "subscribe", params: { symbols: "EUR/USD" } })
      );
    };

    socket.onmessage = (msg: MessageEvent) => {
      const data: ForexData = JSON.parse(msg.data);

      if (data.symbol === "EUR/USD" && data.price) {
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
        <div className="text-center py-4 bg-orange-100 text-orange-700 font-bold text-2xl rounded-t-2xl">
          EUR/USD Live Chart
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="col-span-3 p-4">
            <div style={{ height: "600px", width: "100%" }}>
              <AdvancedRealTimeChart
                symbol="FX:EURUSD"
                theme="light"
                locale="en"
                allow_symbol_change={false}
                hide_side_toolbar={false}
                autosize
                withdateranges
                style="1"
                container_id="forex_chart_container"
              />
            </div>
          </div>

          <div className="col-span-1 bg-orange-50 p-4 border-l border-orange-200">
            <div className="text-center font-semibold text-lg mb-3 text-orange-800">
              Market Summary
            </div>

            <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded border border-warning shadow-sm mb-4 background-color: #fff7ee;">
  <div className="text-center">
    <div className="text-secondary small">SELL</div>
    <div className="text-success fw-bold fs-5">1.17311</div>
  </div>
  <div className="vr mx-4 height: 40px; background-color: #f9d9aa;"></div>
  <div className="text-center">
    <div className="text-secondary small">BUY</div>
    <div className="text-danger fw-bold fs-5">1.17323</div>
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
              LOW: <strong>{low !== null ? low.toFixed(5) : "--"}</strong>
            </p>
            <p className="mb-1">
              HIGH: <strong>{high !== null ? high.toFixed(5) : "--"}</strong>
            </p>

            {change !== null && (
              <p
                className={`mb-3 font-semibold ${
                  change < 0 ? "text-red-600" : "text-green-600"
                }`}
              >
                CHANGE: {change.toFixed(4)}%
              </p>
            )}

            <p className="text-sm text-gray-500 text-center mb-3">
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

export default ForexChartWithSidebar;
