import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, Image} from 'react-native';

// delete for production
const testURI = "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fpetfed-f2595dad-ec9e-4720-855d-812410dc6629/ImagePicker/b0b496c0-72be-41cb-b5f6-784127a8e538.jpeg"

export default function PetList({ navigation }) {
  const [pets, setPets] = useState([
    { id: 'add', name: 'Add pet' },
    { id: '1', photo: testURI , name: 'Poppy'},
    { id: '2', photo: 'uri' , name: 'Robak' },
    { id: '3', photo: 'uri' , name: 'Goldie' },
    { id: '4', photo: 'uri' , name: 'Slimak' },
    { id: '5', photo: 'uri' , name: 'Glonojad' },
  ]);

  const renderPetTile = ({ item }) => {
    if (item.id ==='add') {
        return (
            <Pressable style={styles.addPetTile} onPress={() => navigation.navigate('AddNewPet')}>
                <Text style={styles.addPetText}>+</Text>
            </Pressable>
        )
    } else {
        return (
            <View style={styles.petTile}>
                <Image source={{ uri : item.photo }} style={styles.petPhoto}/>
                <Text>{item.name}</Text>
            </View>
        )
    }};

  return (
    <View style={styles.container}>
        <FlatList
            data={pets}
            renderItem={renderPetTile}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.petList}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        backgroundColor: '#fff',
    },
    petList: {
        flexGrow: 0,
    },
    petTile: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    petPhoto: {
        backgroundColor: '#f0f0f0',
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    addPetTile: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderColor: '#cfcfcf',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 50,
        marginBottom: 20,
        marginRight: 15,

    },
    addPetText: {
        color: '#cfcfcf',
        fontSize: 36,
    },
});
