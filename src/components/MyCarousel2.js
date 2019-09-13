import React, { Component, Fragment } from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {View, Text, StyleSheet, Platform, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Image } from 'react-native-elements';
import Slide1 from '../assets/img/1.png';
import Slide2 from '../assets/img/2.png';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};

const entryBorderRadius = 8;

export class MyCarousel2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            entries : [{title: Slide1}, {title: Slide2}, {title: Slide1}],
            activeSlide: 0,
            auto: this.props.isAuto?this.props.isAuto: true
        };
    }   

    _renderItem ({item, index}) {
        //console.warn(item.title)
        return (
            <View style={styles.slide}>
                {/* <Text style={styles.title}>{ item.title }</Text> */}
                <Image style={styles.slide} source={item.title}/>
            </View>
        );
    }

    render () {
        //console.warn(this.props.isAuto)
        return (
            <View>
                <Carousel
                //ref={(c) => { this._carousel = c; }}
                data={this.state.entries}
                renderItem={this._renderItem}
                layout={'default'}
                //layoutCardOffset={150}
                loop={true}
                activeAnimationType={'spring'}

                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                // activeSlideAlignment={'start'}
                //   sliderHeight={60}
                // itemWidth={itemWidth}
                autoplay={this.props.isAuto}
                // containerCustomStyle={{width: Dimensions.get('window').width}}
                // indicatorStyle={'white'}
                // showsHorizontalScrollIndicator={true}
                // showsVerticalScrollIndicator={true}
                // onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                />              
            </View>
        );
    }
}

const styles = StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18 // needed for shadow
    },
    slide: {
        width: itemWidth,
        borderRadius: 5,
        height: 240,
        backgroundColor: colors.black,
        //paddingHorizontal: 10,
        paddingBottom: 18 // needed for shadow
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: itemHorizontalMargin,
        right: itemHorizontalMargin,
        bottom: 18,
        shadowColor: colors.black,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        borderRadius: entryBorderRadius
    },
    imageContainer: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    imageContainerEven: {
        backgroundColor: colors.black
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: IS_IOS ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    // image's border radius is buggy on iOS; let's hack it!
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: entryBorderRadius,
        backgroundColor: 'white'
    },
    radiusMaskEven: {
        backgroundColor: colors.black
    },
    textContainer: {
        justifyContent: 'center',
        paddingTop: 20 - entryBorderRadius,
        paddingBottom: 20,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius
    },
    textContainerEven: {
        backgroundColor: colors.black
    },
    title: {
        color: colors.gray,
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    titleEven: {
        color: 'white'
    },
    subtitle: {
        marginTop: 6,
        color: colors.gray,
        fontSize: 12,
        fontStyle: 'italic'
    },
    subtitleEven: {
        color: 'rgba(255, 255, 255, 0.7)'
    }
});