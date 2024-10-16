import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, Button, Pressable, View, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function AddNewPet({ navigation }) {
  const [name, setName] = useState('');
  const [dob, setDob] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false); // Date picker state
  const [gender, setGender] = useState('');
  const [type, setType] = useState('');
  const [breed, setBreed] = useState('');
  const [weight, setWeight] = useState('');
  const [photo, setPhoto] = useState(null);
  
  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  // Handle Date Selection
  const handleConfirm = (date) => {
    setDob(date);
    hideDatePicker();
  };

  const handlePhotoUpload = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

  const handleSave = () => {
    if (name.trim() === '') {
      alert('Name is required!');
      return;
    }
    // !!! Save the pet (you can add the save logic here, e.g., saving to state or backend)
    console.log({ name, dob, gender, type, breed, weight, photo });
    alert('Pet added!');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Arrow */}
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={30} color="black" />
      </Pressable>

      <Text style={styles.header}>Add New Pet</Text>

      {/* Photo Upload */}
      <Pressable style={styles.photoUploadButton} onPress={handlePhotoUpload}>
        {photo ? (
          <Image source={{ uri: photo }} style={styles.photo} />
        ) : (
          <Text style={styles.photoText}>Upload Photo</Text>
        )}
      </Pressable>

      {/* Name (Required) */}
      <TextInput
        style={styles.input}
        placeholder="Name (Required)"
        value={name}
        onChangeText={setName}
      />

      {/* Date of Birth Picker (Calendar) */}
      <Pressable onPress={showDatePicker} style={styles.input}>
        <Text>{dob ? dob.toDateString() : 'Select Date of Birth'}</Text>
      </Pressable>

      {/* Date Picker Modal */}
      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={dob || new Date()} // Default to today's date if no DOB selected
      />

      {/* Gender */}
      <Picker
        selectedValue={gender}
        style={styles.input}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="Gender" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>

      {/* Type */}
      <Picker
        selectedValue={type}
        style={styles.input}
        onValueChange={(itemValue) => setType(itemValue)}
      >
        <Picker.Item label="Type" value="" />
        <Picker.Item label="Dog" value="dog" />
        <Picker.Item label="Cat" value="cat" />
        <Picker.Item label="Lizard" value="lizard" />
        <Picker.Item label="Other" value="other" />
      </Picker>

      {/* Breed */}
      <TextInput
        style={styles.input}
        placeholder="Breed"
        value={breed}
        onChangeText={setBreed}
      />

      {/* Weight */}
      <TextInput
        style={styles.input}
        placeholder="Weight"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      {/* Save Button */}
      <Button title="Save" onPress={handleSave} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  photoUploadButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
    marginBottom: 20,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  photoText: {
    color: '#888',
  },
});