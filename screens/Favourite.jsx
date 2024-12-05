import { StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../dummy-data';
import MealsList from '../components/MealsList';
import { useSelector } from 'react-redux';

const Favourite = () => {

    const favoriteIds = useSelector(state => state.favoriteMeals.ids);

    const favoriteMeals = MEALS.filter(meal => favoriteIds.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        );
    }

    return <MealsList items={favoriteMeals} />

}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    }
});

export default Favourite;
