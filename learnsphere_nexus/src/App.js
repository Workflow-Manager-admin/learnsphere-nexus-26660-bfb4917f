import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';

// PUBLIC_INTERFACE
function Home() {
  return (
    <div className="container">
      <section className="hero">
        <div className="subtitle">Personalized AI-Powered Learning</div>
        <h1 className="title">LearnSphere Nexus</h1>
        <div className="description">
          Welcome to ColorCraft, your path to modern, engaging, accessible education.
          Explore tailored courses, track your progress, and connect with our community.
        </div>
        <Link to="/catalog" className="btn btn-large" aria-label="View Course Catalog">
          Explore the Course Catalog
        </Link>
      </section>
    </div>
  );
}

// PUBLIC_INTERFACE
function Catalog() {
  return (
    <div className="container">
      <h2 style={{ color: 'var(--primary)', marginTop: 90, marginBottom: 18, fontWeight: 700 }}>Course Catalog</h2>
      <div style={{ color: 'var(--accent)' }}>
        <p>This is a placeholder for the browsable, filterable course catalog.</p>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function Dashboard() {
  return (
    <div className="container">
      <h2 style={{ color: 'var(--primary)', marginTop: 90, marginBottom: 18, fontWeight: 700 }}>My Dashboard</h2>
      <div style={{ color: 'var(--accent)' }}>
        <p>This is a placeholder for your personalized learner dashboard.</p>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function NotFound() {
  return (
    <div className="container" style={{ marginTop: 120 }}>
      <h2 style={{ color: 'var(--primary)' }}>Page Not Found</h2>
      <p>
        Sorry, the requested page doesn&apos;t exist.{' '}
        <Link to="/" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Go Home</Link>
      </p>
    </div>
  );
}

// PUBLIC_INTERFACE
function App() {
  return (
    <Router>
      <div className="app" tabIndex="0">
        <nav className="navbar" role="navigation" aria-label="Main Navigation">
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="logo">
              <span className="logo-symbol" aria-hidden="true">★</span> LearnSphere Nexus
            </div>
            <div>
              <Link to="/" className="nav-link" aria-label="Home">Home</Link>
              <Link to="/catalog" className="nav-link" aria-label="Catalog">Catalog</Link>
              <Link to="/dashboard" className="nav-link" aria-label="Dashboard">Dashboard</Link>
            </div>
          </div>
        </nav>
        <main className="main-content" tabIndex="-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;