import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { RootStackParamList, TabParamList } from '../navigation/AppNavigator';
import type { Post, Story } from '../types';
import { fetchCatImages, fetchStoriesAvatars } from '../services/servicioApi';
import Encabezado from '../components/Encabezado/Encabezado';
import BarraHistorias from '../components/BarraHistorias/BarraHistorias';
import Publicacion from '../components/Publicacion/Publicacion';
import Cargando from '../components/Cargando/Cargando';

type NavProp = CompositeNavigationProp
  BottomTabNavigationProp<TabParamList, 'Feed'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const FeedScreen: React.FC = () => {
  const navigation = useNavigation<NavProp>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <SafeAreaView style={styles.safe}>
        <Encabezado />
        <Cargando />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <Encabezado />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<BarraHistorias stories={stories} />}
        renderItem={({ item }) => (
          <Publicacion
            post={item}
            onPress={() => navigation.navigate('PostDetail', { post: item })}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
});

export default FeedScreen;