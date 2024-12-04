import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { CATEGORIES } from '../dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const Categories = ({ navigation }) => {

    const onPress = (categoryId) => {
        navigation.navigate("mealsOverview", { categoryId });
    }

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={({ index, item: { id, color, title, } }) => (
                <CategoryGridTile key={index} {...{ id, color, title, onPress }} />
            )}
            numColumns={2}
        />
    );
}

const styles = StyleSheet.create({});

export default Categories;