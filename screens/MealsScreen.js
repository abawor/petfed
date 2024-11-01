import React, { useState, useContext } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, Pressable, View, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MealsContext } from '../components/MealsContext';

export default function MealsScreen({ navigation }) {
    const { setMeals } = useContext(MealsContext);
    const [type, setType] = useState('');
    const [customType, setCustomType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');
    const [notes, setNotes] = useState('');

    const handleTypeChange = (itemValue) => {
        setType(itemValue)

        if (itemValue !== 'Other') {
            setCustomType('')
        }
    };

    const handleSave = () => {
        if (!type || !quantity || !unit) {
            alert('Fill all required fields!');
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
    };

    return (
        <SafeAreaView style={styles.container}>

        {/* Back Arrow */}
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} color="black" />
        </Pressable>

        <Text style={styles.header}>Add new meal</Text>

        {/* Type (Required) */}
        <View style={styles.dropdownContainer} >
            <Picker
                selectedValue={type}
                style={styles.dropdown}
                itemStyle={styles.dropdown}
                onValueChange={handleTypeChange}
            >
                <Picker.Item label="Type" value=" " />
                <Picker.Item label="Wet" value="Wet" />
                <Picker.Item label="Dry" value="Dry" />
                <Picker.Item label="Snack" value="Snack" />
                <Picker.Item label="Other" value="Other" />
            </Picker>

            {type === 'Other' && (
                <TextInput
                    style={styles.input}
                    placeholder='Enter custom type'
                    value={customType}
                    onChangeText={setCustomType}
                />
            )}
        </View>

        {/* Quantity (Required) */}
        <TextInput
            style={styles.input}
            placeholder="Quantity"
            value={quantity}
            onChangeText={setQuantity}
        />

        {/* Unit (Required) */}
        <View style={styles.dropdownContainer} >
            <Picker
            selectedValue={unit}
            style={styles.dropdown}
            itemStyle={styles.dropdown}
            onValueChange={(itemValue) => setUnit(itemValue)}
            >
            <Picker.Item label="Unit" value=" " />
            <Picker.Item label="kg" value="kg" />
            <Picker.Item label="grams" value="grams" />
            <Picker.Item label="ounces" value="ounces" />
            <Picker.Item label="count" value="count" />
            <Picker.Item label="other" value="other" />
            </Picker>
        </View>

        {/* Notes */}
            <TextInput
            style={styles.input}
            placeholder="Notes"
            value={notes}
            onChangeText={setNotes}
            />

        {/* Save Button */}
        <Pressable style={styles.saveBtn} title="Save" onPress={handleSave}>
            <Text style={styles.saveBtnText}>Add meal</Text>
        </Pressable>
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
        top: 55,
        right: 20,
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
