import React, { useState } from 'react';
import type { Post } from '../../types';import './ModalPublicacion.css';

interface ModalPublicacionProps {
  post: Post | null;
  onClose: () => void;
}

const formatLikes = (n: number): string => {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return n.toString();
};

const ModalPublicacion: React.FC<ModalPublicacionProps> = ({ post, onClose }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likesCount, setLikesCount] = useState(post?.likes ?? 0);
  const [newComment, setNewComment] = useState('');

  if (!post) return null;

  const handleLike = () => {
    setLiked((prev) => {
      setLikesCount((c) => prev ? c - 1 : c + 1);
      return !prev;
    });
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-contenido">
        {/* Imagen */}
        <div className="modal__imagen-wrapper">
          <img
            src={post.imageUrl}
            alt="post"
            className="modal__imagen"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://cataas.com/cat?width=600&height=600';
            }}
          />
        </div>

        {/* Panel derecho */}
        <div className="modal__panel">
          {/* Header */}
          <div className="modal__header">
            <div className="modal__user">
              <div className="modal__avatar-ring">
                <img
                  src={post.userAvatar}
                  alt={post.username}
                  className="modal__avatar"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://cataas.com/cat?width=40&height=40';
                  }}
                />
              </div>
              <div>
                <span className="modal__username">{post.username}</span>
                {post.location && <span className="modal__location">{post.location}</span>}
              </div>
            </div>
            <button className="modal__close" onClick={onClose}>✕</button>
          </div>

          {/* Comentarios */}
          <div className="modal__comentarios">
            {/* Caption */}
            <div className="modal__comentario">
              <div className="modal__com-avatar-ring">
                <img
                  src={post.userAvatar}
                  alt={post.username}
                  className="modal__com-avatar"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://cataas.com/cat?width=32&height=32';
                  }}
                />
              </div>
              <div className="modal__com-content">
                <span className="modal__com-username">{post.username}</span>
                {' '}
                <span className="modal__com-text">{post.caption}</span>
                <span className="modal__com-time">{post.timeAgo}</span>
              </div>
            </div>

            {/* Comentarios */}
            {post.comments.map((comment) => (
              <div key={comment.id} className="modal__comentario">
                <div className="modal__com-avatar-ring">
                  <img
                    src={`https://cataas.com/cat?width=32&height=32&_=${comment.id}`}
                    alt={comment.username}
                    className="modal__com-avatar"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://cataas.com/cat?width=32&height=32';
                    }}
                  />
                </div>
                <div className="modal__com-content">
                  <span className="modal__com-username">{comment.username}</span>
                  {' '}
                  <span className="modal__com-text">{comment.text}</span>
                  <span className="modal__com-time">{comment.timeAgo}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Acciones */}
          <div className="modal__acciones">
            <div className="modal__acciones-row">
              <div className="modal__acciones-left">
                <button
                  className={`modal__btn ${liked ? 'liked' : ''}`}
                  onClick={handleLike}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill={liked ? '#ed4956' : 'none'} stroke={liked ? '#ed4956' : 'currentColor'} strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
                <button className="modal__btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </button>
                <button className="modal__btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
              <button
                className={`modal__btn ${saved ? 'saved' : ''}`}
                onClick={() => setSaved((p) => !p)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </button>
            </div>
            <div className="modal__likes">{formatLikes(likesCount)} likes</div>
            <div className="modal__fecha">Hace {post.timeAgo}</div>
          </div>

          {/* Input comentario */}
          <div className="modal__input-row">
            <input
              type="text"
              placeholder="Agregar un comentario..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="modal__input"
            />
            <button
              className="modal__post-btn"
              disabled={!newComment.trim()}
              onClick={() => setNewComment('')}
            >
              Publicar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPublicacion;