import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Details, Favorites, Home, Splash } from "../screens";
import { HeaderImage } from "../components";

const Navigator = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerMenu: React.FC = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: 'black' },
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerTintColor: 'white',
                sceneContainerStyle: { backgroundColor: '#000000' },
                drawerContentStyle: { backgroundColor: '#111111' },
                drawerInactiveTintColor: 'white',
                drawerActiveTintColor: 'white',
                drawerActiveBackgroundColor: '#831010'
            }}
        >
            <Drawer.Screen name="Home" component={Home} options={{ headerTitle: () => <HeaderImage />, }} />

            <Drawer.Screen name='FavoritesScreen' component={Favorites} options={{
                title: 'Favorites',
                // drawerIcon: ({ color }) => <Feather name='home' color={color} size={18} />
            }} />

        </Drawer.Navigator>
    );
}

const MainNav: React.FC = () => {
    return (
        <NavigationContainer>
            <Navigator.Navigator initialRouteName="DrawerMenu"
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
                <Navigator.Screen name="DrawerMenu" component={DrawerMenu} options={{ headerShown: false }} />
                <Navigator.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Navigator.Screen name="Details" component={Details} options={{ title: '' }} />
            </Navigator.Navigator>
        </NavigationContainer>
    );
}
export default MainNav;