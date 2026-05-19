import React from 'react';
import type { Post, Story } from '../../types';import BarraHistorias from '../BarraHistorias/BarraHistorias';
import Publicacion from '../Publicacion/Publicacion';
import { sugerencias } from '../../data/usuario';
import './Feed.css';

interface FeedProps {
  posts: Post[];
  stories: Story[];
  onSelectPost: (post: Post) => void;
}

const Feed: React.FC<FeedProps> = ({ posts, stories, onSelectPost }) => {
  return (
    <div className="feed-layout">
      {/* Columna principal */}
      <div className="feed__main">
        <BarraHistorias stories={stories} />
        {posts.map((post) => (
          <Publicacion key={post.id} post={post} onSelect={onSelectPost} />
        ))}
      </div>

      {/* Sidebar derecho */}
      <aside className="feed__sidebar">
        {/* Usuario actual */}
        <div className="sidebar__usuario">
          <div className="sidebar__user-avatar">
            <img src="https://cataas.com/cat?width=56&height=56" alt="avatar" />
          </div>
          <div className="sidebar__user-info">
            <span className="sidebar__username">gatitos.ar</span>
            <span className="sidebar__fullname">Gatitos Argentina</span>
          </div>
          <button className="sidebar__switch">Switch</button>
        </div>

        {/* Sugerencias */}
        <div className="sidebar__sugerencias">
          <div className="sidebar__sugerencias-header">
            <span>Suggestions for you</span>
            <button className="sidebar__see-all">See All</button>
          </div>
          {sugerencias.map((sug) => (
            <div key={sug.id} className="sidebar__sugerencia">
              <img
                src={sug.avatar}
                alt={sug.username}
                className="sidebar__sug-avatar"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://cataas.com/cat?width=50&height=50';
                }}
              />
              <div className="sidebar__sug-info">
                <span className="sidebar__sug-username">{sug.username}</span>
                <span className="sidebar__sug-followed">Followed by {sug.followedBy}</span>
              </div>
              <button className="sidebar__follow-btn">Follow</button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="sidebar__footer">
          <p>About · Help · Press · API · Jobs · Privacy · Terms · Locations · Language</p>
          <p className="sidebar__copyright">© 2024 INSTAGRAM FROM META</p>
        </div>
      </aside>
    </div>
  );
};

export default Feed;