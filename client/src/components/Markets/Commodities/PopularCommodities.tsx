import React from 'react';

const commodities = [
  { name: 'Gold', icon: '/icons/gold.svg' },
  { name: 'Silver', icon: '/icons/silver.svg' },
  { name: 'Natural Gas', icon: '/icons/natural-gas.svg' },
  { name: 'Oil', icon: '/icons/oil.svg' },
];

const PopularCommodities = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-5" style={{ color: '#FF7A00' }}>
          Popular Commodities
        </h2>

        <div className="row justify-content-center g-4">
          {commodities.map((commodity, idx) => (
            <div className="col-6 col-md-3" key={idx}>
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 d-flex flex-column align-items-center">
                <img
                  src={commodity.icon}
                  alt={commodity.name}
                  height={64}
                  className="mb-3"
                  style={{
                    backgroundColor: '#FFEBD9',
                    borderRadius: '50%',
                    padding: '1rem',
                  }}
                />
                <h6 className="fw-semibold mb-0">{commodity.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCommodities;
