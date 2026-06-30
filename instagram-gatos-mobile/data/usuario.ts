import type { User } from '../types';

export const usuarioActual: User = {
  username: 'gatitos.ar',
  fullName: 'Gatitos Argentina',
  avatar: 'https://cataas.com/cat?width=150&height=150&position=center',
  bio: '🐱 Amantes de los gatos | Buenos Aires\n📸 Fotos felinas todos los días\n🐾 Seguinos para más gatitos',
  website: 'cataas.com',
  posts: 47,
  followers: 12400,
  following: 389,
};

export const sugerencias = [
  { id: '1', username: 'michi.baires', avatar: 'https://cataas.com/cat?width=50&height=50&tag=cute', followedBy: 'gatitos.ar' },
  { id: '2', username: 'felinos.ok', avatar: 'https://cataas.com/cat?width=50&height=50&tag=funny', followedBy: 'felinos.ok' },
  { id: '3', username: 'cats.world', avatar: 'https://cataas.com/cat?width=50&height=50&tag=sleep', followedBy: 'michi.baires' },
  { id: '4', username: 'gato.loco', avatar: 'https://cataas.com/cat?width=50&height=50&tag=orange', followedBy: 'cats.world' },
  { id: '5', username: 'meow.arg', avatar: 'https://cataas.com/cat?width=50&height=50&tag=kitten', followedBy: 'gato.loco' },
];