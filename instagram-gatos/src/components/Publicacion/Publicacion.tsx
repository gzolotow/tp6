import React, { useState } from 'react';
import type { Post } from '../../types';import './Publicacion.css';

interface PublicacionProps {
  post: Post;
  onSelect: (post: Post) => void;
}

const formatLikes = (n: number): string => {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return n.toString();
};

const Publicacion: React.FC<PublicacionProps> = ({ post, onSelect }) => {
  const [liked, setLiked] = useState(post.isLiked);
  const [saved, setSaved] = useState(post.isSaved);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked((prev) => {
      setLikesCount((c) => prev ? c - 1 : c + 1);
      return !prev;
    });
  };

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSaved((prev) => !prev);
  };

  return (
    <article className="publicacion">
      {/* Header */}
      <div className="publicacion__header">
        <div className="publicacion__user">
          <div className="publicacion__avatar-ring">
            <img
              src={post.userAvatar}
              alt={post.username}
              className="publicacion__avatar"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://cataas.com/cat?width=40&height=40';
              }}
            />
          </div>
          <div className="publicacion__user-info">
            <span className="publicacion__username">{post.username}</span>
            {post.location && <span className="publicacion__location">{post.location}</span>}
          </div>
        </div>
        <button className="publicacion__more">
          <svg width="16" height="4" viewBox="0 0 16 4" fill="currentColor">
            <circle cx="2" cy="2" r="2" />
            <circle cx="8" cy="2" r="2" />
            <circle cx="14" cy="2" r="2" />
          </svg>
        </button>
      </div>

      {/* Image */}
      <div className="publicacion__imagen-container" onClick={() => onSelect(post)}>
        <img
          src={post.imageUrl}
          alt="cat post"
          className="publicacion__imagen"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://cataas.com/cat?width=600&height=600';
          }}
        />
      </div>

      {/* Actions */}
      <div className="publicacion__acciones">
        <div className="publicacion__acciones-left">
          <button
            className={`publicacion__btn ${liked ? 'liked' : ''}`}
            onClick={handleLike}
            title="Like"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill={liked ? '#ed4956' : 'none'} stroke={liked ? '#ed4956' : 'currentColor'} strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <button className="publicacion__btn" onClick={() => onSelect(post)} title="Comentar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>
          <button className="publicacion__btn" title="Compartir">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
        <button
          className={`publicacion__btn ${saved ? 'saved' : ''}`}
          onClick={handleSave}
          title="Guardar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>

      {/* Likes */}
      <div className="publicacion__likes">
        {formatLikes(likesCount)} likes
      </div>

      {/* Caption */}
      <div className="publicacion__caption">
        <span className="publicacion__caption-user">{post.username}</span>
        {' '}
        <span>{post.caption}</span>
      </div>

      {/* Comments preview */}
      {post.comments.length > 0 && (
        <button className="publicacion__ver-comentarios" onClick={() => onSelect(post)}>
          Ver los {post.comments.length} comentarios
        </button>
      )}

      {/* Time */}
      <span className="publicacion__tiempo">Hace {post.timeAgo}</span>
    </article>
  );
};

export default Publicacion;