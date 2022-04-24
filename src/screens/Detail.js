import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    ScrollView ,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native'
import {colors} from '../colors';


const back = require('../assets/images/back.png');
const bottle = require('../assets/images/bigBottle.png');

const Detail = (props) => {


    return (
        <ScrollView
            style={{
                backgroundColor: '#fff', 
                flex: 1, 
            }}
            
        >
            <StatusBar translucent={true} backgroundColor={'white'} />
            <BGImage />
            <View style={{flex: 1, paddingHorizontal: '5%'}}>
                <Header onPress={() => props.navigation.navigate('Dashboard')} />
                <View
                    style={{flex: 1, marginVertical: '5%'}}
                >
                    <Image 
                        source={bottle}
                        style={{
                            
                            position : 'absolute',
                            right: 0,
                            height: 450,
                            resizeMode: 'contain',
                            //backgroundColor : 'red'
                        }}
                    />
                    <View
                        style={{
                            //backgroundColor : 'red',
                            flex : 1,
                            
                        }}
                    >

                        <Text 
                            style={{
                                fontFamily: 'Poppins-Bold',
                                fontSize : 22,
                                color : 'black'
                            }}
                        >
                            CHARDONNAY
                        </Text>
                        <Text 
                            style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize : 16,
                                color : 'black',
                                marginBottom : '10%'
                            }}
                        >
                            Barefoot Wine
                        </Text>
                        <Text 
                            style={{
                                fontFamily: 'Poppins-Regular',
                                fontSize : 14,
                                color : 'black',
                            }}
                        >
                            Tastes like...
                        </Text>
                        <Text 
                            style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize : 16,
                                color : 'black',
                                marginBottom : '10%'
                            }}
                        >
                            Apple, Rich, Vanilla
                        </Text>
                        <Text 
                            style={{
                                fontFamily: 'Poppins-Regular',
                                fontSize : 14,
                                color : 'black',
                            }}
                        >
                            Wine Type...
                        </Text>
                        <Text 
                            style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize : 16,
                                color : 'black',
                                
                            }}
                        >
                            White Wine
                        </Text>
                    </View>
                    <View style={{flex:1, marginVertical:30}}>
                        <Text style={{fontFamily: 'Poppins-Regular', fontSize: 14, color : 'black'}}>
                            Size
                        </Text>
                        <View
                            style={{
                                backgroundColor: '#fff',
                                padding: 10,
                                width: '40%',
                                borderRadius: 10,
                                shadowOffset: {width: 1, height: 5},
                                shadowColor: '#00000070',
                                shadowOpacity: 0.2,
                                shadowRadius: 5,
                                elevation : 5,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16, color : 'black'}}>
                                1.5 L
                            </Text>
                            <View style={{transform: [{rotate: '-90deg'}]}}>
                                <Image source={back} />
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1, marginVertical:10}}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: `${colors.lightGrey}60`,
                                justifyContent: 'space-between',
                                width: '40%',
                                borderRadius: 10,
                                
                            }}
                        >
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#fff',
                                    paddingHorizontal: 15,
                                    paddingVertical: 10,
                                    borderRadius: 10,
                                    shadowOffset: {width: 1, height: 5},
                                    shadowColor: '#00000070',
                                    shadowOpacity: 0.2,
                                    shadowRadius: 5,
                                    elevation : 5
                                }}
                            >
                                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 15, color : 'black'}}>
                                    +
                                </Text>
                            </View>
                            <View>
                                <Text style={{fontFamily: 'Poppins-Regular', fontSize: 15, color: 'black' }}>
                                    02
                                </Text>
                            </View>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#fff',
                                    paddingHorizontal: 15,
                                    paddingVertical: 10,
                                    borderRadius: 10,
                                    shadowOffset: {width: 1, height: 5},
                                    shadowColor: '#00000070',
                                    shadowOpacity: 0.2,
                                    shadowRadius: 5,
                                    elevation : 5
                                }}
                            >
                                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 15, color : 'black'}}>
                                    -
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1, marginVertical:40}}>
                        <Text style={{fontFamily: 'Poppins-SemiBold', color: 'black'}}>About</Text>
                        <Text
                            style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize: 12,
                                color: '#00000060',
                                marginTop: '2%',
                            }}
                        >
                            Packing big, bold flavor with a smooth finish, Barefoot Chardonnay
                            brings tempting flavors to evry bottle, with notes of crisp, grren
                            apples and seet peaches. Accented with hints of honey and vanilla,
                            our medium bottled chardonnay pairs perfectly with fresh fruit,
                            pasta, chicken and salmon.
                            Packing big, bold flavor with a smooth finish, Barefoot Chardonnay
                            brings tempting flavors to evry bottle, with notes of crisp, grren
                            apples and seet peaches. Accented with hints of honey and vanilla,
                            our medium bottled chardonnay pairs perfectly with fresh fruit,
                            pasta, chicken and salmon.
                            
                        </Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: colors.yellow,
                            justifyContent: 'center',
                            borderRadius: 15,
                            flex: 0.5,
                            flexDirection: 'row',
                        }}
                    >
                        <Text
                            style={{
                                flex: 1,
                                alignSelf: 'center',
                                textAlign: 'center',
                                fontFamily: 'Poppins-Regular',
                                color : 'black'
                            }}
                        >
                            Total - ₹ 1600.80
                        </Text>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: '#fff',
                                marginHorizontal: 5,
                                marginVertical:   5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 14,
                            }}>
                            <Text style={{color : 'black', fontSize : 15,paddingVertical:10}}>Add to cart</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        
    )
}

export default Detail

const styles = StyleSheet.create({
    header : {
        paddingTop: '15%',
        height: 100,
        marginBottom : '10%'
    }
});

const BGImage = () => (
    <View style={{position : 'absolute'}}>
        <Circle />
    </View>
)

const Circle = () => (
    <View>
        <View
            style={{
                backgroundColor : colors.bgYellow,
                flex : 1,
                height : 300,
                width : 300,
                borderRadius: 200,
                left: -95,
                top: -50,
            }}
        />
        <View
            style={{
                backgroundColor : colors.bgYellow,
                flex : 1,
                height : 400,
                width : 400,
                borderRadius: 200,
                right: -100,
                top: -50,
            }}
        />
       
    </View>
)

const Header = ({onPress}) => (
    <TouchableOpacity style={styles.header} onPress={onPress}>
        <View
            style={{
                backgroundColor : '#fff',
                padding: 5,
                borderRadius: 10,
                height: 45,
                width: 45,
                justifyContent: 'center',
                alignItems: 'center',
                shadowOffset: {width: 1, height: 5},
                shadowColor: '#00000070',
                shadowOpacity: 0.2,
                shadowRadius: 5,
                elevation : 5
            }}
        >
            <Image 
                source={back}
            />
        </View>
    </TouchableOpacity>
)