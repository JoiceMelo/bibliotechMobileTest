import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from "@/screens/homeScreen";
import Login from "@/screens/loginScreen";
import Register from "@/screens/registerScreen";
import Acervo from "@/screens/acervoScreen";
import Colecoes from "@/screens/colecoesScreen";
import Leituras from "@/screens/leiturasScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LoggedInTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Acervo" component={Acervo} />
            <Tab.Screen name="Coleções" component={Colecoes} />
            <Tab.Screen name="Leituras" component={Leituras} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="LoggedInTabs" component={LoggedInTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}