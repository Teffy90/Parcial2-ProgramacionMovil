import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//screens

import ListaScreens from "./screens/ListaScreens";
import PruebaScreens from "./screens/PruebaScreens"

const Tab = createBottomTabNavigator();

function MyTabs(){
        return(
            <Tab.Navigator>
                <Tab.Screen name="Home" component={PruebaScreens}/>
                <Tab.Screen name="Lista" component={ListaScreens}/>
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