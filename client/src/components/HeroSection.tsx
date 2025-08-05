import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner: React.FC = () => {
  return (
    <section className="banner pt-5 pb-4  position-relative text-white d-flex align-items-center">
      {/* Background video */}
      <video
        className="banner-video position-absolute w-100 h-100"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/Banner6.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="overlay position-absolute w-100 h-100" />

      {/* Content */}
      <div className="container position-relative z-2 text-white">
        <div className="row justify-content-start ">
          <div className="col-12 col-md-10 col-lg-7 px-3 px-md-5 text-md-start text-center">
            <h1 className="display-heading fw-bold mb-3 heading-orange animate fadeInUp delay-1">
              Trade Global Markets Online with Nestpip
            </h1>
            <p className="lead-text mb-4 animate fadeInUp delay-2">
              Forex, Crypto, Stocks & More in One Powerful Platform
            </p>

            <ul className="list-unstyled mb-4 feature-list">
              <li className="animate fadeInUp delay-3">
                ✅ 500+ Instruments — Forex, Crypto, Stocks, Indices, Commodities
              </li>
              <li className="animate fadeInUp delay-4">
                ✅ Designed for Beginners and Professional Traders
              </li>
              <li className="animate fadeInUp delay-5">
                ✅ Real-Time Data & Advanced Trading Tools
              </li>
              <li className="animate fadeInUp delay-6">
                ✅ Secure & Reliable with Cutting-Edge Technology
              </li>
            </ul>

            <button className="btn btn-lg btn-orange animate fadeInUp delay-7">
              Start Trading Now
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .banner {
          min-height: 75vh;
          background: black;
          overflow: hidden;
        }

        .banner-video {
          object-fit: cover;
          top: 0;
          left: 0;
          z-index: 0;
          filter: blur(4px);
          transform: scale(1.1);
        }

        .overlay {
          background: rgba(0, 0, 0, 0.6);
          top: 0;
          left: 0;
          z-index: 1;
        }

        .container {
          z-index: 2;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
        }

        .heading-orange {
          color: #f24521;
        }

        .btn-orange {
          background-color: #f24521;
          color: white;
          font-weight: 600;
          padding: 0.7rem 2.5rem;
          transition: background-color 0.3s ease;
          border: none;
        }

        .btn-orange:hover,
        .btn-orange:focus {
          background-color: #d7371a;
          border-color: #d7371a;
        }

        .display-heading {
          font-size: clamp(1.8rem, 5vw, 3.5rem);
          line-height: 1.2;
        }

        .lead-text {
          font-size: clamp(1rem, 2.5vw, 1.4rem);
        }

        .feature-list li {
          font-size: clamp(0.95rem, 2.2vw, 1.2rem);
          margin-bottom: 0.6rem;
        }

        /* Animation */
        .animate {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease forwards;
        }
        .fadeInUp {
          animation-name: fadeInUp;
        }
        .delay-1 { animation-delay: 0.3s; }
        .delay-2 { animation-delay: 0.6s; }
        .delay-3 { animation-delay: 0.9s; }
        .delay-4 { animation-delay: 1.2s; }
        .delay-5 { animation-delay: 1.5s; }
        .delay-6 { animation-delay: 1.8s; }
        .delay-7 { animation-delay: 2.1s; }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Small devices (≤576px) */
        @media (max-width: 576px) {
          .btn {
            width: 100%;
            font-size: 1rem;
          }

          .feature-list li {
            font-size: 0.95rem;
            text-align: left;
          }

          .display-heading {
            font-size: 1.9rem;
          }

          .lead-text {
            font-size: 1rem;
          }
        }

        /* Medium devices (577px–768px) */
        @media (min-width: 577px) and (max-width: 768px) {
          .display-heading {
            font-size: 2.2rem;
          }

          .lead-text {
            font-size: 1.1rem;
          }

          .btn {
            width: 100%;
          }
        }

        /* Large devices (769px–1100px) */
        @media (min-width: 769px) and (max-width: 1100px) {
          .display-heading {
            font-size: 2.7rem;
          }

          .lead-text {
            font-size: 1.2rem;
          }

          .btn-orange {
            font-size: 1rem;
            padding: 0.6rem 2rem;
          }

          .feature-list li {
            font-size: 1.05rem;
          }
        }

        /* Extra large devices (1101px and up) */
        @media (min-width: 1101px) {
          .display-heading {
            font-size: 3.5rem;
          }

          .lead-text {
            font-size: 1.4rem;
          }

          .btn-orange {
            font-size: 1.1rem;
          }

          .feature-list li {
            font-size: 1.2rem;
          }
        }
          
      `}</style>
    </section>
  );
};

export default Banner;
