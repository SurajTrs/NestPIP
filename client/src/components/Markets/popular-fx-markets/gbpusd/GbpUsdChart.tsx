'use client';

import React, { useEffect, useState, useRef } from 'react';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';
import { Button } from 'react-bootstrap';

interface PriceData {
  symbol: string;
  price: string | number;
  daily_high?: string | number;
  daily_low?: string | number;
  prev_close?: string | number;
}

const GbpUsdChart: React.FC = () => {
  const [price, setPrice] = useState<number | null>(null);
  const [high, setHigh] = useState<number | null>(null);
  const [low, setLow] = useState<number | null>(null);
  const [prevClose, setPrevClose] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('--');
  const [flashBuy, setFlashBuy] = useState(false);
  const [flashSell, setFlashSell] = useState(false);

  const spread = 0.00012; // Typical GBP/USD spread
  const buyPrice = price !== null ? (price + spread).toFixed(5) : '--';
  const sellPrice = price !== null ? (price - spread).toFixed(5) : '--';
  const change =
    price !== null && prevClose !== null ? ((price - prevClose) / prevClose) * 100 : null;

  // Using a ref to keep track of previous price to avoid stale closure in timeout
  const prevPriceRef = useRef<number | null>(null);

  useEffect(() => {
    const socket = new WebSocket(
      'wss://ws.twelvedata.com/v1/quotes/price?apikey=fba60fe5f065465795f66506e7df063b'
    );

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          action: 'subscribe',
          params: { symbols: 'GBPUSD' }, // Twelve Data expects no slash in symbol here
        })
      );
    };

    socket.onmessage = (event) => {
      try {
        const data: PriceData = JSON.parse(event.data);

        if (data.symbol === 'GBPUSD' && data.price) {
          const newPrice = typeof data.price === 'string' ? parseFloat(data.price) : data.price;

          if (newPrice !== prevPriceRef.current) {
            setFlashBuy(true);
            setFlashSell(true);

            setTimeout(() => {
              setFlashBuy(false);
              setFlashSell(false);
            }, 300);

            prevPriceRef.current = newPrice;
          }

          setPrice(newPrice);

          if (data.daily_high !== undefined)
            setHigh(typeof data.daily_high === 'string' ? parseFloat(data.daily_high) : data.daily_high);

          if (data.daily_low !== undefined)
            setLow(typeof data.daily_low === 'string' ? parseFloat(data.daily_low) : data.daily_low);

          if (data.prev_close !== undefined)
            setPrevClose(typeof data.prev_close === 'string' ? parseFloat(data.prev_close) : data.prev_close);

          setLastUpdated(new Date().toLocaleTimeString());
        }
      } catch (error) {
        // Handle JSON parsing errors or unexpected data formats gracefully
        console.error('WebSocket message parsing error:', error);
      }
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socket.onclose = (event) => {
      console.info('WebSocket closed:', event.reason);
    };

    // Cleanup on component unmount
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="w-100 bg-[#fff7ee] py-5">
      <div className="container bg-white rounded-3 shadow border border-orange-200 overflow-hidden">
        {/* Header */}
        <header className="bg-orange-100 text-orange-700 text-center fw-bold py-3 fs-4 rounded-top-3">
          GBP/USD (British Pound / US Dollar) Live Chart
        </header>

        <div className="row g-0">
          {/* TradingView Chart */}
          <section className="col-lg-9 p-4" style={{ minHeight: 600 }}>
            <AdvancedRealTimeChart
              symbol="FX:GBPUSD"
              theme="light"
              locale="en"
              allow_symbol_change={false}
              hide_side_toolbar={false}
              autosize
              withdateranges
              style="1"
              container_id="gbpusd_chart_container"
            />
          </section>

          {/* Market Summary Sidebar */}
          <aside className="col-lg-3 bg-orange-50 p-4 border-start border-orange-200 d-flex flex-column justify-content-between rounded-end-3">
            <div>
              <h5 className="text-center fw-semibold text-orange-800 mb-4">Market Summary</h5>

              <div className="d-flex justify-content-between align-items-center mb-4">
                {/* Sell */}
                <div className="text-start">
                  <small className="text-uppercase text-danger fw-semibold">Sell</small>
                  <div
                    className={`fs-4 fw-bold text-danger ${
                      flashSell ? 'bg-danger bg-opacity-10 px-2 rounded' : ''
                    }`}
                  >
                    {sellPrice}
                  </div>
                </div>

                {/* Buy */}
                <div className="text-end">
                  <small className="text-uppercase text-success fw-semibold">Buy</small>
                  <div
                    className={`fs-4 fw-bold text-success ${
                      flashBuy ? 'bg-success bg-opacity-10 px-2 rounded' : ''
                    }`}
                  >
                    {buyPrice}
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between mb-3">
                {/* Low */}
                <div className="text-start">
                  <small className="text-uppercase text-secondary fw-medium">Low</small>
                  <div className="fw-bold text-dark">{low !== null ? low.toFixed(5) : '--'}</div>
                </div>

                {/* High */}
                <div className="text-end">
                  <small className="text-uppercase text-secondary fw-medium">High</small>
                  <div className="fw-bold text-dark">{high !== null ? high.toFixed(5) : '--'}</div>
                </div>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted fw-medium">Change</span>
                <span className={`fw-bold ${change !== null && change < 0 ? 'text-danger' : 'text-success'}`}>
                  {change !== null ? `${change.toFixed(4)}%` : '--'}
                </span>
              </div>

              <p className="text-center text-muted small mt-3">Updated at: {lastUpdated}</p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4">
              <Button variant="success" className="w-100 fw-bold mb-2 rounded-2 py-2">
                Start Trading
              </Button>
              <Button variant="outline-primary" className="w-100 fw-bold rounded-2 py-2">
                Try Demo
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default GbpUsdChart;
