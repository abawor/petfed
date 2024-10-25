import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, Image} from 'react-native';
import { PetContext } from './PetContext';

export default function PetList({ navigation }) {
  const { pets } = useContext(PetContext);

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
