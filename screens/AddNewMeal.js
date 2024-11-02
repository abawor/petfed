import React, { useState, useContext } from 'react';
import { Platform, StyleSheet, Text, SafeAreaView, TextInput, Pressable, View, Image } from 'react-native';
import ModalSelector from 'react-native-modal-selector'
import Icon from 'react-native-vector-icons/FontAwesome';
import { MealsContext } from '../components/MealsContext';

export default function MealsScreen({ navigation }) {
    const { setMeals } = useContext(MealsContext);
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');

    const handleSave = () => {
        if (!name || !type || !quantity || !unit) {
            alert('All fields are required!');
            return;
        }

        const newMeal = {
            id: (Math.random() * 10000).toFixed(0),
            type: type,
            quantity: quantity,
            unit: unit,
            notes: notes,
        };

        setMeals((prevMeals) => [...prevMeals, newMeal]);

        alert('Meal added!');
        navigation.goBack()
    };

    return (
        <SafeAreaView style={styles.container}>

        <Text style={styles.header}>Add new meal</Text>

        {/* Back Arrow */}
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} color="black" />
        </Pressable>

        <View style={styles.form}>


            {/* Name */}
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />

            {/* Type */}
            <ModalSelector
                data={[
                    { key: 0, section: true, label: 'Type'},
                    { key: 1, label: 'Wet' },
                    { key: 2, label: 'Dry' },
                    { key: 3, label: 'Snack' },
                    { key: 4, label: 'Other' },
                ]}
                onChange={(option) => {
                    setType(option.label)
                }}>
                <TextInput
                    style={styles.input}
                    value={type}
                    placeholder='Type'
                />
            </ModalSelector>

            {/* Unit */}
            <ModalSelector
                data={[
                    { key: 0, section: true, label: 'Unit'},
                    { key: 1, label: 'kg' },
                    { key: 2, label: 'grams' },
                    { key: 3, label: 'ounces' },
                    { key: 4, label: 'count' },
                    { key: 5, label: 'other' },
                ]}
                onChange={(option) => {
                    setUnit(option.label)
                }}>
                <TextInput
                style={styles.input}
                value={unit}
                placeholder='Unit'
                />
            </ModalSelector>

            {/* Quantity */}
            <TextInput
                style={styles.input}
                placeholder="Quantity"
                value={quantity}
                onChangeText={setQuantity}
            />

            {/* Save Button */}
            <Pressable style={styles.saveBtn} title="Save" onPress={handleSave}>
                <Text style={styles.saveBtnText}>Add meal</Text>
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
        ...Platform.select({
            ios: {
                height: 100,
                width: 100,
                top: 17,
                right: 0
            },
            android: {
                top: 55,
                right: 20,
            }
        }),
        right: 20,
        alignItems: 'center',
        justifyContent: 'center'
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
    dropdownContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        height: 40,
        justifyContent: 'center',
    },
    dropdown: {
        fontSize: 14,
    },
});
