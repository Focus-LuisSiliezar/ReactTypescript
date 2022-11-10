import React from 'react';
import { Pressable , StyleSheet} from 'react-native';
import Icon from 'react-native-remix-icon';

interface Props {
    onPress: () => void;
    iconName: string,
    iconColor: string,
    iconStyle?: any
}

const IconButton: React.FC<Props> = ({ onPress, iconName, iconColor, iconStyle }) => {
    return (
        <Pressable onPress={onPress} style={[style.icon,iconStyle]}>
            <Icon name={iconName} size='18' color={iconColor} />
        </Pressable>
    );
}

export default IconButton;
const style = StyleSheet.create({
    icon:{
        marginHorizontal: 15,
    }
});
