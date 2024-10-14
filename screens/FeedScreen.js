import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function FeedScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>FeedScreen</Text>
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