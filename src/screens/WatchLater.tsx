import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from 'react-native';


interface Props {
    children: any,
    title: string,
    // navigation: any,

}
const Section: React.FC<Props> = ({ children, title }) => {
    return (
        <View className="mt-8 px-2">
            <Text className="text-2xlfont-bold	 text-pink-900 dark:text-white">
                {title}
            </Text>
            <Text className="mt-2 text-2xl text-black dark:text-white">
                {children}
            </Text>
        </View>
    );
};

const WatchLater: React.FC<Props> = () => {
    // const movies: any = movieStore((state: any) => state.movies);

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = "bg-neutral-300 dark:bg-black"
    return (
        <SafeAreaView className={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                className={backgroundStyle}>
                <View className="bg-white dark:bg-black" >
                    <Section title="Step One">
                        Edit <Text className="font-bold">App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="See Your Changes">
                    </Section>
                    <Section title="Debug">
                    </Section>
                    <Section title="Learn More">
                        Read the docs to discover what to do next:
                    </Section>
                </View >
            </ScrollView >
        </SafeAreaView >
    );
}
export default WatchLater;