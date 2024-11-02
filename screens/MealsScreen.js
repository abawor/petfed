import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import MealsList from '../components/MealsList';
import NameEdit from '../components/NameEdit';


export default function MealsScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mealList}>
                <MealsList navigation={navigation}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    mealList: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 100,
        alignItems: 'center'
    },
});
