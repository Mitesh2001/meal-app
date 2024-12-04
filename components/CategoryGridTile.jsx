import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const CategoryGridTile = ({ id, title, color, onPress }) => {
    return (
        <View style={gridItem}>
            <Pressable
                style={({ pressed }) => pressed ? [button, buttonPressed] : [button]}
                android_ripple={{ color: 'white' }}
                onPress={() => onPress(id)}
            >
                <View style={[innerContainer, { backgroundColor: color }]}>
                    <Text style={titleText}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const { gridItem, innerContainer, button, buttonPressed, titleText } = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        borderRadius: 8,
        alignItems: "center",
    },
    titleText: {
        fontSize: 18,
        fontWeight: "bold",
    }
})

export default CategoryGridTile;
