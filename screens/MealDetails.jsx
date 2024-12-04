import React, { useLayoutEffect } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/Subtitle';
import List from '../components/List';
import IconButton from '../components/IconButton';


const MealDetailsScreen = ({ route, navigation }) => {

    const { mealId } = route.params;

    const meal = MEALS.find(meal => meal.id === mealId);

    const headerButtonPressHandler = () => {

    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        color={"white"}
                        icon={"star"}
                        onPress={headerButtonPressHandler}
                    />
                );
            },
        })
    }, [navigation])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: meal.imageUrl }} />
            <Text style={styles.title}>{meal.title}</Text>
            <MealDetails
                duration={meal.duration}
                complexity={meal.complexity}
                affordability={meal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={meal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={meal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
});

export default MealDetailsScreen;
