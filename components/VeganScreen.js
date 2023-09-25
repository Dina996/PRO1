
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { veganRestaurants } from '../db'; 

export default function VeganScreen() { 
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Veganske Restauranter i København</Text>
      {veganRestaurants.map((restaurant) => (
        <View key={restaurant.id} style={styles.restaurant}>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          <Text style={styles.restaurantAddress}>{restaurant.address}</Text>
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
  restaurant: {
    margin: 10,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  restaurantAddress: {
    fontSize: 16,
  },
});
