import React, { useLayoutEffect } from 'react';
import { CATEGORIES, MEALS } from '../dummy-data';
import MealsList from "../components/MealsList";

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

    return <MealsList items={meals} />
}

export default MealsOverview;