import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function RemindersScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>RemindersScreen</Text>
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