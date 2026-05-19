import React, { useState, useEffect } from 'react';
import type { Post, Story } from './types';import { fetchCatImages, fetchStoriesAvatars } from './services/servicioApi';
import Encabezado from './components/Encabezado/Encabezado';
import Feed from './components/Feed/Feed';
import Perfil from './components/Perfil/Perfil';
import ModalPublicacion from './components/ModalPublicacion/ModalPublicacion';
import Cargando from './components/Cargando/Cargando';
import './styles/global.css';

type View = 'feed' | 'perfil';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [currentView, setCurrentView] = useState<View>('feed');

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [fetchedPosts, fetchedStories] = await Promise.all([
          fetchCatImages(12),
          fetchStoriesAvatars(),
        ]);
        setPosts(fetchedPosts);
        setStories(fetchedStories);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="app">
      <Encabezado onNavigate={setCurrentView} currentView={currentView} />

      {loading ? (
        <Cargando />
      ) : currentView === 'feed' ? (
        <Feed
          posts={posts}
          stories={stories}
          onSelectPost={setSelectedPost}
        />
      ) : (
        <Perfil
          posts={posts}
          onSelectPost={setSelectedPost}
        />
      )}

      <ModalPublicacion
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </div>
  );
};

export default App;