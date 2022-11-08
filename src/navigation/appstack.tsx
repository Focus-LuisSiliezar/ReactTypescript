import React, { FC } from "react";
import { Home, Dashboard } from "../screens";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();
const AuthStack: FC = () => {
    return (
        <Navigator
        screenOptions={{
            headerStyle: { backgroundColor: 'white' },
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: 'white',
            }
          }}
        
        >
            <Screen name="home" component={Home} options={{title: 'HOME'}} />
            <Screen name="dashboard" component={Dashboard} />
        </Navigator>
    );
}

export default AuthStack;