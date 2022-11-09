import React, { FC } from "react";
import { SignUp, Login } from "../screens";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();
const AuthStack: FC = () => {
    return (
        <Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#222f3e' },
                headerShown: false,
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: '#222f3e',
                }
            }}
        >
            <Screen name="SignUp" component={SignUp} />
            <Screen name="Login" component={Login} />
        </Navigator>
    );
}

export default AuthStack;