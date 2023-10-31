import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//screens

import HomeScreens from "./screens/HomeScreens";
import ListaScreens from "./screens/ListaScreens";
import PruebaScreens from "./screens/PruebaScreens"

const Tab = createBottomTabNavigator();

function MyTabs(){
        return(
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreens}/>
                <Tab.Screen name="Lista" component={ListaScreens}/>
                <Tab.Screen name="Prueba" component={PruebaScreens}/>
            </Tab.Navigator>
        );           
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}