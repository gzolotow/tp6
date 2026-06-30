import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../navigation/AppNavigator';

type DetailRouteProp = RouteProp<RootStackParamList, 'PostDetail'>;

const formatLikes = (n: number): string => {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return n.toString();
};

const PostDetailScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<DetailRouteProp>();
  const { post } = route.params;

  const [liked, setLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setLiked((prev) => {
      setLikesCount((c) => (prev ? c - 1 : c + 1));
      return !prev;
    });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cerrar}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.username}>{post.username}</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView>
        <Image source={{ uri: post.imageUrl }} style={styles.imagen} />

        <View style={styles.acciones}>
          <TouchableOpacity onPress={handleLike} style={styles.btn}>
            <Text style={styles.icono}>{liked ? '❤️' : '🤍'}</Text>
          </TouchableOpacity>
          <Text style={styles.icono}>💬</Text>
        </View>

        <Text style={styles.likes}>{formatLikes(likesCount)} likes</Text>

        <Text style={styles.caption}>
          <Text style={styles.username}>{post.username} </Text>
          {post.caption}
        </Text>

        <View style={styles.comentarios}>
          {post.comments.map((comment) => (
            <Text key={comment.id} style={styles.comentario}>
              <Text style={styles.username}>{comment.username} </Text>
              {comment.text}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
  },
  cerrar: { fontSize: 18 },
  username: { fontWeight: '600' },
  imagen: { width: '100%', aspectRatio: 1 },
  acciones: { flexDirection: 'row', padding: 10 },
  btn: { marginRight: 16 },
  icono: { fontSize: 22 },
  likes: { fontWeight: '600', paddingHorizontal: 10, marginBottom: 4 },
  caption: { paddingHorizontal: 10, marginBottom: 8 },
  comentarios: { paddingHorizontal: 10 },
  comentario: { marginBottom: 6 },
});

export default PostDetailScreen;