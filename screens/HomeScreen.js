import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import NameEdit from '../components/NameEdit';
import PetList from '../components/PetList';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.greeting}>
        <Text>Hello, welcome back</Text>
        <NameEdit />
      </View>
      <PetList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 100,
    alignItems: 'center',
  },
});
