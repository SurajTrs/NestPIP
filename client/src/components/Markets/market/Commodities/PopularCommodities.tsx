import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const commodities = [
  {
    name: 'Gold (XAU/USD)',
    icon: '/icons/gold.svg',
    description:
      'A safe-haven asset used to hedge against inflation and economic uncertainty.',
  },
  {
    name: 'Crude Oil (WTI, Brent)',
    icon: '/icons/oil.svg',
    description:
      'The global economy’s fuel. Oil prices impact transportation, industry, and energy markets.',
  },
  {
    name: 'Natural Gas',
    icon: '/icons/natural-gas.svg',
    description:
      'A high-volatility commodity impacted by geopolitics, demand, and seasonality.',
  },
  {
    name: 'Silver (XAG/USD)',
    icon: '/icons/silver.svg',
    description:
      'A precious metal with industrial uses in electronics, medical devices, and solar tech.',
  },
  {
    name: 'Copper',
    icon: '/icons/copper.svg', // Replace with your actual icon
    description:
      'Industrial metal used in wiring and construction. Tracks manufacturing activity globally.',
  },
  {
    name: 'Wheat',
    icon: '/icons/wheat.svg', // Replace with your actual icon
    description:
      'Key global food crop. Prices influenced by climate, demand, and international trade.',
  },
];

const PopularCommodities = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-5" style={{ color: '#f24521' }}>
          Popular Commodities Available on NestPip
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {commodities.map((commodity, idx) => (
            <SwiperSlide key={idx}>
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 d-flex flex-column align-items-center text-center">
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
                <h6 className="fw-semibold mb-2">{commodity.name}</h6>
                <p style={{ fontSize: '0.875rem', color: '#555' }}>
                  {commodity.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularCommodities;
