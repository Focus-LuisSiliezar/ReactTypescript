import React from 'react';
import { FlatList, View, Pressable } from 'react-native'
import { MovieItem } from '../components';

const MOVIES = [
    {
        'id': '1',
        'movieLink': 'http://photos1.blogger.com/x/blogger/4718/1605/1600/392061/poster%20nacho.jpg'
    },
    {
        'id': '2',
        'movieLink': 'https://i0.wp.com/batman-news.com/wp-content/uploads/2022/01/The-Batman-2022-Movie-Poster-01.jpeg?fit=2764%2C4096&quality=80&strip=info&ssl=1'
    },
    {
        'id': '3',
        'movieLink': 'https://images.thedirect.com/media/photos/posd1_1.jpg'
    },
    {
        'id': '4',
        'movieLink': 'https://www.reeldeals.com/Images/HomeImages/37705.jpg'
    },
    {
        'id': '5',
        'movieLink': 'https://i.ebayimg.com/images/g/3S8AAOSwAQpfjVRI/s-l500.jpg'
    },
    {
        'id': '6',
        'movieLink': 'https://assets.mubicdn.net/images/notebook/post_images/31857/images-w1400.jpg?1607290863'
    },
    {
        'id': '7',
        'movieLink': 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/5cae019e64c0ee10ead36a00e60f0137_8b8714b2-b733-44ec-8f3f-f131a04915b5_240x360_crop_center.progressive.jpg?v=1614780406'
    },
    {
        'id': '8',
        'movieLink': 'https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_7259_1024x1024@2x.jpg?v=1640349274'
    },
    {
        'id': '9',
        'movieLink': 'https://i.etsystatic.com/18242346/r/il/54bef3/2802148755/il_570xN.2802148755_7wzt.jpg'
    },
    {
        'id': '10',
        'movieLink': 'https://creativereview.imgix.net/content/uploads/2018/12/Unknown-5.jpeg?auto=compress,format&q=60&w=2024&h=3000'
    },
];

interface Props{
    navigation: any,
}
const MovieList: React.FC<Props> = ({navigation}) => {

    const renderItem = ({ item }: any) => (
        <MovieItem uri={item.movieLink} onPress={() => {navigation.navigate('Details')}} />
    );

    return (
        <FlatList
            numColumns={2}
            contentContainerStyle={{ paddingBottom: 20 }}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{ flex: 1 }}
            data={MOVIES}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />


    );

}
export default MovieList;