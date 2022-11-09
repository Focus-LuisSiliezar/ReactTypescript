import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home: FC = () => {
    return (
        <View style={style.container}>
            <Text>Netflix</Text>
        </View>
    );
}
export default Home;
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});