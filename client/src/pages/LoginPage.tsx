'use client'; // Only if using App Router

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './MainNavbar';
import Footer from './Footer';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Logging in as ${username}`);
  };

  return (
    <>
    <MainNavbar/>
    <main className="login-page position-relative">
      {/* Video Background */}
      <video
        className="bg-video position-absolute w-100 h-100"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/login.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional for contrast) */}
      <div className="overlay position-absolute w-100 h-100" />

      {/* Login Card */}
      <div className="login-card glass-card p-5 rounded shadow-lg position-relative">
        <h2 className="text-orange mb-4 text-center fw-bold">Welcome Back</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="username" className="form-label text-white fw-semibold">Username</label>
            <input
              type="text"
              id="username"
              className="form-control bg-transparent text-white border-light input-glass"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label text-white fw-semibold">Password</label>
            <input
              type="password"
              id="password"
              className="form-control bg-transparent text-white border-light input-glass"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check text-white">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="#" className="text-orange text-decoration-none fw-semibold hover-underline">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="btn btn-orange w-100 fw-bold py-3 shadow-sm">
            Log In
          </button>

          <p className="text-white text-center mt-4 fs-6">
            Don’t have an account?{' '}
            <a href="#" className="text-orange text-decoration-none fw-semibold hover-underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>

      <style jsx>{`
        .login-page {
          height: 100vh;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .bg-video {
          object-fit: cover;
          top: 0;
          left: 0;
          z-index: 0;
          filter: brightness(0.6) blur(1px);
        }

        .overlay {
          background: rgba(0, 0, 0, 0.3);
          z-index: 1;
          top: 0;
          left: 0;
        }

        .login-card {
          max-width: 400px;
          width: 100%;
          z-index: 2;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
        }

        .text-orange {
          color: #f24521;
        }

        .btn-orange {
          background-color: #f24521;
          border: none;
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          border-radius: 8px;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 10px #f24521bb;
        }

        .btn-orange:hover {
          background-color: #d13818;
          box-shadow: 0 6px 20px #d13818dd;
        }

        .input-glass {
          border-radius: 10px;
          border: 1.5px solid rgba(255, 255, 255, 0.5);
          color: white;
          font-weight: 500;
        }

        .input-glass::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .input-glass:focus {
          border-color: #f24521;
          box-shadow: 0 0 8px #f24521bb;
        }

        a:hover {
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .login-card {
            padding: 2rem;
          }
        }
      `}</style>
    </main>
    <Footer/>
    </>
  );
};

export default LoginPage;
