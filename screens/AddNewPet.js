import React, { useState, useContext } from 'react';
import { Platform, StyleSheet, Text, SafeAreaView, TextInput, Pressable, View, Image } from 'react-native';
import ModalSelector from 'react-native-modal-selector'
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PetContext } from '../components/PetContext';

export default function AddNewPet({ navigation }) {
    const { setPets } = useContext(PetContext);
    const [name, setName] = useState('');
    const [dob, setDob] = useState(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [gender, setGender] = useState('Gender');
    const [type, setType] = useState('');
    const [breed, setBreed] = useState('');
    const [weight, setWeight] = useState('');
    const [photo, setPhoto] = useState(null);
    
    const handlePhotoUpload = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
        setPhoto(result.assets[0].uri);
        }
    };

    const showDatePicker = () => setDatePickerVisibility(true);
    const hideDatePicker = () => setDatePickerVisibility(false);

    // Handle Date Selection
    const handleDateConfirm = (event, date) => {
        hideDatePicker();
        setDob(date);
    };

    const handleSave = () => {
        if (!name) {
        alert('Name is required!');
        return;
        }

        const newPet = {
        id: (Math.random() * 10000).toFixed(0),
        name: name,
        photo: photo,
        dob: dob,
        gender: gender,
        type: type,
        breed: breed,
        weight: weight,
        };

        setPets((prevPets) => [...prevPets, newPet]);

        alert('Pet added!');
        navigation.navigate('HomeScreen')
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Back Arrow */}
            <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={20} color="black" />
            </Pressable>

            <Text style={styles.header}>Add new pet</Text>

            {/* Photo Upload */}
            <View style={styles.photoUploadContainer}>
                <Pressable onPress={handlePhotoUpload}>
                {photo ? (
                    <Image source={{ uri: photo }} style={styles.photoUploaded} />
                ) : (
                    <Icon name={'camera'} size={100} color={'gray'}/>
                )}
                </Pressable>
                <Text>{ photo ? 'Change' : 'Upload'} photo</Text>
            </View>
            
            <View style={styles.form}>

                {/* Name (Required) */}
                <TextInput
                    style={styles.input}
                    placeholder="Name (required)"
                    value={name}
                    onChangeText={setName}
                />

                {/* Date of Birth Picker (Calendar) */}
                <Pressable onPress={showDatePicker} style={styles.input}>
                    <Text>{dob ? dob.toDateString() : 'Date of birth'}</Text>
                </Pressable>

                {/* Date Picker Modal */}
                {isDatePickerVisible && (
                    <DateTimePicker
                        mode="date"
                        display="spinner"
                        onChange={handleDateConfirm}
                        value={dob || new Date()}
                    />
                )}

                {/* Gender */}
                <ModalSelector
                    style={styles.picker}
                    data={[
                        { key: 1, label: 'Male' },
                        { key: 2, label: 'Female' }
                    ]}
                    initValue={gender}
                    onChange={(option) => {
                        setGender(option.label)
                    }}
                />

                {/* Type */}
                <TextInput
                    style={styles.input}
                    placeholder="Type (dog, cat, lizard etc.)"
                    value={type}
                    onChangeText={setType}
                />

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
                <Pressable style={styles.saveBtn} title="Save" onPress={handleSave}>
                    <Text style={styles.saveBtnText}>Add pet</Text>
                </Pressable>
            </View>
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
        
        ...Platform.select({
            ios: {
                marginTop: 30,
            }
        })
    },
    backButton: {
        position: 'absolute',
        top: 17,
        right: 20,
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    photoUploadContainer: {
        marginHorizontal: 'auto',
        alignItems: 'center',
        paddingBottom: 20
    },
    photoUploaded: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    form: {
        ...Platform.select({
            ios: {
                width: '70%',
            },
            android: {
                width: '100%',
            },
        }),
        alignSelf: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        fontSize: 14,
    },
    picker: {
        marginBottom: 10,
    },
    saveBtn: {
        backgroundColor: '#18CA9F',
        padding: 10,
        borderRadius: 5,
        fontSize: 14,
        alignItems: 'center',
    },
    saveBtnText: {
        color: 'white',
    },
});
