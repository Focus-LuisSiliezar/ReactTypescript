import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Input} from '../components';

const Home: FC = () => {
    return (
        <View style={style.container}>
            <Text>HOMESCREEN</Text>
            <Input 
            onChangeText={()=>{}}
            placeholder='hello you'
            />
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