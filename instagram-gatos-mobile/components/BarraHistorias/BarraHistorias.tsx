import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import type { Story } from '../../types';

interface BarraHistoriasProps {
  stories: Story[];
}

const BarraHistorias: React.FC<BarraHistoriasProps> = ({ stories }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.contenedor}>
      {stories.map((story) => (
        <View key={story.id} style={styles.historia}>
          <View style={[styles.ring, story.seen ? styles.ringSeen : styles.ringUnseen]}>
            <Image source={{ uri: story.avatar }} style={styles.avatar} />
          </View>
          <Text style={styles.username} numberOfLines={1}>{story.username}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
  },
  historia: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 70,
  },
  ring: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  ringUnseen: {
    borderColor: '#ed4956',
  },
  ringSeen: {
    borderColor: '#dbdbdb',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  username: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default BarraHistorias;