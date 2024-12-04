import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import MealDetails from './MealDetails';

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {

    const navigation = useNavigation();

    const selectMeal = () => {
        navigation.navigate('mealDetails', { mealId: id });
    }

    return (
        <View style={mealItem}>
            <Pressable
                style={({ pressed }) => pressed ? [buttonPressed] : null}
                android_ripple={{ color: 'white' }}
                onPress={selectMeal}
            >
                <View style={innerContainer}>
                    <View>
                        <Image style={image} source={{ uri: imageUrl }} />
                        <Text style={titleStyle}>{title}</Text>
                    </View>
                    <MealDetails {...{ duration, complexity, affordability }} />
                </View>
            </Pressable>
        </View>
    );
}

const { image, titleStyle, mealItem, innerContainer, buttonPressed } = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8
    },
    innerContainer: {
        overflow: "hidden",
        borderRadius: 8,
    },
    buttonPressed: {
        opacity: 0.1
    },
    image: {
        width: '100%',
        height: 200,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8
    }
})

export default MealItem;
