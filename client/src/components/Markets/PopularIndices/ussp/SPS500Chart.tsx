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

const SPS500Chart: React.FC = () => {
  const [price, setPrice] = useState<number | null>(5601.0); // Default fallback
  const [high, setHigh] = useState<number | null>(null);
  const [low, setLow] = useState<number | null>(null);
  const [prevClose, setPrevClose] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('--');
  const [flashPrice, setFlashPrice] = useState(false);

  const prevPriceRef = useRef<number | null>(null);

  const changePercent =
    price !== null && prevClose !== null
      ? ((price - prevClose) / prevClose) * 100
      : null;

  useEffect(() => {
    const socket = new WebSocket(
      'wss://ws.twelvedata.com/v1/quotes/price?apikey=fba60fe5f065465795f66506e7df063b'
    );

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          action: 'subscribe',
          params: { symbols: 'SPX' },
        })
      );
    };

    socket.onmessage = (event) => {
      try {
        const data: PriceData = JSON.parse(event.data);
        if (data.symbol === 'SPX' && data.price) {
          const newPrice = typeof data.price === 'string' ? parseFloat(data.price) : data.price;

          if (newPrice !== prevPriceRef.current) {
            setFlashPrice(true);
            setTimeout(() => setFlashPrice(false), 300);
            prevPriceRef.current = newPrice;
          }

          setPrice(newPrice);
          setHigh(data.daily_high ? parseFloat(String(data.daily_high)) : null);
          setLow(data.daily_low ? parseFloat(String(data.daily_low)) : null);
          setPrevClose(data.prev_close ? parseFloat(String(data.prev_close)) : null);
          setLastUpdated(new Date().toLocaleTimeString());
        }
      } catch (error) {
        console.error('WebSocket parsing error:', error);
      }
    };

    socket.onerror = (err) => console.error('WebSocket error:', err);
    socket.onclose = (event) => console.info('WebSocket closed:', event.reason);

    return () => socket.close();
  }, []);

  return (
    <div className="w-100 bg-[#fff7ee] py-5">
      <div className="container bg-white rounded-3 shadow border border-warning overflow-hidden">
        {/* Header */}
        <header
          className="bg-warning bg-opacity-25 text-[#f24521] text-center fw-bold py-3 fs-4 rounded-top-3"
        >
          US S&P 500 Live Chart (SPX)
        </header>

        <div className="row g-0">
          {/* Chart */}
          <section className="col-lg-9 p-4" style={{ minHeight: 600 }}>
            <AdvancedRealTimeChart
              symbol="TVC:SPX"
              theme="light"
              locale="en"
              allow_symbol_change={false}
              autosize
              withdateranges
              hide_side_toolbar={true}  // Hide side toolbar (symbol selector)
              hide_top_toolbar={true}   // Hide top toolbar for clean UI
              style="1"
              container_id="sp500_chart_container"
            />
          </section>

          {/* Market Summary */}
          <aside className="col-lg-3 bg-warning bg-opacity-10 p-4 border-start border-warning d-flex flex-column justify-content-between rounded-end-3">
            <div>
              <h5 className="text-center fw-semibold text-[#f24521] mb-4">Market Summary</h5>

              {/* Current Price */}
              <div className="text-center mb-4">
                <small className="text-uppercase text-secondary fw-semibold">Current Price</small>
                <div
                  className={`fs-3 fw-bold text-dark ${
                    flashPrice ? 'bg-warning bg-opacity-25 px-3 py-1 rounded' : ''
                  }`}
                >
                  {price !== null ? price.toFixed(2) : '--'}
                </div>
              </div>

              {/* High & Low */}
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <small className="text-uppercase text-secondary fw-medium">Low</small>
                  <div className="fw-bold text-dark">
                    {low !== null ? low.toFixed(2) : '--'}
                  </div>
                </div>
                <div className="text-end">
                  <small className="text-uppercase text-secondary fw-medium">High</small>
                  <div className="fw-bold text-dark">
                    {high !== null ? high.toFixed(2) : '--'}
                  </div>
                </div>
              </div>

              {/* Change % */}
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted fw-medium">Change %</span>
                <span
                  className={`fw-bold ${
                    changePercent !== null && changePercent < 0 ? 'text-danger' : 'text-success'
                  }`}
                >
                  {changePercent !== null ? `${changePercent.toFixed(2)}%` : '--'}
                </span>
              </div>

              <p className="text-center text-muted small mt-3">Updated at: {lastUpdated}</p>
            </div>

            {/* Buttons */}
            <div className="mt-4">
              <Button variant="success" className="w-100 fw-bold mb-2 rounded-2 py-2">
                Open Live Account
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

export default SPS500Chart;
