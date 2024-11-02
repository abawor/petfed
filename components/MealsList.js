import React, { useContext } from 'react';
import { StyleSheet, Text, Platform, View, FlatList, Pressable, Image} from 'react-native';
import { MealsContext } from './MealsContext';

export default function MealsList({ navigation }) {
    const { meals } = useContext(MealsContext);

    const renderMealInfo = ({ item }) => {
        if (item.id === 'add') {
        return (
            <Pressable style={styles.addMealTile} onPress={() => navigation.navigate('AddNewMeal')}>
            <Text style={styles.addMealText}>+</Text>
            </Pressable>
        );
        } else {
        return (
            <View style={styles.mealTile}>
                <Text style={styles.mealName}  numberOfLines={2}>{item.name}</Text>
                <Text style={styles.mealType}>{item.type}</Text>
                <Text style={styles.mealDetails}>{item.quantity} {item.unit}</Text>
            </View>
        );
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={meals}
                renderItem={renderMealInfo}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                style={styles.mealList}
                numColumns={3}
                columnWrapperStyle={styles.columnWrapper}
            />
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    mealTile: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 5,
        margin: 5,
        marginBottom: 8,
        flex: 0,
        minWidth: '30%',
        maxWidth: '30%',
        aspectRatio: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      },
    mealName: {
        ...Platform.select({
            ios: {
                fontSize: 18,
            },
            android: {
                fontSize: 16,
            }
        }),
        fontWeight: 'bold',
        marginBottom: 3,
    },
    mealType: {
        ...Platform.select({
            android: {
                fontSize: 14,
            },
            ios: {
                fontSize: 16,
            }
        }),
        marginBottom: 2,
    },
    mealDetails: {
        ...Platform.select({
            ios: {
                fontSize: 14,
            },
            android: {
                fontSize: 12,
            }
        }),
        color: '#555',
    },
    addMealTile: {
        backgroundColor: '#e6f7ff',
        borderRadius: 10,
        padding: 15,
        margin: 5,
        flex: 0,
        minWidth: '30%',
        maxWidth: '30%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#b3e0ff',
    },
    addMealText: {
        color: '#3399ff',
        fontSize: 30,
        fontWeight: 'bold',
    },
});