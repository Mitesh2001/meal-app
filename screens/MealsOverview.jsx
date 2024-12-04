import React, { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES, MEALS } from '../dummy-data';
import MealItem from '../components/MealItem';

const MealsOverview = ({ route, navigation }) => {

    const categoryId = route.params.categoryId;

    const meals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));

    const category = CATEGORIES.find(
        (category) => category.id === categoryId
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            title: category.title
        })
    }, [navigation])

    return (
        <View style={container}>
            <FlatList
                data={meals}
                renderItem={({ item: { id, title, imageUrl, affordability, complexity, duration } }) => (
                    <MealItem {...{ id, title, imageUrl, affordability, complexity, duration }} />
                )}
            />
        </View>
    );
}

const { container } = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});

export default MealsOverview;