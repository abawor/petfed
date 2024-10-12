import React from 'react';
import { StyleSheet, SafeAreaView, Text, Button } from 'react-native';
import NameEdit from '../components/NameEdit'; // Import the NameEdit component

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, welcome back</Text>
      <NameEdit />
      <Button title="Add new pet" onPress={() => navigation.navigate("AddNewPet")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 20,
    marginBottom: 20,
  },
});