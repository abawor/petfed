import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';

export default function PetList({ navigation }) {
  const [pets, setPets] = useState([
    { id: '1', name: 'Bella' },
    { id: '2', name: 'Charlie' },
    { id: '3', name: 'Max' },
    { id: '4', name: 'Poppy' },
    { id: '5', name: 'Robak' },
    { id: '6', name: 'Goldie' },
  ]);

  const renderPetTile = ({ item }) => (
    <View style={styles.petTile}>
        <Text>{item.name}</Text>
    </View>
  );

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

        <Pressable style={styles.addPetTile} onPress={() => navigation.navigate('AddNewPet')}>
            <Text style={styles.addPetText}>+</Text>
        </Pressable>
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
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginRight: 15,
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
    },
    addPetText: {
        color: '#cfcfcf',
        fontSize: 36,
    },
});
