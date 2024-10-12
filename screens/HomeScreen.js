import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, View, Pressable, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({ navigation }) {
  const [name, setName] = useState("") //holds user's name
  const [isEditing, setIsEditing] = useState(false) //toggle edit/display mode
  const [tempName, setTempName] = useState("") //edit temporary input

  //function to save name locally
  const saveNameLocally = async (newName) => {
    try {
      await AsyncStorage.setItem("userName", newName)
      setName(newName)
      setIsEditing(false)
    } catch (e) {
      console.log(e)
    }
  };

  //function to cancel name editing
  const cancelEdit = () => {
    setIsEditing(false)
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, welcome back</Text>

      {isEditing ? (
        <View style={styles.editContainer}>
          <TextInput
            style={styles.input}
            placeholder={name}
            value={tempName}
            onChangeText={setTempName}
          />
          <Pressable onPress={() => saveNameLocally(tempName)} style={styles.button}>
            <Text style={styles.tick}>✓</Text>
          </Pressable>
          <Pressable onPress={cancelEdit} style={styles.button}>
            <Text style={styles.cross}>✕</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>
            {name ? `${name}` : 'Enter your name'}
          </Text>
          <Pressable onPress={() => setIsEditing(true)} style={styles.button}>
            <FontAwesome name="pencil" style={styles.editIcon}/>
          </Pressable>
        </View>
      )}
      <Button title="Add new pet" onPress={() => navigation.navigate("AddNewPet")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 20,
    marginBottom: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  nameText: {
    fontSize: 28,
  },
  editIcon: {
    fontSize: 18,
    color: 'grey',
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    width: 200, // Adjust width based on preference
  },
  button: {
    paddingHorizontal: 10,
  },
  tick: {
    fontSize: 24,
    marginRight: 10,
  },
  cross: {
    fontSize: 24,
  },
});