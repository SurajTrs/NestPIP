'use client';

import React, { useEffect, useState } from 'react';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';
import { Button } from 'react-bootstrap';

const Germany40Chart = () => {
  const price = 24244.5;
  const change = 0.18; // in percent
  const high = 24310.2;
  const low = 24001.7;
  const spread = 0.5;

  const buyPrice = (price + spread).toFixed(1);
  const sellPrice = (price - spread).toFixed(1);

  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    // Set time on client to prevent hydration mismatch
    const time = new Date().toLocaleTimeString('en-GB'); // e.g. "16:06:28"
    setLastUpdated(time);
  }, []);

  return (
    <div className="w-full bg-[#fff7ee] py-5">
      <div className="mx-auto max-w-screen-xl bg-white rounded-2xl shadow-lg border border-orange-200 overflow-hidden">
        <div className="text-center py-4 bg-orange-100 text-orange-700 font-bold text-2xl rounded-t-2xl">
          Germany 40 Live Chart
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Chart */}
          <div className="col-span-3 p-4">
            <div style={{ height: '600px', width: '100%' }}>
              <AdvancedRealTimeChart
                symbol="FOREXCOM:GRXEUR"
                theme="light"
                locale="en"
                allow_symbol_change={false}
                hide_side_toolbar={false}
                autosize
                withdateranges
                style="1"
                container_id="germany40_chart_container"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-1 bg-orange-50 p-4 border-l border-orange-200">
            <div className="text-center font-semibold text-lg mb-3 text-orange-800">
              Market Summary
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4 px-2">
              {/* Sell Side */}
              <div className="d-flex flex-column text-start">
                <small className="text-uppercase text-danger fw-semibold">Sell</small>
                <span className="fs-4 fw-bold text-danger">{sellPrice}</span>
              </div>

              {/* Buy Side */}
              <div className="d-flex flex-column text-end">
                <small className="text-uppercase text-success fw-semibold">Buy</small>
                <span className="fs-4 fw-bold text-success">{buyPrice}</span>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4 px-2">
              {/* Low */}
              <div className="d-flex flex-column text-start">
                <small className="text-uppercase text-secondary fw-medium">Low</small>
                <span className="fw-bold text-dark">{low.toFixed(1)}</span>
              </div>

              {/* High */}
              <div className="d-flex flex-column text-end">
                <small className="text-uppercase text-secondary fw-medium">High</small>
                <span className="fw-bold text-dark">{high.toFixed(1)}</span>
              </div>
            </div>

            <div className={`mb-3 font-semibold ${change < 0 ? 'text-red-600' : 'text-green-600'}`}>
              CHANGE: {change.toFixed(2)}%
            </div>

            {lastUpdated && (
              <p className="text-sm text-gray-500 text-center mb-3">
                Last updated: {lastUpdated}
              </p>
            )}

            <Button variant="success" className="w-100 mb-2">
              Start Trading
            </Button>
            <Button variant="outline-primary" className="w-100">
              Try Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Germany40Chart;
