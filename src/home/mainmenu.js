import React, { Component, Fragment } from 'react';
import { 
    View, 
    TextInput, 
    Text,
    Image,
    Dimensions,
    Alert, 
    TouchableOpacity,
    Platform, 
    StyleSheet 
} from 'react-native';
import {SearchBar, Header, Input, Button, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Logo from '../assets/img/gundam.png';
import LoginLogo from '../assets/img/login-logo.png';
import LoginDoctor from '../assets/img/login-doctor.png';
import Ext from '../assets/img/Group5x.png';
import Stet from '../assets/img/stethoscope.png';
import Appoint from '../assets/img/browser.png';
import Que from '../assets/img/time-management.png';
import History from '../assets/img/history.png';

import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import LeftHeaderLogin from '../components/leftHeaderLogin';
import { TextField } from 'react-native-material-textfield';
import LeftHeaderBack from '../components/leftHeaderBack';

export default class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test : ''
        };
    }

    lihatSemua = () => {
        alert('lihat semua')
    }

    render () {
        return (
            <SafeAreaView style={styles.container}>                                 
                <Header
                    placement="left"
                    leftComponent={<LeftHeaderBack title={'Main Menu'} onBack={() => this.props.navigation.goBack()}/>}
                    leftContainerStyle={{width: Dimensions.get('window').width/2}}
                    containerStyle={{
                        flex: 0, 
                        backgroundColor: 'transparent', 
                        borderBottomWidth: 1, 
                        height: 70,
                        shadowColor: '#000',
                        shadowOpacity: 0.5,
                        justifyContent: 'center'
                        //backfaceVisibility: 'hidden',
                    }}
                    style={{opacity: 0.1}}
                    //backgroundColor={'transparent'}
                />
                <ScrollView style={{width: '100%'}}>
                    <View style={styles.bottomContainer}>
                        <Text style={{fontFamily : 'Montserrat-Regular', marginLeft: 10, marginBottom: 5, color: '#008DBD', fontSize: 12 }}>RS PHC Surabaya</Text>
                        <View style={{flexDirection: 'row'}}>
                            <View style={[styles.button3,{alignContent: 'center'}]}>
                                <Image style={{height: 50, width: 45, alignSelf: 'center'}} source={Appoint}/>
                                <Text style={{alignSelf: 'center', fontSize: 11, fontFamily: 'Montserrat-Regular'}}>Pendaftaran</Text>
                            </View>
                            <View style={[styles.button3,{alignContent: 'center'}]}>
                                <Image style={{height: 50, width: 45, alignSelf: 'center'}} source={Que}/>
                                <Text style={{alignSelf: 'center', fontSize: 10, fontFamily: 'Montserrat-Regular'}}>{'Antrian &'}</Text>
                                <Text style={{alignSelf: 'center', fontSize: 10, fontFamily: 'Montserrat-Regular'}}>{'Pembatalan'}</Text>
                            </View>
                            <View style={[styles.button3,{alignContent: 'center'}]}>
                                <Image style={{height: 50, width: 45, alignSelf: 'center'}} source={Stet}/>
                                <Text style={{alignSelf: 'center', fontSize: 10, fontFamily: 'Montserrat-Regular'}}>Jadwal Dokter</Text>
                            </View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Riwayat')}>
                                <View style={[styles.button3,{alignContent: 'center'}]}>
                                    <Image style={{height: 50, width: 45, alignSelf: 'center'}} source={History}/>
                                    <Text style={{alignSelf: 'center', fontSize: 10, fontFamily: 'Montserrat-Regular'}}>Riwayat</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
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
        color: '#008F68',
        fontSize: 24,
        alignSelf: 'center'
    },
    h1: {
        color: '#008F68',
        fontSize: 40,
    },
    h2: {
        color: '#FAE042',
        fontSize: 18,
        marginTop: 8,
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
    search: {
        borderWidth: 1, 
        borderColor: '#bfc7ce', 
        borderRadius: 5, 
        backgroundColor: '#CAD1D7',
        //marginLeft: 10, 
        //marginRight: 10,
        marginBottom: 10,
        flex: 1,
        width: '90%',
        alignSelf: 'center'
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
    button3 : {
        margin: 5, 
        height: 90, 
        width: 80, 
        //backgroundColor: '#000', 
        //borderWidth: 1,
        //borderColor: '#F4F4F4', //'#F4F4F4','#c6ced0'
        //borderRadius: 15
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
        marginTop: 10,
        marginBottom: 50
        //padding: 10,
    },
    buttonContainer: {
        backgroundColor: '#008F68',
        borderRadius: 5,
        padding: 8,
        margin: 8,
    },
});