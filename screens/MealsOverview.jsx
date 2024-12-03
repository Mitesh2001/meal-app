import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MealsOverview = () => {
    return (
        <View style={container}>
            <Text>Meal Overview Screen</Text>
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