import React from "react";
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Details, Favorites, Home, Search, Splash } from "../screens";
import { HeaderImage, IconButton } from "../components";
import Icon from 'react-native-remix-icon';

const Navigator = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
interface Props {
    navigation: any;
}
const DrawerMenu: React.FC<Props> = ({ navigation }) => {
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
                drawerActiveBackgroundColor: '#831010',
                headerLeft: () => <IconButton iconName="ri-menu-line" onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }} iconColor="white" iconStyle={{ paddingLeft: 15 }} />,
            }}
        >
            <Drawer.Screen name="Home" component={Home} options={{
                headerTitle: () => <HeaderImage />,
                headerRight: () => <IconButton iconName="ri-search-line" onPress={() => { navigation.navigate('Search') }} iconColor="white" iconStyle={{ paddingRight: 15 }} />,
                drawerIcon: ({ color }) => <Icon name="ri-home-line" size='18' color={color} />,
            }} />
            <Drawer.Screen name='Favorites' component={Favorites} options={{
                title: 'Favorites',
                drawerIcon: ({ color }) => <Icon name="ri-star-line" size='18' color={color} />
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
                <Navigator.Screen name="Search" component={Search} options={{ title: 'Search' }} />
            </Navigator.Navigator>
        </NavigationContainer>
    );
}
export default MainNav;