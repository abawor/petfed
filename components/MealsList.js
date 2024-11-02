import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, Image} from 'react-native';
import { MealsContext } from './MealsContext';

export default function MealsList({ navigation }) {
  const { meals } = useContext(MealsContext);

  const renderMealInfo = ({ item }) => {
    if (item.id ==='add') {
        return (
            <Pressable style={styles.addMealTile} onPress={() => navigation.navigate('AddNewMeal')}>
                <Text style={styles.addMealText}>+</Text>
            </Pressable>
        )
    } else {
        return (
            <View style={styles.mealTile}>
                <Text>{item.type}</Text>
                <Text>{item.quantity} {item.unit}</Text>
                <Text>{item.notes}</Text>
            </View>
        )
    }};

  return (
    <View style={styles.container}>
        <FlatList
            data={meals}
            renderItem={renderMealInfo}
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
    mealTile: {
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
    addMealTile: {
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
    addMealText: {
        color: '#cfcfcf',
        fontSize: 36,
    },
});
