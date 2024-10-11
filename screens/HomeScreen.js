import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title="Add new pet" onPress={() => navigation.navigate("AddNewPet")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});