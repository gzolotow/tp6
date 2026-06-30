import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { RootStackParamList, TabParamList } from '../navigation/AppNavigator';
import type { Post } from '../types';
import { fetchCatImages } from '../services/servicioApi';
import { usuarioActual } from '../data/usuario';
import Cargando from '../components/Cargando/Cargando';

type NavProp = CompositeNavigationProp
  BottomTabNavigationProp<TabParamList, 'Profile'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const screenWidth = Dimensions.get('window').width;
const itemSize = screenWidth / 3;

const formatNumber = (n: number): string => {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return n.toString();
};

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<NavProp>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await fetchCatImages(12);
        setPosts(data);
      } catch (error) {
        console.error('Error loading profile posts:', error);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.safe}>
        <Cargando />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Image source={{ uri: usuarioActual.avatar }} style={styles.avatar} />
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{usuarioActual.posts}</Text>
            <Text style={styles.statLabel}>posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{formatNumber(usuarioActual.followers)}</Text>
            <Text style={styles.statLabel}>followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{usuarioActual.following}</Text>
            <Text style={styles.statLabel}>following</Text>
          </View>
        </View>
      </View>

      <Text style={styles.fullName}>{usuarioActual.fullName}</Text>
      <Text style={styles.bio}>{usuarioActual.bio}</Text>

      <TouchableOpacity style={styles.editBtn}>
        <Text style={styles.editBtnText}>Edit profile</Text>
      </TouchableOpacity>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => navigation.navigate('PostDetail', { post: item })}
          >
            <Image source={{ uri: item.imageUrl }} style={styles.gridImg} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  avatar: { width: 90, height: 90, borderRadius: 45, marginRight: 20 },
  stats: { flexDirection: 'row', flex: 1, justifyContent: 'space-around' },
  stat: { alignItems: 'center' },
  statNumber: { fontWeight: '700', fontSize: 16 },
  statLabel: { fontSize: 13, color: '#262626' },
  fullName: { fontWeight: '600', paddingHorizontal: 16 },
  bio: { paddingHorizontal: 16, marginTop: 4, color: '#262626' },
  editBtn: {
    margin: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 8,
    alignItems: 'center',
  },
  editBtnText: { fontWeight: '600' },
  gridItem: { width: itemSize, height: itemSize, padding: 1 },
  gridImg: { width: '100%', height: '100%' },
});

export default ProfileScreen;