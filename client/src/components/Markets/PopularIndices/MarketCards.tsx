import React from 'react';

const indexData = [
  { name: 'Wall Street', price: '44292', changePercent: '-0.24%', changeValue: '-107.000' },
  { name: 'US SP 500', price: '6216.3', changePercent: '-0.20%', changeValue: '-12.700' },
  { name: 'US Tech 100', price: '22636.5', changePercent: '-0.21%', changeValue: '-48.650' },
  { name: 'Hong Kong 50', price: '23849', changePercent: '+0.05%', changeValue: '+11.000' },
  { name: 'Japan 225', price: '39360', changePercent: '-0.84%', changeValue: '-332.000' },
  { name: 'Germany 40', price: '23944.4', changePercent: '-0.41%', changeValue: '-97.500' },
];

const MarketCards: React.FC = () => {
  return (
    <div className="w-full py-6 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {indexData.map((item, idx) => {
          const isPositive = item.changePercent.startsWith('+');
          const changeColor = isPositive ? 'text-green-600' : 'text-red-600';

          return (
            <div
              key={idx}
              className="bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-3 text-center"
            >
              <h3 className="text-sm font-semibold text-gray-800 mb-1">{item.name}</h3>
              <p className="text-lg font-bold text-gray-900">{item.price}</p>
              <p className={`text-sm mt-1 font-medium ${changeColor}`}>
                {item.changePercent} {item.changeValue}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketCards;
