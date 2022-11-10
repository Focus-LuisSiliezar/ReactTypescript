import React, { FC, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Details, Home, Splash } from "../screens";
import { HeaderImage } from "../components";

const { Navigator, Screen } = createNativeStackNavigator();
const MainNav: FC = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Home"
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
                <Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Screen name="Home" component={Home} options={{ headerTitle: () => <HeaderImage />, }} />
                <Screen name="Details" component={Details}  />
            </Navigator>
        </NavigationContainer>
    );
}
export default MainNav;