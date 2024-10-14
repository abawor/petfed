import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SettingsScreen</Text>
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