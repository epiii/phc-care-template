import React, { Component, Fragment } from 'react';
import { View, StyleSheet, Dimensions, TextInput, Text, Alert, TouchableOpacity, DatePickerAndroid, Platform, DatePickerIOS } from 'react-native';
import { Input, Button, Header, Badge, Image } from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome';
import Logo from '../assets/img/gundam.png';

export default class CardProfileEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value?props.value: 0,            
        };

    }

    render() {

        return (
            <View>
            <View style={{marginLeft: 20, marginTop: 20}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '30%'}}>
                        <Text style={styles.h0}>Nama</Text>
                    </View>
                    <View style={{width: '10%'}}>
                        <Text style={styles.h0}>:</Text>
                    </View>
                    <View style={{width: '60%'}}>
                        <Text style={styles.h0}>{this.props.nama}</Text> 
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '30%'}}>
                        <Text style={styles.h2}>Email</Text>
                    </View>
                    <View style={{width: '10%'}}>
                        <Text style={styles.h2}>:</Text>
                    </View>
                    <View style={{width: '60%'}}>
                        <Text style={styles.h2}>{this.props.email}</Text> 
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '30%'}}>
                        <Text style={styles.h2}>Telepon</Text>
                    </View>
                    <View style={{width: '10%'}}>
                        <Text style={styles.h2}>:</Text>
                    </View>
                    <View style={{width: '60%'}}>
                        <Text style={styles.h2}>{this.props.telepon}</Text> 
                    </View>
                </View>
            </View>
            <View style={{marginTop: 10, width: '100%', backgroundColor: 'rgba(165, 165, 165, 0.1)'}}>
                <View style={{marginLeft: 20, marginBottom: 50}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: '30%'}}>
                            <Text style={styles.h0}>No RM</Text>
                        </View>
                        <View style={{width: '10%'}}>
                            <Text style={styles.h0}>:</Text>
                        </View>
                        <View style={{width: '60%'}}>
                            <Text style={styles.h0}>{this.props.norm}</Text> 
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: '30%'}}>
                            <Text style={styles.h2}>Tgl Lahir</Text>
                        </View>
                        <View style={{width: '10%'}}>
                            <Text style={styles.h2}>:</Text>
                        </View>
                        <View style={{width: '60%'}}>
                            <Text style={styles.h2}>{this.props.tgl}</Text> 
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: '30%'}}>
                            <Text style={styles.h2}>Alamat</Text>
                        </View>
                        <View style={{width: '10%'}}>
                            <Text style={styles.h2}>:</Text>
                        </View>
                        <View style={{width: '60%'}}>
                            <Text style={styles.h2}>{this.props.alamat}</Text> 
                        </View>
                    </View>
                </View>                
            </View> 
            <View style={{marginBottom: 20, width: '70%', alignSelf: 'center', marginTop: 10}}>
                <Button buttonStyle={{backgroundColor: '#F4F4F4', borderWidth: 1, borderColor: '#4b4b7d'}} 
                        titleStyle={{color: '#4b4b7d', fontFamily: 'Montserrat-Bold'}}
                        onPress={this.props.onEdit} 
                        title={'Edit Profil'}/>
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
