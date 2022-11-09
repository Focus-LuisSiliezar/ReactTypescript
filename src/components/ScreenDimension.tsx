import React, { FC } from 'react';
import { View } from 'react-native';

interface Props {
    children: any;
    styleOverride?: any;
}


const ScreenDimensions: FC<Props> = ({ children, styleOverride }) => {
    return (
        <View style={[styleOverride, { flex: 1, marginHorizontal: 15}]}>
            {children}
        </View>
    );
}

export default ScreenDimensions;
