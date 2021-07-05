import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, FlatList} from 'react-native';


import {COLORS, SIZES,FONTS, images, icons} from '../constants';


function Home({navigation}) {



    const [newPlant, setNewPlant] = useState([
        {
            id: 0,
            name: 'Plant 1',
            img: images.plant1,
            favorites: false
        },
        {
            id: 1,
            name: 'Plant 2',
            img: images.plant2,
            favorites: true
        },
        {
            id: 2,
            name: 'Plant 3',
            img: images.plant3,
            favorites: false
        },
        {
            id: 3,
            name: 'Plant 4',
            img: images.plant4,
            favorites: false
        }
    ]);

    const [friendList, setFriendList] = useState([
        {
            id: 0,
            img: images.profile1
        },
        {
            id: 1,
            img: images.profile2
        },
        {
            id: 2,
            img: images.profile3
        },
        {
            id: 3,
            img: images.profile4
        },
        {
            id: 4,
            img: images.profile5
        },
        
    ])

    const renderNewPlant = ({item, index}) => (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: SIZES.base
        }}>
            <Image 
                source={item.img}
                resizeMode='cover'
                style={{
                    width:SIZES.width * 0.23,
                    height: '82%',
                    borderRadius: 15,
                }}
            />

            <View style={{
                position: 'absolute',
                backgroundColor: COLORS.primary,
                right: 0,
                bottom: '17%',
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
                paddingHorizontal: SIZES.base,
            }}>
                <Text style={{color: COLORS.white, ...FONTS.body4}}>{item.name}</Text>
            </View>

            <TouchableOpacity 
                style={{
                    position: 'absolute',
                    top: '15%',
                    left: 7
                }}
                onPress={() => {console.log('Favorite on Press')}}
            >
                <Image 
                    source={item.favorites ? icons.heart_red : icons.heart_green_outline}
                    resizeMode='contain'
                    style={{
                        width: 20,
                        height: 20
                    }}
                />
            </TouchableOpacity>
        </View>
    )

    const renderFiends = () => {
        if(friendList.length == 0)
            return (<View></View>)
        else if(friendList.length <= 2) {
            return (
                friendList.map((item, index) => (
                    <View
                        key={index}
                        style={index === 0 ? {} : {marginLeft: -20}}
                    >
                        <Image 
                            source={item.img}
                            resizeMode='cover'
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                borderWidth: 3,
                                borderColor: COLORS.primary
                            }}
                        />
                    </View>
                ))
            )
        }
        else {
            return (
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    {friendList.map((item, index) => {
                        if(index <= 2 ) {
                            return (
                                <View
                                    key={index}
                                    style={index === 0 ? {} : {marginLeft: -20}}
                                >
                                    <Image 
                                        source={item.img}
                                        resizeMode='cover'
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 25,
                                            borderWidth: 3,
                                            borderColor: COLORS.primary
                                        }}
                                    />
                                </View>
                            )
                        }
                        
                    })}
                    <Text style={{marginLeft: 5, color: COLORS.secondary, ...FONTS.body3}}>+{friendList.length - 3} More</Text>
                </View>

            )
        }
    }

    return (
        <View style={styles.container}>
            {/* Plant New */}
            <View style={styles.plantNew}>
                <View 
                    style={{
                        flex: 1,
                        backgroundColor: COLORS.primary,
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                    }}
                >
                    <View
                        style={{
                            marginTop: SIZES.padding*2,
                            marginHorizontal: SIZES.padding,
                        }}
                    >
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Text style={{color: COLORS.white, ...FONTS.h2}}>New Plants</Text>
                            <TouchableOpacity
                                onPress={() => {console.log('Focuse on password')}}
                            >
                                <Image 
                                    source={icons.focus}
                                    resizeMode='contain'
                                    style={{
                                        width: 20,
                                        height: 20,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{marginTop: SIZES.base}}>
                            <FlatList 
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={newPlant}
                                keyExtractor={item => item.id.toString()}
                                renderItem={renderNewPlant}
                            />
                        </View>

                    </View>
                </View>
            </View>
            {/* Today Share */}
            <View style={styles.todayShare}>
                <View style={{
                    flex: 1,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                    backgroundColor: COLORS.white,
                }}>
                    <View style={{marginTop: SIZES.font, marginHorizontal: SIZES.padding}}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }} >
                            <Text style={{color: COLORS.secondary, ...FONTS.h2}}>Today's Share</Text>
                            <TouchableOpacity onPress={() => {console.log('See all on press')}} >
                                <Text style={{color: COLORS.secondary, ...FONTS.body3}}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            height: '87%',
                            marginTop: SIZES.base
                        }}>
                            <View style={{
                                flex: 1,
                            }}>
                                <TouchableOpacity style={{flex: 1}}
                                    onPress={() => {navigation.navigate('PlantDetail')}}
                                >
                                    <Image 
                                        source={images.plant5}
                                        resizeMode='cover'
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: 20
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={{flex: 1, marginTop: SIZES.font}}
                                    onPress={() => {navigation.navigate('PlantDetail')}}
                                >
                                    <Image 
                                        source={images.plant6}
                                        resizeMode='cover'
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: 20
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                flex: 1.3
                            }}>
                                <TouchableOpacity style={{
                                    flex: 1, marginLeft: SIZES.font
                                    }}
                                    onPress={() => {navigation.navigate('PlantDetail')}}
                                >
                                    <Image 
                                        source={images.plant7}
                                        resizeMode='cover'
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: 20
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            {/* Add Friends */}
            <View style={styles.addFriends}>
                <View style={{
                    flex: 1,
                    backgroundColor: COLORS.lightGray
                }}>
                    <View style={{
                        marginTop: SIZES.radius,
                        marginHorizontal: SIZES.padding
                    }}>
                        <Text style={{color: COLORS.secondary, ...FONTS.h2}}>Added Friends</Text>
                        <Text style={{color: COLORS.secondary, ...FONTS.body3}}>{friendList.length} Total</Text>

                        <View style={{
                            flexDirection: 'row',
                            height: '60%',
                        }}>
                            <View style={{
                                flex: 1.3,
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}>
                                {renderFiends()}
                            </View>

                            <View style={{
                                flex: 1, 
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-end'
                            }}>
                                <Text style={{color: COLORS.secondary ,...FONTS.body3}}>Add New</Text>
                                <TouchableOpacity style={{
                                    height: 40,
                                    width: 40,
                                    backgroundColor: COLORS.gray,
                                    borderRadius: 10,
                                    marginLeft: SIZES.base,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                    onPress={() => {console.log('Add friend on press')}}
                                >
                                    <Image 
                                        source={icons.plus}
                                        resizeMode='contain'
                                        style={{
                                            height: 20,
                                            width: 20,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    plantNew: {
        height: '30%',
        backgroundColor: COLORS.white,
    },
    todayShare: {
        height: '50%',
        backgroundColor: COLORS.lightGray,
    },
    addFriends: {
        height: '20%',
        backgroundColor: COLORS.lightGray,
    },
})
export default Home;