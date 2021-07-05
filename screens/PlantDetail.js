import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

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

function PlantDetail(props) {

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
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default PlantDetail;