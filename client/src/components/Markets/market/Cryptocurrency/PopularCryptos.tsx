import React from 'react';

const popularCryptos = [
  { id: 'bitcoin', name: 'Bitcoin', icon: '/icons/bitcoin.png' },
  { id: 'ethereum', name: 'Ethereum', icon: '/icons/ethereum.png' },
  { id: 'litecoin', name: 'Litecoin', icon: '/icons/litecoin.png' },
  { id: 'ripple', name: 'Ripple', icon: '/icons/ripple.png' },
];

const PopularCryptos = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-5" style={{ color: '#FF7A00' }}>
          Popular Cryptocurrencies
        </h2>

        <div className="row justify-content-center">
          {popularCryptos.map((crypto) => (
            <div key={crypto.id} className="col-6 col-md-3 mb-4">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex flex-column align-items-center">
                <img
                  src={crypto.icon}
                  alt={crypto.name}
                  height={50}
                  className="mb-3"
                  style={{ objectFit: 'contain' }}
                />
                <h6 className="fw-semibold mb-0">{crypto.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCryptos;
