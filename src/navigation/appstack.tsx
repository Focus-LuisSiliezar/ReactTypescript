import React, { FC } from "react";
import { Home, Dashboard } from "../screens";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();
const AuthStack: FC = () => {
    return (
        <Navigator>
            <Screen name="home" component={Home} />
            <Screen name="dashboard" component={Dashboard} />
        </Navigator>
    );
}

export default AuthStack;