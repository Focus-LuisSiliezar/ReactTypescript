import React, { FC, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const MainNav: FC = () => {
    const [user, setUser] = useState(null);

    // const isLoggedIn = () => {
    //     console.log(!!user);
    //     if (user) {
    //         setUser(user);
    //     }
    // }
    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
}
export default MainNav;