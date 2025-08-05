'use client';

import React, { useEffect, useState } from 'react';


const XAUUSDInsights: React.FC = () => {
  const [price, setPrice] = useState<number | null>(null);
  const [high, setHigh] = useState<number | null>(null);
  const [low, setLow] = useState<number | null>(null);
  const [prevClose, setPrevClose] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  const symbol = 'XAU/USD';
  const apikey = 'fba60fe5f065465795f66506e7df063b';

  // Fetch static metrics once
  useEffect(() => {
    const fetchDailyStats = async () => {
      try {
        const res = await fetch(
          `https://api.twelvedata.com/quote?symbol=${encodeURIComponent(symbol)}&apikey=${apikey}`
        );
        const data = await res.json();
        if (data && !data.code) {
          setHigh(parseFloat(data.high));
          setLow(parseFloat(data.low));
          setPrevClose(parseFloat(data.previous_close));
        }
      } catch (err) {
        console.error('Failed to fetch daily stats:', err);
      }
    };

    fetchDailyStats();
  }, []);

  // Real-time price updates
  useEffect(() => {
    const socket = new WebSocket(`wss://ws.twelvedata.com/v1/quotes/price?apikey=${apikey}`);

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          action: 'subscribe',
          params: { symbols: symbol },
        })
      );
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.symbol === symbol && data.price) {
        setPrice(parseFloat(data.price));
        setLastUpdated(new Date().toLocaleTimeString());
      }
    };

    return () => socket.close();
  }, []);

  const change =
    price !== null && prevClose !== null ? ((price - prevClose) / prevClose) * 100 : null;

  return (
    <section className="bg-light py-5">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold" style={{ color: '#f24521' }}>
          XAU/USD Insights
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-8 bg-white rounded shadow p-4">
            <h3 className="mb-3">
              Current Price:{' '}
              {price !== null ? (
                <span className="text-dark">{price.toFixed(2)}</span>
              ) : (
                <span className="text-muted">--</span>
              )}
            </h3>
            <p>
              <strong>Change:</strong>{' '}
              {change !== null ? (
                <span className={change >= 0 ? 'text-success' : 'text-danger'}>
                  {change >= 0 ? '+' : ''}
                  {change.toFixed(2)}%
                </span>
              ) : (
                <span className="text-muted">--</span>
              )}
            </p>
            <p>
              <strong>Day’s High:</strong>{' '}
              {high !== null ? high.toFixed(2) : <span className="text-muted">--</span>}
            </p>
            <p>
              <strong>Day’s Low:</strong>{' '}
              {low !== null ? low.toFixed(2) : <span className="text-muted">--</span>}
            </p>
            <p className="text-muted small">
              Last updated at: {lastUpdated ?? '--'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XAUUSDInsights;
