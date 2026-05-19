import React from 'react';
import type { Story } from '../../types';import './BarraHistorias.css';

interface BarraHistoriasProps {
  stories: Story[];
}

const BarraHistorias: React.FC<BarraHistoriasProps> = ({ stories }) => {
  return (
    <div className="barra-historias">
      {stories.map((story) => (
        <div key={story.id} className="historia">
          <div className={`historia__ring ${story.seen ? 'seen' : ''}`}>
            <img
              src={story.avatar}
              alt={story.username}
              className="historia__avatar"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://cataas.com/cat?width=60&height=60';
              }}
            />
          </div>
          <span className="historia__username">{story.username}</span>
        </div>
      ))}
    </div>
  );
};

export default BarraHistorias;