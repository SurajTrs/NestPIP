'use client';

import React, { useEffect, useState } from 'react';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';
import { Button } from 'react-bootstrap';

const XauUsdChart = () => {
  const [price, setPrice] = useState<number | null>(null);
  const [high, setHigh] = useState<number | null>(null);
  const [low, setLow] = useState<number | null>(null);
  const [prevClose, setPrevClose] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [flashBuy, setFlashBuy] = useState(false);
  const [flashSell, setFlashSell] = useState(false);

  const spread = 0.20; // Approx gold spread in USD
  const buyPrice = price ? (price + spread).toFixed(2) : '--';
  const sellPrice = price ? (price - spread).toFixed(2) : '--';
  const change = price && prevClose ? ((price - prevClose) / prevClose) * 100 : null;

  useEffect(() => {
    const socket = new WebSocket(
      'wss://ws.twelvedata.com/v1/quotes/price?apikey=fba60fe5f065465795f66506e7df063b'
    );

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          action: 'subscribe',
          params: { symbols: 'XAU/USD' },
        })
      );
    };

    socket.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.symbol === 'XAU/USD' && data.price) {
        const newPrice = parseFloat(data.price);

        if (newPrice !== price) {
          setFlashBuy(true);
          setFlashSell(true);
          setTimeout(() => {
            setFlashBuy(false);
            setFlashSell(false);
          }, 300);
        }

        setPrice(newPrice);
        if (data.daily_high) setHigh(parseFloat(data.daily_high));
        if (data.daily_low) setLow(parseFloat(data.daily_low));
        if (data.prev_close) setPrevClose(parseFloat(data.prev_close));

        setLastUpdated(new Date().toLocaleTimeString());
      }
    };

    return () => {
      socket.close();
    };
  }, [price]);

  return (
    <div className="w-full bg-[#fff7ee] py-5">
      <div className="mx-auto max-w-screen-xl bg-white rounded-2xl shadow-lg border border-yellow-300 overflow-hidden">
        <div className="text-center py-4 bg-yellow-100 text-yellow-700 font-bold text-2xl rounded-t-2xl">
          XAU/USD Live Gold Chart
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Chart */}
          <div className="col-span-3 p-4" style={{ height: 600 }}>
            <AdvancedRealTimeChart
              symbol="OANDA:XAUUSD"
              theme="light"
              locale="en"
              allow_symbol_change={false}
              hide_side_toolbar={false}
              autosize
              withdateranges
              style="1"
              container_id="xauusd_chart_container"
            />
          </div>

          {/* Sidebar */}
          <div className="col-span-1 bg-yellow-50 p-5 border-l border-yellow-300 flex flex-col justify-between rounded-tr-2xl rounded-br-2xl">
            <div>
              <h3 className="text-center text-xl font-semibold text-yellow-800 mb-4">
                Market Summary
              </h3>

              <div className="d-flex justify-content-between align-items-center mb-4 px-2">
                {/* Sell */}
                <div className="d-flex flex-column text-start">
                  <small className="text-uppercase text-danger fw-semibold">Sell</small>
                  <span
                    className={`fs-4 fw-bold text-danger ${
                      flashSell ? 'bg-danger bg-opacity-10 px-2 rounded' : ''
                    }`}
                  >
                    {sellPrice}
                  </span>
                </div>

                {/* Buy */}
                <div className="d-flex flex-column text-end">
                  <small className="text-uppercase text-success fw-semibold">Buy</small>
                  <span
                    className={`fs-4 fw-bold text-success ${
                      flashBuy ? 'bg-success bg-opacity-10 px-2 rounded' : ''
                    }`}
                  >
                    {buyPrice}
                  </span>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center px-2 mb-3">
                <div className="d-flex flex-column text-start">
                  <small className="text-uppercase text-secondary fw-medium">Low</small>
                  <span className="fw-bold text-dark">{low ? low.toFixed(2) : '--'}</span>
                </div>

                <div className="d-flex flex-column text-end">
                  <small className="text-uppercase text-secondary fw-medium">High</small>
                  <span className="fw-bold text-dark">{high ? high.toFixed(2) : '--'}</span>
                </div>
              </div>

              {change !== null && (
                <div className="d-flex justify-content-between px-2 mb-3">
                  <span className="font-medium">Change</span>
                  <span className={`fw-bold ${change < 0 ? 'text-danger' : 'text-success'}`}>
                    {change.toFixed(2)}%
                  </span>
                </div>
              )}

              <p className="text-xs text-gray-500 text-center mt-3">
                Updated at: {lastUpdated}
              </p>
            </div>

            <div className="mt-6">
              <Button variant="success" className="w-100 mb-2 fw-semibold text-dark">
                Start Trading
              </Button>
              <Button variant="outline-dark" className="w-100 fw-semibold">
                Try Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XauUsdChart;
