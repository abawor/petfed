import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function AddNewPet({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Add New Pet</Text>
      <Button title="Home" onPress={() => navigation.navigate("HomeScreen")} />
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