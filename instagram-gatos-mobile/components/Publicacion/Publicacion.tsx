import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import type { Post } from '../../types';

interface PublicacionProps {
  post: Post;
  onPress: () => void;
}

const formatLikes = (n: number): string => {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return n.toString();
};

const Publicacion: React.FC<PublicacionProps> = ({ post, onPress }) => {
  const [liked, setLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setLiked((prev) => {
      setLikesCount((c) => (prev ? c - 1 : c + 1));
      return !prev;
    });
  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Image source={{ uri: post.userAvatar }} style={styles.avatar} />
        <View>
          <Text style={styles.username}>{post.username}</Text>
          {post.location && <Text style={styles.location}>{post.location}</Text>}
        </View>
      </View>

      <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
        <Image source={{ uri: post.imageUrl }} style={styles.imagenPost} />
      </TouchableOpacity>

      <View style={styles.acciones}>
        <TouchableOpacity onPress={handleLike} style={styles.btn}>
          <Text style={[styles.icono, liked && styles.iconoLiked]}>{liked ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} style={styles.btn}>
          <Text style={styles.icono}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.icono}>📤</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.likes}>{formatLikes(likesCount)} likes</Text>

      <Text style={styles.caption}>
        <Text style={styles.username}>{post.username} </Text>
        {post.caption}
      </Text>

      {post.comments.length > 0 && (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.verComentarios}>Ver los {post.comments.length} comentarios</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.tiempo}>Hace {post.timeAgo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: { marginBottom: 12 },
  header: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  avatar: { width: 34, height: 34, borderRadius: 17, marginRight: 10 },
  username: { fontWeight: '600', fontSize: 14 },
  location: { fontSize: 12, color: '#262626' },
  imagenPost: { width: '100%', aspectRatio: 1 },
  acciones: { flexDirection: 'row', padding: 8 },
  btn: { marginRight: 16 },
  icono: { fontSize: 22 },
  iconoLiked: { opacity: 1 },
  likes: { fontWeight: '600', paddingHorizontal: 10, marginBottom: 4 },
  caption: { paddingHorizontal: 10, marginBottom: 4 },
  verComentarios: { paddingHorizontal: 10, color: '#8e8e8e', marginBottom: 4 },
  tiempo: { paddingHorizontal: 10, fontSize: 11, color: '#8e8e8e', marginBottom: 12 },
});

export default Publicacion;