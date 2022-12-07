import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import Favorites from '../Favorites';
import Home from "../Home";
import Search from "../Search";

const Tabs = createBottomTabNavigator();

const TabNavigation = () => {
    const homeIcon = ({ focused, color, size }) => (
        focused ? <Ionicons name="ios-home" size={24} color="black" /> : <Ionicons name="ios-home-outline" size={24} color="black" />
    );

    const searchIcon = ({ focused, color, size }) => (
        focused ? <Ionicons name="ios-search" size={24} color="black" /> : <Ionicons name="ios-search-outline" size={24} color="black" />
    );

    const favIcon = ({ focused, color, size }) => (
        focused ? <MaterialIcons name="favorite" size={24} color="black" /> : <MaterialIcons name="favorite-outline" size={24} color="black" />
    );

    return (
        <Tabs.Navigator>
            <Tabs.Screen name='Home' component={Home}
                options={{
                    tabBarIcon: homeIcon,
                    tabBarActiveTintColor: "black",
                    tabBarInactiveTintColor: "gray",
                }}
            />
            <Tabs.Screen name='Search' component={Search}
                options={{
                    tabBarIcon: searchIcon,
                    tabBarActiveTintColor: "black",
                    tabBarInactiveTintColor: "gray",
                }}
            />
            <Tabs.Screen name='Favorites' component={Favorites}
                options={{
                    tabBarIcon: favIcon,
                    tabBarActiveTintColor: "black",
                    tabBarInactiveTintColor: "gray",
                }}
            />
        </Tabs.Navigator>
    );
};

export default TabNavigation