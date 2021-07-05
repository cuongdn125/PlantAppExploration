import React from 'react';
import {Text, View, Image} from 'react-native';

import {Home} from '../screens'

import {COLORS, SIZES, icons} from '../constants/';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const tabOptions = { 
    showLabel: false,
    style: {
        height: '10%',
    }
}

const CameraButton = () => (
    <View
        style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.primary,
        }}
    >
        <Image 
            source={icons.camera}
            resizeMode="contain"
            style={{
                width: 23,
                height: 23,
            }}
        />
    </View>
)

function tabs(props) {
    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({focused}) => {
                    const tintColor = focused ? COLORS.primary : COLORS.gray;

                    switch (route.name) {
                        case 'Home':
                            return (
                                <Image 
                                    source={icons.flash}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                        case 'Box':
                            return (
                                <Image 
                                source={icons.cube}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 25
                                }}
                            />
                            )
                        case 'Camera':
                            return (<CameraButton />)
                        case 'Search':
                            return (
                                <Image 
                                source={icons.search}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 25
                                }}
                            />
                            )
                        case 'Favorite':
                            return (
                                <Image 
                                source={icons.heart}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 25
                                }}
                            />
                            )
                    }
                }
            })}
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Box' component={Home} />
            <Tab.Screen name='Camera' component={Home} />
            <Tab.Screen name='Search' component={Home} />
            <Tab.Screen name='Favorite' component={Home} />

        </Tab.Navigator>        
    );
}

export default tabs;