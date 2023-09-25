import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { kebabShops } from '../db'; // Opdater stien til data

export default function KebabScreen() { // Omdøbt komponenten
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Liste over kebabbutikker i København</Text>
      {kebabShops.map((shop) => (
        <View key={shop.id} style={styles.shop}>
          <Text style={styles.shopName}>{shop.name}</Text>
          <Text style={styles.shopAddress}>{shop.address}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  shop: {
    margin: 10,
  },
  shopName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  shopAddress: {
    fontSize: 16,
  },
});
