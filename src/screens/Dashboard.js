import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    Platform, 
    StatusBar, 
    TextInput,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Dimensions
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont(); // For IOS Need

import {colors} from '../colors';

const isAndroid = (Platform.OS ==='android' ) ? true : false;


const bottle1 = require('../assets/images/Bottle1.png');
const bottle2 = require('../assets/images/Bottle2.png');
const bottle3 = require('../assets/images/Bottle3.png');
const bottle4 = require('../assets/images/Bottle4.png');
const bottle5 = require('../assets/images/Bottle5.png');
const header = require('../assets/images/header.jpg');
const heart = require('../assets/images/heart.png');
const cart = require('../assets/images/cart.png');
const menu = require('../assets/images/menu.png');


const PRODUCT_ITEM = [
    {title: 'Beer', color: colors.grey, image: bottle1},
    {title: 'Wine', color: colors.red, image: bottle2},
    {title: 'Whiskey', color: colors.grey, image: bottle3},
];

const WINE_ITEM = [
    {name: 'Red Wine', image: bottle4},
    {name: 'Pink Moscato', image: bottle5},
    {name: 'Pink Russian', image: bottle4},
    {name: 'Pink Chines', image: bottle5},
    {name: 'Pink Srilankan', image: bottle4},
    {name: 'Pink Russian', image: bottle5},
    {name: 'Pink Russian', image: bottle4},

];

const Dashboard = (props) => {

    const insets = useSafeAreaInsets();

    //console.log(insets,isAndroid);

    return (
        <View style={styles.container}>
            <StatusBar  backgroundColor="#fff" />
            <Header insets={insets} />
            <View style={{margin : '5%', flex : 1}}>
                <Text
                    style={{
                        fontFamily : 'Poppins-Regular',
                        color : 'black',
                        fontSize : 16,
                        marginTop : (isAndroid) ? 0 : 20,
                        marginBottom : (isAndroid) ? 0 : 5,
                    }}
                >
                    Hello Dhananjay, Choose Your
                </Text>
                <Text
                    style={{
                        fontFamily: 'Poppins-SemiBold', 
                        color : 'black',
                        fontSize: 30,
                        marginBottom : 20
                    }}
                >
                    Best Liquor Brands
                </Text>
                <SearchBar />
                <View style={{flexDirection :'row', marginBottom:20}}>
                    {
                        PRODUCT_ITEM.map((item,index) => (
                            <Product key={index} item={item} index={index} onPress={() => props.navigation.navigate('Detail')} />
                        ))
                    }
                </View>
                <View style={{marginTop : '5%', flex : 1}}>
                    <View style={{ flexDirection : 'row', justifyContent : 'space-between'}}>
                        <Text style={{fontFamily: 'Poppins-SemiBold', color:'black', fontSize : 18}}>Popular Wine</Text>
                        <Text style={{fontFamily: 'Poppins-regular', color:'black', fontSize : 16}}>See All</Text>
                    </View>
                    <ScrollView>
                        <View style={{flex : 1 ,flexDirection: 'row', flexWrap: 'wrap', marginTop: '20%'}}>
                            {
                                WINE_ITEM.map((item,index) => (
                                    <ProductDetail key={index} item={item} />
                                ))
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff'
    },
    header : {
        flexDirection : 'row',
        paddingHorizontal : '5%',
        height: 80,
        alignItems: 'center',
    },
    searchBar : {
        backgroundColor : colors.grey,
        borderRadius : 10,
        padding : (isAndroid) ? 0 : 10,
        flexDirection : 'row',
        alignItems : 'center',
        marginBottom : 50
    },
    searchTextInput : {
        color : 'black',
        paddingLeft : (isAndroid) ? 12 : 0,
    },
    productItemList : {
        flex : 1,
        borderRadius : 10,
        margin : 8,
        height : 100,
        justifyContent: 'center',
        paddingVertical : 10,
        marginTop : '10%',
    },
    productDetailContainer : {
        //flex : 1,
        backgroundColor: colors.lightYellow,
        height : 250,
        marginLeft : 10,
        marginBottom : 65,
        padding : 10,
        borderRadius : 10,
        flexBasis : '45%',
        //flexGrow : 
    }
});

const Header = (props) => (
    <View
        style={[
            styles.header,
            {
                paddingTop : (isAndroid) ? 10 : props.insets.top
            }
        ]}
    >
        <Image source={menu} resizeMode="contain" />
        <View style={{flex : 1}} />
        <Image source={cart} resizeMode="contain" />
        <Image source={header} 
            style={{
                width : 50,
                height : 50,
                borderRadius : 10,
                marginLeft : '5%'
            }}
        />
    </View>
);

const SearchBar = () => (

    <View
        style={[
            styles.searchBar
        ]}
    >
        <Icon name={'search'} color={'black'} size={32} style={{marginHorizontal : 5}} />
        <TextInput 
            placeholder='Search your brands'
            placeholderTextColor={'#00000070'}
            style={styles.searchTextInput}
        />
    </View>
);

const Product = (props) => (
    <TouchableOpacity 
        style={[
            styles.productItemList,
            {
                backgroundColor : props.item.color
            }
        ]}

        onPress={props.onPress}
    >
        <View style={{flex : 1}}>
            <Image 
                source={props.item.image}
                resizeMode={'contain'}
                style={{
                    height: 130,
                    width : 80,
                    zIndex: 1,
                    bottom: -6,
                    left: -10,
                    position: 'absolute',
                }}
            />
        </View>
        <View
            style={{
                //flexDirection : 'row',
                position: 'absolute',
                right: (props.item.title == 'Whiskey') ? -12  : 0,
                bottom: (props.item.title == 'Whiskey') ? 28  : 15,
            }}
        >
            <Text
                style={{
                    transform : [
                        {rotate : '-90deg'}
                    ],
                    color : (props.item.title =='Wine') ? 'white' : 'black',
                    fontFamily: 'Poppins-SemiBold',
                    //textAlign: 'left',
                    //alignSelf: 'flex-end',
                }}
            >
                {props.item.title}
            </Text>
        </View>
    </TouchableOpacity>
);

const ProductDetail = (props) => (
    <TouchableOpacity
        style={
            styles.productDetailContainer
        }
    >
        <View
            style={{
                flex: 1,
                justifyContent : 'space-between',
            }}
        >
            <View
                style={{
                    backgroundColor: '#fff',
                    padding : 10,
                    borderRadius : 50,
                    position : 'absolute',
                    left: 0,
                    bottom: (isAndroid) ? 10 : 20,
                }}
            >
                <Image 
                    source={heart}
                    style={{height: 20, aspectRatio: 1, resizeMode: 'contain'}}
                />
            </View>
            <Image 
                source={props.item.image}
                style={{position: 'absolute', right: 10, top: -60}}
            />
        </View>
        <View
            style={{
                marginVertical : '5%',
                justifyContent: 'flex-end',
            }}
        >
            <Text
                style={{
                    fontFamily: 'Poppins-SemiBold',
                    fontSize : 16,
                    color : 'black',
                    //backgroundColor : 'red',
                    //marginBottom :5
                }}
            >
                {props.item.name}
            </Text>
            <Text
                style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize : 10,
                    color : 'black'
                }}
            >
                {'Barefoot wine'}
            </Text>
            <Text
                style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize : 10,
                    color : 'black'
                }}
            >
                {'750.0 ml'}
            </Text>
            <Text
                style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize : 12,
                    color : 'black',
                    paddingTop : 10
                }}
            >
                {'₹ 809.54'}
            </Text>
        </View>
    </TouchableOpacity>
    
    
)