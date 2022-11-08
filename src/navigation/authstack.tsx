import React, { FC } from "react";
import { SignUp, Login } from "../screens";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();
const AuthStack: FC = () => {
    return (
        <Navigator>
            <Screen name="signup" component={SignUp} />
            <Screen name="Login" component={Login} />
        </Navigator>
    );
}

export default AuthStack;