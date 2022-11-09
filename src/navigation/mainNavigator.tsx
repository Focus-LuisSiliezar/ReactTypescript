import React, { FC, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Splash } from "../screens";

const { Navigator, Screen } = createNativeStackNavigator();
const MainNav: FC = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Splash"
                screenOptions={{
                    headerStyle: { backgroundColor: 'black' },
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                    headerTintColor: 'white',
                    contentStyle: {
                        backgroundColor: 'black',
                    }
                }}
            >
                <Screen name="Home" component={Home} />
                <Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            </Navigator>
        </NavigationContainer>
    );
}
export default MainNav;