import React, { Component, Fragment } from 'react';
import { View, StyleSheet, Dimensions, TextInput, Text, Alert, TouchableOpacity, DatePickerAndroid, Platform, DatePickerIOS } from 'react-native';
import { Input, Button, Header, Badge, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../assets/img/gundam.png';
import MyView from './MyView';

export default class CardPengaturan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value?props.value: 0,            
        };

    }

    render() {

        return (
            <View style={{flexDirection: 'row', width: '95%', alignSelf: 'center', borderBottomWidth: 1, borderBottomColor: '#F6F6F6', paddingBottom: 10, marginBottom: 10 }}>
                <View style={{marginLeft: 20, width: '80%', alignSelf: 'center'}}>
                    <Text style={styles.h0x}>{this.props.title}</Text>                
                </View>                          
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '100%',
    },
    h0x: {
        color: '#0f0f51',
        fontSize: 12,
        fontFamily: 'Montserrat-Regular'
        //alignSelf: 'center'
    },
    h0: {
        color: '#0f0f51',
        fontSize: 17,
        fontFamily: 'Montserrat-SemiBold'
        //alignSelf: 'center'
    },
    h1: {
        color: '#0f0f51',
        fontSize: 60,
        fontFamily: 'Montserrat-Bold'
    },
    h2: {
        color: '#4b4b7d',
        fontSize: 13,
        fontFamily: 'Montserrat-LightItalic'
        //marginTop: 8,
    },
    image: {
        width: 300,
        height: 260,
        justifyContent: 'center',
    },
    logo: {
        flex: 1, 
        maxHeight: 40, 
        maxWidth: 40, 
        alignSelf: 'center', 
        marginLeft: 20, 
        marginRight: 10
    },
    header: {
        maxHeight: 60, 
        backgroundColor: '#fff', 
        //flex: 1, 
        width: '100%', 
        margin: 0,
        flexDirection: 'row'
    },
    button : {
        flex : 1,
        width : 800,
        backgroundColor: '#008F68',
        color: '#008F68'
    },
    button2 : {
        margin: 2, 
        height: 100, 
        width: 100, 
        backgroundColor: '#000', 
        borderRadius: 5
    },
    topContainer: {
        flex: 2,
        //margin: 0
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    middleContainer: {
        //flex: 2,
        justifyContent: 'flex-start',
        //alignItems: 'center',
        //marginTop: 5,
        marginTop: 1,
        height: 240
    },
    bottomContainer: {
        justifyContent: 'flex-end',
        width: '100%',
        marginTop: 50,
        //padding: 10,
    },
    buttonContainer: {
        backgroundColor: '#008F68',
        borderRadius: 5,
        padding: 8,
        margin: 8,
    },
});
