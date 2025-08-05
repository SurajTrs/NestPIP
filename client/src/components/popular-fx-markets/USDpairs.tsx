import React, { useEffect, useState } from "react";

interface PairData {
  price: number;
  change: number;
  changePct: number;
  lastUpdated: string;
}

const pairs = ["USD/CAD", "USD/JPY", "EUR/USD", "GBP/USD", "AUD/USD", "CAD/JPY"];

const ForexLiveCardsHorizontal: React.FC = () => {
  const [data, setData] = useState<Record<string, PairData>>({});

  useEffect(() => {
    const socket = new WebSocket(
      "wss://ws.twelvedata.com/v1/quotes/price?apikey=fba60fe5f065465795f66506e7df063b"
    );

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          action: "subscribe",
          params: { symbols: pairs.join(",") },
        })
      );
    };

    socket.onmessage = (event: MessageEvent) => {
      const msg = JSON.parse(event.data);
      if (msg.symbol && pairs.includes(msg.symbol)) {
        setData((prev) => ({
          ...prev,
          [msg.symbol]: {
            price: parseFloat(msg.price),
            change: parseFloat(msg.change),
            changePct: parseFloat(msg.percent_change),
            lastUpdated: new Date().toLocaleTimeString(),
          },
        }));
      }
    };

    return () => socket.close();
  }, []);

  return (
    <div className="max-w-full p-4 bg-white border border-gray-300 rounded-xl shadow-lg overflow-x-auto">
      <h1 className="text-center text-2xl font-bold mb-6">Live Forex Prices</h1>
      <div className="flex space-x-4 min-w-max">
        {pairs.map((pair) => {
          const pairData = data[pair];
          const isPositive = pairData ? pairData.change >= 0 : true;

          return (
            <div
              key={pair}
              className="w-48 border border-gray-300 rounded-lg p-4 shadow flex flex-col"
            >
              <div className="text-lg font-semibold mb-2">{pair}</div>
              <div className="flex justify-between text-xl font-bold mb-1">
                <span>{pairData ? pairData.price.toFixed(5) : "Loading..."}</span>
                <span className={isPositive ? "text-green-600" : "text-red-600"}>
                  {pairData
                    ? (isPositive ? "+" : "") + pairData.changePct.toFixed(2) + "%"
                    : "--"}
                </span>
              </div>
              <div className={isPositive ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
                {pairData ? (isPositive ? "+" : "") + pairData.change.toFixed(3) : "--"}
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-sm text-gray-500 mt-4 text-center">
        Updated at {Object.values(data)[0]?.lastUpdated || "--"}
      </p>
    </div>
  );
};

export default ForexLiveCardsHorizontal;
