import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Encabezado: React.FC = () => {
  return (
    <View style={styles.encabezado}>
      <Text style={styles.logo}>Instagram</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  encabezado: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
  },
  logo: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'System',
  },
});

export default Encabezado;