import React, { Component, Fragment } from 'react';
import { View, StyleSheet, Dimensions, TextInput, Text, Alert, Image, TouchableOpacity, DatePickerAndroid, Platform, DatePickerIOS } from 'react-native';
import { Input, Button, Header, Badge } from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome';
import Logo from '../assets/img/gundam.png';

export default class CardAntrian2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value?props.value: 0,            
        };

    }

    render() {

        return (
            <View style={{backgroundColor: '#FFF', borderRadius: 5, paddingTop: 10, paddingBottom: 10, width: '100%', flexDirection: 'row', alignSelf: 'center'}}>
                <View style={{backgroundColor: '#F4F4F4', borderRadius: 5, paddingTop: 10, paddingBottom: 10, paddingLeft: 5, marginLeft: 10, width: '60%'}}>
                    <Text style={styles.h0}>
                        Status Dilayani
                    </Text>
                    <Text style={styles.h2}>
                        {this.props.klinik}
                    </Text>
                    <Text style={styles.h0}>
                        {this.props.doctor}
                    </Text>
                    <Text style={styles.h2}>
                        Est. Dilayani
                    </Text>
                </View>
                <View style={{backgroundColor: '#F4F4F4', borderRadius: 5, paddingTop: 10, paddingBottom: 10, marginLeft: 10, alignContent: 'center', justifyContent: 'center', width: '30%', marginRight: 10}}>
                    <Text style={[styles.h1,{ alignSelf: 'center'}]}>{this.props.number}</Text>
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
    h0: {
        color: '#0f0f51',
        fontSize: 20,
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
        fontSize: 15,
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
