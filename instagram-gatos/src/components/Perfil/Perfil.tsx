import React, { useState } from 'react';
import type { Post } from '../../types';import { usuarioActual } from '../../data/usuario';
import './Perfil.css';

interface PerfilProps {
  posts: Post[];
  onSelectPost: (post: Post) => void;
}

const Perfil: React.FC<PerfilProps> = ({ posts, onSelectPost }) => {
  const [activeTab, setActiveTab] = useState<'posts' | 'saved' | 'tagged'>('posts');

  const formatNumber = (n: number): string => {
    if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
    return n.toString();
  };

  return (
    <div className="perfil">
      {/* Header perfil */}
      <div className="perfil__header">
        <div className="perfil__avatar-container">
          <div className="perfil__avatar-ring">
            <img
              src="https://cataas.com/cat?width=150&height=150"
              alt="avatar"
              className="perfil__avatar"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://cataas.com/cat?width=150&height=150';
              }}
            />
          </div>
        </div>

        <div className="perfil__info">
          <div className="perfil__info-header">
            <h1 className="perfil__username">{usuarioActual.username}</h1>
            <button className="perfil__edit-btn">Edit profile</button>
            <button className="perfil__settings-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </button>
          </div>

          <div className="perfil__stats">
            <div className="perfil__stat">
              <span className="perfil__stat-number">{usuarioActual.posts}</span>
              <span className="perfil__stat-label">posts</span>
            </div>
            <div className="perfil__stat">
              <span className="perfil__stat-number">{formatNumber(usuarioActual.followers)}</span>
              <span className="perfil__stat-label">followers</span>
            </div>
            <div className="perfil__stat">
              <span className="perfil__stat-number">{usuarioActual.following}</span>
              <span className="perfil__stat-label">following</span>
            </div>
          </div>

          <div className="perfil__bio">
            <span className="perfil__fullname">{usuarioActual.fullName}</span>
            <span className="perfil__bio-text">{usuarioActual.bio}</span>
            <a href="#" className="perfil__website">{usuarioActual.website}</a>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="perfil__tabs">
        <button
          className={`perfil__tab ${activeTab === 'posts' ? 'active' : ''}`}
          onClick={() => setActiveTab('posts')}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
          </svg>
          POSTS
        </button>
        <button
          className={`perfil__tab ${activeTab === 'saved' ? 'active' : ''}`}
          onClick={() => setActiveTab('saved')}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
          SAVED
        </button>
        <button
          className={`perfil__tab ${activeTab === 'tagged' ? 'active' : ''}`}
          onClick={() => setActiveTab('tagged')}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
            <line x1="7" y1="7" x2="7.01" y2="7" />
          </svg>
          TAGGED
        </button>
      </div>

      {/* Grid de posts */}
      {activeTab === 'posts' && (
        <div className="perfil__grid">
          {posts.map((post) => (
            <div
              key={post.id}
              className="perfil__grid-item"
              onClick={() => onSelectPost(post)}
            >
              <img
                src={post.imageUrl}
                alt="post"
                className="perfil__grid-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://cataas.com/cat?width=300&height=300';
                }}
              />
              <div className="perfil__grid-overlay">
                <span>❤️ {(post.likes / 1000).toFixed(1)}k</span>
                <span>💬 {post.comments.length}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'saved' && (
        <div className="perfil__empty">
          <p>Solo vos podés ver lo que guardaste.</p>
        </div>
      )}

      {activeTab === 'tagged' && (
        <div className="perfil__empty">
          <p>No hay fotos de {usuarioActual.username} todavía.</p>
        </div>
      )}
    </div>
  );
};

export default Perfil;