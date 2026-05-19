export interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface Post {
  id: string;
  imageUrl: string;
  username: string;
  userAvatar: string;
  caption: string;
  likes: number;
  comments: Comment[];
  timeAgo: string;
  location?: string;
  isLiked: boolean;
  isSaved: boolean;
}

export interface Comment {
  id: string;
  username: string;
  text: string;
  timeAgo: string;
}

export interface User {
  username: string;
  fullName: string;
  avatar: string;
  bio: string;
  website: string;
  posts: number;
  followers: number;
  following: number;
}

export interface Story {
  id: string;
  username: string;
  avatar: string;
  seen: boolean;
}