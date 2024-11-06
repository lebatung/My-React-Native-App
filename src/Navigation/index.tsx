// Navigation/ApplicationNavigator.tsx

import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "@/Screens/Auth/LoginScreen";
import { MainNavigator } from "./Main";
import { RootScreens } from "@/Screens";

export type RootStackParamList = {
    [RootScreens.LOGIN]: undefined;
    [RootScreens.MAIN]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const ApplicationNavigator = () => {
    return (
        <NavigationContainer>
            <StatusBar />
            <RootStack.Navigator initialRouteName={RootScreens.MAIN} screenOptions={{ headerShown: false }}>
                <RootStack.Screen name={RootScreens.MAIN} component={MainNavigator} />
                {/* <RootStack.Screen name={RootScreens.LOGIN} component={LoginScreen} /> */}
                
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export { ApplicationNavigator };
