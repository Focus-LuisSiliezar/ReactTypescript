import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App : FC = () => {
    return (
        <View style={style.container}>
            <Text>DASHBOARD</Text>
        </View>
    );
}
export  default App;
const style = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    }
});