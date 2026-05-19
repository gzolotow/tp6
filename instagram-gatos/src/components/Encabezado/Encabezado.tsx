import React from 'react';
import './Encabezado.css';

interface EncabezadoProps {
  onNavigate: (view: 'feed' | 'perfil') => void;
  currentView: 'feed' | 'perfil';
}

const Encabezado: React.FC<EncabezadoProps> = ({ onNavigate, currentView }) => {
  return (
    <nav className="encabezado">
      {/* Logo */}
      <div className="encabezado__logo">
        <span className="encabezado__logo-text">Instagram</span>
      </div>

      {/* Nav items */}
      <div className="encabezado__nav">
        <button
          className={`encabezado__nav-item ${currentView === 'feed' ? 'active' : ''}`}
          onClick={() => onNavigate('feed')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill={currentView === 'feed' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>Home</span>
        </button>

        <button className="encabezado__nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <span>Search</span>
        </button>

        <button className="encabezado__nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polygon points="10 8 16 12 10 16 10 8" />
          </svg>
          <span>Explore</span>
        </button>

        <button className="encabezado__nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
            <line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" /><line x1="2" y1="7" x2="7" y2="7" />
            <line x1="2" y1="17" x2="7" y2="17" /><line x1="17" y1="17" x2="22" y2="17" />
            <line x1="17" y1="7" x2="22" y2="7" />
          </svg>
          <span>Reels</span>
        </button>

        <button className="encabezado__nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span>Messages</span>
        </button>

        <button className="encabezado__nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span>Notifications</span>
        </button>

        <button className="encabezado__nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
          </svg>
          <span>Create</span>
        </button>

        <button
          className={`encabezado__nav-item ${currentView === 'perfil' ? 'active' : ''}`}
          onClick={() => onNavigate('perfil')}
        >
          <div className="encabezado__avatar">
            <img src="https://cataas.com/cat?width=32&height=32" alt="avatar" />
          </div>
          <span>Profile</span>
        </button>
      </div>

      {/* More */}
      <div className="encabezado__bottom">
        <button className="encabezado__nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <span>More</span>
        </button>
      </div>
    </nav>
  );
};

export default Encabezado;