import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Dashboard : FC = () => {
    return (
        <View style={style.container}>
            <Text>DASHBOARD</Text>
        </View>
    );
}
export  default Dashboard;
const style = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    }
});