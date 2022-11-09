import React, { FC } from "react";
import { Home, Dashboard } from "../screens";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();
const AppStack: FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#222f3e'},
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: '#222f3e',
        }
      }}
    >
      <Screen name="Home" component={Home} options={{ title: 'HOME' }} />
      <Screen name="Dashboard" component={Dashboard} />
    </Navigator>
  );
}

export default AppStack;