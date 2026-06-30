import axios from 'axios';
import type { CatImage, Post, Story } from '../types';
import { captions, usernames } from '../data/captions';
import { comentariosPredefinidos } from '../data/comentarios';

const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search';
const CATAAS_URL = 'https://cataas.com/cat';

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const timeAgoOptions = ['1h', '2h', '5h', '8h', '1d', '2d', '3d'];

export const fetchCatImages = async (limit: number = 12): Promise<Post[]> => {
  try {
    const response = await axios.get<CatImage[]>(CAT_API_URL, {
      params: { limit, mime_types: 'jpg,png' },
    });

    return response.data.map((cat, index) => ({
      id: cat.id,
      imageUrl: cat.url,
      username: usernames[index % usernames.length],
      userAvatar: `${CATAAS_URL}?width=40&height=40&position=center&_=${cat.id}`,
      caption: captions[index % captions.length],
      likes: getRandomInt(1200, 85000),
      comments: comentariosPredefinidos[index % comentariosPredefinidos.length],
      timeAgo: timeAgoOptions[index % timeAgoOptions.length],
      location: index % 3 === 0 ? 'Buenos Aires, Argentina' : undefined,
      isLiked: false,
      isSaved: false,
    }));
  } catch (error) {
    console.error('Error fetching cat images:', error);
    return fetchCataasImages(limit);
  }
};

export const fetchCataasImages = async (limit: number = 12): Promise<Post[]> => {
  const posts: Post[] = [];
  const tags = ['cute', 'funny', 'sleep', 'orange', 'kitten', 'black', 'white', 'grey', 'fluffy', 'tabby', 'persian', 'siamese'];

  for (let i = 0; i < limit; i++) {
    const tag = tags[i % tags.length];
    const id = `cataas-${i}-${Date.now()}`;
    posts.push({
      id,
      imageUrl: `${CATAAS_URL}/${tag}?width=600&height=600&position=center&_=${i}`,
      username: usernames[i % usernames.length],
      userAvatar: `${CATAAS_URL}?width=40&height=40&_=${i}`,
      caption: captions[i % captions.length],
      likes: getRandomInt(1200, 85000),
      comments: comentariosPredefinidos[i % comentariosPredefinidos.length],
      timeAgo: timeAgoOptions[i % timeAgoOptions.length],
      location: i % 3 === 0 ? 'Buenos Aires, Argentina' : undefined,
      isLiked: false,
      isSaved: false,
    });
  }
  return posts;
};

export const fetchStoriesAvatars = async (): Promise<Story[]> => {
  const storyUsers = ['itsdougthepug', 'cpenandali', 'lewishamilton', 'nykius_syr', 'dfireours', 'mkbhd'];
  return storyUsers.map((username, i) => ({
    id: `story-${i}`,
    username,
    avatar: `${CATAAS_URL}?width=60&height=60&_=story${i}`,
    seen: i > 2,
  }));
};