import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Cargando: React.FC = () => {
  return (
    <View style={styles.contenedor}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cargando;