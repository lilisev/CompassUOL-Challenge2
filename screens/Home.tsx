import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Colors from '../constants/colors';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOME</Text>
      <ScrollView>
        <View style={styles.cardContainer}>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.colorBG,
    flex: 1,
    textAlign: 'left',
    justifyContent: 'center',
  },
  title: {
    paddingTop: 20,
    paddingBottom: 50,
    paddingLeft: 20,
    color: Colors.primary1,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  card: {
    width: '48%',
    height: 150,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default Home;
