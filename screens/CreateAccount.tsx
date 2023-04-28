import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors';
import { useNavigation, NavigationProp } from '@react-navigation/native';


const CreateAccount = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CONGRATULATIONS!! You unlocked the next level!!</Text>
      <Text style={styles.title}>LET´S GO!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.colorBG,
    flex: 1,
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
    textAlign: 'center',

  },
});

export default CreateAccount;
