'use client';

import React, { useEffect, useState } from 'react';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';
import { Button } from 'react-bootstrap';

const NvidiaChart = () => {
  const price = 164.882;
  const change = 0.02; // in percent
  const changeValue = 0.033;
  const high = 167.12;
  const low = 162.25;
  const spread = 0.01;

  const buyPrice = (price + spread).toFixed(3);
  const sellPrice = (price - spread).toFixed(3);

  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    const time = new Date().toLocaleTimeString('en-GB');
    setLastUpdated(time);
  }, []);

  return (
    <div className="w-full bg-[#fff1e6] py-5">
      <div className="mx-auto max-w-screen-xl bg-white rounded-2xl shadow-lg border border-[#f24521]/30 overflow-hidden">
        {/* Header */}
        <div className="text-center py-4 bg-[#ffe0d1] text-[#f24521] font-bold text-2xl rounded-t-2xl">
          Nvidia Corp. Live Chart
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Chart */}
          <div className="col-span-3 p-4">
            <div style={{ height: '600px', width: '100%' }}>
              <AdvancedRealTimeChart
                symbol="NASDAQ:NVDA"
                theme="light"
                locale="en"
                allow_symbol_change={false}
                hide_side_toolbar={false}
                autosize
                withdateranges
                style="1"
                container_id="nvidia_chart_container"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-1 bg-[#fff3e8] p-4 border-l border-[#f24521]/20">
            <div className="text-center font-semibold text-lg mb-3 text-[#f24521]">
              Market Summary
            </div>

            {/* Sell / Buy */}
            <div className="d-flex justify-content-between align-items-center mb-4 px-2">
              <div className="d-flex flex-column text-start">
                <small className="text-uppercase text-danger fw-semibold">Sell</small>
                <span className="fs-4 fw-bold text-danger">{sellPrice}</span>
              </div>
              <div className="d-flex flex-column text-end">
                <small className="text-uppercase text-success fw-semibold">Buy</small>
                <span className="fs-4 fw-bold text-success">{buyPrice}</span>
              </div>
            </div>

            {/* High / Low */}
            <div className="d-flex justify-content-between align-items-center mb-4 px-2">
              <div className="d-flex flex-column text-start">
                <small className="text-uppercase text-secondary fw-medium">Low</small>
                <span className="fw-bold text-dark">{low.toFixed(2)}</span>
              </div>
              <div className="d-flex flex-column text-end">
                <small className="text-uppercase text-secondary fw-medium">High</small>
                <span className="fw-bold text-dark">{high.toFixed(2)}</span>
              </div>
            </div>

            {/* Change */}
            <div className={`mb-3 font-semibold ${change < 0 ? 'text-red-600' : 'text-green-600'}`}>
              CHANGE: +{changeValue.toFixed(3)} ({change.toFixed(2)}%)
            </div>

            {/* Timestamp */}
            {lastUpdated && (
              <p className="text-sm text-gray-500 text-center mb-3">
                Last updated: {lastUpdated}
              </p>
            )}

            {/* Buttons */}
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

export default NvidiaChart;
