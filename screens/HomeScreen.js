import React from 'react';
import { StyleSheet, SafeAreaView, Text, Button, View } from 'react-native';
import NameEdit from '../components/NameEdit';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.greeting}>
        <Text>Hello, welcome back</Text>
        <NameEdit />
      </View>
      <Button title="Add new pet" onPress={() => navigation.navigate("AddNewPet")} />
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
    marginBottom: 20,
    marginTop: 100,
    alignItems: 'center',
  },
});
