import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {COLORS, SIZES,FONTS, images, icons} from '../constants';


const RequirementsBar = ({icon, barPercentage}) => {
    return (
        <View style={{
            height: 60,
            alignItems: 'center'
        }}>
            <View style={{
                height: 50,
                width: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: COLORS.gray,
                borderRadius: 10
            }}>
                <Image
                    source={icon}
                    resizeMode="cover"
                    style={{
                        height: 30,
                        width: 30,
                        tintColor: COLORS.secondary
                    }}
                />
            </View>
            {/* Bar */}
            <View style={{
                position: 'absolute',
                width: '100%', 
                left: 0,
                bottom: 0,
                height: 3,
                backgroundColor: COLORS.gray,
                marginTop: SIZES.base
            }}></View>
            <View style={{
                position: 'absolute',
                width: barPercentage,
                left: 0,
                bottom: 0,
                height: 3,
                backgroundColor: COLORS.primary,
                marginTop: SIZES.base
            }}></View>
        </View>
    )
}

function PlantDetail({navigation}) {

    const renderRequirementsBar = () => {
        return (
            <View style={{
                flexDirection: 'row',
                marginTop: SIZES.padding,
                paddingHorizontal: SIZES.padding,
                justifyContent: 'space-between'
            }}>
                <RequirementsBar 
                    icon={icons.sun}
                    barPercentage='50%'
                />
                <RequirementsBar 
                    icon={icons.drop}
                    barPercentage='25%'
                />
                <RequirementsBar 
                    icon={icons.temperature}
                    barPercentage='75%'
                />
                <RequirementsBar 
                    icon={icons.garden}
                    barPercentage='80%'
                />
                <RequirementsBar 
                    icon={icons.seed}
                    barPercentage='30%'
                />
            </View>
        )
    }

    const renderRequirements = () => {
        return(
            <View style={{
                flex: 2.5,
                marginTop: SIZES.padding,
                // backgroundColor: COLORS.secondary,
                paddingHorizontal: SIZES.padding,
                justifyContent: 'space-around'
            }}>
                <RequirementsDetail
                    icon={icons.sun}
                    label='Sunlight'
                    detail='15°C'
                />
                 <RequirementsDetail
                    icon={icons.drop}
                    label='Water'
                    detail='250 ML Daily'
                />
                 <RequirementsDetail
                    icon={icons.temperature}
                    label='Room Temp'
                    detail='25°C'
                />
                 <RequirementsDetail
                    icon={icons.garden}
                    label='Soil'
                    detail='3 Kg'
                />
                 <RequirementsDetail
                    icon={icons.seed}
                    label='Fertilizer'
                    detail='150 Mg'
                />
            </View>
        )
    }

    const RequirementsDetail = ({icon, label, detail}) => {
        return (
            <View style={{
                flexDirection: 'row',
            }}>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <Image 
                        source={icon}
                        resizeMode='cover'
                        style={{
                            width: 30, 
                            height: 30,
                            tintColor: COLORS.secondary
                        }}
                    />
                    <Text style={{color: COLORS.secondary, marginLeft: SIZES.base, ...FONTS.h2}}>{label}</Text>
                </View>
                <View style={{
                    flex: 1,
                    alignItems: 'flex-end'
                }}>
                    <Text style={{
                        color: COLORS.gray,
                        marginLeft: SIZES.base,
                        ...FONTS.h2
                    }}>{detail}</Text>
                </View>
            </View>
        )
    }

    const renderFooter = () => {
        return (
            <View style={{
                flex: 1,
                // backgroundColor: COLORS.secondary,
                paddingVertical: SIZES.padding,
                flexDirection: 'row'
            }}>
                <TouchableOpacity style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: COLORS.primary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopRightRadius: 30,
                    borderBottomRightRadius: 30,
                    paddingHorizontal: SIZES.padding,
                }}
                    onPress={() => {console.log('take action')}}
                >
                    <Text style={{
                        color: COLORS.white,
                        ... FONTS.h2
                    }}>Take Action</Text>
                    <Image 
                        source={icons.chevron}
                        resizeMode='contain'
                        style={{
                            width: 20,
                            height: 20,
                            marginLeft: SIZES.padding,
                        }}
                    />
                </TouchableOpacity>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: SIZES.padding,
                }}>
                    <Text style={{
                        flex: 1,
                        color: COLORS.secondary,
                        ... FONTS.h3
                    }}>Almost 2 weeks of growing item</Text>
                    <Image 
                        source={icons.down_arrow}
                        resizeMode='contain'
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.secondary,
                            marginLeft: SIZES.base
                        }}
                    />
                </View>
            </View>
        )
    }

    const renderHeader = () => {
        return (
            <View style={{
                position: 'absolute',
                top: 50,
                right: SIZES.padding,
                left: SIZES.padding
            }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={{flex: 1}}>
                        <TouchableOpacity style={{
                            height: 40,
                            width: 40,
                            borderRadius: 20,
                            backgroundColor: 'rgba(255,255,255,0.5)',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                            onPress={() => {navigation.navigate('Home')}}
                        >
                            <Image 
                                source={icons.back}
                                resizeMode='contain'
                                style={{
                                    height: 20,
                                    width: 20,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{
                        flex: 1,
                        alignItems: 'flex-end',
                        justifyContent: 'center'
                    }}
                        onPress={() => {console.log('Focus on press');}}
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
                <View style={{
                    flexDirection: 'row',
                    marginTop: '10%'
                }}>
                    <View style={{flex: 1}}>
                        <Text style={{color: COLORS.white, ...FONTS.largeTitle}}>Glory mantas</Text>
                    </View>
                    <View style={{flex: 1}}></View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* Banner photo */}
            <View style={{height: '35%'}}>
                <Image 
                    source={images.bannerBg}
                    resizeMode='cover'
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
            </View>
            {/* Requirements */}
            <View style={{
                flex: 1,
                backgroundColor: COLORS.lightGray,
                marginTop: -40,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                paddingVertical: SIZES.padding

            }}>
                <Text style={{paddingHorizontal: SIZES.padding ,color: COLORS.secondary, ...FONTS.h1}}>Requirements</Text>

                {renderRequirementsBar()}
                {renderRequirements()}
                {renderFooter()}
                
            </View>
            {renderHeader()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default PlantDetail;