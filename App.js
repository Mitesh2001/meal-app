import { Button, StyleSheet } from "react-native";
import Categories from "./screens/Categories";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview";
import MealDetails from "./screens/MealDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            options={{
              title: "All Categories",
            }}
            name="categories"
            component={Categories}
          />
          <Stack.Screen
            // options={({ route, navigation }) => {
            //   const categoryId = route.params.categoryId;
            //   const category = CATEGORIES.find(
            //     (category) => category.id === categoryId
            //   );
            //   return {
            //     title: category.title,
            //   };
            // }}
            name="mealsOverview"
            component={MealsOverview}
          />
          <Stack.Screen
            name="mealDetails"
            component={MealDetails}
            // options={{
            //   headerRight: () => {
            //     return (
            //       <Button
            //         title="Tap me!"
            //         onPress={() => console.log("Favourite button pressed")}
            //       />
            //     );
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
