import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { CATEGORIES } from '../dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const Categories = ({ navigation }) => {

    const onPress = () => {
        navigation.navigate("mealsOverview");
    }

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={({ index, item: { color, title } }) => (
                <CategoryGridTile key={index} {...{ color, title, onPress }} />
            )}
            numColumns={2}
        />
    );
}

const styles = StyleSheet.create({});

export default Categories;